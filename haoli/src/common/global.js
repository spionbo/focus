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
    ,getAppInfo : function(){
        var uid = T.getQueryString('uid') , 
            wap = T.getQueryString('wap');

        T.uid = uid;
        T.isLogin = (T.uid && T.uid.length>0)?true:false;
        T.wap = wap == 'true';
    }
    ,click( callback ){
        if(T.uid){
            callback();
        }else{
            requirePop('lingquguo',{
                props: {
                    content : '<div style="text-align:center; padding:20px;">您还未登录，请登录后再操作！</div>',
                    okTxt : '去登录',
                    transition : 'rotate3d',
                    okCallback(){
                        T.login();
                    }
                }
            },'publicTips');
        }
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
            $.each(['height','width','fontSize','left','right','bottom','top' , 'paddingTop' ,'lineHeight' , 'paddingLeft' , 'paddingRight' , 'paddingBottom','marginTop', 'marginLeft' , 'marginRight' , 'marginBottom'],function( i , str ){
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
                                content : '<div style="padding:20px 0; text-align:center;">'+(data.errorMsg||'操作失败，请联系客服！')+'</div>',
                                okTxt : '确定',
                                transition : 'rotate3d'
                            }
                        },'publicTips');
                    }
                },
                error : function(){
                    requirePop('lingquguo',{
                        props: {
                            content : '<div style="padding:20px 0; text-align:center;">请求失败，请联系客服！</div>',
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
        }
        loadIcon.html(loadDemo);
        T.body.append(demo);
        demo.click(function(e){ e.stopPropagation();})
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