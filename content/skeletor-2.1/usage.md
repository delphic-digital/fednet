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

Next: [CSS](css)