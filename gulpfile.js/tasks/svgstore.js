const browserSync = require('browser-sync').get('server');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const svgstore = require('gulp-svgstore');
const config = require('../config');

// create an optimized svg sprite sheet
gulp.task('svgstore', () =>
  gulp
    .src(config.svgstore.src)
    .pipe(imagemin(config.svgstore.imagemin))
    .pipe(svgstore(config.svgstore.opts))
    .pipe(gulp.dest(config.svgstore.dist))
    .pipe(browserSync.stream()));
