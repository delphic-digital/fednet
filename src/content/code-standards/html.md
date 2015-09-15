---
title:     "HTML"
section:   "code-standards"
sortOrder: 1
---

HTML markup defines the content of a document and gives it a rudimentary structure such as section dividers, headers, paragraphs, lists, menus, and forms.

##Goals for Markup
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