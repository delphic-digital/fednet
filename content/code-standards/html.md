---
title: HTML
sort:  2
---

HTML markup defines the content of a document and gives it a rudimentary structure such as section dividers, headers, paragraphs, lists, menus, and forms.

##Goals
Please follow conventions established for a given project so all team members can have the same expectations around document structure and markup.

Structural consistency is critical when talking about the types of pages being used on a site or in a Web app. The markup structure provides all the necessary hooks for scripting and behavior, so it's important that the appropriate hooks are in place.

A clear, clean, and concise HTML structure is also necessary for semantics, flexibility, and a reliable deployment environment. Do not deviate from established templates or patterns without architect approval.

Which markup is used does matter:

* Use the most meaningful yet minimal markup required to present the styles and interaction required
* Application-centric deliverables often have different types of requirements; please code accordingly
* Maintain a clear separation of concerns, avoid in-line styles and in-line JavaScript whenever possible
* Have reference implementations so that each team member knows what sorts of structures are appropriate, as well as where to add new code.
* Build pages as a library of components, in such a way that blocks of code can be broken up and reused when implemented.
* Be sure front-end code is compatible with destination environments and delivery platforms.
The flexible nature of HTML markup and how loosely browsers interpret markup sometimes lends itself to inconsistencies not always being discovered immediately. This belies the care necessary in crafting a document's structure and in following established patterns.

##HTML Markup Best Practices
As noted these guidelines are flexible for projects as long as consensus or need determines a particular path, consistency is what matters most.

###Semantic Markup
HTML provides a number of semantic constructs that allow automated tools like search engines and screen readers to make sense of the document and to understand relationships between pieces of content. Use semantic markup whenever possible — that is to say use elements with specific meanings for specific purposes to convey the spirit of the markup.

A well-written HTML document will make appropriate use of these semantic elements and leave all responsibility for controlling the presentation of the document to the CSS style sheet.

###HTML Standards and Browser Support
All markup will be written using the latest HTML5 markup specifications from the W3C, as implemented by browsers and devices that meet project requirements. When creating markup be sure that the target environments support the techniques being implemented, or that there is a fall-back plan.

Please use a common HTML5 polyfill or HTML5 Shiv to enable styling and recognition of HTML5 elements in older devices' browsers.

###Doctype
Always include a proper doctype to trigger standards mode. Omitting the doctype triggers quirks mode and should always be avoided. The HTML5 doctype is simple and easy to remember.

```html
<!doctype html>
```

###Character Encoding
All markup should be delivered as UTF-8, since it has the best support for internationalization. The character encoding should be designated in both the HTTP header and the head of the document via a meta tag. If the server happens to omit the HTTP header, browsers can take a guess at the character encoding and begins parsing and rendering the markup in a particular way. If there are inconsistencies, the browser will re-parse and re-render, throwing away all that work and starting over if it encounters the meta tag and its guess was incorrect. As a best practice, we always put the meta tag as early in the <head> tag as early as possible — however server-settings are ideal.

```html
<meta charset="UTF-8">
```

###Indentation in HTML
Indent nested elements and tags with single indentation settings, whatever they may be, for each level in the hierarchy of the document.

####HTML5 Elements
To provide additional semantic value to our documents, make use of HTML5 elements such as `<header>`, `<article>`, and `<section>` where appropriate. However, in cases where the HTML needs to be as backwards-compatible as possible, do not apply IDs or classes to them, since older browsers do not understand these elements by default and will not apply styling to them.

###IDs vs. Classes
HTML elements can be identified by using the id and class attributes. An ID is a unique identifier for that particular element; no other element on the page should use the same ID.

This uniqueness allows `<label>` elements to associate themselves with a particular input and URLs to jump to a particular scroll position on a page.

Classes are not unique. The same class can be used on multiple elements within a page, and a single element can have more than one class, in a space delimited list.

When coming up with names for an ID or class, we use [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) methodology. More information is in the CSS section. Please refer there.

###Tables
Tables should not be used for page layout; only use them when you need to display tabular data. Tables provide an important semantic association (used mostly by screen readers for the sight-impaired) between row/column headers and their data, so use <table> rather than other elements when displaying multiple records of data.

###Input Labels
All input fields should be associated with a <label> element. The for attribute of the <label> element should contain the ID of the corresponding input field. This means the input field will receive focus when a user clicks the label and also enables screen readers for sight-impaired users to read out an appropriate description of the input field.