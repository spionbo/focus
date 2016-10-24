import '../css/pop.scss';
import T from './global.js';
const body = $('body');
module.exports = class Pop{
	constructor(){
		this.config = {};
		this.init();
	}
	init(){
		var ele = $("<div class='pop'>"
				+"<div class='pop-cnt'>"
					+"<div class='close'><div class='v-line'></div><div class='h-line'></div></div>"
					+"<div class='content'></div>"
				+"</div>"
			+"</div>");

		$.extend( this.config , {
			 elem : ele
			,close : ele.find('.close')
			,bg : ele.find('.pop-cnt')
			,content : ele.find('.content')
		});
	}
	add( fn ){
		var ele = this.config , 
			self = this;
		T.setHtml5()
		if(!ele.elem.parent().length){
			body.append(ele.elem);
			if( fn && typeof fn=='function' ){
				ele.content.html(fn.call(ele));
			}
			setTimeout(()=>{
				ele.bg.css3({transform:'rotateX(0deg) scale(1)',opacity:1})
			},50);
			
			ele.close.click((event)=>{
				self.close();
				event.stopPropagation();
			});
			ele.elem.click(()=>self.close());
			ele.bg.click((e)=>e.stopPropagation());
		}else{
			ele.closeElement(self.add)
		}
		return ele.content;
	}
	close( fn ){
		var ele = this.config;
		ele.bg.css3({transform:'rotateX(180deg) scale(.1) translateY(0px)',opacity:0});
		setTimeout(()=>{
			ele.elem.remove();
			if( fn && $.type(fn)=='function' && fn() );
		},510)
	}
	share( _btn , _share ){ //分享按钮
		const btn = $(_btn);
		var self = this;
		if (window.passportId != '') {
			btn.click(function(){
				T.btnEvent.call(this,()=>{
					const href = 'http://www.itougu.com/?share={"title":"'
							+encodeURI(_share.title)
							+'","content":"'+encodeURI(_share.content)
							+'","url":"'+encodeURI(window.location.href.replace(window.location.search, '') + '?userId=' + window.passportId)
							+'","imgurl":"'+encodeURI(_share.pic)+'"}';
					window.location.href = href;
				});
				return false;
			});
		}else{
			require.ensure([],()=>{
				const btn = $(_btn);
				const nativeShare = require('./nativeShare.js');
				const share_obj = new nativeShare({
					url:_share.url,
					title:_share.title,
					desc:_share.content,
					img:_share.pic,
					img_title:_share.title,
					btn : btn,
					from:_share.url,
					callback : function(){
						return self.add(()=>{
							const text = "<div class='pop-share'>"
									+'<h3>分享到：</h3>'
									+"<ul>"
										+"<li data-app='sinaWeibo'><i class='weibo'></i><p>微博</p></li>"
										+"<li data-app='weixin'><i class='weixin'></i><p>微信</p></li>"
										+"<li data-app='weixinFriend'><i class='weixin_friend'></i><p>朋友圈</p></li>"
										+"<li data-app='QQ'><i class='qq'></i><p>QQ好友</p></li>"
										+"<li data-app='QZone'><i class='qq_zone'></i><p>QQ空间</p></li>"
										+"<li data-app=''><i class='more'>●●●</i><p>更多</p></li>"
									+"</ul>"
								+"</div>"
							return text;
						});
					}
				});
			});
		}
	}
}