---
layout: default
title: About
permalink: "/"
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">
<div class="william-home">
  <header class="intro">
    <div class="intro-grid">
    <div class="intro-copy">
    <h1>Changyue <span>(William)</span> Zhao</h1>
    <p class="intro-text">I am a Master of Biostatistics student in the Health AI Track at Duke University. I currently conduct research in the <a href="https://zji90.github.io/">Ji Lab</a> at Duke University School of Medicine.</p>
    <p class="intro-text">Previously, I graduated with High Distinction from the University of Minnesota, Twin Cities, with a B.S. in Statistical Science and a minor in Computer Science.</p>
    <p class="intro-text">I am interested in methods and systems for foundation models (particularly LLMs) and AI agents. My applied interests include LLM-based reasoning and workflow automation in biomedical informatics, deep learning for biomedical data analysis, and multimodal integration.</p>
    <div class="intro-links">
      <a href="{{ '/assets/pdf/CV.pdf' | relative_url }}">CV (PDF)</a>
      <a href="mailto:changyue.zhao@duke.edu,williamzcy929@gmail.com">Email</a>
      <a href="https://github.com/Williamzcy0929"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub</a>
      <a href="https://scholar.google.com/citations?user=qmnDUYcAAAAJ&amp;hl=en">Google Scholar</a>
      <a href="https://www.linkedin.com/in/changyue-william-zhao/">LinkedIn</a>
    </div>
    </div>
    <img class="intro-portrait" src="{{ '/assets/img/william-commencement.jpg' | relative_url }}" width="1800" height="1200" alt="William tossing his graduation cap at commencement" fetchpriority="high" decoding="async">
    </div>
  </header>

  <section class="home-section" aria-labelledby="updates-heading">
    <div class="section-heading"><h2 id="updates-heading">Recent Updates</h2><a href="{{ '/news/' | relative_url }}">All Updates <span aria-hidden="true">↗</span></a></div>
    <ul class="update-list">
      {% assign recent_news = site.news | sort: 'date' | reverse %}
      {% for item in recent_news limit:2 %}
        <li><time datetime="{{ item.date | date: '%Y-%m' }}">{{ item.date | date: '%b %Y' }}</time><div>{{ item.content | markdownify }}</div></li>
      {% endfor %}
    </ul>
  </section>
</div>

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>
