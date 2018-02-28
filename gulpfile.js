'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-clean-css');
var cssbeautify = require('gulp-cssbeautify');

gulp.task('styles', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        //.pipe(minify())
        .pipe(cssbeautify())
        .pipe(gulp.dest('css/'));
});


//Watch task
gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss', gulp.series('styles'));
});