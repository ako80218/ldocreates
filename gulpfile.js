//Include Gulp
var gulp = require('gulp');

//Include plugins
var imagemin = require('gulp-imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

//Optimize our JPEGS
gulp.task('mozjpeg', () =>
    gulp.src('./development/images/exports/*.jpg')
    .pipe(imagemin([imageminMozjpeg({
        quality: 80,
        progressive: true
    })]))
    .pipe(gulp.dest('development/images/optimized'))
);

//Render .sass to .css
gulp.task('sass', function(){
	gulp.src('public/stylesheets/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('public/stylesheets'))
}); 

gulp.task('watch', function(){
	gulp.watch("public/stylesheets/*.sass", ['sass']);
});

gulp.task('serve', function(){
    browserSync.init({
        proxy: "localhost:3000",
        files: ["public/**/*.*", "views/*.jade", "routes/*.js", "models/generalInfo.js", "functions/*.js"],
    });
});







//Driver is 'default' which runs our tasks.
gulp.task('default', ['sass', 'watch', 'serve']);