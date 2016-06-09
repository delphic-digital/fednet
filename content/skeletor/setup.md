---
sort: 2
---

Skeletor uses open source tools for its workflow. If you haven't installed these requirements please do so.

* [Node.js](https://nodejs.org/en/)
* Install Gulp ```npm install --g gulp-cli```
* Install Bower ```npm install -g bower```

## Quick Start

* Fork/Clone/Download the [Skeletor](https://github.com/delphic-digital/Skeletor) repository into your machine.
* Open a terminal and install the Node.Js dependencies by running ```npm install``` in your project directory.
* Install client side dependencies with bower by running ```bower install``` in your project directory.
* Run ```gulp``` to automatically open a new Skeletor project running on ```localhost:3000```.

## File structure

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code.

```bash
skeletor
|-- Static
|   |-- assets
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
|       |-- scss
|       |   |-- main.scss
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
|       |       |   |-- # Your sites Sass components
|       |       |-- layout
|       |       |   |-- _footer.scss
|       |       |   |-- _forms.scss
|       |       |   |-- _header.scss
|       |       |   |-- _sidebar.scss
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
|-- .editorconfig
|-- .gitignore
|-- bower.json
|-- config.json
|-- gulpfile.js
|-- index.html
|-- package.json
|-- README.md

```

Next: see [Usage](usage) for explanation of `gulp` command