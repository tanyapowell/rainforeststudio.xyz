---
layout: layouts/default.njk
title: Lab Notes
description: Experiments and process updates from the field
permalink: /lab-notes/
templateEngineOverride: njk
---

<h1>Lab Notes</h1>

<p>Peek behind the scenes as we prototype installations, tune VR environments, and translate community feedback into new features.</p>

<div class="project-grid" role="list">
  {% for note in collections.notes %}
    {% set project = collections.projects | findBySlug(note.data.project) %}
    <article class="project-card note-card" role="listitem">
      <div class="project-card__body">
        {# Badges row (optional, safe) #}
        <div class="project-card__badges">
          {% if project %}
            <span class="badge badge--prototype">{{ project.data.title }}</span>
          {% endif %}
          {% if note.data.tags %}
            {% for t in note.data.tags %}
              <span class="badge">{{ t }}</span>
            {% endfor %}
          {% endif %}
        </div>

        <h2 class="project-card__title" style="margin-top:.5rem;"><a href="{{ note.url }}">{{ note.data.title }}</a></h2>

        {% if note.data.summary %}
          <p class="project-card__excerpt">{{ note.data.summary }}</p>
        {% else %}
          <p class="project-card__excerpt">{{ note.data.description or note.templateContent | truncate(140, true, "…") }}</p>
        {% endif %}

        {% if note.data.date %}
          <p class="note-card__meta">{{ note.data.date | readableDate }}</p>
        {% endif %}
        {% if project %}
          <p class="note-card__project">Project: <a href="{{ project.url }}">{{ project.data.title }}</a></p>
        {% endif %}

        <a class="project-card__cta-link" href="{{ note.url }}">Read note →</a>
      </div>
    </article>
  {% endfor %}
</div>

{% if collections.notes | length == 0 %}
  <p class="project-empty">Lab notes are being stitched together. Check back soon!</p>
{% endif %}
