const del = require('del');
const gulp = require('gulp');
const config = require('../config');

// clean out build directory
gulp.task('clean', () => del([config.clean.target]));
