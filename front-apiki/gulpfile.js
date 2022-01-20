const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

gulp.task('styles', () => {
    return gulp.src('src/assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('src/assets/css/'));
});

gulp.task('clean', () => {
    return del([
        'src/assets/css/style.min.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));