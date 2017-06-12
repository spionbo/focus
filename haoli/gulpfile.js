var gulp = require('gulp') , 
    sftp = require('gulp-sftp'); 


gulp.task('ftp', function () {
    gulp.src('ftp/**')
        .pipe(sftp({
            host: '192.168.0.245',
            user: 'root',
            pass: 'yzxx1234!!',
            port : 22,
            remotePath : '/home/www/activity/app/tianTianQiangPaimin/'
        }))
}); 
gulp.task('ftpon', function () {

    gulp.src('ftp/**')
        .pipe(sftp({
            host: '120.55.164.222',
            user: 'root',
            pass: 'yzxx1234!!',
            port : 1903,
            remotePath : '/opt/app/ftp/www/activity/app/tianTianQiangPaimin/'
        }))
}); 