const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
function buildScss() {
    return src('./utils/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
        .pipe(browserSync.stream())
}

function watchTask() {
    watch(['./utils/**/*.scss'], buildScss)
    watch('./*.html').on('change', browserSync.reload)
    browserSync.init({
        server: './'
    })
}

exports.default = series(buildScss, watchTask)