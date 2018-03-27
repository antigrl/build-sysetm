const browserify = require('browserify');
const gulp = require('gulp');
const util = require('gulp-util');
const moment = require('moment');
const watchify = require('watchify');
const config = require('../config');
const bundle = require('../util/bundle');
const resave = require('../util/resave');

// setup browserify and wrap with watchify
const b = watchify(browserify(config.browserify.src, config.browserify.opts));

// update bundle when a source file changes
b.on('update', () => bundle(b));

// display the compile time after updating
b.on('time', (time) => {
  const duration = moment.duration(time);
  util.log(
    'Updated',
    util.colors.cyan("'browserify'"),
    'in',
    util.colors.magenta(`${duration} ms`),
  );
});

// create watchify bundle
gulp.task('watchify', () => {
  // watch files for any changes
  const watcher = gulp.watch(config.browserify.watch);
  // resave files containing glob requires when a file is added
  watcher.on('add', () => {
    resave(config.browserify.resave);
  });
  // resave files containing glob requires when a file is deleted
  watcher.on('unlink', () => {
    resave(config.browserify.resave);
  });
  // return the bundle
  return bundle(b);
});
