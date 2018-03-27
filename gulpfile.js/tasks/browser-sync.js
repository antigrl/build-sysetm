const browserSync = require('browser-sync').create('server');
const gulp = require('gulp');
const config = require('../config');

// complete all initial tasks before starting browser-sync
gulp.task('browser-sync', () => browserSync.init(config.browserSync.opts));
