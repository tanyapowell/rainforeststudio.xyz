---
layout: layouts/default.njk
title: Site Scaffolding
description: First iteration of the prototype, linking AI prompts to a modular dashboard.
summary: Codie scaffolded the Rituals & Flows environment, with early cards for focus, mood, and creative tasks.
permalink: /lab-notes/rituals-flows-scaffold/
date: 2024-12-12
tags:
  - lab-notes
project: rituals-and-flows
---

{% set project = collections.projects | findBySlug(project) %}
{% if project %}

> Linked project: [{{ project.data.title }}]({{ project.url }})
> {% endif %}

We started with a lightweight scaffold using Notion embeds. The first cards covered **focus**, **mood tracking**, and **creative prompts**.

### What changed

- Added AI-generated reflective prompts, linked to time of day
- Introduced a simple “ritual log” with streak counter
- Scoped a modular card layout for flexibility

### Next steps

- Connect to local storage for persistence
- Explore adaptive font sizing for accessibility

[Back to lab notes](/lab-notes/)
