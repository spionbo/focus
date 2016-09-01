var gulp = require('gulp'),
    ftp = require('vinyl-ftp');
// upload to ftp
gulp.task('vt-upload', function () {
    var conn = ftp.create({
        host: '111.111.11.111',
        port: 21,
        user: 'user',
        pass: 'pass'
    });

    var globs = [
        './build/**',
        //'index.html'
    ];

    gulp.src(globs, { base: './build/', buffer: false })
        .pipe(conn.dest('/jrjimg/zqt-red-1000/focus/focus20160829/app/'));
}); 

gulp.task('ftp', ['vt-upload']);