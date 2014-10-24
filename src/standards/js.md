---
title: JS
template: page.html
nav_sort: 3
nav_groups:
  - primary
---

## JavaScript Files
JavaScript programs should be stored in and delivered as . js files.

JavaScript code should not be embedded in HTML files unless the code is specific to a single session. Code in HTML adds significantly to page weight with no opportunity for mitigation by caching and compression. Under certain, limited, circumstances, JavaScript code may be placed in the document in order to speed execution or for dynamically generated scripting. This should be avoided.

```<script src="filename. js">``` tags should be placed as late in the body as possible. This reduces the effects of delays imposed by script loading on other page components. Script tags may be placed higher in the document if required (by a third party, for example).

