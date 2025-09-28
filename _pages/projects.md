---
layout: layouts/default.njk
title: Projects by Rainforest Studio
description: Explore immersive initiatives from Rainforest Studio
permalink: /projects/
templateEngineOverride: njk
---


<h1>Projects by Rainforest Studio</h1>

<p class="mb-4">Interactive prototypes and community‑rooted experiments at the intersection of culture and AI. Everything here is work‑in‑progress by design — we share early so others can follow, learn, and remix.</p>

<div class="mt-4 card p-4">
  <h2 class="section-title" style="margin:0 0 .5rem 0;">Featured</h2>
  <p class="mb-4">Our current focus is <strong>Threads of Memory</strong> — an immersive arts experiment weaving local textile heritage with sound and spatial media.</p>
  <a class="btn btn-primary" href="{{ '/threads' | url }}">Explore <em>Threads of Memory</em></a>
</div>

<h2 class="mt-4 section-title">All Projects</h2>

<div class="project-grid" role="list">
  {%- for project in collections.projects | reverse -%}
    <article class="project-card" role="listitem">
      <a href="{{ project.url }}" aria-label="Open project: {{ project.data.title }}">
        {%- set cover = project.data.cover or '/assets/images/placeholder-project.jpg' -%}
        <img src="{{ cover | url }}" alt="{{ project.data.alt or project.data.title }}" class="project-card__media" loading="lazy">
        <div class="project-card__body">
          {#-- Badges: prefer front matter `badges: ['Prototype','Open Call']` --#}
          {% set badges = project.data.badges %}
          {% if not badges %}
            {# derive simple badges from tags if present #}
            {% set badges = [] %}
            {% if project.data.tags and 'prototype' in project.data.tags %}
              {% set badges = badges.concat(['Prototype']) %}
            {% endif %}
            {% if project.data.tags and ('in-progress' in project.data.tags or 'wip' in project.data.tags) %}
              {% set badges = badges.concat(['In Progress']) %}
            {% endif %}
            {% if project.data.tags and ('open-call' in project.data.tags or 'collab' in project.data.tags) %}
              {% set badges = badges.concat(['Open']) %}
            {% endif %}
          {% endif %}

          {% if badges and badges.length %}
            <div class="project-card__badges">
              {% for b in badges %}
                {% set klass = 'badge' %}
                {% if b | lower == 'prototype' %}{% set klass = klass + ' badge--prototype' %}{% endif %}
                {% if b | lower == 'in progress' %}{% set klass = klass + ' badge--inprogress' %}{% endif %}
                {% if b | lower == 'open' or b | lower == 'open call' %}{% set klass = klass + ' badge--open' %}{% endif %}
                <span class="{{ klass }}">{{ b }}</span>
              {% endfor %}
            </div>
          {% endif %}

          <h3 class="project-card__title">{{ project.data.title }}</h3>
          <p class="project-card__excerpt">{{ project.data.description }}</p>
          <span class="project-card__cta">Explore project →</span>
        </div>
      </a>
    </article>
  {%- endfor -%}
</div>

{%- if collections.projects | length == 0 -%}
  <p class="project-empty">New projects are on the loom. Check back soon — or <a href="mailto:hello@rainforeststudios.xyz">get in touch</a> if you’d like to collaborate.</p>
{%- endif -%}
