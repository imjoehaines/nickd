var gulp = require('gulp')
var mocha = require('gulp-mocha')
var notify = require('gulp-notify')

var watch = false

gulp.task('test', function () {
  var reporter = watch ? 'min' : 'spec'

  return gulp.src('spec/spec.js', {read: false})
    .pipe(mocha({reporter: reporter}))
    .on('error', notify.onError({
      title: 'Oops!',
      message: 'Something broke'
    }))
})

gulp.task('watch', function () {
  watch = true
  gulp.watch(['**/*.js', '!./node_modules/**'], ['test'])
})

gulp.task('default', ['watch'])
