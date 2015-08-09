var gulp = require('gulp'),
    del = require('del'),
    run = require('gulp-run'),
    cssmin = require('gulp-minify-css'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    babelify = require("babelify"),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    reactify = require('reactify'),
    package = require('./package.json'),
    less = require('gulp-less'),
    reload = browserSync.reload;

/**
 * Running Bower
 */
gulp.task('bower', function() {
  run('bower install').exec();
})

/**
 * Cleaning dist/ folder
 */
.task('clean', function(cb) {
  del(['build/**'], cb);
})

/**
 * Running livereload server
 */
.task('server', function() {
  browserSync({
    server: {
     baseDir: './' 
    }
  });
})
.task('styles', function(){
  return gulp.src([package.paths.less])
    .pipe(less({
      paths : [package.paths.less]
      }))
    .pipe(gulp.dest('assets/css'))
})

/**
 * JSLint/JSHint validation
 */
.task('lint', function() {
  return gulp.src(package.paths.js)
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
})

/** JavaScript compilation */
.task('js', function() {
  return browserify(package.paths.app)
  .transform(babelify)
  .bundle()
  .on('error', function (err) {
            console.log(" Error in JSX transformation may be " +err);
            this.emit('end');
  })
  .pipe(source(package.dest.app))
  .pipe(gulp.dest(package.dest.dist));
})
.task('js:min', function() {
  return browserify(package.paths.app)
  .transform(babelify)
  .bundle()
  .pipe(source(package.dest.app))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest(package.dest.dist));
})

/**
 * Compiling resources and serving application
  'lint', 'less'
 */
.task('serve', ['clean', 'styles', 'js', 'server'], function() {
  return gulp.watch([
    package.paths.app, package.paths.js, package.paths.jsx, package.paths.html, package.paths.less
  ], ['js', browserSync.reload
  ]);
})
.task('serve:minified', ['bower', 'clean', 'lint', 'js:min', 'server'], function() {
  return gulp.watch([
    package.paths.js, package.paths.jsx, package.paths.html, package.paths.less
  ], [
   'lint', 'less:min', 'js:min', browserSync.reload
  ]);
});