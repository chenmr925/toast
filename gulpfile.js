var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
gulp.task('default', ['minify-js'], function() {
    // 将你的默认的任务代码放在这
    console.log('默认的任务');
});
//运行任务前先清理目标文件夹
var clean = require('gulp-clean');
gulp.task('clean', function () {
    return gulp.src('bridge', {read: false})
        .pipe(clean());
});
//js文件压缩
var uglify = require("gulp-uglify");
gulp.task('minify-js', function () {
    gulp.src('src/*.js') // 要压缩的js文件
    .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
    .pipe(gulp.dest('dest')); //压缩后的路径
});
//css文件压缩
var minifyCss = require("gulp-minify-css");
gulp.task('minify-css', function () {
    gulp.src('src/css/*.css') // 要压缩的css文件
    .pipe(minifyCss()) //压缩css
    .pipe(gulp.dest('bridge/css'));
});
//css文件压缩
var cleanCSS = require('gulp-clean-css');
gulp.task('clean-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('bridge/css'));
});
//html文件压缩
// var minifyHtml = require("gulp-minify-html");
// gulp.task('minify-html', function () {
//      gulp.src('src/index/**') // 要压缩的html文件
//     .pipe(minifyHtml()) //压缩
//     .pipe(gulp.dest('bridge/html'));
// });
var htmlmin = require('gulp-htmlmin');
gulp.task('minify-html',function(){
    var options = {
        collapseWhitespace:true,
        collapseBooleanAttributes:true,
        removeComments:true,
        removeEmptyAttributes:true,
        removeScriptTypeAttributes:true,
        removeStyleLinkTypeAttributes:true,
        minifyJS:true,
        minifyCSS:true
    };
    gulp.src('src/index/**')
    .pipe(htmlmin(options))
    .pipe(gulp.dest('bridge/html'));
});

//js代码检查
var jshint = require("gulp-jshint");
gulp.task('jsLint', function () {
    gulp.src('src/script/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter()); // 输出检查结果
});
//文件合并
// var concat = require("gulp-concat");
// gulp.task('concat', function () {
//     gulp.src('js/*.js')  //要合并的文件
//     .pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
//     .pipe(gulp.dest('discover/js'));
// });
//less和sass的编译
// var less = require("gulp-less");
// gulp.task('compile-less', function () {
//     gulp.src('less/*.less')
//     .pipe(less())
//     .pipe(gulp.dest('discover/css'));
// });
// var sass = require("gulp-sass");
// gulp.task('compile-sass', function () {
//     gulp.src('sass/*.sass')
//     .pipe(sass())
//     .pipe(gulp.dest('discover/css'));
// });
//图片压缩
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant'); //png图片压缩插件
gulp.task('imagemin', function () {
    return gulp.src('src/icon/**')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()] //使用pngquant来压缩png图片,图片质量：quality: '45-50'}
        }))
        .pipe(gulp.dest('bridge/icon'));
});
//自动刷新
// var livereload = require('gulp-livereload');
// gulp.task('less', function() {
//   gulp.src('less/*.less')
//     .pipe(less())
//     .pipe(gulp.dest('css'))
//     .pipe(livereload());
// });
//css自动补全浏览器前缀
// var autoprefixer = require('gulp-autoprefixer');
// gulp.task('autoprefixer', function () {
//  return gulp.src('css/*.css')
//      .pipe(autoprefixer({
//          browsers: ['last 2 versions'],
//          cascade: false
//      }))
//      .pipe(gulp.dest('discover/CSS'));
// });
