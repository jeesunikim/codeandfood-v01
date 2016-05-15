var gulp         = require('gulp'),
	postcss      = require('gulp-postcss'),
	cssnext      = require('postcss-cssnext'),
	nano         = require('cssnano'),
	shell        = require('gulp-shell'),
	atImport     = require('postcss-import'),
	browserSync  = require('browser-sync').create();

var processors = [
	atImport,
	cssnext({
		'browsers': ['last 2 version'],
	    'features': {
	      'customProperties': {
	        preserve: true,
	        appendVariables: true
	      },
	      'colorFunction': true,
	      'customSelectors': true,
	      'sourcemap': true,
	      'rem': false
	    }
	})
];

gulp.task('styles', function() {
  return gulp.src('./_assets/src/style.css')
  .pipe(postcss(processors))
  .pipe(nano({discardComments: {removeAll: true}}))
  .pipe(gulp.dest('./_assets/css'));
});