var gulp = require('gulp'),
		stylus = require('gulp-stylus'),
		nib = require('nib'),
		minifyCss = require('gulp-minify-css'),
		rename = require("gulp-rename"),
		livereload = require('gulp-livereload'),
		connect = require('gulp-connect'),
		uglify = require('gulp-uglify'),
		coffee = require('gulp-coffee'),
		gutil = require('gulp-util'),
		concat = require('gulp-concat');

gulp.task('html', function() {
	gulp.src('app/*.html')
		.pipe(connect.reload());
});

gulp.task('stylus', function () {
	gulp.src('app/stylus/style.styl')
		.pipe(stylus({use:[nib()]}))
		.on('error', console.log)
		.pipe(gulp.dest('app/css'))
		// Минификация
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('app/css'))
		.pipe(connect.reload());
});

gulp.task('js', function() {
	gulp.src('app/js/app.js')
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('app/js'))
		.pipe(connect.reload());
});

gulp.task('coffee', function() {
	gulp.src('app/coffee/*.coffee')
		.pipe(concat('app.coffee'))
		.pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(gulp.dest('app/js/'))
});

// Сервер
gulp.task('connect', function() {
	connect.server({
		root: 'app',
		livereload: true
	});
});

gulp.task('watch', function() {
	gulp.run('stylus');
	gulp.watch('app/stylus/*.styl', ['stylus'])
	gulp.watch('app/*.html', ['html'])
	gulp.watch('app/js/app.js', ['js'])
	gulp.watch('app/coffee/*.coffee', ['coffee'])
});

gulp.task('default', ['connect', 'stylus', 'html', 'coffee', 'js', 'watch']);
