var gulp = require('gulp');

var assetsDev = 'assets/';
var assetsProd = 'src/';

var appDev = 'dev/';
var appProd = 'app/';

/* Mixed */
var extReplace = require('gulp-ext-replace');

/* CSS */
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var atImport = require("postcss-import");
var reporter = require("postcss-reporter");
var url = require("postcss-url");
var precss = require('precss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

//var inlineComment = require('postcss-inline-comment');
//var cssnano = require('cssnano');

//var partialImport = require('postcss-partial-import');
//var postImport = require('postcss-import');
//var nested = require('postcss-nested');
//var scss = require('postcss-scss');
//var sass = require('gulp-sass');

//var mqpacker = require('css-mqpacker');
//var csswring = require('csswring');

/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');

/* Images */
var imagemin = require('gulp-imagemin');

var tsProject = typescript.createProject('tsconfig.json');

/**
 * CSS
 */
gulp.task('build-css', function () {
    var processors = [
        atImport,
        autoprefixer({browsers: ['last 1 version']}),
        //cssnext,
        precss,
        reporter
        //partialImport({extension: 'scss', prefix: '_'}),
        //precss,
        //cssnano
    ];

    return gulp.src('assets/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(extReplace('.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('build-ts', function () {
    return gulp.src(appDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        //.pipe(jsuglify())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-img', function () {
    return gulp.src(assetsDev + 'img/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(assetsProd + 'img/'));
});

gulp.task('build-html', function () {
    return gulp.src(appDev + '**/*.html')
        .pipe(gulp.dest(appProd));
});

gulp.task('watch', function () {
    gulp.watch(appDev + '**/*.ts', ['build-ts']);
    gulp.watch(assetsDev + 'scss/**/*.scss', ['build-css']);
    gulp.watch(assetsDev + 'img/*', ['build-img']);
});

gulp.task('default', ['watch']);