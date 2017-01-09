var gulp = require('gulp'),              
    cssmin = require('gulp-cssmin'),
    htmlmin = require('gulp-htmlmin'),
    pug = require('gulp-pug'),
    uglify = require('gulp-uglify'),
    svgmin = require('gulp-svgmin'),
    watch = require('gulp-watch');

// Сжатие css

gulp.task('cssm', function () {
    gulp.src('src/css/**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('app/css'));
});

/* Сжатие обычного html (если вы в проекте не используете
   Jade(Pug.js). Если используете "gulp pug", что ниже 
   по конфигу, использовать "gulp htmlm" нет необходимости, 
   на выходе "gulp pug" уже сжатый html. */

gulp.task('htmlm', function() {
  return gulp.src('src/html/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app'));
});

// Компиляция Jade(Pug.js) в html

gulp.task('pug', function () {
  return gulp.src('src/**/*.pug')
  .pipe(pug({}))
  .pipe(gulp.dest('app'));
});

// Сжатие javaScript (минификация)

gulp.task('jsm', function () {
    gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

// Сжатие SVG графики

gulp.task('svgm', function () {
    return gulp.src('src/img/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('app/img'));
});

// Сборка всего проекта одной командой "gulp prod"

gulp.task('prod', function () {
    gulp.src('src/css/**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('app/css'));

    return gulp.src('src/html/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('app')); 

    return gulp.src('src/**/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('app'));

    gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));

    return gulp.src('src/img/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('app/img'));
});

/* Запускай "gulp watch" и gulp будет сам отслеживать
   изменения в файлах и запускать соответствующий процесс */

gulp.task('watch', function() {
    gulp.watch('src/css/**/*.css', ['cssm']);
    gulp.watch('src/html/**/*.html', ['htmlm']);
    gulp.watch('src/**/*.pug', ['pug']);
    gulp.watch('src/js/**/*.js', ['jsm']);
    gulp.watch('src/img/**/*.svg', ['svgm']);
});










