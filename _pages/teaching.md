---
layout: page
title: Teaching
permalink: "/teaching/"
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">

{% for entry in site.data.cv.cv.teaching %}

<section class="cv-entry">
  <h2>{{ entry.title }}</h2>
  <p class="research-meta">{{ entry.period }} · {{ entry.institution }}</p>
  <ul>{% for item in entry.highlights %}<li>{{ item }}</li>{% endfor %}</ul>
  <p><strong>Supervision:</strong> {{ entry.supervisor }}</p>
  {% if entry.url %}<p><a href="{{ entry.url }}">View STAT 3011 slides and code</a></p>{% endif %}
</section>
{% endfor %}

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>
