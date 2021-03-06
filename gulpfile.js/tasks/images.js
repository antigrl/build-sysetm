const browserSync = require('browser-sync').get('server');
const gulp = require('gulp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const config = require('../config');

// optimize only images that have changed since the last time the task ran
gulp.task('images', () =>
  gulp
    .src(config.images.src)
    .pipe(changed(config.images.dist))
    .pipe(imagemin())
    .pipe(gulp.dest(config.images.dist))
    .pipe(browserSync.stream()));
