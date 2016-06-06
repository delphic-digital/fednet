---
title: Javascript
sort:  4
---

JavaScript is where extra behaviors, features, and functionality not offered natively by Web browsers through CSS and HTML is created.

JavaScript has gained an enormous amount of attention in recent years due to more feature rich, faster browsers and server run-times such as Node.js. For the purposes, general discussion here focuses on client-side JavaScript development, with references to where it crosses over.

It is of note that many techniques identified these days as "HTML5" are actually enabled by the related JavaScript APIs.

## Goals
Unless we are talking about a complex client-side Single Page Application (SPA), JavaScript should be used sparingly, and when a deliberate choice is made to not perform a task with other available technologies. The decision to add more scripts to a Web page should be made carefully. Even with a SPA, it is critical to make controlled choices so as to not include too much unorganized impossible to maintain code.

Any and all JavaScript code that's added to a Web page should be there if and only if it is needed for the page to achieve the desired ends or if there aren't any negative impacts with it there.

Included JavaScript should:

* Be included after careful consideration.
* Have the performance overhead and file size evaluated.
* Have a feature set that is understood and appropriate.
* Perform only the necessary tasks without needless overhead.
* Have maintainability carefully assessed.

While being:

* Fast, efficient, and perform well.
* Re-usable if possible.
* Not conflict with other code on a given page or sets of pages.
* Executed only when necessary on a given page or sets of pages.

Likewise, the absence or failure of the code should be carefully considered:

* What happens if for some reason this code is missing or does not run?
* What happens if the code triggers an error?

### ECMAScript 6, ES6, ECMAScript 2015

Developers are encouraged to begin learning and using the [latest version of JavaScript, ES6][link-es6book]. Please use appropriate transpilers and never release untested or unsupported code in the deliverables. Do **not** assume a feature [is supported][link-es6support] in a browser.


## JavaScript Best Practices
### Inclusion of Code

Use external JavaScript files. **Do NOT include JavaScript in-line in the page unless there is a good reason.**

Use the `<script>` tag to include your JavaScript files at the bottom of your HTML document just before the closing `</body>` tag. For optimal page performance, concatenate your JavaScript into as few files as possible.

```HTML
<script src="bundle.js"></script>
```

* This should link to concatenated and minified, finalized JavaScript files.
* Enable source maps to assist with debugging and testing.

### Loading Files On Demand

On some sites it may be appropriate to load a single JavaScript file with all dependencies bundled together, or it may be more appropriate (such as in a very large SPA) to load files on demand, as they are needed, asynchronously. See our boilerplate for examples on how we load JavaScript modules on demand.

### Writing and Formatting JavaScript
The use of whitespace should follow long-standing English writing conventions, with blank lines between ideas and groups of code such as objects, functions, and new lines for new statements.

Formatting the language statements and patterns should follow these basics:

