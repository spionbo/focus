SERVER = $.url+'php';
(function($){
	function iframe(gwdm){
		var w = $.main.width , h = window.innerHeight-50-45 - 2;
		$.iframe = $.create('div',{ps:1,w:w,h:h})
		$.iframe.id = 'stockdiv';
		$.getScript([SERVER+'/js.php?GWDM='+gwdm],function(){/*ChangeGw(gwdm);*/})
		return $.iframe;
	}
	function tag(tag,val,cls,evt){
		tag = tag=='s'?'span':(tag=='c'?'canvas':tag);
		var c = cls?" class='"+cls+"'":'';
		return "<"+tag+c+" "+(evt||'')+">"+(typeof val=='undefined'||val==null?'':val).toString()+"</"+tag+">";
	}
	function div(name,val,evt){
		return tag('div',val,name,evt);
	}
	function tags(name,arr,tr){
		var s = tr?"<"+tr+">":'';
		s+=vals(name,arr,function(n){return n;})
		s+=tr?"</"+tr+">":'';
		return s;
	}
	function vals(name,arr,fn,evt){
		var s='';
		$.fors(arr,function(i){
			s+= name?tag(name,fn(this,i),0,evt):fn(this,i);
		})
		return s;
	}
	function ul(arr , cls){
		return div(cls,tags('li',arr,'ul'));
	}
	function input(cls,type,val,v){
		v = v?' placeholder='+v:'';
		return "<input type='"+(type||"text")+"'class='"+(cls||'text')+"'"+(val||'')+v+">"
	}
	function img(id ,src ,w , h, evt){
		id = id?'id="'+id+'"':'';
		evt = evt?(' onclick='+evt):'';
		return "<img "+evt+id+" width='"+(w||'auto')+"' height='"+(h||'auto')+"' src='"+src+"'/>";
	}	
	function tab(cls,div){
		cls = cls?"class='"+cls+"'":'';
		div = div?"<div class='"+div+"'>" : '';
		return div+"<table "+cls+" width='100%' cellspacing='0' cellpadding='0'>";
	}
	function th(arr){
		return tags('th',arr,'tr');
	}
	function fun(demo, fn, tag, num, b) { //num为按num序列点击 b为从第几个开始
	    var arr = demo.getElementsByTagName(tag);
	    num = num - 1 || 0;
		$.fors(arr, function (n) {
		    if( n != b && (n%num == 0 || !num)){
				arr[n].onclick = function () {
				    fn.call(this, n);
				};
			}
		})
	};
	/* $.getScript(['http://m.stockstar.com/taipingyang.js'],function(){ //保险产品
		$.taipingyang.elem = div('ad', tag('a',img(0, 'http://m.stockstar.com/images/news_ad.jpg', '100%', 150),0,"href="+$.taipingyang.url+"")); //本次费书棋要求更改广告形式
	}); */
	$.div = {
		//头部
		head : function(name , returns , key , i , t,s){
			//对像 ， 是否需要返回按钮 , key:返回按钮的名称 t为是否显示刷新按钮,s为搜索
			var clicked = key?'$.update.returnUp('+i+')':'$.update.home()';
			var back = tag('s',tag('c','','head_return'+i),'return','onclick='+clicked);
			var f5 = t?tag('c','','f5'+i,'onclick=$.update.refresh('+i+')'):''
				,se = !s?tag('c','','head_img'+i,'onclick=$.update.search('+i+')'):'';
			var s = div('input', f5+se)
				s+= returns ? back : ''
				s+= tag('h1',name);
			return s;
		}
		,back: function () {
			var d = $.create('div',{i:div('back',
					ul([
					 [div('radio')+"1、页面打开缓慢"]
					,[div('radio')+"2、行情报价无数据或数据错误"]
					,[div('radio')+"3、行情图出错"]
					,[div('radio')+"4、页面错乱或错位"]
					,[div('radio')+"5、我有其他问题"]
				],'choose')
				+tag('textarea','','msg',"placeholder='请控制200汉字400英文字以内'")
				)
				+div('back',div('tel','联系方式:'+input(0,'tel',0,'选填')))
				+div('back',
				div('button', '提交', 'onclick=$.update.feedback()')
				+div('text','感谢您对我们提出了宝贵的意见，这对我们很重要！我们将在最短时间内作出回应。欢迎您继续关注督促我们的工作，您的建议和意见是推动我们工作不断前进的源源动力。')
			)});
			var b=[];
			fun(d,function(n){
				b[n] = !b[n];
				if(b[n]){
					$.addClass(this.firstChild,'cur');
				}else{
					$.removeClass(this.firstChild,'cur');						
				}
				if(n==4){
					d.showtxt.call($.getClass(d,'msg'));
				}
			},'li');
			return d;
		}
		//广告
		, ad: function (cls, src, w, h, event) {
			//return $.taipingyang.elem; //在第62行加载了。
		    return div(cls, img(0, src, w || '100%', h, event)); //获取图片新闻地址
		}
		/* 搜索 */	
		,search : function(i){
			$.update.load();
			var key = $.create(0,{w:'100%',position:'fixed',bottom:0})
				,d = $.create('div',{ps:0,i:"<div id='search'>"
					//+input('btn','button',"id='srchSmt' value='搜索'")
					+div('text','代码/拼音',"id='srchIpt-'")
					+div('delete','×')
				+"</div>"
			});
			var lis = $.create('div',{ps:0,t:0,w:'100%'});
			d.list = function(arr){ 
				lis.innerHTML = div('searlist',tab()
					+vals('tr',arr,function(o){
						return tag('td',o[0])+tag('td',o[1])+tag('td',tag('s','+','select'),0,"width='50' align='center'")
				}))+'</table>';
				
				//滚动
				$.myAddListener(lis , 'mousedown' , function(event){				
					event = $.getEvent(event,1);
					d.mousedown();//page中调用
					this.down = 1;
					this.last_y = event.clientY;
					this.down_y = event.clientY;
					this.startTime = $.getMS();
				});
				$.myAddListener(lis , 'mousemove' , function(event){
					if(!this.down){return;}
					event = $.getEvent(event);
					var y = event.clientY - this.last_y;
					$.M(lis , {t:parseInt(lis.style.top)+y});
					this.last_y = event.clientY;
				});
				$.myAddListener(lis , 'mouseup' , function(){				
					var tach = this;
					if(!tach.down){return;}
					tach.down = 0;
					if(tach.releaseCapture){tach.releaseCapture()};
					var interval = $.getMS()-tach.startTime;
					var y = tach.last_y - tach.down_y;
					y = y>30||y<-30?y:0;
					if(interval < 300){
						var moveY = tach.last_y - tach.down_y;
						var height = moveY/interval*40;
						$.jump_y(lis , height);
					}else{
						var top = parseInt(lis.style.top);
						var height = lis.offsetHeight;
						var d;
						if(top > 0){
							$.jump_y(lis , top/5);
						}else if(Math.abs(top)>(d = height - $.main.parentNode.offsetHeight)){
							$.jump_y(lis , (Math.abs(top)-d)/-5);
						}
					}
				});
				//加入自选股
				$.fors(lis.getElementsByClassName('select'),function(i){
					this.parentNode.onclick = function(e){
						$.getEvent(e);
						$.getStkObj({'code': 'code_'+arr[i][0]}, function () {
							$.selectedValue = $.selected.setType($.curStk.code, 0, $.curStk.name, $.curStk.np, $.curStk.pl, $.curStk.type);
							$.update.addSelect();
						});
					}
				});
				fun(lis,function(i){
					var cnt = 10; //10为个股
					$.update.data({code:arr[i][0], type:arr[i][2]},cnt);
					
					$.demo.removeChild($.demo.div)
					delete $.demo.div;
					//关闭搜索页面
					//$.demo.div.className = 'hide';
				},'tr');
			}			
			var num = [
				['Q','W','E','R','T','Y','U','I','O','P']
				,['A','S','D','F','G','H','J','K','L']
				,[tag('s','↑','large'),'Z','X','C','V','B','N','M',tag('s','×','close')]
				,['123','space','搜索']
			];
			function k(b){
				if(b==1){
					function tabs(arr,name){
						return div(name,tab()+
						tags('tr',[
							vals('td',arr,function(o){return tag('div',o)},"width='"+100/arr.length+"%'")
						])
						+'</table>')
					}
					key.innerHTML = tag('s',
						tabs(num[0],'tab1')
						+tabs(num[1],'tab2')
						+tabs(num[2],'tab3')
						+tabs(num[3],'tab4')
					,'s-key tab')

				}else{
					var main = [
						 [tag('span',tags('div',[600,601,'000','002',300]),'num')]
						,[
							tab()+ tag('tr',tag('td',tab()+tag('tr',
										tags('div',[1,4,7],'td')
										+tags('div',[2,5,8],'td')
										+tags('div',[3,6,9],'td')
									)
									+'</table>'
								,'c')
								+tag('td',tags('div',[tag('s','×','close'),'隐藏','清空'])
								,'r',"width='25%'")
							,'main')
							+tag('tr',tag('td',tab()+tag('tr',
									tag('td',tag('div','ABC'),'l',"width='35%'")
									+tag('td',tag('div','0'),'c',"width='30'")
									+tag('td',tag('div','搜索'),'r',"width='35%'")
								,'bt')+'</table>',0,'colspan=2')
							)
							+'</table>'
						]
					];
					key.innerHTML = tab('s-key')
					+tag('tr',
						 tag('td',main[0],'l',"width='20%'")
						+tag('td',main[1],'c',"width='80%'")
					)
					+'</table>'
				}
			}
			k(0);
			d.key = key;			
			var kfun = null,lower = false;
			(function kfun(){
				var val,typ,childs
					,li = key.getElementsByTagName('div')
				$.fors(li,function(i){
					$.myAddListener(this,'mousedown',function(e){
						e = $.getEvent(e);
						$.addClass(this,'hover');
						childs = this.firstChild
						typ = childs.nodeType;
						if(typ === 1){
							switch(childs.firstChild.nodeValue){
								case '×': d.getVal(false); break;
								case '↑': 
									var arr = [];
									lower = !lower;
									$.fors(num,function(i){
										arr[i] = this;
										$.fors(this,function(j){
											if((/^\w/).test(this)){
												arr[i][j] = lower?this.toLowerCase():this.toUpperCase();
											}
										})
									});
									num = arr;
									k(1); kfun();
								break;
							}					
						}
						else{
							val = childs.nodeValue;
							switch(val.toLowerCase()){
								case '隐藏': key.h = key.clientHeight;key.style.height = '0'; break;
								case '搜索':
									if(lis.getElementsByTagName('tr')[0]){
										//$.searchResult在page.js中定义了。
										$.update.data({code: $.searchResult[0][0], type: $.searchResult[0][2]}, 10); 
										
										//关闭搜索页面
										$.demo.div.className = 'hide';
									}
									break;
								case '123': k(0); kfun(); break;
								case 'abc': k(1); kfun(); break;
								case 'space': d.getVal(' '); break;
								default : d.getVal(val); return false; //$.update.search中调用
							}
						}
					});
					$.myAddListener(this,'mouseup',function(){
						$.removeClass(this,'hover');
					});
				})
			})();
			d.appendChild(lis);
			d.appendChild(key);
			$.update.load(true);
			return d;
		}
		/* nav栏目 */
		,nav : function(arr){
			return tab()+vals('td',arr,function(o,n){
				return div('can',div('icon',tag('c','',('nav_img'+n))+o));
			})+'</table>'
			/* return tag('ul',
				vals('li',arr,function(o,n){
					return tag('c','',('nav_img'+n))+o;
				})
			) */
		}
		/* 子栏目 */
		,subnav : function(arr){
			return div('nav',tab()+tags('td',arr)+'</table>')
		}
		/* 新闻 i=0头条1解盘2研报3公告 c为栏目h为头部*/
		//个股 i资讯中的 20新闻21研报 22公告 
		,news : function(obj , i , cls , h){
			var s = div('public news',
				(cls==1?tag('h2',tag('div','重要新闻','name'),'title'):'')
				+div('content',
					i==-1?"<p class='tc'><br>"+obj[0].name+"</p>":tag('ul',
						vals('li',obj,function(o){
							return tag('s','&gt;')+div('name dot',o.name)+div('date',o.date);
						})
					)+(cls?'':div(('showmore'+' more'+i),'点击查看更多'))
				)
			);
			
			var d = $.create(0,{i:s});
			if(obj.length==1 && (obj[0].name.indexOf('暂无相关')+1)){ return d}
			fun(d, function (n) {
				var c = i>=20?11:1||1;
				$.update.data(obj[n],c,i,h);
			},'li');
			if(!cls){
				$.getClass(d,'showmore').onclick = function(){
					$.update.more(this.previousSibling,i);
				}
			}
			return d;
		}
		,addnews : function(ele,obj,i,c,h){
			var s = '' ,m = $.main.pages
				,parent = s==0?m[1].content:m[2].content;
			$.fors(obj,function(){
				s+="<li>"+tag('s','&gt;')+div('name dot',this.name)+div('date',this.date)+"</li>"
			});
			var d = $.create(0, { i: s});
			fun(d, function (n) {
			    $.update.data(obj[n],c||1,i,h);
			},'li');
			ele.appendChild(d);
			var s = $.status , h = d.clientHeight;
			$.M(d,{h:0,o:'hidden'});
			if(h>10){
				//$.move(parent , fromt , fromt-100 , 1000 , false , 't');
				$.move(d , 0 , h , 2000);
			}
			if (obj == null || obj.length < 20) {
			    var more = $.getClass(document, 'more' + i);
			    more.parentNode.removeChild(more);
			}
			$.update.load(true);
		}
	    /*数据 , 默认排序列 ， 可排序列， 栏目 , 点击事件 ,升降充样式, colorList需要变色的列标, plPos是指涨跌幅数据所在列的, t为排序栏目类型（0=涨跌排行；1=个股资金；2=连续流入）*/
		, list: function (obj, icon, iconList, colum, click, up, colorList, plPos, t) {
			function s(obj,up,c){
				return tab('tab','list')
				+ tag('tr', vals(0, obj.m, function (o, n) {
				    if (iconList && iconList[n] == 1) {
				        if (n == (c!=null?c:icon)) {
				            return tag('th', o + div('icon', up ? '&uarr;' : '&darr;'));
				        }
				        else {
				            return tag('th', o);
				        }
					}
					return tag('th',o);
				}))
				+vals('tr',obj.c,
					function(o){
						//var color , on , ic = icon;
						//if(ic==1)on = o.n1;
						//if(ic==2 || ic==-1)on = o.n2;
						//color = parseFloat(on)>0?'red':'green';
						return tag('td',div(0,o.name)+(isNaN(o.code)?'':o.code.length>6?'':div('code',o.code)),'tit1','width="100"')
							+ tag('td', o.n1, (colorList[0] ==1 ? (parseFloat(o[ 'n'+(plPos?plPos:1) ]) > 0?'red' : 'green'):''))
						    + tag('td', o.n2, (colorList[1] ==1 ? (parseFloat(o[ 'n'+(plPos?plPos:2) ]) > 0?'red' : 'green'):''))
						    + tag('td', o.n3, (colorList[2] ==1 ? (parseFloat(o[ 'n'+(plPos?plPos:3) ]) > 0?'red' : 'green'):''))
					}
				)
				+"</table></div>";
			}
			var d = $.create(0,{i:s(obj)}),b = 0;
			
			(function func(){
				fun(d,function(n){
					if(!click){
						//用户行为跟踪
						$.userBehavior('个股页');
					
						$.update.data(obj.c[n-1],colum)
					}
				},'tr',0,0);
				var na;
				fun(d, function (n) {
				    if (iconList && iconList[n]==1) {
				        if (n == 1) { na = 'n1' }
				        if (n == 2) { na = 'n2' }
				        if (n == 3) { na = 'n3' }
						b = !b;

						if(!obj.update){
							obj.c = $.sort(obj.c,na,b);
							
							d.innerHTML = s(obj,b,n);
							func();
						}else{
							//obj1用于更新obj
						    $.column.updateRanking(t, n, b, function (obj1) {
								d.innerHTML = s(obj1,b,n);
								obj = obj1;
								func();
							});
						}
					}
				},'th');
			})();
			
			return d;
		}
		/* 自选股 */
		,select : function(obj , isObj, clsObj,j){//j用于改变头部状态
			var s , arr_obj = [];
			//类型转换
			if(!isObj){
				obj = obj.split(',');
			}
			$.fors(obj,function(){
				arr_obj.push($.selected.parseObj(this));
			})
			
			//点击tr头排序
			var iconList = [0, 1, 1, 0], na, b = 0;
			
			//排序图标
			function s(b, n){
				if(n){
					var arr = ['简称', '最新价', '涨幅%' + div('icon', b ? '&uarr;' : '&darr;'), '操作'];
					if(n == 1){
						arr = ['简称', '最新价' + div('icon', b ? '&uarr;' : '&darr;'), '涨幅%', '操作'];
					}
				}else{
					var arr = ['简称', '最新价', '涨幅%', '操作'];
				}
				
				return th(arr);
			};
			
			//var href = $.isAndroid?'http://soft.jrj.com.cn/cydia/JrjNewsPhone/zwzx.apk':'https://itunes.apple.com/app/id610964346';
			var d = $.create(0,{i:tab('tab','list')
				//s(0)无第二个参数指"点击最新价 涨跌幅，可以排序，默认按照添加时间倒叙，最新添加的显示在第一。"
			+ s(0)
			+vals('tr',arr_obj,function(o){
				return tag('td',div(0,o.name)+div('code',o.code),'tit1')
					+tag('td',$.fixDecimal(o.np),o.mkType == 's' ? (o.stp == 1?'gray':(o.pl>0?'red':'green')) : (o.pl>0?'red':'green'))+tag('td',o.pl,o.mkType == 's' ? (o.stp == 1?'gray':(o.pl>0?'red':'green')) : (o.pl>0?'red':'green'))+tag('td',
						tag('s','×','close delete')
					)
			})+"</table></div>"+tag('a',img(0,'images/ad.jpg','100%','50'),0,'href="http://4g.stockstar.com" target="_blank"')});
			//})+"</table></div>"+tag('a',img(0,'images/ad.jpg','100%','50'),0,'href='+href)});
			
			//绑定删除按钮事件
			$.fors(d.getElementsByClassName('delete'),function(i){
				this.parentNode.onclick = function(e){
					$.getEvent(e);
					$.update.deteSelect(arr_obj[i].id, 'code_'+arr_obj[i].code, arr_obj[i].name, true, arr_obj[i].mkType);
				}
			})

			//点击条目进入实时行情页
			fun(d,function(n){
				if(n > 0){
					var o = arr_obj[n-1];
					
					//TODO 点击"大盘指数"类条目进入的页面有问题
					/*
					 * mkType='s' 个股
					 * mkType='i' 大盘指数
					 * mkType='IF' 股指期货
					 */
					$.update.data(o,o.mkType=='s'?10:20,j);
				}
			},'tr',0);
			
			
			(function func(){
				fun(d, function (n) {
				    if (iconList[n]==1) {
				        if (n == 1) { na = 'np' }
				        if (n == 2) { na = 'pl' }
						b = !b;
						arr_obj = $.sort(arr_obj,na,b);
						
						d.firstChild.firstChild.innerHTML = s(b, n)
						+
						vals('tr',arr_obj,function(o){
							return tag('td',o.name)
								+tag('td',$.fixDecimal(o.np),(o.pl>0?'red':'green'))+tag('td',o.pl,o.pl<0?"green":"red")+tag('td',
									tag('s','×','close delete')
								)
						});
						
						func();
						
						//绑定删除按钮事件
						fors();
					}
				},'th');
				
				//点击条目进入实时行情页
				fun(d,function(n){
					if(n > 0){
						var o = arr_obj[n-1];
						
						//TODO 点击"大盘指数"类条目进入的页面有问题
						/*
						 * mkType='s' 个股
						 * mkType='i' 大盘指数
						 * mkType='IF' 股指期货
						 */
						$.update.data(o,o.mkType=='s'?10:20,j);
					}
				},'tr',0);
			})();
		
			
			return d;
		}
		//版权
		,copyright : function(){
			//$.fullscreen();	
			$.update.load(true);
			return div('copyright',"<p>© 2012 证券之星</p><p><a class='blue' href='/p/'>彩版</a> | 触屏版</p>") ;
		}
		//行情中心 详细页面
		,detail : {
			//上证 点击进入面页
			index : function(k){		
				var gwdm = $.curStk.code;
				var pre = gwdm.substring(0,1);
				gwdm = (pre=='0'?'S':'Z') + gwdm;
				return iframe(gwdm);
			}
			//新闻详细页页
			,news : function(obj , className){
				return div('detail',
						div('box',tag('h2',obj.name)
							+div('info',
								tag('s',obj.date)
								+tag('s',obj.time)
								+tag('s',obj.source,'source')
						))
						+div('box',div('content','<p>'+obj.content))
					);		
			}
			//公司简介 公司资料
			,company : function(obj , id){
				return div('company',div('explain',tab('tab')
					+vals('tr',[
						['公司名称',obj.name]
						,['主营业务',obj.n1]
						,['最新总股本',obj.n2]
						,['最新流通A股',obj.n3]
						,['公司网址',obj.n4]
						,['所属板块',obj.n5]
						,['董事长',obj.n6]
						,['董秘',obj.n7]
						,['交易提示',obj.n8]
						,['最新预约披露',obj.n9]
						,['最新龙虎榜',obj.n10]
					],function(o){
						return tag('td',o[0],'tit','width="100"')+tag('td',o[1],0,"style='white-space:normal;word-break:break-all;'");
					}))+'</table><br>'
					+div('public income',
						tag('h2',div('name','主营业务收入'),'title')
						+tab('tab')
						+tag('tr',
							tag('th')
							+tag('th','主营收入(万元)')
							+tag('th','收入比例')
						)
						+vals('tr',obj.sr,function(o){
							return tags('td',[o[0],o[1],(o[2]==''?'':o[2]+'%')])
						})+'</table>'
					)
				);				
			}
			//公司简介 股本股东
			,company1 : function(obj , id){
				var gd = obj.gd;
				return div('company',div('tit',obj.name)
					+div('table',
						tab()+tag('tr',tag('th')+tag('th','股本数量'))
						+vals('tr',obj.content,function(o){
							return tag('td',o[0],'tl')
									+tag('td',o[1])
						})
					+"</table><br>")
					+div('public',tag('h2',div('name',gd.title),'title')
						+tab('tab')
						+tags('th',[gd.menu[0],gd.menu[1],gd.menu[2]],'tr')
						+vals('tr',gd.content,function(o){
							return  tag('td',o.name)
									+tag('td',o.n1,0,'width="90"')
									+tag('td',o.n2,0,'width="90"')
						})+"</table>"
					)
				)
			}
			//公司简介 财务分析
			,company2 : function(obj , id){
				var c = obj.content;
				return div('company',
					div('tit','主要财务指标：')
					+div('table',tab()
					+tag('tr'
						,tag('th','报告期','tit1')
						+tag('th',c[0].date||'','tit1')
						+tag('th',c[1].date||'','tit1')
						+tag('th',c[2].date||'','tit1')
					)
					+vals('tr',obj.name,function(o,i){
						i = i+1;
						return tag('td',o,'tit')
							+tags('td',[c[0]['n'+i],c[1]['n'+i],c[2]['n'+i]])
					})
					+"</table><br>")
					+div('public',
						tag('h2',div('name',obj.cw[0]),'title')
						+div('content',tag('p',obj.cw[1]))+'<br>'
					)
					+div('public',
						tag('h2',div('name',obj.gk[0]),'title')
						+div('content',tag('c','','funds-cw'))+'<br>'
					)
					+div('public',
						tag('h2',div('name',obj.yj[0]),'title')					
						+div('content',tag('p',obj.yj[1]))
					));
			}
			// 实时行情
			,f10 : function(k){	
				var gwdm = $.curStk.code;
				var pre = gwdm.substring(0,1);
				gwdm = (pre=='6'||pre=='9'?'S':'Z') + gwdm;

				return iframe(gwdm)
			}
			// 行情 资金流向页面
			,fundsDetail : function(obj){
				return div('funds',
						div('info',
							div('left',tag('c','','fundspic1'))
							+div('right',
								tag('h3',obj.n1)
								+tags('p',[obj.n2,obj.n3,obj.n4])
							)
						)
					
					+tab('table')
					+tag('tr',vals('th',obj.jb.menu,function(o){
						return o;
					}))
					+vals('tr',obj.jb.content,function(o){
						return tags('td',[o.n1,o.n2,o.n3,o.n4])
					})+"</table><div class='blank'></div>"
					+div('public table',
						tag('h2',div('name',obj.name),'title')
						+div('content',tab('tab')
							+tag('tr',
								vals('th',obj.lx.menu,function(o){
								return o;
							}))
							+vals('tr',obj.lx.content,function(o){
								return tags('td',[o.n1,o.n2,o.n3,o.n4])
							})
						+'</table>')
					));
			}
			,zg : function(ele,id){//诊股		
				var  ht = $.url+'xml/'
					,h1 = ht+'Fundamentals/'+id+'.xml'
					,h2 = ht+'Capitalflows/'+id+'.xml'
					,h3 = ht+'TechnicalAnalysis/'+id+'.xml'
				/* var  h1 = 'Fundamentals.xml'
					,h2 = 'Capitalflows.xml'
					,h3 = 'TechnicalAnalysis.xml' */
				function tel(t,v){
					t = t.replace(/。<\/p>$/,'</p>');
					t = t.replace(/<\/p>$/,'......</p>')
					t += tag('a',v+'，免费咨询'+tag('s','4008-900-858','icon'),'tel',"href='tel:4008900858'");
					return t;
				}
				function dl(tit,cnt){
					return tag('dl',tag('dt',tit)+tag('dd',cnt))
				}
				var child_node;
				function type(child){
					if(child.nodeType==1){
						child_node = child;
					}else{
						type(child.nextSibling);
					}
					return child_node;
				}
				function node(xml,n){
					return type(xml.childNodes[n]).lastChild.nodeValue;
				}
				function star(n){ //星级
					var x = '';
					for(var i=0;i<5;i++){
						if(i>=n){
							x += "<span style='color:#999'>★</span>";
						}else{
							x += '★'
						}
					}
					return "<span style='font-family:SimSun;padding-left:10px'>"+x+"</span>";
				}
				function tech(xml){
					var val='' , index=0
					$.fors(xml.childNodes,function(i){
						if(i==0&&this.nodeType!=1){
							index=1;
						}
						if(i!=index){
							if(this.nodeType==1){
								val += '<p>'+this.nodeName+'：'+this.lastChild.nodeValue+'</p>';
							}
						}
					});
					//val = val.replace(/。<\/p>$/,'</p>');
					//val = val.replace(/<\/p>$/,'......</p>')+tel1;
					return val;
				}
				var v1,v2,v3,index=0 , x1,x2,x3,xin , f1,f2,f3;
				$.fors([h1,h2,h3],function(i){
					$.loadXML(this,function(xml){
						index++;
						xml = type(xml.lastChild.childNodes[0]);
						if(i==0){
							x1 = parseInt(node(xml,0));
							f1 = node(xml,2)
							v1 = dl('基本面'+star(x1),tel(tech(xml),'更多基本面'))
						}
						if(i==1){
							x2 = parseInt(node(xml,0));
							f2 = node(xml,2)
							v2 = dl('资金面'+star(x2),tel(tech(xml),'更多资金面'))
						}
						if(i==2){
							x3 = parseInt(node(xml,0));
							f3 = node(xml,1);
							v3 = dl('技术面'+star(x3),tel(tech(xml),'更多技术面'))
						}
						if(index==3){
							xin = Math.round((x1+x2+x3)/3);
							var xv = '' , d='';
							switch(xin){
								case 1 : d = 'E'; xv = '继续持有需要勇气'; break;
								case 2 : d = 'D'; xv = '该股成绩差强人意'; break;
								case 3 : d = 'C'; xv = '该股近期表现平平'; break;
								case 4 : d = 'B'; xv = '该股处于中上游哦'; break;
								case 5 : d = 'A'; xv = '该股是个优等生哦'; break;
								default : xv ='暂无相关评分';
							}
							var  name = '综合评级：'+'<b style="color:#b04807; padding-right:5px;">'+d+'</b>'+xv
								,zh = tag('p',f1+'从技术面看：'+f2+'从资金面看：'+f3);
							zh = tel(zh,'更多操作建议');
							ele.innerHTML = div('zg'
								,tag('p','以下内容由新兰德提供','tc')
								+tag('h2',name)
								+zh
								+v1
								+v2
								+v3
							);
						}
					})
				})
			}
		}
		//弹出层
		,pop : function(tit, cnt, id, code, mkType){
			var value = cnt?tag('s',cnt):div('input','确定',"onclick=$.update.deteSelect("+id+",'"+code+"',0,1,'" + mkType + "')")+div('input gray','取消',"onclick=$.update.deteSelect(0,'"+code+"',0,0,'" + mkType + "')");																		
			var close = cnt?"":tag('s','×','close',"onclick=$.update.deteSelect(0,'"+code+"',0,0,'" + mkType + "')");			
			return div('pop',div('bg')+div('box',div('title',close+tit)+div('content',value)));
		}
	};
})($);