---
sort: 3
---

Run `gulp` in your project directory to:

* convert your SCSS files to CSS, concatenate and minify them
* watch your JS and reload the browser on change
* watch your CSS and inject the new rules on change
* watch your HTML and reload the browser on change
* provide a server at localhost:3000 and 192.168.my.ip:3000

### The available commands
```sh
# run Gulp in development mode (does not minify your JS for quicker response),
# start the server, open a new browser tab at localhost:3000 and start watching files.
# JS script include path is updated to src directory in base template.
# Sass is automatically compiled, and sprites are automatically generated.
$ gulp
```

```sh
# run Gulp in production mode (does minify and runs a requirejs build on your JS),
# JS path is updated to dist directory in base template,
# will not start any server or watch.
$ gulp build
```
