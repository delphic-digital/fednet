module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('./package.json'),

		assemble: {
			options: {
				layout: './src/templates/layouts/main.hbs',
				partials: './src/templates/partials/**/*.hbs',
				plugins: ['assemble-contrib-permalinks'],
				permalinks: {
					structure: ':basename/index.html'
				}
			},
			pages: {
				files: [{
					cwd: './src/content/',
					dest: './dist/',
					expand: true,
					src: ['**/*.md']
				}]
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed',
					require: 'sass-globbing'
				},
				files: {
					'./dist/main.css': './src/scss/main.scss'
				}
			}
		},

		clean: {
			build: {
				src: ['./dist/**/*']
			}
		},

		watch: {
			css: {
				files: ['src/scss/**/*.scss'],
				tasks: ['sass']
			},
			assemble: {
				files: ['src/templates/**/*.hbs','src/content/**/*.md'],
				tasks: ['clean','assemble']
			}
		},

		browserSync: {
			bsFiles: {
				src : 'dist/**/*'
			},
			options: {
				watchTask: true,
				server: {
					baseDir: "./dist"
				}
			}
		},
	});

	/* load every plugin in package.json */
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.loadNpmTasks('assemble');

	/* grunt tasks */
	grunt.registerTask('default', ['browserSync', 'watch']);

};