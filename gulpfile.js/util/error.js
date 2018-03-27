const notify = require('gulp-notify');

// notify when a task has errors
module.exports = function () {
  const args = Array.prototype.slice.call(arguments);
  notify
    .onError({
      message: '<%= error.message %>',
    })
    .apply(this, args);
  this.emit('end');
};
