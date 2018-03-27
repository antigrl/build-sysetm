const browserSync = require('browser-sync').get('server');
const gulp = require('gulp');
const changed = require('gulp-changed');
const config = require('../config');

// copy fonts to dist if modified
gulp.task('fonts', () =>
  gulp
    .src(config.fonts.src)
    .pipe(changed(config.fonts.dist))
    .pipe(gulp.dest(config.fonts.dist))
    .pipe(browserSync.stream()));
