---
lunr: true
title: delphic.ace
page_description: A plugin for firing Google Analytics Events.
template: page.html
nav_sort: 1
nav_groups:
  - primary
  - list_page
download_path: https://github.com/delphic-digital/delphic.ace
component_version: 2.0.0
---


## documentation

Include delphic.ace.js after including jQuery/Zepto.

```html
<script src="delphic.ace.js"> </script>
```

Initialize:

```html
<script>
	$.ace();
</script>
```

## Usage:

Add a *data-delphic-event* attribute to the link you want to track.
Possible values: `data-track-event="category, action, label, value, noninteraction"`

Only category and action values are required.

```html
<a href="http://www.hackaday.com" data-delphic-event="External Link, Click, Exited site with external link">HACKADAY</a>
```

### Why ace?

Because [Ace the Bat-Hound](http://www.comicvine.com/ace-the-bat-hound/4005-31302/) is good at tracking.

![Ace the Bat-Hound](http://static.comicvine.com/uploads/scale_small/1/14487/1288836-ace.jpg)