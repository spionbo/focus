(function(window , $ ){
	function music(src){
		var music = $('<audio class="music" style="display:none;"></audio >')
		$("body").append(music)
		music[0].loop = false;
		music[0].addEventListener('ended', function () {
			music.remove();
		}, false);
		music[0].src=src;
		music[0].play();
	}
	function money( obj ){
		this.config = {
			bgwidth : 20 ,
			src : 'money.wav'
		}
		$.extend(this.config,obj);
		this.init();
	}
	money.prototype = {
		init : function(){
			this.createElement();
			this.move();
		}
		,createElement : function(){
			var div = $("<div class='money'><i class='bg bg1'></i></div>") ,
				bg = div.find('i') ,
				num = 0;
			div.appendTo($('body'));
			function transition(){
				num++;
				num = num>5?1:num;
				bg[0].className = 'bg bg'+num;
				setTimeout(transition , 150)
			}
			transition();
			this.element = {
				elem : div ,
				bg : bg ,
				fn : transition
			}
		}
		,move : function(){
			var self = this ,
				bg = this.element.bg ,
				width = $(window).width() ,
				height = $(window).height(),
				moveHeight = height,
				bgwidth = Math.random()*bg.width() ,
				x = Math.random()*width ,
				spendY = 0 ,
				opacity = 100 ,
				timer;
			bgwidth = bgwidth>20?bgwidth:20;
			bg.css({width:bgwidth+'px',left:x+'px'});

			function go(){
				spendY+=10;
				if(spendY>moveHeight){
					opacity -= 5;
				}
				bg.css({top:spendY+'px',opacity:opacity});
				if(opacity!=0){
					timer = setTimeout(go , 60);

				}else{
					clearTimeout(timer);
					self.clear();
				}
			}
			go();
			this.play();

		}
		,play : function(){
			music(this.config.src);
		}
		,clear : function(){
			this.element.elem.remove();
			delete this.element.fn;
		}
	}
	window.draw = function( obj ){
		this.config = {
			element : null , //元素
			moneyWidth : 20 , //掉落钱币的最大宽度
			length : 0 ,  //需要复制几个元素
			time : .5 , //元素之前间隔的时间
			oneBtn : null , //玩一次按钮
			oneBtnCallback : function(){},
			tenBtn : null , //玩十次按钮
			tenBtnCallback : function(){},
			ul : 0 , // child的父类 用于移动
			child : 0,//需要更换背景的地方
			className : 'bg', //背景的名称
			showMoeny : true,
			oneBtnPrvCallback : function(fn){fn()},
			tenBtnPrvCallback : function(fn){fn()},
			callback : function(){}
		}
		$.extend(this.config,obj);
		this.length = this.config.child.length;
		this.init();
	}
	draw.prototype = {
		init : function(){
			var ele = this.config.child;
			ele.clone(true).appendTo(ele.parent());
			this.clone();
			this.addEvent();
			this.update();
		}
		,clone : function(){
			var ele = this.config.element,
				len = this.config.length-1 ,
				i = 0;
			for(;i<len;i++){
				var clone = ele.clone(true);
				clone.insertAfter(ele);
			}
		}
		,update : function(){
			var top = -this.height*this.length;
			this.height = this.config.element.height();
			this.config.ul = $(this.config.ul.selector);
			this.config.ul.each(function(){
				$(this).css({top:top+'px'})
			});
		}
		,addEvent : function(){
			var self = this,
				oneBtn = this.config.oneBtn ,
				oneBtnPrvCallback =  this.config.oneBtnPrvCallback,
				tenBtn = this.config.tenBtn,
				tenBtnPrvCallback =  this.config.tenBtnPrvCallback;

			oneBtn.removeClass('unbind').click(function(){
				oneBtnPrvCallback(function(){
					self.unbind();
					self.luckdraw();
					self.btnStatus = 'one';
					self.config.oneBtnCallback();
				})
			});

			tenBtn.removeClass('unbind').click(function(){
				tenBtnPrvCallback(function(){
					self.unbind();
					self.luckdraw();
					self.btnStatus = 'ten';
					self.config.tenBtnCallback();
				})
			});
		}
		,unbind : function(){
			this.config.oneBtn.unbind().addClass('unbind');
			this.config.tenBtn.unbind().addClass('unbind');
		}
		,go : function(obj){
			var self = obj.self ,
				height = obj.height,
				ul = obj.ul,
				spend = obj.spend,
				top = -obj.countHeight ,
				num = obj.top,
				i = obj.i,
				timer = obj.timer,
				timer1 = 0;

			function slowMove( ul , index , stopIndex , callback ){
				spend *= .88
				spend = spend>1?spend:1;
				if(index!=stopIndex){
					if( Math.abs((num/height).toFixed(1)) == stopIndex ){
						callback();
						ul.css({top:num+'px'});
						clearTimeout(timer1)
					}else{
						if(num>=0){
							spend = obj.spend
							num = top+spend;
						}else{
							num += spend
						}
						ul.css({top:num+'px'});
						timer1 = setTimeout(function(){
							slowMove( ul , index , stopIndex , callback )
						},20)
					}
				}else{
					callback();
				}
			}
			function moveto(){
				var list = self.drawList;
				if(list.length && list[i] && list[i].index!=void 0){
					spend *= .95;
					if(spend<=5){
						spend = 5;
					}
				}
				if(num>=0){
					num = top+spend;
				}else{
					num += spend;
				}
				ul.css({top:num+'px'});

				var index = Math.abs(num/height);
				if(list.length && list[i] && list[i].index!=void 0 && spend==5 && self.drawList[i] && Math.floor(index)==self.drawList[i].index){
					//debugger;
					clearInterval(timer);
					slowMove(ul , index , self.drawList[i].index , list[i].callback);
				}
			}
			timer = setInterval(moveto, 10);
		}
		,transition : function( index , callback ){
			var self = this,
				config = this.config,
				height = this.height,
				ul = config.ul,
				len = this.length,
				spend = spend || 20,
				top = -height*len ,
				num = top;

			ul.each(function( i ){
				var ele = $(this);
				setTimeout(function(){
					self.go({
						self : self,
						height : height ,
						i : i ,
						countHeight : height*len ,
						ul : ele ,
						len : len ,
						spend : spend ,
						top : top ,
						num : top ,
						length : len,
						timer : self.luckdrawTimer[i]
					});
				},i*self.config.time*1000);
			})

		}
		,luckdrawTimer : []
		,drawList : [] //奖品
		,luckdraw : function(){
			this.transition();
		}
		,clear : function(){
			this.drawList = [];
			this.update();
		}
		,getDraw : function( num , b ){ //开始抽奖
			var self = this,
				oneBtn = this.config.oneBtn ,
				tenBtn = this.config.tenBtn;

			self.unbind();
			// 0 双蛋  1 福袋 2礼盒 3钱袋 4圣诞树 5元旦 6招财猫
			var money = num ,  //1-3个双蛋  2-3个圣诞 3-3元旦 4-钱袋 5-招财猫 6-福袋 7礼盒 8不同图案
				arr = [
					{index:1}, //第一个中奖答案
					{index:5}, //第二个中奖答案
					{index:3}  //第三个中奖答案
				] ,
				len = arr.length;
			if(money==8){ //随机生成不一样的数组  //3不同图案
				var array=new Array();
				// 循环N次生成随机数
				for(var i = 0 ; i<len ; i++){
				    // 只生成10个随机数
				    if(array.length<len){
				          generateRandom(7);
				    }else{
				      break;
				   }
				}
				// 循环遍历随机数数组
				for(var j=0;j<len;j++){
					arr[j].index = array[j];
				}
				// 生成随机数的方法
				function generateRandom(count){
					var rand = parseInt(Math.random()*count);
					for(var i = 0 ; i < array.length; i++){
						if(array[i] == rand){
							return generateRandom(count);
						}
					}
					array.push(rand);
				}
			}else if(money==1){//3个双蛋
				$.each(arr,function( i , obj ){
					obj.index = 0;
				})
			}else if(money==2){//3个圣诞
				$.each(arr,function( i , obj ){
					obj.index = 4;
				})
			}else if(money==3){//3元旦
				$.each(arr,function( i , obj ){
					obj.index = 5;
				})
			}else if(money==4){//3钱袋
				$.each(arr,function( i , obj ){
					obj.index = 3;
				})
			}else if(money==5){//3招财猫
				$.each(arr,function( i , obj ){
					obj.index = 6;
				})
			}else if(money==6){//3福袋
				$.each(arr,function( i , obj ){
					obj.index = 3;
				})
			}else if(money==7){//3礼盒
				$.each(arr,function( i , obj ){
					obj.index = 2;
				})
			}
			self.drawList.push(arr[0]);
			$.each(arr,function( i , obj ){
				obj.callback = function(){ //每执行完一个抽奖，则另一个开始执行 , 一个一个的暂停
					var newObj = arr[i+1] ? arr[i+1] : null;
					if(newObj){
						self.drawList.push(newObj);
					}else{//公布答案 抽奖还原
						setTimeout(function(){
							self.clear();
							self.config.callback(); //中奖
						},500)
						self.addEvent();
						self.setMoney(b?1:money);
					}
				}
			})
		}
		,moenyMove : []
		,setMoney : function(money){
			var arr = [
				100 ,//1-3个双蛋
				80 , //2-3个圣诞
				80 , //3-3元旦
				60 , // 4-钱袋
				50 , //5-招财猫
				40 , //6福袋
				30 , // 7礼盒
				20   //8不同图案
			];

			this.addMoeny( arr[money-1] );

		}
		,addMoeny : function( num ){
			if(this.config.showMoeny==true){
				var self = this , i = 0 , time = 200;
				for(;i<num;i++){
					(function(i){
						setTimeout(function(){
							self.moenyMove.push(new money({bgwidth:self.config.moneyWidth,src:self.config.musciSrc}));
							// console.log(self.config)
						},i*time)
					})(i);
				}
			}
		}
	}
})(window , $);