---
layout: layouts/default.njk
title: Adaptive Prompts
description: Testing tone and variation in AI-generated daily prompts.
summary: Added playful vs. serious modes to AI prompts, giving users choice over tone.
permalink: /lab-notes/rituals-flows-prompts/
date: 2025-01-05
tags:
  - lab-notes
project: rituals-and-flows
---

{% set project = collections.projects | findBySlug(project) %}
{% if project %}

> Linked project: [{{ project.data.title }}]({{ project.url }})
> {% endif %}

We tested variable prompt tones — switching between _reflective_, _playful_, and _practical_.

### What changed

- Added `tone` parameter to the AI prompt generator
- Implemented quick toggle buttons in the dashboard
- Logged preferences to suggest tone automatically

### Next steps

- Prototype “seasonal flows” — prompts that shift over weeks
- Draft accessibility guidelines for tone choices

[Back to lab notes](/lab-notes/)
