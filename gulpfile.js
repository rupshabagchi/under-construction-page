var gulp = require('gulp');
var cssminify = require('gulp-minify-css');

gulp.task('default', function() {
  gulp.src('css/colors*.css')
  .pipe(cssminify())
  .pipe(gulp.dest('dist'));
});
