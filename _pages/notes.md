---
layout: layouts/default.njk
title: Lab Notes
description: Experiments and process updates from the field
permalink: /lab-notes/
templateEngineOverride: njk
---

<section class="section notes-section">
  <div class="container">
    <h1 class="section-title">Lab Notes</h1>
    <p class="notes-intro">Peek behind the scenes as we prototype installations, tune VR environments, and translate community feedback into new features.</p>

    {% set notes = collections.notes | reverse %}
    {% if notes | length %}
      <ul class="notes-grid" role="list">
        {% for note in notes %}
          {% set related = collections.projects | findBySlug(note.data.project) %}
          {% set displayTags = [] %}
          {% if note.data.tags %}
            {% for tag in note.data.tags %}
              {% if tag and tag != 'lab-notes' %}
                {% set displayTags = displayTags.concat([tag]) %}
              {% endif %}
            {% endfor %}
          {% endif %}
          {% set metaBits = [] %}
          {% if note.date %}
            {% set metaBits = metaBits.concat([note.date | readableDate('d LLL yyyy')]) %}
          {% endif %}
          {% if related %}
            {% set metaBits = metaBits.concat(['Project: ' + related.data.title]) %}
          {% endif %}
          {% if displayTags.length %}
            {% set metaBits = metaBits.concat([displayTags | join(', ')]) %}
          {% endif %}
          {% set excerpt = note.data.summary or note.data.description or note.templateContent | striptags | truncate(180, true, '…') %}
          <li class="note-card card" role="listitem">
            <a class="note-card__link" href="{{ note.url }}">
              <span class="note-card__pin" aria-hidden="true">📌</span>
              <h3 class="note-card__title">{{ note.data.title }}</h3>
              {% if metaBits.length %}
                <p class="note-card__meta">{{ metaBits | join(' · ') }}</p>
              {% endif %}
              <p class="note-card__excerpt">{{ excerpt }}</p>
              {% if displayTags.length %}
                <div class="note-card__tags" aria-label="Tags">
                  {% for chip in displayTags %}
                    <span class="chip">{{ chip }}</span>
                  {% endfor %}
                </div>
              {% endif %}
            </a>
          </li>
        {% endfor %}
      </ul>
    {% else %}
      <p class="notes-empty">Lab notes are being stitched together. Check back soon!</p>
    {% endif %}
  </div>
</section>
