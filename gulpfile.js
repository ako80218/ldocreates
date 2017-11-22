//Include Gulp
var gulp = require('gulp');

//Include plugins
var imagemin = require('gulp-imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');


//Optimize our JPEGS
gulp.task('mozjpeg', () =>
    gulp.src('image_assets/*.jpg')
    .pipe(imagemin([imageminMozjpeg({
        quality: 85
    })]))
    .pipe(gulp.dest('public/images'))
);




//Driver is 'default' which runs our tasks.
gulp.task('default', ['mozjpeg']);