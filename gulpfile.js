//Include Gulp
var gulp = require('gulp');

//Include plugins
var imagemin = require('gulp-imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');
var sass = require('gulp-sass');

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




//Driver is 'default' which runs our tasks.
gulp.task('default', ['mozjpeg', 'sass', 'watch']);