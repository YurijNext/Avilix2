var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('browser-sync', function() {
	browserSync({
			server: {
					baseDir: './'
			},
			notify: false
	});
});

// Компиляция stylesheet.css
gulp.task('scss', function() {
	return gulp.src('scss/main.scss')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer(['last 15 versions']))
		// .pipe(cleanCSS())
    // .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({stream: true}));
});

// Наблюдение за файлами
gulp.task('watch', ['scss', 'browser-sync'], function() {
	gulp.watch('scss/**/*.scss', ['scss'])
	gulp.watch('*.html', browserSync.reload)
	gulp.watch('libs/**/*', browserSync.reload)
	gulp.watch('js/*.js', browserSync.reload);
});
