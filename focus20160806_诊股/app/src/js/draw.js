import $ from 'webpack-zepto';
import T from './global.js';
const D = {
	 num : 1 //抽奖次数
	,body : $('body')
	,start : function( btn , status ){
		D.btn = $(btn);
		D.btn.removeClass('unbind');
		D.status = status;
		D.addPop();
		D.btn.bind('click', function(){

			if(loginStatus == 0 ){
				D.event();
			}else if(loginStatus == -1 ){
				callApp.login(-1)
			}else if( loginStatus == -2 ){
				callApp.login(-2)
			}
		});
	}
	,event : function(){
		dcsMultiTrack('DCS.dcsuri', 'ITOUGU_focus20160806_ZHENGU', 'WT.ti', 'ITOUGU_focus20160806_DRAW');
		if(D.status == 0 ){
			D.pop('本次活动问股数已达到1000，恭喜您获得一次抽奖机会！请在活动结束后进行抽奖，祝君中奖！')
		}else if( D.status == 1 ){
			$.ajax({
				url : 'http://itougu.jrj.com.cn/marketing/zhuanti/crazy_questions_h5/106/draw.jspa' , 
				type : 'json' ,
				success : function( _data ){
					var val = String(_data.retCode);

					if( val == '1' ){
						D.winning();
					}else if( val == '0'){
						D.notWinning();
					}else if( val == '-2' ){
						D.pop(_data.retMsg)
					}else{ //不能再抽奖
						D.pop(_data.retMsg);
						D.btn.unbind('click').addClass('unbind');
					}
				}
			})
		}
	}
	,addPop : function(){
		if(!D.popHtml){
			var ele = $("<div class='pop'>"
					+"<div class='pop-cnt'>"
						+"<div class='close'></div>"
						+"<div class='content'></div>"
					+"</div>"
				+"</div>");

			D.popHtml = {
				 elem : ele
				,bg : ele.find('.pop-cnt')
				,close : ele.find('.close')
				,content : ele.find('.content')
				,addElement : function( fn ){
					var ele = D.popHtml;
					if(!ele.elem.parent().length){
						D.body.append(ele.elem);
						if( fn && typeof fn=='function' ){
							ele.content.html(fn.call(ele));
						}
						setTimeout(function(){
							ele.bg.css3({transform:'rotateX(0deg) scale(1)',opacity:1})
						},50);
						
						ele.elem.click(ele.closeElement);
						ele.close.click(ele.closeElement);
						D.popHtml.bg.click(function(event) {
							event.stopPropagation();
						});
					}else{
						ele.closeElement(ele.addElement)
					}
				}
				,closeElement : function( fn ){
					var ele = D.popHtml;
					ele.bg.css3({transform:'rotateX(180deg) scale(.1) translateY(0px)',opacity:0});
					setTimeout(function(){
						ele.elem.remove();
						if( fn && $.type(fn)=='function' && fn() );
						if(ele.callback) ele.callback();
					},510)
				}
			}
		}
	}
	,winning : function(){ //中奖
		D.popHtml.addElement(function(){
			return "<div class='winning img-size' data-width='591' data-height='598'></div>"
		});
		T.setImgSize();
	}
	,notWinning : function(){ //未中奖
		D.popHtml.addElement(function(){
			return "<div class='notWinning img-size' data-width='592' data-height='513'></div>"
		});
		T.setImgSize();
	}
	,pop : function( txt ){ //提示
		var elem = D.popHtml;
		elem.close.html("<div class='v-line'></div><div class='h-line'></div></div>");
		elem.elem.addClass('pop-win')
		elem.addElement(function(){
			return txt
		});
		elem.callback = function(){
			elem.elem.removeClass('pop-win');
			elem.close.html('');
		}
	}
}
module.exports = {
	start : D.start , 
	pop : D.pop
}