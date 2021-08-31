import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import minify from 'gulp-csso';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import autoprefixer from 'autoprefixer';
import babel from 'gulp-babel';
import gulpWebpack from 'webpack-stream';
import postcss from 'gulp-postcss';
import svgstore from 'gulp-svgstore';
import imagemin from 'gulp-imagemin';
import optipng from 'imagemin-optipng';
import mozjpeg from 'imagemin-mozjpeg';
import webp from 'gulp-webp';
import terser from 'gulp-terser';
import del from 'del';
import server from 'browser-sync';

const sass = gulpSass(dartSass);

// Webpack config
let webpackConfig = {
    output: {
      filename: 'all.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: '/node-modules/'
        }
      ]
    },
    mode: 'none'
  };


// HTML
export const html = () => {
    return gulp.src('source/*.html')
        .pipe(gulp.dest('build'))
        .pipe(server.stream());
};


// Styles
export const styles = () => {
  return gulp.src('source/sass/*.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer({
      grid: 'autoplace'
    })
  ]))
  .pipe(gulp.dest('build/css'))
  .pipe(minify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('build/css'))
  .pipe(server.stream());
};


// Scripts
export const scripts = () => {
    return gulp.src('source/js/index.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest('build/js'))
        .pipe(terser())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/js'))
        .pipe(server.stream());
};


// SVG sprite
export const sprite = () => {
  return gulp.src([
    'source/img/icons/*.svg',
  ])
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('build/img/sprite'));
};


// Images optim
export const image = () => {
  return gulp.src('source/img/**/*.{png,jpg}')
  .pipe(imagemin([
    mozjpeg({quality: 60, progressive: true}),
    optipng({optimizationLevel: 3}),
  ]))
  .pipe(gulp.dest('source/img'));
};


// Convert images to webp
export const toWebp =() => {
  return gulp.src('source/img/**/*.{png,jpg}')
      .pipe(webp({quality: 90})) //you can put a value of 75 without losing quality
      .pipe(gulp.dest('build/img'));
};


// Copy
export const copy = () => {
    return gulp.src([
            'source/fonts/**/*',
            'source/img/**/*',
        ], {
            base: 'source'
        })
        .pipe(gulp.dest('build'))
        .pipe(server.stream({
            once: true
        }));
};


// Cleaning task
export const clean = ()=> {
  return del('build');
};


// Server
export const liveReload = () => {
    server.init({
        ui: false,
        notify: false,
        server: {
            baseDir: 'build'
        }
    });
};


// Watch
export const watch = () => {
    gulp.watch('source/*.html', gulp.series(html));
    gulp.watch('source/sass/**/*.scss', gulp.series(styles));
    gulp.watch('source/js/**/*.js', gulp.series(scripts));
    gulp.watch([
        'source/fonts/**/*',
        'source/img/**/*',
    ], gulp.series(copy));
};


// Default
export default gulp.series(clean,
    gulp.parallel(
        html,
        styles,
        scripts,
        sprite,
        image,
        toWebp,
        copy,
    ),
    gulp.parallel(
      watch,
      liveReload
    ),
);
