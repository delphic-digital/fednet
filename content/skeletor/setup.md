---
sort: 2
---

## Getting Started

Skeletor uses open source tools for its workflow. If you haven't installed these requirements please do so.

1. [Node.js](https://nodejs.org/en/)
2. Install Gulp globally ```npm install --global gulp-cli```


## File structure

```Makefile
skeletor
|-- .bowerrc
|-- .gitignore
|-- bower.json
|-- config.json
|-- directoryList.md
|-- fir.txt
|-- gulpfile.js
|-- index.html
|-- package.json
|-- README.md
|-- doc
|   |-- css.md
|   |-- javascript.md
|   |-- setup.md
|   |-- sprites.md
|   |-- styleguide.md
|   |-- TOC.md
|   |-- usage.md
|-- Static
    |-- assets
    |   |-- images
    |   |   |-- spritesheet.png
    |   |-- spritesheets
    |       |-- bitmap.example.html
    |       |-- bitmap.spritesheet.png
    |       |-- bitmap.spritesheet@2x.png
    |       |-- vector.example.html
    |       |-- vector.spritesheet.svg
    |-- dist
    |   |-- css
    |   |   |-- main.css
    |   |-- js
    |   |   |-- components
    |   |       |-- common.js
    |   |-- styleguide
    |-- src
        |-- js
        |   |-- skeletor.main.js
        |   |-- components
        |   |   |-- common.js
        |   |   |-- mobile.js
        |   |   |-- common
        |   |   |   |-- darkifyer.js
        |   |   |   |-- skeletor-guy.js
        |   |   |-- mobile
        |   |       |-- main-menu.js
        |   |-- lib
        |   |   |-- require.js
        |   |   |-- requirejs-plugins
        |   |       |-- src
        |   |           |-- async.js
        |   |           |-- depend.js
        |   |           |-- font.js
        |   |           |-- goog.js
        |   |           |-- image.js
        |   |           |-- json.js
        |   |           |-- mdown.js
        |   |           |-- noext.js
        |   |           |-- propertyParser.js
        |   |-- plugins
        |   |-- utils
        |       |-- utils.js
        |       |-- delphic
        |       |   |-- delphic.browserupdate.js
        |       |   |-- delphic.clicktoggle.js
        |       |   |-- delphic.loader.js
        |       |   |-- delphic.onmediaquery.js
        |       |-- vendor
        |           |-- isMobile.js
        |           |-- onmediaquery.js
        |           |-- picturefill.js
        |           |-- svg4everybody.js
        |-- scss
        |   |-- main.scss
        |   |-- oldie.scss
        |   |-- partials
        |       |-- _settings.scss
        |       |-- base
        |       |   |-- _buttons.scss
        |       |   |-- _colors.scss
        |       |   |-- _fonts.scss
        |       |   |-- _helpers.scss
        |       |   |-- _inputs.scss
        |       |   |-- _links.scss
        |       |   |-- _normalize.scss
        |       |   |-- _scaffolding.scss
        |       |   |-- _sprites.scss
        |       |   |-- _svg.scss
        |       |   |-- _typography.scss
        |       |-- components
        |       |   |-- _messages.scss
        |       |   |-- _skeletor-avatar.scss
        |       |   |-- navigation
        |       |       |-- _main.scss
        |       |       |-- _sub.scss
        |       |-- layout
        |       |   |-- _footer.scss
        |       |   |-- _forms.scss
        |       |   |-- _header.scss
        |       |   |-- _sidebar.scss
        |       |-- plugins
        |       |   |-- .gitkeep
        |       |-- utilities
        |           |-- _input-text-types.scss
        |           |-- _placeholders.scss
        |           |-- _resets.scss
        |           |-- _str-replace.scss
        |           |-- _to-string.scss
        |           |-- _url-encode.scss
        |           |-- _vertical-align.scss
        |-- sprites
        |   |-- bitmap.example.handlebars
        |   |-- inline.mustache
        |   |-- vector.example.html
        |   |-- bitmaps
        |   |   |-- skeletor.png
        |   |   |-- skeletor@2x.png
        |   |   |-- skeletor_tall.png
        |   |   |-- skeletor_tall@2x.png
        |   |-- inline
        |   |   |-- cross.svg
        |   |   |-- plus.svg
        |   |-- vectors
        |       |-- phone.svg
        |       |-- sad.svg
        |       |-- scope.svg
        |       |-- search.svg
        |       |-- shield.svg
        |-- styleguide
            |-- styleguide_overrides.css
            |-- styleguide_variables.css

```

## Get Up and Running

1. Fork/Clone/Download the [Skeletor](https://github.com/delphic-digital/Skeletor) repository into your machine.
2. Open a terminal and install the Node.Js dependencies by running ```npm install``` in your project directory.
3. Run ```gulp``` to automatically open a new Skeletor project running on ```localhost:3000```.
4. From now on, just run ```gulp``` in your project directory to automatically run Skeletor's Gulp tasks.