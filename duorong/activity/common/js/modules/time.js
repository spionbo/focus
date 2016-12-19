(function(win){
    win.timeInit = function(initObject){
        var time1=0,time2=0,time3=0;
        function getRTime( time ,callback ){
            var EndTime= new Date(time), //截止时间
                NowTime = new Date(),
                t =EndTime.getTime() - NowTime.getTime();
            if(t<=0){
                callback();
            }else{
                var d=Math.floor(t/1000/60/60/24),
                    h=Math.floor(t/1000/60/60%24),
                    m=Math.floor(t/1000/60%60),
                    s=Math.floor(t/1000%60);

                d = d<10?('0'+d):d;
                h = h<10?('0'+h):h;
                m = m<10?('0'+m):m;
                s = s<10?('0'+s):s;

                if(initObject.timeElem){
                    var eles = timeElem
                    d = String(d, 2);
                    h = String(h, 2);
                    m = String(m, 2);
                    s = String(s, 2);

                    eles.eq(0).text(h[0]);
                    eles.eq(1).text(h[1]);

                    eles.eq(3).text(m[0]);
                    eles.eq(4).text(m[1]);

                    eles.eq(6).text(s[0]);
                    eles.eq(7).text(s[1]);
                }
            }
        }
        function prev(){
            getRTime(initObject.prev,function(){
                initObject.prevCallback();
                clearInterval(time1);
                start();
                if(initObject.getTime){
                    time2 = setInterval(start,1000);
                }
            });
        }
        function start(){
            getRTime(initObject.start,function(){
                initObject.startCallback();
                clearInterval(time2);
                end();
                if(initObject.getTime){
                    time3 = setInterval(end,1000);
                }
            })
        }
        function end(){
            getRTime(initObject.end,function(){
                initObject.endCallback();
                clearInterval(time3);
            });
        }
        prev();
        if(initObject.getTime){
            time1 = setInterval(prev,1000);
        }
    }
})(window)