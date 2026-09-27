(() => {
  const root = document.querySelector('[role="main"]');
  if (!root) return;

  const blocks = Array.from(root.querySelectorAll("h1, h2, h3, h4, p, li, dd, .research-meta")).filter(
    (element) => !element.querySelector("p, li, h1, h2, h3, h4") && !element.closest("nav, .intro-links, .viewer-controls")
  );
  const entries = blocks
    .map((element) => {
      const nodes = [];
      const words = [];
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      let offset = 0;
      while (walker.nextNode()) {
        const node = walker.currentNode;
        const original = node.textContent;
        nodes.push({ node, original, offset });
        for (const match of original.matchAll(/\S+/g)) {
          if (!/[\p{L}\p{N}]/u.test(match[0])) continue;
          words.push({ node, start: match.index, end: match.index + match[0].length, offset: offset + match.index });
        }
        offset += original.length;
      }
      return { element, nodes, words, fontSize: element.style.fontSize, textWrap: element.style.textWrap };
    })
    .filter(({ words }) => words.length >= 3);

  const linesFor = ({ words }) => {
    const lines = [];
    words.forEach((word, index) => {
      const range = document.createRange();
      range.setStart(word.node, word.start);
      range.setEnd(word.node, word.end);
      const rect = range.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const line = lines.find((item) => Math.abs(item.top - rect.top) < 4);
      if (line) line.words.push(index);
      else lines.push({ top: rect.top, words: [index] });
    });
    return lines;
  };
  const shortLines = (entry) => {
    const lines = linesFor(entry);
    return lines.length > 1 ? lines.filter((line) => line.words.length < 3) : [];
  };
  const restoreText = ({ nodes }) => {
    nodes.forEach(({ node, original }) => {
      if (node.textContent !== original) node.textContent = original;
    });
  };
  const protectGroup = ({ nodes, words }, start, end) => {
    for (let index = start; index < end; index += 1) {
      const from = words[index].offset + words[index].end - words[index].start;
      const to = words[index + 1].offset;
      nodes.forEach(({ node, original, offset }) => {
        const left = Math.max(0, from - offset);
        const right = Math.min(original.length, to - offset);
        if (left >= right) return;
        const text = node.textContent;
        node.textContent = text.slice(0, left) + text.slice(left, right).replace(/\s/g, "\u00a0") + text.slice(right);
      });
    }
  };
  const fits = (entry) => entry.element.scrollWidth <= entry.element.clientWidth + 1;
  const protectShortLines = (entry) => {
    for (let pass = 0; pass < 4; pass += 1) {
      const short = shortLines(entry);
      if (!short.length) return fits(entry);
      for (const line of short) {
        const first = line.words[0];
        const last = line.words.at(-1);
        const start = first === 0 ? 0 : Math.max(0, last - 2);
        protectGroup(entry, start, Math.min(entry.words.length - 1, start + 2));
      }
      if (!fits(entry)) return false;
    }
    return !shortLines(entry).length && fits(entry);
  };

  const fit = () => {
    for (const entry of entries) {
      const { element } = entry;
      restoreText(entry);
      element.style.fontSize = entry.fontSize;
      element.style.textWrap = entry.textWrap;
      element.dataset.wrapStatus = "balanced";
      if (!element.getClientRects().length || !shortLines(entry).length) continue;
      element.style.textWrap = "balance";
      if (protectShortLines(entry)) continue;

      const originalSize = parseFloat(getComputedStyle(element).fontSize);
      const heading = element.matches("h1, h2, h3, h4, .intro-focus");
      const minimumSize = Math.min(originalSize, heading ? 16 : Math.max(14, originalSize * 0.9));
      let success = false;
      for (let size = originalSize - 0.5; size >= minimumSize; size -= 0.5) {
        restoreText(entry);
        element.style.fontSize = `${size}px`;
        if (protectShortLines(entry)) {
          success = true;
          break;
        }
      }
      if (!success) {
        restoreText(entry);
        element.style.fontSize = entry.fontSize;
        element.dataset.wrapStatus = "limited";
      }
    }
  };

  let frame;
  const schedule = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(fit);
  };
  const widths = new WeakMap();
  const observer = new ResizeObserver((changes) => {
    let changed = false;
    changes.forEach(({ target, contentRect }) => {
      if (widths.get(target) !== contentRect.width) changed = true;
      widths.set(target, contentRect.width);
    });
    if (changed) schedule();
  });
  entries.forEach(({ element }) => observer.observe(element));
  window.addEventListener("resize", schedule, { passive: true });
  document.fonts.ready.then(schedule);
  schedule();
})();
