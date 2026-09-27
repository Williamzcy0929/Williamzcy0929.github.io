---
layout: page
title: Research
permalink: "/projects/"
nav: true
nav_order: 1
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">

{% assign categories = "Biomedical AI|Methods & Research Infrastructure|Applied Data Science" | split: "|" %}
{% for category in categories %}

<section class="research-category" aria-labelledby="{{ category | slugify }}">
  <h2 id="{{ category | slugify }}">{{ category }}</h2>
  {% assign ordered_projects = site.data.projects | sort: 'importance' %}
<div class="research-list">
  {% for project in ordered_projects %}
    {% if project.show_in_research == false %}{% continue %}{% endif %}
    {% if project.category != category %}{% continue %}{% endif %}
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
{% endfor %}

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>
