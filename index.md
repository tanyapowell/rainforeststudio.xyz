```markdown
---
layout: layouts/default.njk
title: Home
description: Welcome to Nova's VR Website
---
# Welcome to Nova's VR Website

This is the homepage of an immersive virtual reality experience. Explore our VR tour below or navigate to other sections.

<a-scene embedded style="height: 400px; width: 100%;">
  <a-sky src="{{ '/assets/images/sky.jpg' | url }}" rotation="0 -130 0"></a-sky>
  <a-text value="Welcome to VR!" position="-1 2 -3"></a-text>
  <a-camera position="0 1.6 0">
    <a-cursor></a-cursor>
  </a-camera>
</a-scene>

[Start the Tour]({{ '/tour' | url }})
```