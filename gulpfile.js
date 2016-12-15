//плашины которые подключаем в gulp
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		concat 			= require('gulp-concat'),
		uglify			= require('gulp-uglifyjs');

//компилятор сас
gulp.task("sass", function() {
	return gulp.src('app/sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

//сжатие и обьединение js скриптов в один
//gulp.task('scripts', function() {
//    return gulp.src([ // Берем все необходимые библиотеки
 //       'app/libs/jquery/dist/jquery.min.js', // Берем jQuery
//        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js' // Берем Magnific Popup
//        ])
 //       .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
//        .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
//});

//live reload in gulp
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

//смотрит за изменениями в сас файлах и выполняет компиляцию, а также подлючает другие таски
gulp.task('watch', ['browser-sync', 'sass'], function() {//добавить 'scripts'
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});