var gulp = require('gulp'),
    ftp = require('vinyl-ftp'),
    rename = require("gulp-rename");
// upload to ftp
gulp.task('vt-upload', function () {
    var conn = ftp.create({
        host: '117.121.12.155',
        port: 21,
        user: 'pengbo.ftp.img',
        pass: 'b8f2b74d0482aed61472c7065dc1ed56'
    });

    var globs = [
        './build/**',
        //'index.html'
    ];

    gulp.src(globs, { base: './build/', buffer: false })
        .pipe(conn.dest('/jrjimg/zqt-red-1000/focus/focus20160913/app/'));

    /*gulp.src("src/*.html")
      .pipe(rename({
            //prefix: "vt_",
            extname: ".vm"
        }))
        .pipe(gulp.dest("src/"));*/
}); 

gulp.task('ftp', ['vt-upload']);