---
title:     "CSS"
section:   "code-standards"
sortOrder: 2
---

Cascading Style Sheets (CSS) is where the visual presentation and design rules for a website belong. Well-written CSS makes good use of its cascading nature - general styles are applied first, and those styles are overridden for more specific instances as necessary.

###Goals
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