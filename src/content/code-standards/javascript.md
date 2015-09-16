---
title:     "Javascript"
section:   "code-standards"
sortOrder: 3
---

JavaScript is where extra behaviors, features, and functionality not offered natively by Web browsers through CSS and HTML is created.

JavaScript has gained an enormous amount of attention in recent years due to more feature rich, faster browsers and server run-times such as Node.js. For the purposes, general discussion here focuses on client-side JavaScript development, with references to where it crosses over.

It is of note that many techniques identified these days as "HTML5" are actually enabled by the related JavaScript APIs.

##Goals
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