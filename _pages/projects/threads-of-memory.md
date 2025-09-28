---
layout: layouts/default.njk
title: Threads of Memory
description: An immersive archive of rainforest stories woven through tactile and VR experiences.
permalink: /projects/threads-of-memory/
tags:
  - projects
order: 10
cover: /assets/images/panorama.jpg
projectSlug: threads-of-memory
badges: ["Prototype", "Open"]
---

{% set relatedNotes = collections.notes | notesForProject(projectSlug or page.fileSlug) %}

# Threads of Memory

_An immersive arts experiment weaving textile heritage with sound and spatial media._

> **One‑liner:** Community stories become “threads” that you can hear, touch, and navigate—both in a physical installation and in a lightweight VR scene.

## Project Overview

**Threads of Memory** gathers oral histories, textiles, and ambient field recordings from North London communities and maps them to a shared, open VR archive. Each story thread unlocks a tactile artefact in the physical installation and a corresponding interactive environment online.

- **Where:** Haringey / Tottenham and nearby communities.
- **Why:** Prototype new ways to **preserve, play, and pass on** local culture using accessible tech.
- **How:** Lo‑fi to hi‑fi prototyping; publish **Lab Notes** and templates for others to remix.

## Phase One: An Immersive Weaver Line

### What we’re testing

1. **Immersive Audio Walk** — a QR‑linked web app that layers oral histories, archival sound (e.g., loom machinery), and site field recordings along the Weaver Line. _(Hosted on a lightweight stack; phone‑friendly; captions + transcripts.)_
2. **Craft + Story Workshops** — community sessions where residents share sewing/weaving practices while recording short oral testimonies. _(Lo‑fi, multilingual where possible; simple tools like Zoom H1n + Audacity.)_
3. **Sound Quilt Prototype** — a 2×2m projection‑mapped fabric panel with one interactive sensor (Makey Makey + conductive thread). Touch/stitch triggers reactive audio in MAX/MSP or TouchDesigner. _(Small‑scale, affordable testbed.)_

### Why this approach

- Artist‑led **testbed**, not a finished artwork.
- **Audience testing** is embedded (walk pilots, workshop feedback, quilt interactions).
- **Knowledge sharing** via Rainforest Studio **Lab Notes**.
- **Scalable** insights for future public programmes and community use.

### Audience & testing

- Focus: Bruce Grove + Seven Sisters communities; prioritise **women and migrant makers**.
- Methods: short surveys, facilitator notes, oral feedback; what we’re learning → shapes whether to scale the walk, the quilt, or a hybrid.

### Access & inclusion

- Captions + large‑print transcripts for audio.
- Tactile interaction on the quilt for non‑visual access.
- Free workshops in familiar community spaces; translation support where possible.

### Roadmap**

- _Prepare_ — visuals, mockups, and collaborator convening.
- _Prototype_ — audio walk + quilt sensor test; internal iterations.
- _Engage_ — community workshops + public pilots; collect feedback.
- _Publish_ — interim Lab Notes; refine; share methods pack.

<!-- **Visuals / evidence**
- Audio walk mockup, Weaver Line map, workshop flow diagram, and quilt prototype images will be hosted on this page as they’re produced. *(Placeholders shown below.)*

> Want to contribute a story or host a workshop? Email **hello@rainforeststudios.xyz**. -->

## Goals

- Build a **story loom** pipeline: collect → annotate → stitch audio/textile → publish to VR.
- Run **co‑creation sessions** with elders, youth, and makers.
- Ship an **accessible demo** (web + headset‑optional) with alt text, captions, and keyboard support.
- Document methods openly (guides, checklists, and facilitation kits).

<!-- ## What we’ve built so far
- A modular **VR gallery shell** with spatial audio and scene switching.
- **Touch triggers** mapped from textiles to story vignettes (prototype).
- A lightweight **steward dashboard** concept for adding stories without code. -->

### Prototype visuals (placeholders)

<div class="card p-4">
  <figure class="mb-4">
    <img src="{{ '/assets/images/placeholder-audio-walk.jpg' | url }}" alt="Audio walk mockup along the Weaver Line — placeholder">
    <figcaption class="mt-2">Audio Walk — QR‑linked web app (placeholder)</figcaption>
  </figure>
  <figure class="mb-4">
    <img src="{{ '/assets/images/placeholder-map.jpg' | url }}" alt="Map of Bruce Grove, Seven Sisters, Hackney Downs, Bethnal Green — placeholder">
    <figcaption class="mt-2">Weaver Line map (placeholder)</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/images/placeholder-quilt.jpg' | url }}" alt="Projection‑mapped fabric panel with a single interactive sensor — placeholder">
    <figcaption class="mt-2">Sound quilt prototype (placeholder)</figcaption>
  </figure>
</div>

## Accessibility (baked‑in)

- Alt text + transcripts; clear focus states; **reduced‑motion** mode.
- Lo‑fi physical interfaces for events (large‑type labels, tactile affordances).
- Plain‑language instructions; content warnings where relevant.

## Tech & Methods

- Eleventy, A‑Frame, web audio; OKLCH color tokens; container queries.
- Rapid prototyping with named AI team‑mates: **Codie** (dev), **Bizzy** (product), **Nova** (innovation), **Granty** (funding), **Ally** (accessibility).
- Open documentation via **Lab Notes** and public repos (where appropriate).

## Status

- **Now:** site scaffold, theme system, initial VR scene ✅
- **Next:** story collection sprints + first co‑creation workshop ◻︎
- **Later:** public demo + open methods pack ◻︎

## Collaborators & interest

- We welcome expressions of interest from local makers, textile artists, sound recordists, venues, and community groups.
- Email **[hello@rainforeststudios.xyz](mailto:hello@rainforeststudios.xyz)** to say hi.

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

[Back to projects](/projects/)
