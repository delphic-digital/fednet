'use strict';

var path        = require('path');
var Nunjucks    = require('nunjucks');
var metalsmith  = require('metalsmith');
var markDown    = require('metalsmith-markdown');
var sass        = require('metalsmith-ruby-sass');
var templates   = require('metalsmith-templates');
var navigation  = require('metalsmith-navigation');
var metallic    = require('metalsmith-metallic');
var watch       = require('metalsmith-watch');


var navTask = navigation(navConfigs);

var navConfigs = {
    primary:{
        sortBy: 'nav_sort',
        filterProperty: 'nav_groups',
    },
    footer:{
        sortBy: 'nav_sort',
        filterProperty: 'nav_groups',
    }
};

var relativePathHelper = function(current, target) {
    // normalize and remove starting slash from path
    if(!current || !target){
        return '';
    }
    current = path.normalize(current).slice(0);
    target = path.normalize(target).slice(0);
    current = path.dirname(current);
    return path.relative(current, target);
};

var navTask = navigation(navConfigs);

var markDownTask = markDown();
var metallicTask = metallic();

var watchTask = watch({
    pattern : ['**/*', '../templates/**/*'],
    livereload: true
  });

var sassTask = sass({
    outputDir: 'css/',
    outputStyle: 'compressed'
})

var templatesTask = templates({
    engine: 'nunjucks',
    settings:  {
        views: 'templates',
        filters: {
            'relativePath': relativePathHelper
        }
    }
});

var meta = {
    siteTitle: 'fednet',
    description: 'Front end developer knowledge.',
};



var metalsmith = metalsmith(__dirname)
    .clean(true)
    .metadata(meta)
    .use(markDownTask)
    .use(metallicTask)
    .use(sassTask)
    .use(navTask)
    .use(templatesTask)
   //.use(watchTask)
    .build(function(err) {
        if (err) throw err;
    });