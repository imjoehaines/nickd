var gulp = require('gulp')
var mocha = require('gulp-mocha')
var notify = require('gulp-notify')

gulp.task('test', function () {
  return gulp.src('spec/spec.js', {read: false})
    .pipe(mocha({reporter: 'spec'}))
    .on('error', notify.onError({
      title: 'Oops!',
      message: 'Something broke'
    }))
})

gulp.task('watch', function () {
  gulp.watch(['**/*.js', '!./node_modules/**'], ['test'])
})

gulp.task('default', ['watch'])
