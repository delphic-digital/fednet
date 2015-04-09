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
component_version: 3.0.0
---


## documentation

Include delphic.ace.js after including jQuery.

```html
<script src="delphic.ace.js"></script>
```

## Usage:

Add a *data-track-event* attribute to the link you want to track.

Possible values: `data-track-event="category, action, label, value, noninteraction"`

Only category and action values are required. If no label is supplied, the target's href will be used as label, if it exists.

```html
<a href="http://www.hackaday.com" data-track-event="External Link, Click">HACKADAY</a>
```

You can initialize a manual call to GA with the following parameters:

```html
<script>
	$.ace(category, action, label, value, noninteraction);
</script>
```

Category, action, and label values are required.

You can also apply ace to elements added after the DOM is initialized:

```html
<script>
	$('.dynamically-added-link').ace('video, play');
</script>
```

Only category and action values are required. If no label is supplied, the target's href will be used as label, if it exists.


### Why ace?

Because [Ace the Bat-Hound](http://www.comicvine.com/ace-the-bat-hound/4005-31302/) is good at tracking.

![Ace the Bat-Hound](http://static.comicvine.com/uploads/scale_small/1/14487/1288836-ace.jpg)
