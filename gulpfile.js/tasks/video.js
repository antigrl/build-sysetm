const browserSync = require('browser-sync').get('server');
const gulp = require('gulp');
const changed = require('gulp-changed');
const config = require('../config');

// copy video to dist if modified
gulp.task('videos', () =>
  gulp
    .src(config.videos.src)
    .pipe(changed(config.videos.dist))
    .pipe(gulp.dest(config.videos.dist))
    .pipe(browserSync.stream()));
