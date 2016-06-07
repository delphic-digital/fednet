---
sort: 2
---

Skeletor uses open source tools for its workflow. If you haven't installed these requirements please do so.

* [Node.js](https://nodejs.org/en/)
* Install Gulp globally ```npm install --global gulp-cli```

## Quick Start

* Fork/Clone/Download the [Skeletor](https://github.com/delphic-digital/Skeletor) repository into your machine.
* Open a terminal and install the Node.Js dependencies by running ```npm install``` in your project directory.
* Run ```gulp``` to automatically open a new Skeletor project running on ```localhost:3000```.

See [Usage](usage) for explanation of `gulp` command

## File structure

Compiled and production-ready code can be found in the dist directory. The src directory contains development code.

```bash
skeletor
|-- Static
|   |-- assets
|   |   |-- images
|   |   |   |-- spritesheet.png
|   |   |   |-- # Your image files
|   |   |-- spritesheets
|   |       |-- # Spritesheets get generated here
|   |-- dist
|   |   |-- css
|   |   |   |-- main.css
|   |   |-- js
|   |   |-- styleguide
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
|       |   |-- oldie.scss
|       |   |-- partials
|       |       |-- _settings.scss
|       |       |-- base
|       |       |   |-- _buttons.scss
|       |       |   |-- _colors.scss
|       |       |   |-- _fonts.scss
|       |       |   |-- _helpers.scss
|       |       |   |-- _inputs.scss
|       |       |   |-- _links.scss
|       |       |   |-- _normalize.scss
|       |       |   |-- _scaffolding.scss
|       |       |   |-- _sprites.scss
|       |       |   |-- _svg.scss
|       |       |   |-- _typography.scss
|       |       |-- components
|       |       |   |-- _messages.scss
|       |       |   |-- navigation
|       |       |       |-- _main.scss
|       |       |       |-- _sub.scss
|       |       |   |-- # Your site components
|       |       |-- layout
|       |       |   |-- _footer.scss
|       |       |   |-- _forms.scss
|       |       |   |-- _header.scss
|       |       |   |-- _sidebar.scss
|       |       |-- plugins
|       |       |   |-- # Vendor/3rd party plugins css
|       |       |-- utilities
|       |           |-- _input-text-types.scss
|       |           |-- _placeholders.scss
|       |           |-- _resets.scss
|       |           |-- _str-replace.scss
|       |           |-- _to-string.scss
|       |           |-- _url-encode.scss
|       |           |-- _vertical-align.scss
|       |           |-- # Your SASS mixins
|       |-- sprites
|       |   |-- bitmap.example.handlebars
|       |   |-- inline.mustache
|       |   |-- vector.example.html
|       |   |-- bitmaps
|       |   |   |-- # Your bitmap (png/jpg) sprites
|       |   |-- inline
|       |   |   |-- # Your CSS sprites
|       |   |-- vectors
|       |       |-- # Your svg spritesheet sprites
|       |-- styleguide
|           |-- styleguide_overrides.css
|           |-- styleguide_variables.css
|-- .bowerrc
|-- .gitignore
|-- bower.json
|-- config.json
|-- gulpfile.js
|-- index.html
|-- package.json
|-- README.md

```