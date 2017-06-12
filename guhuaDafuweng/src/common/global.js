import '../style/htmlLoadding.css';
import requirePop from '../pop/requirePop.js';
import cookie from './cookie';
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
var T = {
     body : $('body')
    ,duorongHttp : 'http://app.duorongcf.com'
    ,imgsrc : 'http://www.duorongcf.com'
    /*,duorongHttp : 'http://192.168.1.248'
    ,imgsrc : 'http://192.168.0.245:8888'*/
    ,init : function( obj ){
        var config = {
            loadding : {
                timing : 'spinner-loader', //加载 spinner , spinner-loader , loadingbar , lightLoader , square ,circles,circles1,circles2,circles3,circles4,line' 
                fillColor : 'rgba(150,213,0,1)',
                imgs : [],
                callback:function(){}
            }
        };
        $.extend( T , obj );
        if(obj && obj.loadding){
            $.extend( config.loadding , obj.loadding )
            if(obj.loadding.imgs && obj.loadding.imgs.length>0){
                var imgs = T.loadding.imgs||[];
                imgs = imgs.concat(obj.loadding.imgs);
                config.loadding.imgs = imgs;
            }
        }
        $.extend( T , config );
        T.setImgSize();
        T.mobile();
        T.load();
        T.getAppInfo();
        window.onresize = T.setImgSize;
    }
    ,requestAnimationFrame : window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || 
        window.msRequestAnimationFrame || 
        window.oRequestAnimationFrame ||
        window.setImmediate ||
        window.msSetIntermediate || 
        function(callback){setInterval(callback,1000/60)
    }
    ,mobile : function(){
        var ua = navigator.userAgent,
            uaLower = ua.toLowerCase(),
            IS_IPAD = ua.match(/iPad/i) != null,
            IS_IPHONE = !IS_IPAD && ((ua.match(/iPhone/i) != null) || (ua.match(/iPod/i) != null)),
            IS_IOS = IS_IPAD || IS_IPHONE,
            IS_ANDROID = !IS_IOS && ua.match(/android/i) != null,
            IS_MOBILE = IS_IOS || IS_ANDROID ;
            
        T.Iphone = IS_IOS;
        T.Android = IS_ANDROID;
        T.Mobile = IS_MOBILE
        
        function is_weixin() {
            var ua = uaLower;
            if (ua.match(/micromessenger/i) == "micromessenger") {
                return true;
            } else {
                return false;
            }
        }
        function is_weixin_ios() {
            var ua = uaLower;
            if (ua.match(/micromessenger/i) == "micromessenger" && T.Iphone )
            { return true; } else { return false; }
        };
        function is_weibo() {
            var ua = uaLower;
            if (ua.match(/Weibo/i) == "weibo")
            { return true; } else { return false; }
        };
        function is_qq() {
            var ua = uaLower;
            if (ua.match(/QQ\//i) == "qq/")
            { return true; } else { return false; }
        };  
        T.weixin = is_weixin();
        T.ios_weixin = is_weixin_ios();
        T.weibo = is_weibo();
        T.qq = is_qq();
    }
    ,localStorage : {
        setItem : function( key , value , obj ){
            if(window.localStorage){
                localStorage.setItem(key,JSON.stringify(value));
            }else{
                $.fn.cookie(key,value,obj);
            }
        },
        getItem : function( name ){
            if(window.localStorage){
                return JSON.parse(localStorage.getItem(name));
            }else{
                return $.fn.cookie(name);
            }
        }
    }
    ,getInfo( self ){
        T.getAppInfo();
        self.$store.dispatch('getInfo',self.$store.state).then(()=>{
            if(T.uid && self.$store.state.status==0){
                self.$store.commit('participate');
            }
        });
    }
    ,getAppInfo : function(){
        var uid = T.getQueryString('uid') , 
            wap = T.getQueryString('wap');

        T.uid = uid;
        T.isLogin = (T.uid && T.uid.length>0)?true:false;
        T.wap = wap == 'true';
    }
    ,login : function(callback){
        T.callApp.login({callback:callback});
    }
    ,callApp : {
        login : function(obj){ //登录
            var url = obj.url?('returnUrl='+obj.url):'';
            T.getAppInfo();
            if(T.isLogin==true){
               obj.callback && obj.callback();
            }else{
                if(T.wap){
                    window.location.href=T.duorongHttp+'/dl?'+encodeURIComponent(url);
                }else{
                    window.location.href='jump://page=4?'
                }
            }
        }
        ,investment : function(){ //去投资列表页
            T.getAppInfo();
            if(T.wap){
                 window.location.href=T.duorongHttp+'/main/bankBillList';
            }else{
                window.location.href='jump://page=2?';
            }
        }
        ,home : function(){ //去投资列表页
            T.getAppInfo();
            if(T.wap){
                 window.location.href='http://app.duorongcf.com';
            }else{
                window.location.href='jump://page=1?';
            }
        }
        ,integral : function(){
            window.location.href='jump://page=34?';
        }
    }
    ,getEvent : function(e, def , p){
        e = e || window.event;
        if(!def){
            e.stopPropagation()
        }
        if(!p){
            e.preventDefault()
        }
        e = e.touches ? e.touches[0] : e;
        return e;
    }
    ,myAddListener : function(ele, type, fn){
        if(T.Mobile){
            var mapping = {
                mousedown   : 'touchstart',
                mouseup     : 'touchend',
                mousemove   : 'touchmove'
            };
            type = mapping[type] || type;
        }
        ele.each(function(){
            this.removeEventListener(type, fn, false);
            this.addEventListener(type, fn, false);
        });
    }
    ,getMS : function() {
        var z = new Date();
        return (z.getMinutes() * 60 + z.getSeconds()) * 1000 + z.getMilliseconds()
    }
    ,getQueryString : function( name ){
        var reg = new RegExp("(^|&|/?)" + name + "=([^&]*)(&|$)", "i");
        var r = encodeURI(window.location.search||window.location.href||window.location.hash).substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    ,update : function(){
        T.width = T.body.width();
        T.height = T.body.height();
    }
    ,setImgSize : function(){
        T.update();
        var  originWidth = 375
            ,ratio = T.width/originWidth;

        $('.img-size').each(function(){
            var self = $(this);
            $.each(['height','width','fontSize','left','right','bottom','top' ,'margin' , 'padding' , 'paddingTop' ,'lineHeight' , 'paddingLeft' , 'paddingRight' , 'paddingBottom','marginTop', 'marginLeft' , 'marginRight' , 'marginBottom'],function( i , str ){
                var num = self.attr('data-'+str); 
                if( num ){
                    num = num*ratio/2/16+'rem';
                    self.css(str,num)
                }
            });
        });
    }
    ,ajax : function( obj ){
        return new Promise((resolve, reject) =>{
            $.ajax({
                url : obj.url , 
                type : 'POST',
                dataType : 'json',
                contentType:'application/json;charset=UTF-8',
                processData : false,
                data : JSON.stringify(obj.data),
                success : function(data){
                    if(data.flag == true){
                        resolve(data);
                    }else{
                        if(obj.callback){
                            return resolve(data);
                        }
                        requirePop('lingquguo',{
                            props: {
                                content : (data.errorMsg||'操作失败，请联系客服！'),
                                okTxt : '确定',
                                transition : 'rotate3d'
                            }
                        },'publicTips');
                    }
                },
                error : function(){
                    requirePop('lingquguo',{
                        props: {
                            content : '操作失败，请联系客服！',
                            okTxt : '确定',
                            transition : 'rotate3d'
                        }
                    },'publicTips');
                }
            });
        })
    }
    ,load : function( ){
        var timing = T.loadding.timing,
            fillColor = T.loadding.fillColor,
            demo = $('<div id="Loading"><div class="loadIcon"></div><div class="loadText"></div></div>') , 
            loadIcon = demo.find('.loadIcon') , 
            text = demo.find('.loadText'),
            loadDemo = '' , 
            count = 0,
            timer = null,
            margin = 0,
            imgs = $('.load-img'),
            img = imgs.length?T.loadding.imgs.concat(imgs):T.loadding.imgs,
            len = img.length , 
            callbackfn = function( callback ){
                callback();
            };

        if(timing == 'spinner-loader'){//win8 系统
            loadDemo = "<div class='spinner-loader'></div>"
        }else if( timing =='loadingbar'){ //5个竖条
            loadDemo = '<div class="loadingbar">'
                  +'<div class="loading-bar"></div>'
                  +'<div class="loading-bar"></div>'
                  +'<div class="loading-bar"></div>'
                  +'<div class="loading-bar"></div>'
                  +'<div class="loading-bar"></div>'
                +'</div>'
        }else if(timing == 'spinner'){ //10个圆旋转
            loadDemo = "<div class='spinner'></div>"
        }else if(timing=='lightLoader'){
            loadDemo = "<canvas id='loadCavans' class='"+timing+"'></canvas>"
        }
        loadIcon.html(loadDemo);
        T.body.append(demo);
        demo.click(function(e){ e.stopPropagation();})
        if(timing=='lightLoader'){ //进度条
            require.ensure([],()=>{
                const lightLoader = require('../widgets/loadding/lightLoader.js');
                try{
                    var c = document.getElementById('loadCavans');
                    c.width = T.width/1.5;
                    c.height = 100;
                    T.canvasDemo = new lightLoader(c, c.width, c.height);
                    T.canvasDemo.init();
                    callbackfn = function( fn ){
                        fn();
                    }
                }catch(e){
                    console.log('多融财富欢迎您！')
                }
            });
            text.css({marginTop:'-30px'});
        }else if( timing =='square' || timing=='circles' || timing=='circles1' || timing=='circles2' || timing=='circles3' || timing=='circles4' || timing=='line' ){ //距形 圆 圆1 圆3 圆4 线
            require.ensure([],()=>{
                const Sonic = require('../widgets/loadding/sonic.js');
                var option = {} , 
                    width = 50 , height = 50,
                    half = width/2;

                if(timing =='square'){
                    margin = -20;
                    option = {
                        width: width,
                        height: height,

                        stepsPerFrame: 2,
                        trailLength: .3,
                        pointDistance: .1,
                        padding: 10,

                        fillColor: fillColor,
                        strokeColor: fillColor,

                        setup: function() {
                            this._.lineWidth = 20;
                        },
                        path: [
                            ['line', 0, 0, 30, 0],
                            ['line', 30, 0, 30, 30],
                            ['line', 30, 30, 0, 30],
                            ['line', 0, 30, 0, 0]
                        ]
                    }
                }else if(timing =='circles'){
                    option = {
                        width: width,
                        height: height,

                        stepsPerFrame: 1,
                        trailLength: 1,
                        pointDistance: .025,

                        strokeColor: fillColor,

                        fps: 20,

                        setup: function() {
                            this._.lineWidth = 2;
                        },
                        step: function(point, index) {

                            var cx = this.padding + half,
                                cy = this.padding + half,
                                _ = this._,
                                angle = (Math.PI/180) * (point.progress * 360);

                            this._.globalAlpha = Math.max(.5, this.alpha);

                            _.beginPath();
                            _.moveTo(point.x, point.y);
                            _.lineTo(
                                (Math.cos(angle) * 25) + cx,
                                (Math.sin(angle) * 25) + cy
                            );
                            _.closePath();
                            _.stroke();

                            _.beginPath();
                            _.moveTo(
                                (Math.cos(-angle) * 25) + cx,
                                (Math.sin(-angle) * 25) + cy
                            );
                            _.lineTo(
                                (Math.cos(-angle) * 19) + cx,
                                (Math.sin(-angle) * 19) + cy
                            );
                            _.closePath();
                            _.stroke();

                        },
                        path: [
                            ['arc', half, half, 12, 0, 360]
                        ]
                    }
                }else if(timing =='circles1'){
                    option = {
                        width: width,
                        height: height,

                        stepsPerFrame: 1,
                        trailLength: 1,
                        pointDistance: .05,
                        fillColor: fillColor,
                        strokeColor: fillColor,

                        fps: 20,

                        setup: function() {
                            this._.lineWidth = 2;
                        },
                        step: function(point, index) {

                            var cx = this.padding + half,
                                cy = this.padding + half,
                                _ = this._,
                                angle = (Math.PI/180) * (point.progress * 360),
                                innerRadius = index === 1 ? 10 : 25;

                            _.beginPath();
                            _.moveTo(point.x, point.y);
                            _.lineTo(
                                (Math.cos(angle) * innerRadius) + cx,
                                (Math.sin(angle) * innerRadius) + cy
                            );
                            _.closePath();
                            _.stroke();

                        },
                        path: [
                            ['arc', half, half, 10, 0, 360]
                        ]
                    }
                }else if(timing =='circles2'){
                    option = {
                        width: width,
                        height: height,

                        stepsPerFrame: 1,
                        trailLength: 1,
                        pointDistance: .02,
                        fps: 30,

                        fillColor: fillColor,

                        step: function(point, index) {
                            
                            this._.beginPath();
                            this._.moveTo(point.x, point.y);
                            this._.arc(point.x, point.y, index * 3, 0, Math.PI*2, false);
                            this._.closePath();
                            this._.fill();

                        },

                        path: [
                            ['arc', half, half, 17, 0, 360]
                        ]
                    }
                }else if(timing =='circles3'){
                    option = {
                        width: width,
                        height: height,

                        stepsPerFrame: 3,
                        trailLength: 1,
                        pointDistance: .01,
                        fps: 30,
                        step: 'fader',
                        fillColor: fillColor,
                        strokeColor: fillColor,

                        setup: function() {
                            this._.lineWidth = 6;
                        },

                        path: [
                            ['arc', half, half, 20, 360, 0]
                        ]
                    }
                }else if(timing =='circles4'){
                    option = {
                        width: 100,
                        height: 100,

                        stepsPerFrame: 4,
                        trailLength: 1,
                        pointDistance: .01,
                        fps: 25,

                        fillColor: fillColor,

                        setup: function() {
                            this._.lineWidth = 10;
                        },

                        step: function(point, i, f) {

                            var progress = point.progress,
                                degAngle = 360 * progress,
                                angle = Math.PI/180 * degAngle,
                                angleB = Math.PI/180 * (degAngle - 180),
                                size = i*5;

                            this._.fillRect(
                                Math.cos(angle) * 25 + (50-size/2),
                                Math.sin(angle) * 15 + (50-size/2),
                                size,
                                size
                            );

                            this._.fillStyle = '#63D3FF';

                            this._.fillRect(
                                Math.cos(angleB) * 15 + (50-size/2),
                                Math.sin(angleB) * 25 + (50-size/2),
                                size,
                                size
                            );

                            if (point.progress == 1) {

                                this._.globalAlpha = f < .5 ? 1-f : f;

                                this._.fillStyle = '#EEE';

                                this._.beginPath();
                                this._.arc(50, 50, 5, 0, 360, 0);
                                this._.closePath();
                                this._.fill();

                            }
                        },
                         path: [
                            ['line', 40, 10, 60, 90]
                        ]
                    }
                }else if(timing =='line'){
                    margin = -30;
                    option = {
                        width: 100,
                        height: 50,

                        stepsPerFrame: 1,
                        trailLength: 1,
                        pointDistance: .1,
                        fps: 15,
                        padding: 10,
                        //step: 'fader',

                        fillColor: fillColor,

                        setup: function() {
                            this._.lineWidth = 20;
                        },

                        path: [
                            ['line', 0, 20, 100, 20],
                            ['line', 100, 20, 0, 20]
                        ]
                    }
                }
                T.canvasDemo = new Sonic(option);
                loadIcon.append(T.canvasDemo.canvas);
                T.canvasDemo.play();
                text.css({marginTop:margin+'px'});
                callbackfn = function( fn ){
                    fn();
                }
            });
        }
        if (len) {
            callbackfn(function(){
                T.body.css({height:T.height+'px'});
                img.map(function( div ){
                    var  oImage = new Image()
                        ,src = '';

                    if(typeof div == 'string'){
                        src = div;
                    }else{
                        src = $(div).attr('src');
                    }
                    oImage.src = src;
                    text.html('Loading&nbsp;0%');
                    oImage.onload = function () {
                        count++;
                        if(timing=='lightLoader'){ //进度条
                            try{
                                T.canvasDemo.progress = Math.round(count / len * 100);
                            }catch(e){
                                console.log('多融财富欢迎您！')
                            }
                        }
                        text.html('Loading&nbsp;' + Math.round(count / len * 100) + '%');
                        if (count == len) {
                            T.canvasDemo && T.canvasDemo.stop();
                            demo.remove();
                            $('.remove-hide').remove();
                            T.body.css({ 'height': '100%'});
                            T.loadding.callback && T.loadding.callback();
                       }
                   }
                   oImage.onerror = function(){
                        console.log('错误的地址：'+src);
                   }
                });
            })
        } else {
            T.loadding.callback && T.loadding.callback();
            demo.remove();
            $('.remove-hide').remove();
        }
    }
}
module.exports = T;