---
lunr: true
title: delphic.gatracking
page_description: A plugin for firing Google Analytics Events.
template: page.html
nav_sort: 1
nav_groups:
  - primary
  - list_page
download_path: https://github.com/delphic-digital/delphic.gatracking
component_version: 1.0.1
---


## documentation

Include delphic.gatracking.js after including jQuery/Zepto:

```javascript
<script src="delphic.gatracking.js"></script>
```


### Acceptable attributes:

* data-track-event
* data-track-action
* data-track-label
* data-track-value
* data-track-nonInteraction

```html
<a href="http://hackaday.com/" data-track-event="Body Navigation" data-track-label="Hackaday homepage link">HACKADAY</a>
```