function timeInit( timeElem, initObject , callback , callback1 , callback2  ){
  var time1=0,time2=0,time3=0;
	function getRTime( time ,callback ){
        var EndTime= new Date(time); //截止时间 
        var NowTime = new Date();
        var t =EndTime.getTime() - NowTime.getTime();
        if(t<=0){
        	callback();
        }else{
	        var d=Math.floor(t/1000/60/60/24);
	        var h=Math.floor(t/1000/60/60%24);
	        var m=Math.floor(t/1000/60%60);
	        var s=Math.floor(t/1000%60);

	        d = d<10?('0'+d):d;
	        h = h<10?('0'+h):h;
	        m = m<10?('0'+m):m;
	        s = s<10?('0'+s):s;

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
    function start(){
   		getRTime(initObject.startTime,function(){
   			callback();
   			clearInterval(time1);
   			end();
   			time2 = setInterval(end,1000);
   		});
    }
    function end(){
      getRTime(initObject.endTime,function(){
        callback1();
        clearInterval(time2);
        draw();
        time3 = setInterval(draw,1000);
      })
    }
    function draw(){
      getRTime(initObject.drawEndTime,function(){
        callback2();
        clearInterval(time3);
      });
    }
    start();
	  time1 = setInterval(start,1000);
}
export default timeInit;