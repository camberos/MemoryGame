/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Include gulp
var gulp    = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    gutil = require('gulp-util');

// Define tasks
gulp.task('minify', function() {
  console.log('Minifying HTML');
  return gulp.src('public_html/src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public_html/build/'));
});


gulp.task('default', function() {
    // Code for the default task
    gulp.start('minify');
    // return gutil.log('Gulp is running!');
});

