const browserify = require('browserify');
const gulp = require('gulp');
const config = require('../config');
const bundle = require('../util/bundle');

// setup browserify
const b = browserify(config.browserify.src, config.browserify.opts);

// create browserify bundle
gulp.task('browserify', () => bundle(b));
