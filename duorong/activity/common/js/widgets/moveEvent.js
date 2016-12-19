module.exports = class Move{
	constructor( option ){ //3d效果时  父类样式需要 overflow:hidden 解决iphonebug
		this.config = { 
			current : 0 
			,time : .5
			,runX : true
			,runY : false
			,auto : false
			,moveTime : 5000
			,showHeight : true
			,marginRight : 10
			,animate3d : false
			,tabCallback : function(){}
		};
		//Object.assign(this.config,option)
		for(var i in option ){
			this.config[i] = option[i];
		}
		if(this.config.option.length<2) return;
		this.config.option.css({'float':'left'})
		this.config.effect.css({'float':'left'})
		if(this.config.animate3d==true){
			this.config.effect.css({overflow:'hidden','-webkit-perspective':'600px',perspective:'600px'});
		}
		this.init();
	}
	init(){
		this.config.option.css({marginRight:this.config.marginRight+'px'})
		this.clone();
		setTimeout(()=>{
			this.updateElement();
			this.resize();
			this.tab_click();
			this.addEvent();
			if(this.config.auto==true){
				this.autoSlide();
			}
		}, 20);
	}
	resize(){
		var self = this , 
			timer = 0;
		$(window).bind('orientationchange resize',function(){
			clearTimeout(timer);
			timer = setTimeout(function(){
				self.updateElement();
			},510)
		});
	}
	clone(){
		var  self = this
			,list = this.config.effect
			,option = this.config.option
			,first , last ;
		//option.css({'transition-duration':'0s','-webkit-transition-duration':'0s'});
		first = option.first().clone();
		last = option.last().clone();
		first.addClass('clone');
		last.addClass('clone');
		last.insertBefore(option.first());
		first.insertAfter(option.last());
		this.config.option = $(option.selector);
		if(this.config.showHeight){
			this.config.option.css({transform: 'translate3d(0px, 0px, 0px) rotateY(0deg)','-webkit-transform': 'translate3d(0px, 0px, 0px) rotateY(0deg)'}).each(function(){
				$(this).data('height',$(this).height())
			});
		}
	}
	update(){
		var effect = this.config.effect,
			option = this.config.option,
			index = this.config.current;
		option.first().remove();
		option.last().remove();
		this.config.option = $(option.selector);
		this.clone();
		if( this.config.showHeight){
			effect.height(option.eq(index+1).data('height'));
		}
		setTimeout(()=>{
			this.optionTransform(index+1);
		}, 50);
	}
	updateElement(){
		this.width = this.config.effect.parent().width();
		this.gap = this.config.marginRight;
		this.setElement();
		let width = -this.width-this.gap;
		this.config.effect.css({transform:'translate3d('+width+'px,0,0)',transitionDuration:'0s'});
		this.config.effect.css({'-webkit-transform':'translate3d('+width+'px,0,0)','-webkit-transitionDuration':'0s'});
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
		this.config.effect.width( (width+this.gap)*len+240*len );
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
				,left = -n*110
				,left1 = -n*120

			$(ele).css({transform:'translate3d(0px,0px, '+left+'px) rotateY('+left1+'deg)'});
			$(ele).css({'-webkit-transform':'translate3d(0px,0px, '+left+'px) rotateY('+left1+'deg)'});
		});
	}
	optionMove( x ){
		var self = this;
		this.config.option.each(( i , ele )=>{
			var  n = (i-(this.config.current+1))
				,moveX = x/self.width
				,left = -n*110-110*moveX
				,left1 = -n*120-120*moveX 
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
			},20) //animate3d 会执行两次，第二次到这里时要延迟一下，防止3D效果消失。
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
		
		if( this.config.showHeight){
			effect.height(option.eq(index+1).data('height'));
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
		this.mousedown = true;
		this.direction = 'none';
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
		if( this.direction=='x' || x>y&&x>5){
			this.direction = 'x';
			this.getEvent(e);
			let move_left = (this.moveX+this.left);
			this.config.effect.css({transform:'translate3d('+move_left+'px,0,0)',transitionDuration:'0s'})
			this.config.effect.css({'-webkit-transform':'translate3d('+move_left+'px,0,0)',transitionDuration:'0s'});
			this.optionMove(this.moveX);
			this.getEvent(e);
		}else{
			this.direction = 'y';
		}
	}
	upEvent( e ){
		var  width = (this.width+this.gap)/4
			,self = this
			,gap = this.gap*(this.config.current+1); 
		if(this.direction=='x' && this.mousedown){
			this.mousedown = false;
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