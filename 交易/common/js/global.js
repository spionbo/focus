function getHash(name){
    var reg = new RegExp("(^|&|/?)" + name + "=([^&]*)(&|$)", "i");
        var r = encodeURI(window.location.hash).substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
}
module.exports = {
	getQueryString( name ){
        var reg = new RegExp("(^|&|/?)" + name + "=([^&]*)(&|$)", "i");
        var r = encodeURI(window.location.search||window.location.href).substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    ,getHash( name ){
        return getHash(name);
    }
    ,getuserImg(arr,callback,url){
        var ids = '';
        arr.map((obj,i)=>{
            ids += obj.userId+',';
        });
        $.ajax({
            url : url,//+'?passportIds='+ids ,
            data : {
                passportIds:ids
            },
            type : 'GET',
            dataType : 'jsonp',
            success : function( _data ){
                if(_data){
                    arr.map((obj)=>{
                        try{
                            obj.headIconUrl = _data[obj.userId].headPicM;
                            obj.Img = _data[obj.userId].headPicM;
                        }catch(e){

                        }
                    });
                }
                callback(_data)
            },
            error(){
                 callback();
            }
        });
    }
   ,btnEvent( callback , _url ){
        var url = _url || 'http://sjcms.jrj.com.cn/app_tg.php?channel=shenma010';

        var ua = navigator.userAgent,
            IS_IPAD = ua.match(/iPad/i) != null,
            IS_IPHONE = !IS_IPAD && ((ua.match(/iPhone/i) != null) || (ua.match(/iPod/i) != null)),
            IS_IOS = IS_IPAD || IS_IPHONE,
            IS_ANDROID = !IS_IOS && ua.match(/android/i) != null,
            IS_MOBILE = IS_IOS || IS_ANDROID ;
            
        var Iphone = IS_IOS , Android = IS_ANDROID;

        var itougu = getHash('itougu') || ''
        
        function weixin() {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/micromessenger/i) == "micromessenger") {
                return true;
            } else {
                return false;
            }
        }

        function weibo() {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/Weibo/i) == "weibo")
            { return true; } else { return false; }
        };
        function qq() {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/QQ\//i) == "qq/")
            { return true; } else { return false; }
        };

        //alert(itougu.indexOf('false')>-1);

        if (itougu.indexOf('false')>-1) {
            if (weixin() || qq() || (Iphone() && weibo())) {
                window.location.href = url;
            } else if (Iphone) {

                var iFrame = document.createElement('iframe');
                iFrame.style.display = "none";
                iFrame.src = 'aitougu://';

                document.body.appendChild(iFrame);

                setTimeout(function () {
                    if (!document.webkitHidden) {
                        window.location.href = url;
                    }

                }, 25);

            } else if (Android) {
                location.href = 'aitougu://tougu/';
                setTimeout(function(){
                    window.location.href = url;
                },20);
            }
        }else{
            callback( );
        }
        return false;
    }
}