---
layout: layouts/default.njk
title: Home
description: Welcome to Rainforest Studio
---

{% include "components/hero.njk" %}

<section class="section">
  <div class="container split">
    <div class="split__col">
      <h2 class="section-title">What we’re building</h2>
      <p class="section__lede">Experiments with textiles, sound, and storytelling that make emerging technology feel tactile and neighbourly.</p>
      <ul class="feature-list">
        <li>
          <div class="feature-list__heading">
            <img class="icon" src="{{ '/assets/icons/threads.svg' | url }}" alt="" aria-hidden="true">
            <h3>Threads of Memory</h3>
          </div>
          <p>An immersive arts experiment weaving local textile heritage with sound + spatial media.</p>
        </li>
        <li>
          <div class="feature-list__heading">
            <img class="icon" src="{{ '/assets/icons/culture-tech.svg' | url }}" alt="" aria-hidden="true">
            <h3>Culture × Tech</h3>
          </div>
          <p>Playful prototypes that make new tools feel human, inclusive, and locally useful.</p>
        </li>
        <li>
          <div class="feature-list__heading">
            <img class="icon" src="{{ '/assets/icons/lab-notes.svg' | url }}" alt="" aria-hidden="true">
            <h3>Lab Notes</h3>
          </div>
          <p>Open work-in-progress so others can follow, learn, and remix.</p>
        </li>
      </ul>
    </div>
    <div class="split__col">
      <figure class="split__media" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" alt="" loading="lazy">
      </figure>
    </div>
  </div>
</section>

<section class="section">
  <div class="container split split--flip">
    <div class="split__col">
      <h2 class="section-title">Why it matters</h2>
      <p class="section__lede">Care, access, and joy guide each prototype we share with our community.</p>
      <ul class="reason-list">
        <li>Artist-led prototyping with community voices at the table.</li>
        <li>Accessibility from the start — lo-fi to hi-fi, screen-reader-first docs, and alt text on media.</li>
        <li>Open knowledge: we publish methods, learnings, and templates.</li>
        <li>Joy + humanity: technology should feel playful, caring, and made for people — not just systems.</li>
      </ul>
    </div>
    <div class="split__col">
      <figure class="split__media" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1600&auto=format&fit=crop" alt="" loading="lazy">
      </figure>
    </div>
  </div>
</section>

<section class="section">
  <div class="container split">
    <div class="split__col">
      <h2 class="section-title">Get involved</h2>
      <p class="section__lede">Collaborators, makers, neighbours, or the curious — come say hi, share a story, or explore an idea with us.</p>
      <ul class="contact-list">
        <li>Workshops, research sprints, or residencies in Haringey and online.</li>
        <li>Community events and open studio days every season.</li>
      </ul>
      <div class="contact-links">
        <a class="btn btn-pill" href="mailto:hello@rainforeststudios.xyz">Email hello@rainforeststudios.xyz</a>
        <a class="btn btn-pill" href="https://www.linkedin.com/in/tanyapowell/" target="_blank" rel="noopener">Connect on LinkedIn</a>
      </div>
    </div>
    <div class="split__col">
      <div class="cta-card">
        <div class="cta-card__body">
          <h3>Co-create with us</h3>
          <p>Bring your story, craft, or practice. We love pairing local knowledge with playful tech.</p>
          <ul>
            <li>Neighbour-led storytelling labs</li>
            <li>Hybrid residencies &amp; prototyping jams</li>
            <li>Open documentation + templates</li>
          </ul>
        </div>
        <div class="cta-card__footer">
          <span>Haringey • London</span>
          <span>Gatherings monthly</span>
        </div>
      </div>
    </div>
  </div>
</section>
