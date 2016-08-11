import $ from 'webpack-zepto';
const T = {
	 body : $('body')
	,url : window.location.href
	,Itougu : false
	,codeUrl : ''
	,width : $(window).width()
	,height : $(window).height()
    ,popUrl : 0
	,init : function( obj ){
        $.extend(T,obj);
        var popUrl = [
             'newtcphone.png' //下载爱投顾
            ,'share.png'//分享 邀请码
            ,'share1.png' //分享
            ,'share2.png' //箭头分享，无任务文案
        ];
        $('<div class="tsbox" style="display:none;"><img src="http://i0.jrjimg.cn/zqt-red-1000/focus/common/images/'+popUrl[T.popUrl]+'" /></div><div class="bgbig" style="display:none;"></div>').appendTo(T.body)
        T.openWindow = $('.tsbox,.bgbig');
        T.update();
		T.setHtml5();
		T.getMobile();
		T.urlCode();
		window.onresize = function(){
			T.setImgSize();
		}
		T.setImgSize();
		T.clickEvent();
	}
	,update : function(){ //不断更新
		T.url = window.location.href;
		T.width = $(window).width();
		T.height = $(window).height();
		
	}
	,setImgSize : function(){
		T.update();
		var  body = T.body
			,originWidth = 375
			,ratio = T.width/originWidth;

		$('.img-size').each(function(){
			var self = $(this);
			$.each(['data-height','data-width','data-left','data-right','data-bottom','data-top','data-marginTop' , 'data-paddingTop' , 'data-paddingLeft' , 'data-paddingRight', 'data-marginLeft'],function( i , str ){
				var num = self.attr(str); 
				if( num ){
					num = num*ratio/2+'px';
					if( str == 'data-height'){
						if(self.attr('data-lineHeight')){
							self.css({lineHeight:num});
						}
						self.css({height:num});
					}
					if( str == 'data-width') self.css({width:num});
					if( str == 'data-left') self.css({left:num});
					if( str == 'data-right') self.css({right:num});
					if( str == 'data-top') self.css({top:num});
					if( str == 'data-bottom') self.css({bottom:num});
					if( str == 'data-marginTop') self.css({marginTop:num});
					if( str == 'data-marginLeft') self.css({marginLeft:num});
					if( str == 'data-paddingTop') self.css({paddingTop:num});
					if( str == 'data-paddingLeft') self.css({paddingLeft:num});
					if( str == 'data-paddingRight') self.css({paddingRight:num});
				}
			});
		});
	}
	,setHtml5 : function(){
		var css3 = function( self , obj , bool ){
			if(!self) return;
			if(!bool){
				var  i , val 
					,element = '' 
					,value = '' 
					,css3Name = ['Webkit','Moz','O','Ms']
					,str = '';
					
				//val = self.currentStyle?self.currentStyle['WebkitAnimation'] : document.defaultView.getComputedStyle(self,false)['WebkitAnimation'];
				
				for( i in obj){
					value = obj[i];
					
					element = i.replace(/^\w/g,function(s){
						return s.toUpperCase();
					});
					var j = 0 , css3Style = '';
					for(  ; j<css3Name.length; j++){
						css3Style = css3Name[j]+element;
						if( css3Style in self.style){
							self.style[css3Style] = value ; 
							//setTimeout(function(){
							//	self.style['WebkitAnimation'] = val ; 
							//},1400)
						}else{
							self.style[i] = value ; 
						}
					}
				}
			}else{
				$.each(['-webkit-','-moz-','-o-','-ms-'],function(t){
					var t = this;
					for(var i in obj){
						self.style[(i.toLowerCase())] = t+obj[i];
					}
				});
			}
		};
		$.fn.css3 = function( obj , bool ){
			this.each(function(){
				css3(this,obj , bool)
			})
		}
	}	
	,getMobile : function(){//获取手机型号 和 客户端
		if (typeof AppName != 'undefined' && AppName != null) {
			T.Itougu = AppName.toUpperCase() == 'ITOUGU';//获取Appname
		}
		//T.Itougu = (T.Appname == 'IOS' || T.Appname == 'ANDROID');
		var ua = navigator.userAgent,
			IS_IPAD = ua.match(/iPad/i) != null,
			IS_IPHONE = !IS_IPAD && ((ua.match(/iPhone/i) != null) || (ua.match(/iPod/i) != null)),
			IS_IOS = IS_IPAD || IS_IPHONE,
			IS_ANDROID = !IS_IOS && ua.match(/android/i) != null,
			IS_MOBILE = IS_IOS || IS_ANDROID ;
			
		T.Iphone = IS_IOS;
		T.Android = IS_ANDROID;
		T.Mobile = IS_MOBILE
		
		function is_weixin() {
			var ua = navigator.userAgent.toLowerCase();
			if (ua.match(/micromessenger/i) == "micromessenger") {
				return true;
			} else {
				return false;
			}
		}
		function is_weixin_ios() {
			var ua = navigator.userAgent.toLowerCase();
			if (ua.match(/micromessenger/i) == "micromessenger" && T.Iphone )
			{ return true; } else { return false; }
		};
		function is_weibo() {
			var ua = navigator.userAgent.toLowerCase();
			if (ua.match(/Weibo/i) == "weibo")
			{ return true; } else { return false; }
		};
		function is_qq() {
			var ua = navigator.userAgent.toLowerCase();
			if (ua.match(/QQ\//i) == "qq/")
			{ return true; } else { return false; }
		};	
		T.weixin = is_weixin();
		T.ios_weixin = is_weixin_ios();
		T.weibo = is_weibo();
		T.qq = is_qq();
		
	}
	,urlCode : function(){//获取渠道码
		T.update();
		if (T.url.search(/\?/) > 0) {
			T.codeUrl = T.url.slice(T.url.search(/\?/) + 1);
		}
	}
	,clickEvent : function(){
		$('.itouguCode').click(function(){
			T.btnEvent.call( this );
		});
	}
	,btnEvent : function( callback , _url ){
		var url = {
			 weixin_ios : "http://a.app.qq.com/o/simple.jsp?pkgname=com.jrj.tougu"
			,ios : 'https://itunes.apple.com/cn/app/ai-tou-gu/id935173185?mt=8'
			,android : 'http://sjcms.jrj.com.cn/app_tg.php?channel=hdjrj0001&tgqdcode=6925BCMV'
			,ios_src : $(this).attr('href')
			,android_src : $(this).attr('href')
			,appCode : $(this).attr('appId')
			,obj : $(this).attr('appValue')
		}
		$.extend(url , _url);
		//console.log(T.Itougu)
		if (!T.Itougu) {
			if (T.weixin == true) {
				T.popElement();
			} else if (T.ios_weixin == true) {
				window.location.href = url.weixin_ios;
			} else if (T.qq) {
				T.popElement();
			} else if (T.Iphone && T.weibo) {
				T.popElement();
			} else if (T.Iphone) {

				var iFrame = document.createElement('iframe');
				iFrame.style.display = "none";
				iFrame.src = 'aitougu://';

				document.body.appendChild(iFrame);

				setTimeout(function () {
					if (!document.webkitHidden) {
						window.location.href = url.ios+T.codeUrl;
					}

				}, 25);

			} else if (T.Android) {
				location.href = 'aitougu://tougu/';
				setTimeout(function(){
					window.location.href = url.android+T.codeUrl;
				},20);
			}

		}else {
			if( callback && $.type(callback)== 'function'  ){
					callback.call( this );
			}else{
				if(url.appCode && url.obj ){
					jrj.jsCallNative(url.appCode, url.obj);
				}else if (T.Iphone) {
					window.open(url.ios_src);
				}else{
					window.location.href = url.android_src;
				}
			}
		}
		return false;
	}
};
export default T;