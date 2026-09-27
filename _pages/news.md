---
layout: page
title: News
permalink: /news/
nav: true
nav_order: 4
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">
<ul class="update-list">
  {% assign updates = site.news | sort: 'date' | reverse %}
  {% for item in updates %}
    <li><time datetime="{{ item.date | date: '%Y-%m' }}">{{ item.date | date: '%b %Y' }}</time><div>{{ item.content | markdownify }}</div></li>
  {% endfor %}
</ul>

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>
