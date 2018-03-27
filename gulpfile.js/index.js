const gulp = require('gulp');
const requireDir = require('require-dir');

// automatically require all individual task files
requireDir('tasks', { recurse: true });

// build the project from individual tasks
gulp.task(
  'build',
  gulp.series(
    'clean',
    gulp.parallel(
      gulp.series('svgstore-sass', 'sass'),
      'browserify',
      'videos',
      'images',
      'fonts',
      'svgstore',
      'nunjucks',
      'json',
    ),
  ),
);

// deploy a clean build to github pages
gulp.task('deploy', gulp.series('build', 'publish'));

// watched tasks

// initialize the project
gulp.task(
  'init',
  gulp.series(
    'clean',
    gulp.parallel(
      gulp.series('svgstore-sass', 'sass'),
      'watchify',
      'videos',
      'images',
      'fonts',
      'svgstore',
      'nunjucks',
      'json',
    ),
  ),
);

// default task to launch the project
gulp.task('default', gulp.series('init', gulp.parallel('browser-sync', 'watch')));
