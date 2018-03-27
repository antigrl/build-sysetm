const browserSync = require('browser-sync').get('server');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const config = require('../config');
const error = require('../util/error');

// process, prefix, and optimize sass files with sourcemaps
gulp.task('sass', () =>
  gulp
    .src(config.sass.src)
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', error)
    .pipe(postcss(config.sass.postcss))
    .pipe(cssnano(config.sass.cssnano))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.sass.dist))
    .pipe(browserSync.stream({ match: '**/*.css' })));
