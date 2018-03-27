const gulp = require('gulp');
const baseimg = require('gulp-baseimg');
const config = require('../config');

// generate sass for svgstore files based on template settings
gulp.task('svgstore-sass', () =>
  gulp
    .src(config.svgstore.src)
    .pipe(baseimg({
      styleTemplate: config.svgstore.template,
      styleName: config.svgstore.sass,
    }))
    .pipe(gulp.dest(config.svgstore.out)));
