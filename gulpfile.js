var gulp = require('gulp');
// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = './src'; // dossier de travail
var destination = './dist'; // dossier à livrer

gulp.task('default', function() {
  // place code for your default task here
}); 

gulp.task('css', function () {
  return gulp.src(source + '/sass/styles.scss')
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(destination + '/css/'));
});

gulp.task('minify', function () {
  return gulp.src(destination + '/css/*.css')
    .pipe(plugins.csso())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(destination + '/css/'));
});

// Tâche "watch" = je surveille *less
gulp.task('watch', function () {
  gulp.watch(source , ['build']);
});

gulp.task('build', ['css']);

gulp.task('develop', ['watch']);