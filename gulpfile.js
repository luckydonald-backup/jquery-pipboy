var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

// Komplilacja sass -> css
gulp.task('sass', function(){
  return gulp.src('scss/pipboy.scss')
  .pipe(sass().on("error", sass.logError))
  .pipe(sourcemaps.init())
  .pipe(autoprefixer({
    browsers: ['last 4 versions']
  }))
  .pipe(sass({ outputStyle: 'compressed'}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('assets/css'))
});
// obserwator plików
gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']);
});
