---
layout: layouts/default.njk
title: VR Tour
description: Explore the virtual reality tour
permalink: /tour/
---

# VR Tour

Dive into our virtual world!

<a-scene style="height: 600px; width: 100%;">
  <a-assets>
    <img id="panorama" src="{{ '/assets/images/panorama.jpg' | url }}">
  </a-assets>
  <a-sky src="#panorama"></a-sky>
  <a-cylinder position="0 1 -3" radius="0.5" height="2" color="#FFC65D" shadow>
    <a-animation attribute="rotation" to="0 360 0" dur="10000" repeat="indefinite"></a-animation>
  </a-cylinder>
  <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow></a-box>
  <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow></a-sphere>
  <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow></a-plane>
  <a-camera position="0 1.6 0" look-controls wasd-controls>
    <a-cursor></a-cursor>
  </a-camera>
</a-scene>

Use your mouse to look around, or enter VR mode if on a compatible device.
