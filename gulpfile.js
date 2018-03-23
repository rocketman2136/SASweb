var gulp = require('gulp');
var exec = require('child_process').exec;
var browserSync = require('browser-sync').create();

gulp.task('compile', function (done) {
  exec('tsc -w', function (err, stdOut, stdErr) {
    console.log(stdOut);
    if (err) {
      done(err);
    } else {
      done();
    }
  });
});

gulp.task('polymerServe', function (done) {
  exec('polymer serve -p 8000 -v', function (err, stdOut, stdErr) {
    console.log(stdOut);
    if (err) {
      done(err);
    } else {
      done();
    }
  });
});

gulp.task('browser-sync', function (done) {
  browserSync.init({
    proxy:"localhost:8000",
    startPath:"/auth/login",
  })
});


gulp.task('watch', ['browser-sync'], function () {
  var directoriesToWatch= ["src/**/*.js", "src/**/*.html", "src/*.js", "src/*.html"]
  directoriesToWatch.forEach(function(d) {
    console.log('Watching for changes at' + d);
    var jsW = gulp.watch(d, {
      interval: 1000
    }).on('change', browserSync.reload);
    jsW.on('change', function(e){
      console.log('File' + e.path + 'was' + e.type);
    });
  });
});

gulp.task('default', ['compile', 'polymerServe', 'watch']);