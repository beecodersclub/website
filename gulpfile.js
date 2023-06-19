const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

gulp.task('imagemin', function () {
    return gulp.src('images/**/*') // Source directory of your images
        .pipe(newer('dist/images')) // Only process newer images
        .pipe(imagemin()) // Optimize the images
        .pipe(gulp.dest('docs/images')); // Destination directory for optimized images
});