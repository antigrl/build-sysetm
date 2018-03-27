const browserSync = require('browser-sync').get('server');
const frontMatter = require('front-matter');
const gulp = require('gulp');
const data = require('gulp-data');
const nunjucksRender = require('gulp-nunjucks-render');
const config = require('../config');
const error = require('../util/error');

// render and optimize nunjucks templates to html
gulp.task('nunjucks', () =>
  gulp
    .src(config.nunjucks.src)
    .pipe(data((file) => {
      const content = frontMatter(String(file.contents));
      file.contents = new Buffer(content.body);
      return content.attributes;
    }))
    .pipe(nunjucksRender(config.nunjucks.opts))
    .on('error', error)
    .pipe(gulp.dest(config.nunjucks.dist))
    .on('end', browserSync.reload));
