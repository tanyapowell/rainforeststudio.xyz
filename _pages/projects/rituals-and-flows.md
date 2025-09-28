---
layout: layouts/default.njk
title: Rituals & Flows
description: Exploring daily ritual design with AI prompts, habit tracking, and modular dashboards.
permalink: /projects/rituals-and-flows/
cover: /assets/images/rituals-and-flows.jpg
alt: Screenshot of the Rituals & Flows prototype interface
tags:
  - prototype
  - ai
  - culture-tech
  - projects
projectSlug: rituals-and-flows
badges:
  - Prototype
---

{% set relatedNotes = collections.notes | notesForProject(projectSlug or page.fileSlug) %}

# Rituals & Flows — Prototype

**Rituals & Flows** was an early experiment in designing digital scaffolding for creative practice and wellbeing. The prototype combined AI-assisted prompts, modular dashboards, and simple automations to support reflection and routine.

- **Why:** To test how lightweight cultural-tech tools could help individuals balance work, creativity, and rest.
- **How:** Built a Notion + AI prototype with daily check-ins, adaptive prompts, and tracked “ritual flows.”
- **What we learned:** Prototyping in real contexts surfaced opportunities around accessibility (plain language, flexible structures) and sparked ideas for community-facing adaptations.

---

## Features

- Modular dashboard with cards for mood, focus, and creative tasks.
- AI prompts that adapt tone and style (serious, playful, reflective).
- Simple automations for reminders and logging.

## Status

Archived after initial testing. The methods live on in Rainforest Studio’s approach to **cultural prototyping** — blending personal practice, community needs, and emerging tech.

{% if relatedNotes | length %}

## Lab Notes

<ul class="note-list">
{%- for note in relatedNotes %}
  <li class="note-list__item">
    <a class="note-list__link" href="{{ note.url }}">{{ note.data.title }}</a>
    {%- if note.data.date %}
      <span class="note-list__meta">{{ note.data.date | readableDate }}</span>
    {%- endif %}
  </li>
{%- endfor %}
</ul>

{% endif %}

---

[← Back to Projects](/projects/)
