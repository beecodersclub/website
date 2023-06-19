const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const imageResize = require('gulp-image-resize');
const webp = require('gulp-webp');
const del = require('del');

gulp.task('imagemin', function () {
    return gulp.src('images/**/*') // Source directory of your images
        // .pipe(newer('dist/images')) // Only process newer images
        .pipe(imagemin()) // Optimize the images
        .pipe(gulp.dest('docs/images')); // Destination directory for optimized images
});

gulp.task('resize-and-convert', function () {
    return gulp.src('docs/images/profiles/*.{png,jpg,jpeg}')
        .pipe(imageResize({
            width: 256,
            height: 256,
            crop: false,
            upscale: false
        }))
        .pipe(webp())
        .pipe(gulp.dest('docs/images/profiles'))
        .on('end', function () {
            // Excluir as imagens originais após a conversão para WebP
            del(['docs/images/profiles/*.{png,jpg,jpeg}']);
        });;
});


gulp.task('default', gulp.series('imagemin', 'resize-and-convert'));
