var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('uglify');
var watchify = require('watchify');

gulp.task('switcher', function() {
  gulp.src('css/*.css')
  .pipe(concat('switcher.min.css'))
  .pipe(gulp.dest('dist/'))
});

gulp.task('css', function () {
    gulp.watch('css/*.css', function () {
        return gulp.src('css/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/'));
    });
});

// Just running the two tasks
gulp.task('default', ['switcher', 'css']);
