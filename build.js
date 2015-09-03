'use strict';

var path        = require('path');
var Nunjucks    = require('nunjucks');
var metalsmith  = require('metalsmith');
var markDown    = require('metalsmith-markdown');
var sass        = require('metalsmith-sass');
var layouts     = require('metalsmith-layouts');
var navigation  = require('metalsmith-navigation');
var excerpts    = require('metalsmith-excerpts');
var metallic    = require('metalsmith-metallic');
var assets      = require('metalsmith-assets');
var lunr        = require('metalsmith-lunr');


var navTask = navigation(navConfigs);

var navConfigs = {
	primary:{
		sortBy: 'nav_sort',
		filterProperty: 'nav_groups',
	},
	list_page:{
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
	var relative = path.relative(current, target);
	relative = relative.replace(/\\/g,"/");
	return relative;
};

var indexPathHelper = function(current, target) {
	// normalize and remove starting slash from path
	if(!current || !target){
		return '';
	}
	current = path.normalize(current).slice(0);
	target = path.normalize(target).slice(0);
	current = path.dirname(current);
	var index = path.relative(current, target);
	index = index.replace(/\\/g,"/");
	return path.dirname(index)+'/';
};

var navTask = navigation(navConfigs);
var markDownTask = markDown();
var metallicTask = metallic();
var excerptsTask = excerpts();


var sassTask = sass({
	outputDir: 'css/',
	outputStyle: 'compressed'
})

var layoutsTask = layouts({
	engine: 'nunjucks',
	settings:  {
		views: 'templates',
/*		filters: {
			'relativePath': relativePathHelper,
			'indexPath': indexPathHelper
		}*/
	}
});

var assetsTask = assets({
  source: './assets', // relative to the working directory
  destination: './assets' // relative to the build directory
})

var meta = {
	siteTitle: 'fednet',
	description: 'Front end developer knowledge.',
};

var lunrTask = lunr({
 // ref: 'title',
  fields: {
	  title: 1,
	  contents: 10
  },
  store: ['title', 'excerpt', 'nav_path'],
  preprocess: function(content) {
	//Strip html tags
	return content.replace(/(<([^>]+)>)/ig,"");
  }
})



var metalsmith = metalsmith(__dirname)
	.clean(true)
	.metadata(meta)
	.use(markDownTask)
/*	.use(excerptsTask)
	.use(metallicTask)
	.use(sassTask)
	.use(navTask)
	.use(layoutsTask)
	.use(assetsTask)
	.use(lunrTask)*/
	//.use(watchTask)
	.build(function(err) {
		if (err) throw err;
	});