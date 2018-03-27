const browserSync = require('browser-sync').get('server');
const gulp = require('gulp');
const changed = require('gulp-changed');
const config = require('../config');

// copy video to dist if modified
gulp.task('json', () =>
  gulp
    .src(config.json.src)
    .pipe(changed(config.json.dist))
    .pipe(gulp.dest(config.json.dist))
    .pipe(browserSync.stream()));
