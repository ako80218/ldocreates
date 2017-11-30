//Include Gulp
var gulp = require('gulp');

//Include plugins
var imagemin = require('gulp-imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');
var sass = require('gulp-sass');

//Optimize our JPEGS
gulp.task('mozjpeg', () =>
    gulp.src('image_assets/*.jpg')
    .pipe(imagemin([imageminMozjpeg({
        quality: 85
    })]))
    .pipe(gulp.dest('public/images'))
);

//Render .sass to .css
gulp.task('sass', function(){
	gulp.src('stylesheets/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('public/stylesheets'))
}); 

gulp.task('watch', function(){
	gulp.watch("public/stylesheets/*.sass", ['sass']);
});




//Driver is 'default' which runs our tasks.
gulp.task('default', ['mozjpeg', 'sass', 'watch']);