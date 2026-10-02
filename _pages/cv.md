---
layout: page
title: CV
permalink: "/cv/"
nav: false
nav_order: 3
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">
<p><a class="primary-link" href="{{ '/assets/pdf/CV.pdf' | relative_url }}">Download the full CV (PDF) <span aria-hidden="true">↗</span></a></p>
<nav class="cv-jump" aria-label="CV sections"><a href="#education">Education</a><a href="#publications">Publications</a><a href="#research">Research</a><a href="#teaching">Teaching</a><a href="#skills">Skills</a></nav>
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
<h2 id="interests">Research Interests</h2>
<ul>{% for interest in cv.research_interests %}<li>{{ interest }}</li>{% endfor %}</ul>
{% assign sections = "publications|research" | split: "|" %}
{% for section in sections %}
<h2 id="{{ section }}">{% if section == "publications" %}Publications{% else %}Research Experience{% endif %}</h2>
{% assign entries = cv.research | where: 'section', section %}
{% for entry in entries %}
<section class="cv-entry">
  {% assign project = site.data.projects | where: 'slug', entry.slug | first %}
  <h3>{% if project.deliverable_url %}<a href="{{ project.deliverable_url }}">{{ entry.title }}</a>{% else %}{{ entry.title }}{% endif %}</h3>
  <p class="research-meta">{{ entry.period }}{% if entry.institution %} · {{ entry.institution }}{% endif %}</p>
  {% if entry.citation %}<p>{{ entry.citation }}</p>{% endif %}
  {% if entry.status %}<p class="research-status">{{ entry.status }}</p>{% endif %}
  <p>{{ entry.summary }}</p>
  <ul>{% for item in entry.highlights %}<li>{{ item }}</li>{% endfor %}</ul>
  {% if entry.supervisor %}<p><strong>Supervision:</strong> {{ entry.supervisor }}</p>{% endif %}
  {% if entry.url %}<p>{% if entry.slug == "med2state" %}Med2Vec+ prototype: {% endif %}<a href="{{ entry.url }}">GitHub</a>{% if entry.huggingface %} · <a href="{{ entry.huggingface }}">Hugging Face</a>{% endif %}</p>{% endif %}
</section>
{% endfor %}
{% endfor %}
<h2 id="teaching">Professional Experience: Teaching</h2>
{% for entry in cv.teaching %}
<section class="cv-entry">
  <h3>{{ entry.title }}</h3><p class="research-meta">{{ entry.period }} · {{ entry.institution }}</p>
  <ul>{% for item in entry.highlights %}<li>{{ item }}</li>{% endfor %}</ul>
  {% if entry.supervisor %}<p><strong>Supervision:</strong> {{ entry.supervisor }}</p>{% endif %}
  {% if entry.url %}<p><a href="{{ entry.url }}">Teaching materials</a></p>{% endif %}
</section>
{% endfor %}
<h2 id="skills">Skills &amp; Interests</h2>
<dl>{% for item in cv.skills %}<dt>{{ item[0] }}</dt><dd>{{ item[1] }}</dd>{% endfor %}</dl>

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>
