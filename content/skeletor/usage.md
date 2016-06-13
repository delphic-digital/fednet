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

There is some automation that happens when you use bower. Please take care to understand these steps.
The files are determined by what's declared as a **main** file by the `bower.json` spec.

**JavaScript files are added to the requirejs paths config:**

```js
// Automatically injected Bower JS dependencies via bowerRequireJS
require.config({
	paths: {
		"bower-example": "../../../bower_components/bower-example",
	},
	packages: [

	],
	shim: {

	}
});
```

**CSS/SASS files are added to the main.scss:**

```scss
// Automatically injected Bower CSS dependencies via wiredep (never manually edit this block)
// bower:css
@import "../../../bower_components/bower-example.css";
// endbower

// Automatically injected Bower SCSS dependencies via wiredep (never manually edit this block)
// bower:scss
@import "../../../bower_components/bower-example.scss";
// endbower
```

If something goes wrong (correct files aren't wired up), check the components bower.json file to make sure the `"main": []` is declared correctly. If not, you can add an override for your project's `bower.json` file. See https://github.com/ck86/main-bower-files#overrides-options for how to do this.