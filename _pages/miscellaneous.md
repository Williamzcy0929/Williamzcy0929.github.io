---
layout: page
title: Beyond Research
permalink: /beyond-research/
nav: true
nav_order: 5
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">

<nav class="cv-jump" aria-label="Personal interests"><a href="#photography">Photography</a><a href="#motorsport">Racing Car</a><a href="#technology">Technology</a></nav>

<section aria-labelledby="photography">
  <div class="section-heading"><h2 id="photography">Photography</h2></div>
  <p>My photography focuses on cityscapes, architecture, street scenes, nature, and aviation.</p>
  <p>My photography gear includes a Sony Alpha 1 with Sony G Master lenses, iPhone Pro models, an OPPO Find X8 Ultra, a Xiaomi 14 Ultra, and a DJI Mavic 3 Pro.</p>
  <div class="photo-viewer" data-photo-viewer>
    <div class="viewer-controls">
      <div class="viewer-buttons">
        <button type="button" data-viewer-prev aria-label="Previous photograph" aria-controls="photography-track">←</button>
        <span data-viewer-status aria-live="polite" aria-atomic="true">1 / {{ site.data.photography.size }}</span>
        <button type="button" data-viewer-next aria-label="Next photograph" aria-controls="photography-track">→</button>
      </div>
    </div>
    <div class="photo-track" id="photography-track" tabindex="0" role="region" aria-label="Selected photography. Scroll horizontally or use the left and right arrow keys.">
      {% for photo in site.data.photography %}
        <figure class="photo-slide" role="group" aria-label="Photograph {{ forloop.index }} of {{ site.data.photography.size }}">
          <a href="{{ photo.image | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="View photograph: {{ photo.alt | escape }} (opens in a new tab)">
            <img src="{{ photo.thumbnail | relative_url }}" srcset="{{ photo.thumbnail | relative_url }} {{ photo.thumbnail_width }}w, {{ photo.image | relative_url }} {{ photo.width }}w" sizes="(max-width: 600px) 85vw, 760px" width="{{ photo.width }}" height="{{ photo.height }}" alt="{{ photo.alt | escape }}" loading="lazy" decoding="async">
          </a>
        </figure>
      {% endfor %}
    </div>
  </div>
</section>

<section class="interest-section motorsport-section" aria-labelledby="motorsport">
  <h2 id="motorsport">Racing Car</h2>
  <p>Racing combines the art of precise control with the challenge of speed, and inspires me to face challenges with courage.</p>
  <p>I drive a Tesla Model 3 Performance and use <span class="keep-together">Full Self-Driving (FSD)</span>. I also enjoy sim racing in iRacing and Assetto Corsa.</p>
  <p>I follow a wide range of motorsport series. In Formula 1, I support the <a href="https://www.mercedesamgf1.com/team">Mercedes-AMG PETRONAS Formula One Team</a> and am a fan of <a href="https://www.formula1.com/en/drivers/lewis-hamilton">Lewis Hamilton</a> and <a href="https://www.mercedesamgf1.com/drivers/driver/andrea-kimi-antonelli">Kimi Antonelli</a>. In Le Mans and endurance racing, I am a fan of <a href="https://fiasmartdrivingchallenge.com/ambassadors/yifei-ye/">Yifei Ye</a>.</p>
  <h3>Miami Grand Prix · 2026</h3>
  <div class="photo-viewer race-viewer" data-photo-viewer>
    <div class="viewer-controls">
      <div class="viewer-buttons">
        <button type="button" data-viewer-prev aria-label="Previous racing photograph" aria-controls="miami-track">←</button>
        <span data-viewer-status aria-live="polite" aria-atomic="true">1 / {{ site.data.miami_gp.size }}</span>
        <button type="button" data-viewer-next aria-label="Next racing photograph" aria-controls="miami-track">→</button>
      </div>
    </div>
    <div class="photo-track" id="miami-track" tabindex="0" role="region" aria-label="Miami Grand Prix photography. Scroll horizontally or use the left and right arrow keys.">
    {% for photo in site.data.miami_gp %}
      <figure class="photo-slide" role="group" aria-label="Racing photograph {{ forloop.index }} of {{ site.data.miami_gp.size }}">
        <a href="{{ photo.image | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="View photograph: {{ photo.alt | escape }} (opens in a new tab)">
          <img src="{{ photo.thumbnail | relative_url }}" srcset="{{ photo.thumbnail | relative_url }} {{ photo.thumbnail_width }}w, {{ photo.image | relative_url }} {{ photo.width }}w" sizes="(max-width: 600px) 85vw, 760px" width="{{ photo.width }}" height="{{ photo.height }}" alt="{{ photo.alt | escape }}" loading="lazy" decoding="async">
        </a>
      </figure>
    {% endfor %}
    </div>
  </div>
</section>

<section class="interest-section" aria-labelledby="technology">
  <h2 id="technology">Technology &amp; Consumer Electronics</h2>
  <p>I follow Apple products, displays, audio equipment, keyboards, chips, and drones, as well as electric vehicles and autonomous driving.</p>
  <p>On the software side, I am interested in frontier large language models, open-source foundation models, and practical applications of AI agents.</p>
</section>

<section class="interest-section" aria-labelledby="other-interests">
  <h2 id="other-interests">Other Interests</h2>
  <p>Snowboarding, cycling, and powerlifting are also part of my life outside academic work. I also enjoy electronic music and Hip-Hop music.</p>
</section>

<script src="{{ '/assets/js/photography-viewer.js' | relative_url }}" defer></script>

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>
