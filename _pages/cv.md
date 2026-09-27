---
layout: page
title: CV
permalink: "/cv/"
nav: false
nav_order: 3
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">
<p><a class="primary-link" href="{{ '/assets/pdf/CV.pdf' | relative_url }}">Download the full CV (PDF) <span aria-hidden="true">↗</span></a></p>
<nav class="cv-jump" aria-label="CV sections"><a href="#education">Education</a><a href="#research">Research</a><a href="#teaching">Teaching</a><a href="#professional">Professional Experience</a><a href="#skills">Skills</a></nav>
{% assign cv = site.data.cv.cv %}
<h2 id="education">Education</h2>
{% for entry in cv.education %}
<section class="cv-entry">
  <h3>{{ entry.institution }}</h3>
  <p class="research-meta">{{ entry.start_date }} – {{ entry.end_date }} · {{ entry.location }}</p>
  <p><strong>{{ entry.studyType }}</strong><br>{{ entry.score }}</p>
  <ul>{% for item in entry.highlights %}<li>{{ item }}</li>{% endfor %}</ul>
</section>
{% endfor %}
<h2 id="research">Research, Manuscript &amp; Thesis</h2>
{% for entry in cv.research %}
<section class="cv-entry">
  {% assign project = site.data.projects | where: 'slug', entry.slug | first %}
  <h3>{% if project.deliverable_url %}<a href="{{ project.deliverable_url }}">{{ entry.title }}</a>{% else %}{{ entry.title }}{% endif %}</h3>
  <p class="research-meta">{{ entry.period }}{% if entry.institution %} · {{ entry.institution }}{% endif %}</p>
  {% if entry.status %}<p class="research-status">{{ entry.status }}</p>{% endif %}
  <p>{{ entry.summary }}</p>
  <ul>{% for item in entry.highlights %}<li>{{ item }}</li>{% endfor %}</ul>
  {% if entry.supervisor %}<p><strong>Supervision:</strong> {{ entry.supervisor }}</p>{% endif %}
</section>
{% endfor %}
<h2 id="teaching">Teaching</h2>
{% for entry in cv.teaching %}
<section class="cv-entry">
  <h3>{{ entry.title }}</h3><p class="research-meta">{{ entry.period }} · {{ entry.institution }}</p>
  <ul>{% for item in entry.highlights %}<li>{{ item }}</li>{% endfor %}</ul>
</section>
{% endfor %}
<h2 id="professional">Professional Experience</h2>
{% for entry in cv.professional %}
<section class="cv-entry">
  <h3>Intern · Huatai Property &amp; Casualty Insurance</h3><p class="research-meta">{{ entry.period }} · Beijing, China</p>
  <p>{{ entry.summary }}</p><ul>{% for item in entry.highlights %}<li>{{ item }}</li>{% endfor %}</ul>
  <p><strong>Supervisor:</strong> {{ entry.supervisor }}</p>
</section>
{% endfor %}
<h2 id="skills">Skills &amp; Interests</h2>
<dl>{% for item in cv.skills %}<dt>{{ item[0] }}</dt><dd>{{ item[1] }}</dd>{% endfor %}</dl>

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>
