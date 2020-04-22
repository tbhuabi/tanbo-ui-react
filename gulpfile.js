const gulp = require('gulp');

gulp.task('copy', function () {
  return gulp.src('./src/libraries/assets/**/*').pipe(gulp.dest('./bundles/assets/'));
});

gulp.task('default', gulp.series('copy'));
