'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-clean-css');
var gulp_minify = require('gulp-minify');
var cssbeautify = require('gulp-cssbeautify');
var concat = require('gulp-concat');
var vfs = require('vinyl-fs');

gulp.task('styles', function() {
    return gulp.src('Projektas3/scss/**/*.scss')
        .pipe(sass())
        //.pipe(minify())
        .pipe(cssbeautify())
        .pipe(gulp.dest('Projektas3/css/'));
});

gulp.task('js', function () {
    return gulp.src(['Projektas3/script/dev/*.js', 'Projektas3/script/dev/*.min.js'])
        .pipe(concat('jscript.js'))
        //.pipe(gulp_minify())
        .pipe(gulp.dest('Projektas3/script/prod'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('Projektas3/scss/**/*.scss', gulp.series('styles'));
});