---
layout: layouts/default.njk
title: Haptic Loom Tests
description: Prototyping tactile inputs that trigger story threads in VR.
summary: Field testing responsive textiles that trigger new voiceovers inside the Threads of Memory gallery.
permalink: /lab-notes/haptic-loom-tests/
date: 2024-06-18
tags:
  - lab-notes
project: threads-of-memory
---

{% set project = collections.projects | findBySlug(project) %}
{% if project %}
> Linked project: [{{ project.data.title }}]({{ project.url }})
{% endif %}

We spent the week swapping conductive threads into the loom interface so storytellers can weave and record in a single motion. The new capacitive weave reliably fires a VR scene after a 250ms debounce window, which keeps accidental triggers low.

### What changed

- Replaced the copper mesh with braided stainless steel for better flex life
- Tuned the A-Frame event bridge to broadcast `loom:thread` events globally
- Bumped the ambient mix by 3dB when a new thread activates to spotlight the scene transition

### Next steps

We'll co-test the loom with elder weavers during the July residency. If the capacitive triggers hold up, we can productionize the module and ship a build to the touring kit.

[Back to lab notes](/lab-notes/)