* Open braces are preceded by a single space.
* Open braces should appear on the same line as their preceding argument.
* Close braces should appear at the same indentation as the statement preceding the opening brace
* There should be no space characters between parentheses and their contents.
* Use semicolons and do not rely on automatic semicolon insertion.
* Each comma and colon (and semi-colons that don't end a line) should be followed by a single space.
* Binary and ternary operators should have a single space on each side.
* Quoted values should be in 'single quotes' so that double quotes may easily exist inside them.
* Comment JavaScript code thoroughly and consider using a pattern such as those described by JSDocs so that documentation may be generated * automatically.
* Conditional statements go on a new line followed by the opening brace.
* Else/else go on the same line as the brace.
* Use type strict checks with === as opposed to == whenever possible.

```javascript
for (var i = 0, len = arr.length; i < len; i++) {
	var example = 1;
	if (example === i) {
		// we are looping
	} else {
		// this will never happen
	}
}
```

To maximize readability without worrying about which boolean operators bind more tightly than others, each segment of a boolean expression should be enclosed in parentheses.

```javascript
if ((allowUpdate) && ((user.isAdmin) || (user.role === item.owner))) {
    // do something
}
```

### Variable Declaration

We declare each variable with a single, combined `var` statement with a comma-separated list of variable declarations and assignments whenever possible. Use a new line per variable and 4 spaces to indent the next variable line, not a tab. Make sure to end the last variable with a semicolon to close the statement.

```javascript
var foo = 1,
    bar = 2,
    foobar = parseInt($(this).attr('min'), 10);
```

### Best Practices

* Avoid user-agent sniffing and rely on feature detection instead. Browser detection is dangerous and error-prone.
* Avoid using `document.write`.
* Only run scripts on a page that are needed for that page.
* Don't repeat yourself (i.e. keep your code DRY)
* Do not modify JavaScript core objects `.prototype` unless you really know what you're doing.
* Use method names that make sense, such as `init()` or `setup()` for code that starts things off. Be consistent on your project.

### Variable Scope

Minimize the use of `global` or `window` level variables and name-spaces. Pollution of the global name-space is error prone and a bad practice.

If referencing a `window` or `global` level variable that isn't obvious, please comment as such or explicitly state it.

```javascript
var window.thing = {};
```

### Variable Names and Types

Always use meaningful variable names that can be read as words, not as silly abbreviations only you understand.

* Variable names should be `camelCase`.
* Objects, classes, and name-spaces should be `TitleCase`.
* Boolean values should be prefixed with `is` if at all possible.
* Cached jQuery objects can be prefixed with ` $ `.
* Use shorthand versions of empty `Arrays` and `Objects`.

### Feature Detection

Always test for the existence of a browser API, function, or object property before you use it, and make sure the user experience is still functional (to the extent possible) if it's not found. We rely on JavaScript-based feature detection rather than server-side device detection because it's more robust, easily maintained, and future-proof.

### Limit Events - Use Event Delegation

It is always preferable to use fewer events being bound to objects on a page as possible. Too many events bound on a page can mean memory leaks or just an accumulation of handlers bound to DOM elements which becomes less and less efficient over time. Additionally, event delegation has the added benefit of persisting events over dynamic page updates when items are added or removed from the DOM.

With jQuery this is easy, simply use the `on` method with a selector:

```javascript
$('body').on('click', 'a.scroller', function(){
   // this only runs if the a.scroller is matched
});
```

### JavaScript Performance

One of the most costly operations a browser can perform is updating the DOM in the page via inefficient JavaScript techniques. The most important thing to know is that the more you do on a Web page with JavaScript, the more work is being done, the more memory and the bigger the footprint it can generate. Additionally, updating a complex DOM structure over and over in JavaScript can cause re-flow, repainting, and jank.

A book could be written on the subject, but here's a taste of various references:

* [Minimizing browser re-flow](https://developers.google.com/speed/articles/reflow?hl=en)
* [Repaints and Reflows, Manipulating the DOM Responsibly](http://blog.letitialew.com/post/30425074101/repaints-and-reflows-manipulating-the-dom)
* [Reflows &amp; Repaints: Css Performance Making Your Javascript Slow?](http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/)
* [Rendering: repaint, reflow/relayout, restyle](http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/)
* [Speed Up Your JavaScript (part 4)](http://www.nczonline.net/blog/2009/02/03/speed-up-your-javascript-part-4/)
* [Memory Management and Performance](https://gist.github.com/dypsilon/4252079)
* [Writing Fast, Memory-Efficient JavaScript](http://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/)
* [Front-end developer essentials – 5 tips for efficient jQuery](http://www.punkchip.com/javascript-efficiency/)

### Basic JavaScript Architecture

Today it is common for the JavaScript code on a site to be a vast collection of "Modules" brought together by build scripts, dependency tools, or even manually by the developer (not really recommended).

Smaller sites can get away with more simple structures, but for longer term, JavaScript-heavy code bases the following rule is critical:

* For a complex site, never use a single JavaScript file for development, unless it is tiny and serves a very targeted purpose.

This is so that the code is maintainable and scalable. Smaller files are easier to debug, swap in and out, and blocks of code should serve as small a purpose as possible.

In most simple terms, most sites benefit from a basic structure similar to:

 * Global site-wide JavaScript
 * Specific modules for specific sections of the site
 * Specific modules used for specific purposes / features
 * Available vendor libraries

With this in mind, for strict control over the code base it's best to consider:

 * What is the **central entry point**, or the central point of execution? This is to say, what kicks off the JavaScript? This may be a simple jQuery `document.ready()` or some other mechanism to run the site's code, such as a router.

Having explicit control over the page life-cycle is preferable to having a dozen jQuery `document.ready()` statements all competing for the first chance to execute on a page.

Effectively the application core, it should kick off the rest of the code to run. Typically this has module-management baked in in some way.

See our boilerplate on how we use AMD modules for our sites.

Additional considerations:

 * How are the modules going to communicate with each other?
 * How tightly coupled are the modules in the code base?
 * How much JavaScript code would need to be updated if/when the HTML / CSS changes on the project?
 * Can individual parts call as few libraries or plugins as indirectly as possible, to facilitate changes later?
 * Does the server need to provide the scripts dynamic values for JavaScript?

### About JavaScript Modules

**Vanilla JavaScript**:

 * [Object literal notation](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)
 * The [Revealing Module Pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript)

Or, a **common standard**, used by many dependency tools:

 * [AMD modules](http://requirejs.org/docs/whyamd.html)  (most commonly used by [require.js](http://requirejs.org/))
 * CommonJS modules (most common used by node.js and browserify)
 * [ES6 modules](https://leanpub.com/understandinges6/read/#leanpub-auto-modules)

 ES6 modules could possibility be the future, so doesn't hurt to learn them now.
