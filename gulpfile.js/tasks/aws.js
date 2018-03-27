const gulp = require('gulp');
const AWS = require('aws-sdk');
const awspublish = require('gulp-awspublish');
const zip = require('gulp-zip');
const config = require('../config');
const error = require('../util/error');

gulp.task('publish', () => {
  const publisher = awspublish.create({
    region: 'us-west-2',
    params: {
      Bucket: '',
    },
    credentials: new AWS.SharedIniFileCredentials({ profile: 'default' }),
  });
  return gulp
    .src('./dist/**/*')
    .pipe(publisher.publish())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});

gulp.task('zip', () =>
  gulp
    .src('dist/**/*')
    .pipe(zip('archive.zip'))
    .pipe(gulp.dest('dist')));
