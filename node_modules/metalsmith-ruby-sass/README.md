metalsmith-ruby-sass
===============

Ruby Sass middleware for Metalsmith.

This middleware was created to overcome some limitations in libsass (which node-sass is built on, which metalsmith-sass uses). While libsass is an excellent tool for the node community, [this issue](https://github.com/sass/libsass/issues/146) unfortunately can be a dealbreaker for some until it is resolved.

## Credits

This project claims no credit for originality. Most of the code comes from [@steveschobert's](http://github.com/stevenschobert) excellent [metalsmith-sass](github.com/stevenschobert/metalsmith-sass) project. Also, some of the code calling out to Ruby Sass came from the [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) project, which also uses Ruby Sass. Big thanks to both projects!