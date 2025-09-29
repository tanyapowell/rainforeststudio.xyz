---
layout: layouts/default.njk
title: Projects by Rainforest Studio
description: Explore immersive initiatives from Rainforest Studio
permalink: /projects/
templateEngineOverride: njk
---


{% set featured = collections.projects | findBySlug('threads-of-memory') %}

<header class="project-header">
  <h1 class="section-title">Projects by Rainforest Studio</h1>
  <p class="project-intro">Interactive prototypes and community-rooted experiments at the intersection of culture and AI. Everything here is work-in-progress by design — we share early so others can follow, learn, and remix.</p>
</header>

{% if featured %}
  {% set featureCover = featured.data.cover or 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop' %}
  <section class="project-feature">
    <div class="project-feature__bg" aria-hidden="true" style="--feature-image: url('{{ featureCover | url }}');"></div>
    <div class="container project-feature__inner">
      <div class="project-feature__content">
        <p class="project-feature__eyebrow">Featured</p>
        <h2 class="project-feature__title">{{ featured.data.title }}</h2>
        {% if featured.data.description %}
          <p class="project-feature__summary">{{ featured.data.description }}</p>
        {% endif %}
        <a class="btn btn-primary btn-pill btn-grow" href="{{ featured.url }}">
          <span>Explore {{ featured.data.title }}</span>
          <span class="btn__icon" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
{% endif %}

<section class="section project-section">
  <div class="container">
    <h2 class="section-title">All Projects</h2>
    <div class="project-grid" role="list">
      {%- for project in collections.projects | reverse -%}
        {% if not featured or project.url != featured.url %}
          {% include "components/project-card.njk" %}
        {% endif %}
      {%- endfor -%}
    </div>
    {%- if collections.projects | length == 0 -%}
      <p class="project-empty">New projects are on the loom. Check back soon — or <a href="mailto:hello@rainforeststudios.xyz">get in touch</a> if you’d like to collaborate.</p>
    {%- endif -%}
  </div>
</section>
