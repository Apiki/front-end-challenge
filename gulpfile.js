"use strict";

const { series, parallel } = require('gulp');
const gulp = require('gulp');

const gulpPostcss = require('gulp-postcss');
const gulpAutoprefixer = require('gulp-autoprefixer');
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpUglify = require('gulp-uglify');
const gulpRename = require('gulp-rename');
const precss = require('precss');
const cssnano = require('cssnano');
const pump = require('pump');
const sass = require('gulp-sass')(require('sass'));

const browserSync = require('browser-sync').create();

var paths = {
    styles: {
        src: 'src/scss/index.scss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    }
};


// TASK SYNC/WATCH
// Faz sync browser para atualizar site
// Alterar URL para URL local de DEV

function sync() {
    browserSync.init({
        proxy: "http://localhost/Projects/apiki/front/",
        browser: "chrome",
    });

    gulp.watch(['./src/scss/**/*.scss', '!./src/css/style.min.css'], css).on('change', browserSync.reload);
    gulp.watch("./src/js/**/*.js", jsScripts).on('change', browserSync.reload);
    // gulp.watch("./js/upload.js", ['js-upload']).on('change', browserSync.reload);

    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("*.php").on('change', browserSync.reload);
};


// TASK CSS
// Minifica CSS

function css() {
    var plugins = [
        precss(),
        cssnano({ zindex: false })
    ];

    return gulp.src(paths.styles.src)
        .pipe(sass({
            outputStyle: "expanded",
            includePaths: "./node_modules",
        }).on("error", sass.logError))
        .pipe(gulpSourcemaps.init())
        .pipe(gulpPostcss(plugins))
        .pipe(gulpAutoprefixer())
        .pipe(gulpRename('style.min.css'))
        .pipe(gulpSourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
};


// TASK JS
// Minifica JS - Scripts

function jsScripts(cb) {
    pump([
        gulp.src(paths.scripts.src),
        gulpUglify(),
        gulpRename('script.min.js'),
        gulp.dest(paths.scripts.dest)
    ], cb);
};

const watch = series(sync, parallel(css, jsScripts));
exports.default = series(sync, parallel(css, jsScripts));
exports.watch = watch;