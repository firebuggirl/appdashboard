"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat');


gulp.task("concatScripts", function() {
   return gulp.src([
        'js/modernizr.js',
        'js/jquery-2.2.0.min.js',
        'js/jquery.autocomplete.min.js',
        'js/name-autocomplete.js',
        'js/search.js',
        'js/nav.js',
        'js/chartstandardbuild.js',
        'js/toggle.js',
        'js/radiobutton.js',
        'js/bellclick.js',
        'js/validateform.js',
        'js/savesettings.js',
        'js/alert.js',
        'js/chart.js'])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("js"))
});


gulp.task("default", ["hello"], function(){
    console.log('The default task!');
});
