// Include gulp
var gulp = require('gulp');

// Included Plugins
var sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	connect = require('gulp-connect');

// Compile sass
gulp.task('sass', function() {
  	return gulp.src('dev/scss/main.scss')
	    .pipe(sass())
	    .pipe(prefix('last 2 versions'))
	    .pipe(gulp.dest('assets/css'))
	    .pipe(connect.reload());
});

// Combine and minify js
gulp.task('js', function() {
    return gulp.src('dev/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'))
        .pipe(connect.reload());
});

// Live reload
gulp.task('connect', function() {
	connect.server({
		root:'.',
		livereload: true
	})
});

// Watch for changes
gulp.task('watch', function() {
	// Watch for js changes
	gulp.watch('dev/js/*.js', ['js']);
    // Watch for scss changes
    gulp.watch('dev/scss/main.scss', ['sass']);

});

// Default Task
gulp.task('default', ['sass', 'js', 'connect', 'watch']);