---
sort: 2
---

## Getting Started

Skeletor uses open source tools for its workflow. If you haven't installed these requirements please do so.

1. [Node.js](https://nodejs.org/en/)
2. Install Gulp globally ```npm install --global gulp-cli```


## File structure
```
kraken
|—— dist/
|   |—— css/
|   |   |—— main.css
|   |   |—— main.min.css
|   |—— img/
|   |   |—— # Your image files
|   |—— js/
|   |   |—— detects.js
|   |   |—— detects.min.js
|   |   |—— main.js
|   |   |—— main.min.js
|   |—— svg/
|   |   |—— # Your SVGs
|—— docs/
|   |—— assets/
|   |   |—— # Your documentation assets
|   |—— dist/
|   |   |—— # Your distribution files
|   |—— img/
|   |   |—— # Your image files
|   |—— index.html
|   |—— # Your other documentation files
|—— src/
|   |—— docs/
|   |   |—— _templates
|   |   |   |—— _header.html
|   |   |   |—— _footer.html
|   |   |   |—— # Your template files
|   |   |—— assets
|   |   |   |—— # Your documentation assets
|   |   |—— index.html
|   |   |—— # Your documentation files
|   |—— img/
|   |   |—— # Your images
|   |—— js/
|   |   |—— detects
|   |   |   |—— svg.js
|   |   |   |—— # Your feature detection scripts
|   |   |—— main
|   |   |   |—— kraken.js
|   |   |   |—— # Your JavaScript plugins
|   |—— sass/
|   |   |—— components/
|   |   |   |—— _buttons.scss
|   |   |   |—— _code.scss
|   |   |   |—— _forms.scss
|   |   |   |—— _grid.scss
|   |   |   |—— _normalize.scss
|   |   |   |—— _overrides.scss
|   |   |   |—— _print.scss
|   |   |   |—— _svg.scss
|   |   |   |—— _tables.scss
|   |   |   |—— _typography.scss
|   |   |—— _config.scss
|   |   |—— _mixins.scss
|   |   |—— main.scss
|   |—— static/
|   |   |—— # Static files and folders
|—— test/
|   |—— coverage/
|   |   |—— # various files
|   |—— results/
|   |   |—— unit-tests.html
|   |—— spec/
|   |   |—— spec-myplugin.js
|   |   |—— # Your Jasmine JS unit tests
|—— .travis.yml
|—— README.md
|—— gulpfile.js
|—— package.json
```

## Get Up and Running

1. Fork/Clone/Download the [Skeletor](https://github.com/delphic-digital/Skeletor) repository into your machine.
2. Open a terminal and install the Node.Js dependencies by running ```npm install``` in your project directory.
3. Run ```gulp``` to automatically open a new Skeletor project running on ```localhost:3000```.
4. From now on, just run ```gulp``` in your project directory to automatically run Skeletor's Gulp tasks.