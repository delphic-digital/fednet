---
lunr: true
title: Skeletor
page_description: Skeletor is a mobile first Front End Developer boilerplate.
template: page.html
nav_sort: 2
nav_groups:
  - primary
  - list_page
download_path: https://github.com/delphic-digital/Skeletor
component_version: 1.0.1
---

Skeletor is designed to be as flexible with designs as possible, so the main goal was to not lock the developer into a grid or template system. It provides organization through a file structure standard and process tools.

## Features

* Grunt tasks for environment switching
* Sass with handy mixins
* [Zepto.js](http://zeptojs.com) library with a jQuery fallback.
* [onMediaQuery](https://github.com/JoshBarr/on-media-query) for responsive JavaScript development.
* [LABjs (Loading And Blocking JavaScript)](https://github.com/getify/LABjs) performance script loader with [custom Delphic wrapper and config](https://github.com/delphic-digital/delphic-jsload).

## Get Started

Skeletor requires node.js and grunt. So get those.

## JavaScript

These are included by default.

* __js/config.js__ Configure sites JavaScript plugins paths. Part of [delphic.inject ](/library/delphic.inject.html).
* __js/main.js__ Contains all the site JavaScript application code. ALL JavaScript application code should go into this one file for performance and maintainability.
* __js/vendor/LAB.js__ [LABjs](http://labjs.com/) JS script loader.
* __js/vendor/onmediaquery.js__ [onMediaQuery](https://github.com/JoshBarr/on-media-query) Triggers JS based on media context.
* __js/vendor/zepto.js__ [Zepto.js](http://zeptojs.com) Lightweight jQuery alternative. Execution is a lot faster.
* __js/utilities/delphic.inject.js__ Wrapper function for LABjs. This is included by default because page specific JavaScripts should be loaded on demand. [Docs](/library/delphic.inject.html)
* __js/plugins/*__ Put any page specific scripts in here. There are a couple examples included.


## Build Process

When your site is ready for production, you can run some grunt commands.

A standard build will:

* Optimize JS by combining and then minify zepto.js, onmediaquery.js, LAB.js,delphic.jsload.js and main.js into one file. Minified JS plugins will also be created in the plugins folder.

```
grunt dev
```

```
grunt prod
```


## Notes

