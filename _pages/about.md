---
layout: default
title: About
permalink: "/"
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">
<div class="william-home">
  <header class="intro">
    <p class="eyebrow">Computational Biology &amp; Biomedical AI</p>
    <div class="intro-grid">
    <div class="intro-copy">
    <h1>Changyue <span>(William)</span> Zhao</h1>
    <p class="intro-focus">Building AI methods for biomedical discovery</p>
    <p class="intro-text">I am a Master of Biostatistics student at Duke University. I currently conduct research in the <a href="https://zji90.github.io/">Ji Lab</a> at Duke University School of Medicine.</p>
    <p class="intro-text">My research interests lie at the intersection of computational biology and artificial intelligence, with a focus on foundation models, AI agents, and deep learning for biomedical discovery.</p>
    <div class="intro-links">
      <a href="{{ '/assets/pdf/CV.pdf' | relative_url }}">CV (PDF)</a>
      <a href="mailto:changyue.zhao@duke.edu,williamzcy929@gmail.com">Email</a>
      <a href="https://github.com/Williamzcy0929">GitHub</a>
      <a href="https://www.linkedin.com/in/changyue-william-zhao/">LinkedIn</a>
    </div>
    </div>
    <img class="intro-portrait" src="{{ '/assets/img/william-commencement.jpg' | relative_url }}" width="1800" height="1200" alt="William tossing his graduation cap at commencement" fetchpriority="high" decoding="async">
    </div>
  </header>

  <section class="home-section" aria-labelledby="research-heading">
    <div class="section-heading"><h2 id="research-heading">Selected Research</h2><a href="{{ '/projects/' | relative_url }}">All Projects <span aria-hidden="true">↗</span></a></div>
    {% assign ordered_projects = site.data.projects | sort: 'importance' %}
<div class="research-list">
  {% for project in ordered_projects %}
    {% if project.featured != true %}{% continue %}{% endif %}
    <article class="research-entry">
      <div class="research-meta">{{ project.period }}</div>
      <div>
        <h3>
          {% if project.deliverable_url %}<a href="{{ project.deliverable_url }}">{{ project.title }}</a>{% else %}{{ project.title }}{% endif %}
        </h3>
        <p>{{ project.description }}</p>
        {% if project.status %}
          <p class="research-status">{{ project.status }}</p>
        {% endif %}
      </div>
    </article>
  {% endfor %}
</div>

  </section>

  <section class="home-section background-section" aria-labelledby="background-heading">
    <h2 id="background-heading">Education</h2>
    <div>
      <ul class="education-list">
        {% for entry in site.data.cv.cv.education %}
        <li>
          <h3>{{ entry.institution }}</h3>
          <p class="research-meta">{{ entry.start_date | append: '-01' | date: '%b %Y' }} – {% if entry.end_date == 'present' %}Present{% else %}{{ entry.end_date | append: '-01' | date: '%b %Y' }}{% endif %}</p>
          <p>{{ entry.studyType }}{% if entry.institution == 'University of Minnesota, Twin Cities' %} · High Distinction{% endif %}</p>
        </li>
        {% endfor %}
      </ul>
    </div>
  </section>

  <section class="home-section" aria-labelledby="updates-heading">
    <div class="section-heading"><h2 id="updates-heading">Recent Updates</h2><a href="{{ '/news/' | relative_url }}">All Updates <span aria-hidden="true">↗</span></a></div>
    <ul class="update-list">
      {% assign recent_news = site.news | sort: 'date' | reverse %}
      {% for item in recent_news limit:3 %}
        <li><time datetime="{{ item.date | date: '%Y-%m' }}">{{ item.date | date: '%b %Y' }}</time><div>{{ item.content | markdownify }}</div></li>
      {% endfor %}
    </ul>
  </section>
</div>

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>
