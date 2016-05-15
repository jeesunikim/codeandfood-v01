var gulp         = require('gulp'),
	postcss      = require('gulp-postcss'),
	cssnext      = require('postcss-cssnext'),
	nano         = require('gulp-cssnano'),
	shell        = require('gulp-shell'),
	atImport     = require('postcss-import'),
	browserSync  = require('browser-sync').create();
