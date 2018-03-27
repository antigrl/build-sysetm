const gulp = require('gulp');
const savefile = require('gulp-savefile');

// resave source
module.exports = function (src) {
  return gulp.src(src).pipe(savefile());
};
