import gulp from 'gulp';
import sass from 'gulp-sass';
import minify from 'gulp-csso';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import autoprefixer from 'autoprefixer';
import babel from 'gulp-babel';
import postcss from 'gulp-postcss';
import replace from 'gulp-replace';
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';
import pimport from 'postcss-import';
import minmax from 'postcss-media-minmax';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import sync from 'browser-sync';

// HTML

export const html = () => {
    return gulp.src('source/*.html')
        .pipe(htmlmin({
            removeComments: true,
            collapseWhitespace: true,
        }))
        .pipe(gulp.dest('dist'))
        .pipe(sync.stream());
};

// Styles

// export const styles = () => {
//   return gulp.src('source/sass/*.scss')
//   .pipe(plumber())
//   .pipe(sass())
//   .pipe(postcss([
//     autoprefixer({
//       grid: 'autoplace'
//     })
//   ]))
//   .pipe(gulp.dest('build/css'))
//   .pipe(minify())
//   .pipe(rename({suffix: '.min'}))
//   .pipe(gulp.dest('build/css'))
//   .pipe(server.stream());
// };

// Scripts

// export const scripts = () => {
//     return gulp.src('source/js/index.js')
//         .pipe(babel({
//             presets: ['@babel/preset-env']
//         }))
//         .pipe(terser())
//         .pipe(gulp.dest('dist'))
//         .pipe(sync.stream());
// };

// Copy

// export const copy = () => {
//     return gulp.src([
//             'source/fonts/**/*',
//             'source/img/**/*',
//         ], {
//             base: 'source'
//         })
//         .pipe(gulp.dest('dist'))
//         .pipe(sync.stream({
//             once: true
//         }));
// };

// Paths

// export const paths = () => {
//     return gulp.src('dist/*.html')
//         .pipe(replace(
//             /(<link rel="stylesheet" href=")styles\/(index.css">)/, '$1$2'
//         ))
//         .pipe(replace(
//             /(<script src=")scripts\/(index.js">)/, '$1$2'
//         ))
//         .pipe(gulp.dest('dist'));
// };

// Server

// export const server = () => {
//     sync.init({
//         ui: false,
//         notify: false,
//         server: {
//             baseDir: 'dist'
//         }
//     });
// };

// Watch

// export const watch = () => {
//     // gulp.watch('source/*.html', gulp.series(html, paths));
//     // gulp.watch('source/sass/**/*.scss', gulp.series(styles));
//     gulp.watch('source/js/**/*.js', gulp.series(scripts));
//     gulp.watch([
//         'source/fonts/**/*',
//         'source/img/**/*',
//     ], gulp.series(copy));
// };

// Default

export default gulp.series(
    gulp.parallel(
        html,
        // styles,
        // scripts,
        // copy,
    ),
    // paths,
    // gulp.parallel(
    //     watch,
    //     server,
    // ),
);
