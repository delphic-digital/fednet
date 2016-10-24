---
sort: 2
---

Skeletor uses open source tools for its work flow. If you haven't installed these requirements please do so.

* [Node.js](https://nodejs.org/en/)
* Install Gulp ```npm install --g gulp-cli```

## Quick Start

* Fork/Clone/Download the [Skeletor](https://github.com/delphic-digital/Skeletor) repository into your machine.
* Open a terminal and install the Node.Js dependencies by running ```npm install``` in your project directory.
* Run ```gulp``` to automatically open a new Skeletor project running on ```localhost:3000```.

## File structure

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code.

```bash
skeletor
|-- Static
|   |-- assets
|   |   |-- fonts
|   |   |   |-- # Your font files
|   |   |-- images
|   |   |   |-- # Your image files
|   |   |-- spritesheets
|   |       |-- # Your spritesheets get generated here
|   |-- dist
|   |   |-- css
|   |   |   |-- main.css # Your Sass gets compiled here
|   |   |-- js
|   |   |   |-- lib
|   |   |   |   |-- require.js
|   |-- src
|       |-- js
|       |   |-- skeletor.main.js
|       |   |-- components
|       |   |   |-- common.js
|       |   |   |-- common
|       |   |   |   |-- # Your common components here
|       |   |-- lib
|       |   |   |-- require.js
|       |   |   |-- requirejs-plugins
|       |   |       |-- src
|       |   |           |-- async.js
|       |   |           |-- depend.js
|       |   |           |-- font.js
|       |   |           |-- goog.js
|       |   |           |-- image.js
|       |   |           |-- json.js
|       |   |           |-- mdown.js
|       |   |           |-- noext.js
|       |   |           |-- propertyParser.js
|       |   |-- plugins
|       |       |-- # vendor/3rd party plugins
|       |   |-- utils
|       |       |-- utils.js
|       |       |-- delphic
|       |       |   |-- delphic.browserupdate.js
|       |       |   |-- delphic.clicktoggle.js
|       |       |   |-- delphic.loader.js
|       |       |   |-- delphic.onmediaquery.js
|       |       |   |-- # delphic utilities
|       |       |-- vendor
|       |           |-- isMobile.js
|       |           |-- onmediaquery.js
|       |           |-- picturefill.js
|       |           |-- svg4everybody.js
|       |           |-- # vendor/3rd party utilities
|       |-- scss
|       |   |-- main.scss
|       |   |-- partials
|       |       |-- _settings.scss
|       |       |-- base
|       |       |   |-- _buttons.scss
|       |       |   |-- _fonts.scss
|       |       |   |-- _inputs.scss
|       |       |   |-- _scaffolding.scss
|       |       |   |-- _sprites.scss
|       |       |   |-- _svg.scss
|       |       |   |-- _typography.scss
|       |       |-- components
|       |       |   |-- # Your sites Sass components
|       |       |-- layout
|       |           |-- _footer.scss
|       |           |-- _forms.scss
|       |           |-- _header.scss
|       |           |-- _sidebar.scss
|       |-- sprites
|       |   |-- bitmaps
|       |   |   |-- # Your bitmap (png/jpg) sprites
|       |   |-- vectors
|       |       |-- # Your svg spritesheet sprites
|-- .gitignore
|-- config.json
|-- gulpfile.js
|-- index.html
|-- package.json
|-- README.md

```

Next: see [Usage](usage) for explanation of `gulp` command