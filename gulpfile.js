var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('uglify');
var watchify = require('watchify');

gulp.task('scripts', function() {
  gulp.src()
  .pipe(concat())
  .pipe(gulp.dest('dist/'))
});

// I added this so that you see how to run two watch tasks
gulp.task('css', function () {
    gulp.watch('src/styles/*.css', function () {
        return gulp.src('src/styles/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/'));
    });
});

// Just running the two tasks
gulp.task('default', ['scripts', 'css']);
