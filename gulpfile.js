// Include gulp
var gulp = require('gulp');

// Included Plugins
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

// Compile sass
gulp.task('sass', function(){
  return gulp.src('dev/scss/main.scss')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {

    // Watch for scss changes
    gulp.watch('dev/scss/main.scss', ['sass']);

});

// Default Task
gulp.task('default', ['sass', 'watch']);