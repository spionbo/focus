import $ from 'webpack-zepto';
import T from './global.js';
const D = {
	 num : 2 //抽奖次数
	,body : $('body')
	,start : function( btn ){
		D.btn = $(btn);
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
		if( D.num > 0 ){
			D.num--;
			D.notWinning();
		}else{ //不能再抽奖
			D.btn.unbind('click').addClass('unbind');
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
}
export default D;