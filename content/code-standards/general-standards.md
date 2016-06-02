---
title: General Standards
sort:  2
---

For any project:

* Consistency and conventions between team members is paramount.
* Solutions should be as simple and clear as possible.
* Solutions should serve a specific purpose.
* Clever code does not mean good code; readability is critical

A key hallmark of professional code includes a notion that while we are writing code that must reach a desired goal, we are also creating code that must be read and understood by others.

###Code Consistency

Usage of the same patterns is critical between team members so as to never cause confusion.

It's worth establishing conventions at the project start or enabling automatic settings in the build or editor environments that might enforce particular rules.

###Indentation

Please consistently indent, nest, include braces, quotes, and new lines so that code is clear and can be read easily. New code that is added should never deviate from existing formatting conventions or change the indent levels.

For all code languages, we recommend the use hard tabs comprised of one tab character. Hitting the tab key in your text editor should generate one tab character rather than four space characters. This allows developers with different preferences in indentation size to change how the code looks without changing the code.

If soft tabs are favored by a team, simply maintain consistency for a project and it's deliverables so developers can make adjustments to their editing environments a single time.

###Readability

We encourage liberal use of whitespace, comments, and descriptive variable names as appropriate for writing easy-to-read code.

* There is no need to write code in an obfuscated or compressed way for the purpose of file-size savings.
* We will use automated server-side or other build processes to optimize files.
* This includes concatenating files, code minification, gzipping, and setting "Far Future Expires".

The ability for another developer to read the code is paramount above other concerns, especially if optimization can be handled another way.