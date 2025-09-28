---
layout: layouts/default.njk
title: Accessibility Audit
description: Reviewing text, contrast, and structure for inclusive use.
summary: Ran Ally’s first audit; identified fixes for color contrast, focus states, and plain-language.
permalink: /lab-notes/rituals-flows-accessibility/
date: 2025-01-20
tags:
  - lab-notes
  - accessibility
project: rituals-and-flows
---

{% set project = collections.projects | findBySlug(project) %}
{% if project %}

> Linked project: [{{ project.data.title }}]({{ project.url }})
> {% endif %}

Ally (our AI accessibility checker) ran an initial sweep. The prototype scored **ok**, but we found key areas to improve.

### What changed

- Adjusted color tokens for higher contrast
- Added visible focus states to buttons
- Rewrote prompt explanations in plain language

### Next steps

- Test with screen readers (NVDA, VoiceOver)
- Add reduced-motion mode for animations

[Back to lab notes](/lab-notes/)
