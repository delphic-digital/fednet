---
sort: 3
---

Skeletor uses gulp as a task runner and several commands are available to use:

```sh
# run Gulp in development mode (does not minify your JS for quicker response),
# start the server, open a new browser tab at localhost:3000 and start watching files.
# JS script include path is updated to src directory in base template.
# Sass is automatically compiled, and sprites are automatically generated.
$ gulp
```

```sh
# run Gulp in production mode (runs your JS code through the requirejs optimizer),
# JS path is updated to dist directory in base template,
# will not start any server or watch.
$ gulp build
```

## Installing components

Skeletor integrates with bower package management very nicely for vendor components. See http://bower.io for more info.


```sh
# install a vendor component with bower
# main component files are automatically wired up to Skeletor
# js main is added to requirejs paths config.
# css/scss is added to main.scss
$ bower install <package>
```