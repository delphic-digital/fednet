---
sort: 2
---

## Getting Started

Skeletor uses open source tools for its workflow. If you haven't installed these requirements please do so.

1. [Node.js](https://nodejs.org/en/)
2. Install Gulp globally ```npm install --global gulp-cli```


## File structure

```bash
skeletor
|-- Static
|   |-- assets
|   |   |-- images
|   |   |   |-- spritesheet.png
|   |   |   |-- # Your image files
|   |   |-- spritesheets
|   |       |-- bitmap.example.html
|   |       |-- bitmap.spritesheet.png
|   |       |-- bitmap.spritesheet@2x.png
|   |       |-- vector.example.html
|   |       |-- vector.spritesheet.svg
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
|       |   |   |-- mobile.js
|       |   |   |-- common
|       |   |   |   |-- darkifyer.js # demo component
|       |   |   |   |-- skeletor-guy.js # demo component
|       |   |   |-- mobile
|       |   |       |-- main-menu.js
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
|       |       |   |-- _skeletor-avatar.scss
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
|       |       |   |-- .gitkeep
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
|       |   |   |-- skeletor.png
|       |   |   |-- skeletor@2x.png
|       |   |   |-- skeletor_tall.png
|       |   |   |-- skeletor_tall@2x.png
|       |   |   |-- # Your bitmap (png/jpg) sprites
|       |   |-- inline
|       |   |   |-- cross.svg
|       |   |   |-- plus.svg
|       |   |   |-- # Your CSS sprites
|       |   |-- vectors
|       |       |-- phone.svg
|       |       |-- sad.svg
|       |       |-- scope.svg
|       |       |-- search.svg
|       |       |-- shield.svg
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

## Get Up and Running

1. Fork/Clone/Download the [Skeletor](https://github.com/delphic-digital/Skeletor) repository into your machine.
2. Open a terminal and install the Node.Js dependencies by running ```npm install``` in your project directory.
3. Run ```gulp``` to automatically open a new Skeletor project running on ```localhost:3000```.
4. From now on, just run ```gulp``` in your project directory to automatically run Skeletor's Gulp tasks.