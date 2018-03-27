const browserSync = require('browser-sync').get('server');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const config = require('../config');
const error = require('../util/error');

// function to bundle browserify files
module.exports = function (b) {
  return b
    .bundle()
    .on('error', error)
    .pipe(source(config.browserify.bundle))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.browserify.dist))
    .pipe(browserSync.stream({ once: true }));
};
