const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')

function compileSass() {
    return gulp
        .src('assets/css/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.stream())
}
gulp.task('sass', compileSass)

function browser() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
}
gulp.task('browser-sync', browser)

function watch() {
    gulp.watch('assets/css/scss/*.scss', compileSass)
    gulp.watch('*.html').on('change', browserSync.reload)
}
gulp.task('watch', watch)


gulp.task('default', gulp.parallel('watch', 'browser-sync'))