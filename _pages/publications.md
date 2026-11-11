---
layout: page
title: Publications
permalink: "/publications/"
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">

<div class="publication-catalog">
{% for entry in site.data.cv.cv.publications %}
  {% assign project = site.data.projects | where: 'slug', entry.slug | first %}
  <article class="publication-item">
    <div class="publication-meta">
      {% if entry.preview %}<a class="publication-preview" href="{{ entry.preview | relative_url }}" target="_blank" rel="noopener" aria-label="View full-size {{ entry.title }} workflow figure"><img src="{{ entry.preview | relative_url }}" width="8000" height="4500" alt="{{ entry.preview_alt }}" decoding="async"></a>{% endif %}
      {% unless entry.preview %}<span class="publication-badge">{% if entry.publisher %}Published{% else %}In preparation{% endif %}</span>{% endunless %}
    </div>
    <div class="publication-body">
      <h2>{{ entry.title }}</h2>
      <p class="publication-authors">{% for author in entry.author_names %}{% if forloop.first != true %}{% if forloop.last %} and {% else %}, {% endif %}{% endif %}{% if author == "Changyue Zhao" %}<u>{{ author }}</u>{% else %}{{ author }}{% endif %}{% endfor %}</p>
      <p class="publication-venue"><em>{% if entry.publisher %}{{ entry.publisher }}{% else %}{{ entry.status }}{% endif %}</em>{% if entry.year %}, {{ entry.year }}{% endif %}</p>
      {% if entry.url %}<div class="publication-links"><a href="{% if project.deliverable_url %}{{ project.deliverable_url }}{% else %}{{ entry.url }}{% endif %}" aria-label="Read {{ entry.title }}">HTML</a></div>{% endif %}
    </div>
    {% if entry.year %}<div class="publication-year" aria-hidden="true">{{ entry.year }}</div>{% endif %}
  </article>
{% endfor %}
</div>

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>
