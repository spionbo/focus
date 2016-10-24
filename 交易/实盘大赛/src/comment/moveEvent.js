module.exports = class Move{
	constructor( option ){
		this.config = { 
			current : 0 
			,time : .5
			,runX : true
			,runY : false
			,auto : false
			,moveTime : 5000
			,optionHeight : false
			,marginRight : 100
			,animate3d : false
		};
		//Object.assign(this.config,option)
		for(var i in option ){
			this.config[i] = option[i];
		}
		if(this.config.option.length<2) return;
		this.init();
	}
	init(){
		this.config.option.css({marginRight:this.config.marginRight+'px'})
		this.clone();
		this.updateElement();
		this.resize();
		this.tab_click();
		this.addEvent();
		if(this.config.auto==true){
			this.autoSlide();
		}
	}
	resize(){
		var self = this;
		$(window).bind('orientationchange resize',function(){
			self.updateElement();
		});
	}
	update(){
		var option = this.config.option;
		option.first().remove();
		option.last().remove();
		this.config.option = $(option.selector);
		this.clone();
	}
	updateElement(){
		this.width = this.config.effect.parent().width();
		this.gap = this.config.marginRight;
		this.height = $(window).height();
		this.setElement();
		this.config.effect.css({transform:'translate3d('+(-this.width+this.gap)+'px,0,0)',transitionDuration:'0s'});
		this.config.effect.css({'-webkit-transform':'translate3d('+(-this.width+this.gap)+'px,0,0)','-webkit-transitionDuration':'0s'});
		setTimeout(()=>{
			this.runing();
		},60);
	}
	monitor : 0
	slide(){
		this.config.current++;
		this.config.effect.css({transitionDuration:this.config.time+'s'})
		this.config.effect.css({'-webkit-transitionDuration':this.config.time+'s'})
		this.runing();
	}
	autoSlide(){
		var self = this;
		this.monitor = setInterval(function(){
			self.slide();
		},this.config.moveTime);
	}
	setElement(){
		var width = this.width , 
			len = this.config.option.length;
		this.config.effect.width( (width+this.gap)*len );
		this.config.option.width( width );
	}
	getEvent(e, def , p){
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
	myAddListener(ele, type, fn){
		var IS_IPAD = navigator.userAgent.match(/iPad/i) != null,
		IS_IPHONE = !IS_IPAD && ((navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null)),
		IS_IOS = IS_IPAD || IS_IPHONE,
		IS_ANDROID = !IS_IOS && navigator.userAgent.match(/android/i) != null,
		IS_MOBILE = IS_IOS || IS_ANDROID;

		if(IS_MOBILE){
			var mapping = {
				mousedown	: 'touchstart',
				mouseup		: 'touchend',
				mousemove	: 'touchmove'
			};
			type = mapping[type] || type;
		}
		ele.each(function(){
			this.removeEventListener(type, fn, false);
			this.addEventListener(type, fn, false);
		});
	}
	addEvent(){
		
		var  list = this.config.effect
			,self = this;
		this.myAddListener(list,'mousedown', function( e ){
			self.downEvent(e);
		});
		this.myAddListener(list,'mousemove',function(e){
			self.moveEvent(e);
		});
		this.myAddListener(list,'mouseup',function(e){
			self.upEvent(e);
		});
	}
	clone(){
		var  list = this.config.effect
			,option = this.config.option
			,first , last ;
		first = option.first().clone();
		last = option.last().clone();
		last.insertBefore(option.first());
		first.insertAfter(option.last());
		this.config.option = $(option.selector);
	}
	tab_click(){
		var  nav = this.config.nav
			,self = this;
		nav.each(function( i ){
			$(this).click(function(){
				self.config.current = i;
				self.runing();
			});
		});
	}
	navStatus(){
		var nav = this.config.nav
		nav.removeClass('current').eq(this.config.current).addClass('current');
	}
	optionTransform( num ){
		this.config.option.each(( i , ele )=>{
			var  n = (i-num)
				,left = n*110
				,left1 = n*120

			$(ele).css({transform:'translate3d(0px,0px, '+left+'px) rotateY('+left1+'deg)'});
			$(ele).css({'-webkit-transform':'translate3d(0px,0px, '+left+'px) rotateY('+left1+'deg)'});
		});
	}
	animate3d( index , b ){
		if(this.config.animate3d==true) return;
		var self = this,
			len = this.config.option.length-1,
			option = this.config.option , 
			time = this.config.time;
		if(!b){
			option.css({transitionDuration:time+'s','-webkit-transitionDuration':time+'s'});
			self.optionTransform(index+1);
		}else{
			setTimeout(()=>{
				option.css({transitionDuration:'0s','-webkit-transitionDuration':'0s'})
			},10)

			if(index<=0){
				setTimeout(function(){
					self.optionTransform(1);
				},time*1000);
			}else if(index>=len-2){
				setTimeout(function(){
					self.optionTransform(len-1);
				},time*1000);
			}
		}
	}
	runing( ){ //执行X OR Y 
		var  effect = this.config.effect
			,option = this.config.option
			,len = option.length-1
			,time = this.config.time
			,width = this.width+this.gap
			,index = this.config.current;
		
		if( this.config.optionHeight){
			option.height(effect.parent().height())
		}
		if( this.config.runX ){
			effect.css({transform:'translate3d('+(-(index+1)*width)+'px,0,0)'})
			effect.css({'-webkit-transform':'translate3d('+(-(index+1)*width)+'px,0,0)'})
		}

		this.animate3d(index);
		index = index<0?len-2:index>len-2?0:index;
		this.config.current = index;
		this.animate3d(index , true);
		
		this.navStatus();
		if(index<=0){
			setTimeout(function(){
				effect.css({transform:'translate3d('+(-width)+'px,0,0)',transitionDuration:'0s'});
				effect.css({'-webkit-transform':'translate3d('+(-width)+'px,0,0)',transitionDuration:'0s'});
				setTimeout(function(){
					effect.css({transitionDuration:time+'s'});
					effect.css({'-webkit-transitionDuration':time+'s'});
				},50);
			},time*1000)
		}else if(index>=len-2){
			setTimeout(function(){
				effect.css({transform:'translate3d('+(-width*(len-1))+'px,0,0)',transitionDuration:'0s'});
				effect.css({'-webkit-transform':'translate3d('+(-width*(len-1))+'px,0,0)',transitionDuration:'0s'});
				setTimeout(function(){
					effect.css({transitionDuration:time+'s'});
					effect.css({'-webkit-transitionDuration':time+'s'});
				},50);
			},time*1000)
		}
	}
	downEvent( e ){
		e = this.getEvent(e,0,1);
		this.left = -this.width*(this.config.current+1);
		this.firstX = e.clientX+this.gap*(this.config.current+1);
		this.firstY = e.clientY;
		this.moveX = 0;
		this.moveY = 0;
		this._move = false;
		this.mousedown = true;
		clearInterval(this.monitor);
	}
	moveEvent( e ){
		if(!this.mousedown) return;
		var  ee = this.getEvent(e,0,1)
			,list = this.config.effect
			,xPoint = ee.clientX
			,yPoint = ee.clientY
			,x , y;
		x = Math.abs( xPoint+this.gap*(this.config.current+1) - this.firstX );
		y = Math.abs( yPoint - this.firstY );
		
		this.moveX = xPoint - this.firstX;
		this.moveY = yPoint - this.firstY;
		
		//document.title = (x+':'+y)
		if(x>y&&x>5){
			this.config.effect.css({transform:'translate3d('+(this.moveX+this.left)+'px,0,0)',transitionDuration:'0s'})
			this.config.effect.css({'-webkit-transform':'translate3d('+(this.moveX+this.left)+'px,0,0)',transitionDuration:'0s'})
			this.getEvent(e);
			this._move = true;
		}else{
			this._move = false;
		}
	}
	upEvent( e ){
		var  width = (this.width+this.gap)/4
			,self = this
			,gap = this.gap*(this.config.current+1); 
		if(this._move && this.mousedown){
			this.mousedown = false;
			this._move = false;
			if( (-this.moveX-gap) > width ){
				this.config.current++;
			}else if( (this.moveX+gap) > width ){
				this.config.current--;
			}
			this.config.effect.css({transitionDuration:this.config.time+'s'})
			this.config.effect.css({'-webkit-transitionDuration':this.config.time+'s'})
			this.runing();
			
			if(!this.config.auto) return;
			setTimeout(function(){
				self.monitor = setInterval(function(){
					self.slide();
				},self.config.moveTime);
			},self.config.time*1000+50);
		}
	}
};