//плашины которые подключаем в gulp
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync');

//компилятор сас
gulp.task("sass", function() {
	return gulp.src('app/sass/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

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
gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/main.scss', ['sass']);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});