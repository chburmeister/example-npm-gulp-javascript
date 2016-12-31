var gulp = require('gulp');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var del = require('del');

// task to delete a list of directories
gulp.task('clean', function() {
    return del(['dist/assets/js']); 
});

// task to process resources (honored to maven :-) )
gulp.task('process-resources', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});
