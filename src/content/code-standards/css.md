---
title:     "CSS"
section:   "code-standards"
sortOrder: 2
---

Cascading Style Sheets (CSS) is where the visual presentation and design rules for a website belong. Well-written CSS makes good use of its cascading nature - general styles are applied first, and those styles are overridden for more specific instances as necessary.

##Goals
CSS is an unusual language which can easily lead to code bloat, inconsistencies in design or clashing code techniques. It is easy to end up with CSS code that is so fragile it can cause site-wide regressions with small changes.

CSS should:

* Be easy to maintain.
* Follow clear enough patterns to understand.
* Offer a clear place for new styles going forwards.
* Not be a drag on page loading performance.
* Not include unused style rules.
* Address different devices, browser versions, and do as much as it can with as little code as possible.

When setting up the CSS for a site, always consider:

* What the default styles for HTML elements are going to be.
* Which styles are global styles versus specific one-off use-cases.
* Distinctions between code for layout and for content.
* How the code will evolve and grow.
* Potential impact of bug fixes on the overall site.
* Use of images as CSS background images vs. in-line HTML (content).

###Inclusion
Use the `<link>` tag to include all your style sheets in the <head> of the document. For optimal page performance, concatenate your CSS into as few files as possible and do not use the @import command to include other style sheets, as this will fire an additional HTTP request and block page rendering until its completion.

```HTML
<link rel="stylesheet" type="text/css" href="main.css">
```

###Formatting CSS

Basic rules for formatting CSS files:

* Use a new line for every selector and every declaration.
* Use a single space before the opening brace in a set of rules.
* Use lowercase for elements and shorthand hex values, e.g., #aaa.
* Hyphenate class selector names; avoid underscores and camelCase
* Quote attribute values in selectors
* Use one level of indentation for each declaration.
* The closing brace of declaration goes in the same column as the first character of the set of rules.
* Use a single blank line between sets of rules.

Inside sets of rules or style declarations:

* Add a single space between the property and value, for example: `prop: value;` and not `prop:value;`.
* Use double quotes for quoted values
* Always include a semi-colon at the end of the last declaration.
* Use shorthand if you can, like: `padding: 15px 0;` and not `padding: 15px 0px 15px 0px;`.
* When allowed, use 0 without units.

Putting each selector on its own line and each property on its own line is great for readability and so version control systems can clearly show which parts have changed in a diff.

The attributes within a selector should be ordered as followed. This is to maintain consistenty between projects and developer maintainablity.


```CSS
overflow
float
display
visibility
position
top
left
z-index
margin
padding
width
height
font-size
font-weight
font-style
text-decoration
white-space
letter-spacing
line-height
text-align
vertical-align
list-style
cursor
color
background
border
opacity
```

Note: Any style property that also requires vendor prefixes should be listed at the end of the CSS rule to maintain readability.

Some examples:

```CSS
.main-nav {
	margin: 20px 0;
	padding: 0;
}

.main-nav__list {
	margin: 0;
	padding: 0;
	list-style-type: none;
}

.main-nav__list-item {
	margin: 0 0 15px;
	font-size: 16px;
}

.main-nav__list-item--active {
	font-weight: 500;
}

```

###Specificity
Use the minimum specificity required to achieve the desired style. It can be difficult to quickly read and locate styles or even bugs with heavily nested styles in the CSS.

The ID is the most specific selector, since it can only match one element, and the class is a close second. Use those whenever possible rather than HTML tag names.

```CSS
/* BAD */
button#back-button { ... }
.popular ul li a { ... }
.popular > ul > li > a { ... }

/* GOOD */
.back-button { ... }
.popular-link { ... }
.unpopular-link { ... }

```

As a rule, CSS is most maintainable with the simplest selectors possible. Try applying a class to the element you want to target instead.

**Do Not Use !important**

Avoid using the !important keyword. Treat it like the nuclear option, only to be used in the most extreme of cases. This fundamentally destroys the specificity feature and can even break accessibility for some users.

There is usually another way to achieve the same goal without causing headaches for developers in the future who are either trying to debug a styling issue, or trying to use normal specificity to override a style for a particular element only to find that they can't.

###Vendor Prefixes◊
When using vendor prefixed features, put the standardized rule at the end to ensure browsers optimize and use the standard if they recognize it.

For example:

```CSS
.thing {
	-webkit-transition: all 100ms;
	transition: all 100ms;
}
```

###Inline Styling
Do not hard code style information into your HTML markup directly, either with the style attribute that accepts CSS or with deprecated attributes such as align, border, or width. These are difficult to maintain and make it harder to track down what is causing an element to appear as it does.

###Box Model
To simplify CSS authoring, we set the box-sizing attribute to border-box for all page elements. This enables us to use round numbers for width like 50% and then apply a padding or border to that same element without needing to
1. adjust the width accordingly using calc (since borders use pixels rather than percents) or
2. create an element inside it to take the padding and border. This is the only case where we use the inefficient universal selector (*).

Example:

```CSS
* {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
```

###Coding Patterns

We use [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) methodology.

####JavaScript (JS) Prefix◊

The usage of a js- prefix is present in the markup but should never really appear in the CSS file itself. If the styles are being set, then use BEM classes.

```HTML
<button class="btn-primary js-menu-toggle">...</button>
```

The js-menu-toggle rule should not appear in the CSS file, but only in JS files they are tied to behavior. These are events, verbs, or action related, and are access points for JavaScript not a toggle or state changer. It's best to think of these classes as closer to and ID attribute in the HTML.

###Next Steps & CSS Resources
This is just the tip of the iceberg where CSS is concerned.

* Browser Compatibility
* Media Queries
* Accessibility and CSS
* CSS pre-processors usage
* Internet Explorer, or browser-specific bugs
* Usage of CSS3 transitions, transforms, and more
* Vendor prefixes
* Color Management

For more information, check out the docs on Skeletor, our boilerplate.