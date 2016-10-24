var gulp = require('gulp'),
    ftp = require('vinyl-ftp'),
    rename = require("gulp-rename"),
    bom = require('gulp-bom'),
    htmlmin = require('gulp-htmlmin'),
    header = require('gulp-header'),
    revCollector = require('gulp-rev-collector'),
    utf8Convert = require('gulp-utf8-convert');
// upload to ftp
//.pipe(revCollector())
/*.pipe(utf8Convert({
   encNotMatchHandle:function (file) {
       //notify 
   }
 })*/

//.pipe(htmlmin({ collapseWhitespace: true }))
gulp.task('vt-rename', function () {
    gulp.src(['./build/*.html'])
        .pipe(bom())
        .pipe(header('\ufeff'))
        .pipe(gulp.dest('./build/'));
});
//.pipe(revCollector())
gulp.task('js-css-bom', function () {
    gulp.src(['./build/*.js','./build/*.css'])
        .pipe(bom())
        .pipe(header('\ufeff'))
        .pipe(gulp.dest('./build/'));
});
gulp.task('vt-upload', function () {
    var conn = ftp.create({
        host: '117.121.12.155',
        port: 21,
        user: 'pengbo.ftp.img',
        pass: 'b8f2b74d0482aed61472c7065dc1ed56'
    });

    var globs = [
        './build/**',
    ];

    gulp.src(globs, ['./build/**'])
        .pipe(conn.dest('/jrjimg/zqt-m/webview/transaction/firm/'));
}); 

gulp.task('ftp', ['vt-rename','js-css-bom','vt-upload']);
//gulp.task('ftp', ['vt-rename','vt-upload']);