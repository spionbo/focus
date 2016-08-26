(function($){
	$.extend($ , {
		scroll : function(ele,ele1){		
			var main = ele1?ele:ele.parentElement;
			var childs = ele.content;
			var width  = main.width;
			var height = main.height;
			var totalPage = main.pages.length;
			$.myRemoveListener(main,'mousedown');
			$.myRemoveListener(main,'mousemove');
			$.myRemoveListener(main,'mouseup');
			$.myAddListener(ele , 'mousedown' , function(event){				
				event = $.getEvent(event,1);
				if(this.setCapture){
					this.setCapture();
				}
				this.down = 1;
				this.last_x = event.clientX;
				this.last_y = event.clientY;
				this.down_x = event.clientX;
				this.down_y = event.clientY;
				this.startTime = $.getMS();
				this.direction = '';
			});
			$.myAddListener(ele , 'mousemove' , function(event){
				if(!this.down){return;}
				event = $.getEvent(event);
				var x = event.clientX - this.last_x;
				var y = event.clientY - this.last_y;
				if(!this.direction){
					if(Math.abs(x)>Math.abs(y)){
						this.direction = 'x';
					}else{
						this.direction = 'y';
					}
				}
				if(this.direction == 'x'){
					$.M(main , {l:parseInt(main.style.left)+x});
					if(ele1){
						$.M(ele1 , {l:parseInt(ele1.style.left)+x});
					}
					this.last_x = event.clientX;
				}else{
					$.M(childs , {t:parseInt(childs.style.top)+y});
					this.last_y = event.clientY;
				}
			});
			$.myAddListener(ele , 'mouseup' , function(){				
				var tach = this;
				if(!tach.down){
					return;
				}
				tach.down = 0;
				if(tach.releaseCapture){tach.releaseCapture()};
				var interval = $.getMS()-tach.startTime;
				var page = tach.num;
				var x = tach.last_x - tach.down_x
				var y = tach.last_y - tach.down_y;
				x = x>30||x<-30?x:0;
				y = y>30||y<-30?y:0;
				//��pageֵ ����width/2,page+1 С��page-1 Ϊ page
				function move_x(){
					var left = parseInt(main.style.left);
					var pageW = width*page;
					var num = pageW - Math.abs(left);
					var pageHaf = width*0.5; //344
					if(ele1){
						if(left<0){
							page += Math.abs(left)<pageHaf?0:1;
						}else{
							page += left>pageHaf?-1:0;
						}
					}else{
						if(left<0 && Math.abs(left)<(totalPage-1)*width){
							page += num>pageHaf ? -1 : (Math.abs(num)>=pageHaf ? 1 :0);
						}
					}
					page = page >= totalPage-1 ? totalPage-1 :page<=0?0:page;
				};
				//�������ƶ����������ƶ�����ʱ��;���
				if(tach.direction == 'x'){
					var num = page;
					if(interval < 300){
						page += x>0?-1:1;
						page = page >= (totalPage-1) ? (totalPage-1) :(page<0?0:page);
					}else{
						move_x();
					}
					$.update.Nav(page);
					if(ele1){
						var n = num>page?-1:num<page?1:0;
						if($.k && page==1){
							$.jump(-1,main);
							$.jump(0,ele1);
						}else{
							
							$.jump(page,ele1);
							$.jump(n,main);
						}
						$.addDetail(page);
					}else{
						if($.k && page==1){
							$.jump(0,main);
						}else{
							$.jump(page,main);
						}
					}
					//$.update.Head(page)
					$.update.Content(page);
					$.set_cookie = page; //��¼����cookie
					$.M($.head,{l:main.width*-page})
					if($.k){ $.update.load(true); }
				}else{
					if(interval < 300){
						var moveY = tach.last_y - tach.down_y;
						var height = moveY/interval*40;
						$.jump_y(childs , height);
					}else{
						var top = parseInt(childs.style.top);
						var height = childs.offsetHeight;
						var d;
						if(top > 0){
							$.jump_y(childs , top/5);
						}else if(Math.abs(top)>(d = height - main.parentNode.offsetHeight)){
							$.jump_y(childs , (Math.abs(top)-d)/-5);
						}
					}
				}
			});
		}
		//����Ч��
		,jump : function(i , ele){
			var m = ele||$.main
				,w  = m.width
				,x = parseInt(m.style.left)
				,goal = -i*w
				,d = goal - x;
			function fun(){
				d *= 0.5;
				if(Math.abs(d)<1){
					d = 0;
					clearInterval(tim);
				}
				$.M(m, {l: goal-d});
			}
			var tim = setInterval(fun, 40);
			if(m.pages){
				$.fors(m.pages,function(){
					$.M(this.content,{t:0});
				})
			}
		}
		,jump_y : function(demo , direction){
			var height = demo.offsetHeight;
			var top = 0,num = height - $.main.parentNode.offsetHeight;
			function fun(){
				top = parseInt(demo.style.top);
				direction *= .92;
				if(direction>0){
					if(top>=0 && top>=direction){ //����ͷ���հ�		
						top -= direction;
					}else if(top<0 && top<direction){ //���ϻ���
						top += direction;
					}else{//��ֵ
						top = 0; direction = 0;
					}
				}else{
					if(Math.abs(top) >= num && top<=direction){ //�����ײ��հ�
						top -= direction;
					}else if(num - Math.abs(top)<Math.abs(direction)&&num>0){ //��ֵ
						top = -num;direction = 0;
					}else if(num<0){//�߶Ⱥ�Сʱ
						top=0;direction = 0;
					}else{ //���»���
						top += direction;
					}
				}
				if(Math.abs(direction)<0.5){clearInterval(jump_timer);}
				$.M(demo , {t:top});
			}
			var jump_timer = setInterval(fun, 40);
		}
	})
})($);