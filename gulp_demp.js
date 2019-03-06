const gulp = require('gulp')
gulp.task('yuo', () => {
    return gulp.src('index.html')
        .pipe(gulp.dest('demo'))
})
gulp.task('kll', (done) => {
    console.log(123);
    done()
})
gulp.task('kla', (done) => {
    console.log(123456);
    done()
})
gulp.task('iop', gulp.series(['yuo', 'kll', 'kla']))
gulp.task('ios', () => {
    gulp.watch('index.html', gulp.series('time'))
})
gulp.task('time', (done) => {
    console.log(123456);
    done()
})

const del = require('del')
gulp.task('delete', () => {
    return del(['./demo/index.html'])
})
//尝试less
const sass = require('gulp-sass')
gulp.task('css', () => {
    return gulp.src('./css/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('./demo'))
})

//尝试私有化前缀
const autoprefixer = require('gulp-autoprefixer')
gulp.task('css', () => {
    return gulp.src('./css/index.scss')
        .pipe(sass())
        .pipe(
            autoprefixer({
                browsers: ["last 2 versions"]
            })
        )
        .pipe(gulp.dest('./demo'))
})

//尝试map插件
const sourcemaps = require('gulp-sourcemaps')
gulp.task('css', () => {
    return gulp.src('./css/index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(
            autoprefixer({
                browsers: ["last 2 versions"]
            })
        )
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./demo'))
})

//尝试es6转换es5
const bable = require('gulp-babel');
gulp.task('js', () => {
    return gulp.src('./js/index.js')
        .pipe(bable())
        .pipe(gulp.dest('./demo'))
})