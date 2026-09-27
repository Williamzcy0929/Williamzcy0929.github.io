document.querySelectorAll("[data-photo-viewer]").forEach((viewer) => {
  const track = viewer.querySelector(".photo-track");
  const slides = Array.from(track.querySelectorAll(".photo-slide"));
  const previous = viewer.querySelector("[data-viewer-prev]");
  const next = viewer.querySelector("[data-viewer-next]");
  const status = viewer.querySelector("[data-viewer-status]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let frame;

  const currentIndex = () => {
    const left = track.getBoundingClientRect().left;
    return slides.reduce(
      (closest, slide, index) =>
        Math.abs(slide.getBoundingClientRect().left - left) < Math.abs(slides[closest].getBoundingClientRect().left - left) ? index : closest,
      0
    );
  };
  const update = () => {
    const index = currentIndex();
    previous.disabled = index === 0;
    next.disabled = index === slides.length - 1;
    const text = `${index + 1} / ${slides.length}`;
    if (status.textContent !== text) status.textContent = text;
  };
  const go = (index, animate = true) => {
    const target = slides[Math.max(0, Math.min(index, slides.length - 1))];
    track.scrollBy({
      left: target.getBoundingClientRect().left - track.getBoundingClientRect().left,
      behavior: reducedMotion.matches || !animate ? "instant" : "smooth",
    });
  };
  previous.addEventListener("click", () => go(currentIndex() - 1));
  next.addEventListener("click", () => go(currentIndex() + 1));
  track.addEventListener("keydown", (event) => {
    if (event.target !== track) return;
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      if (event.key === "Home") go(0);
      else if (event.key === "End") go(slides.length - 1);
      else go(currentIndex() + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
  track.addEventListener(
    "scroll",
    () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    },
    { passive: true }
  );
  window.addEventListener("resize", () => {
    go(currentIndex(), false);
    update();
  });
  update();
});
