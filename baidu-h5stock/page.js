(function($){
	function add(ele,a,b){
		ele = ele||$.create();
		ele.innerHTML ='';
		$.fors(a, function (i) {
		    if (a[i]) {
		        if (typeof a[i] == 'string') {
		            a[i] = $.create(0, {i: a[i] });
		        }
		        ele.appendChild(a[i]);
		    }
		});
		if(!b){$.A({i:$.div.copyright()},ele)};
		return ele;
	}
	//新闻详细页
	function newdate(id,n,d,t,s,c){
		return {
			'id': id,
			'name': n,
			'date': d,
			'time': t,
			'source': s,
			'content': c
		}
	}//新闻列表页
	function newstit(_d,d,name){
	    $.fors(d, function () {
			_d.push({
				'id': this[name[0]],
				'date': this[name[1]].substring(0, this[name[1]].indexOf('T')) + ' ' + this[name[1]].substring(this[name[1]].indexOf('T') + 1, this[name[1]].indexOf('T') + 6),
				'name': this[name[2]],
				'source':name[3]?this[name[3]]:''
			});
		});
		return _d;
	}
	//格示化日期
	function newsformat(d){
		var _d = [];
		$.fors(d,function(){
		    _d.push({
		        'id': this.date.substring(0, this.date.length - 3).replace(' ', '').replace(/-/g, '/').replace(/:/g, '') + this.id,
		        'date': this.date.substring(0, this.date.length - 3),
		        'name': this.name
		    });
		});
		return _d;
	}
	//list列表页
	function listdate(d,a,n1,n2,n3,z){
		var _d = [];
		$.fors(d,function(i){
			var t = this;
			_d.push({
			    'id': i,
			    'code': t[a[0]] || a[0],
			    'name': t[a[1]] || a[1],
			    'n1': n(t[a[2]],1),
			    'n2': n(t[a[3]],2),
			    'n3': n(t[a[4]],3)
			});
			function n(a,i){
				if(isNaN(a)){return a};
				if(i==z){
					if(i==n3){
						return (a / 10000).toFixed(2)+'万';
					}
					return Math.round((a / 10000).toFixed(2))+'万';
				}
				if(i==1 && n1==1 || i==2 &&n2==2 || i==3&&n3==3){			
					return a.toFixed(2);
				}else{
					return a;
				}
			}
		});
		return _d;
	}
	//list详细页
	
	function NavIcon(j,c){//更新栏目图标颜色
		function cp(v,i,color){ //更新栏目图标颜色
			pic[v]($.getClass($.nav,'nav_img'+i),c);
		}
		if($.status==0){
			switch(j){
				case 0:cp('home',j,c);   break;
				case 1:cp('news',j,c);   break;
				case 2:cp('funds',j,c);  break;
				case 3:cp('select',j,c); break;
				case 4:cp('fan',j,c);    break;
			}
			$.userBehavior('指数首页');
		}else if($.status==10){
			switch(j){
				case 0:cp('price',j,c);  break;
				case 1:cp('kline',j,c);  break;
				case 2:cp('news',j,c);   break;
				case 3:cp('funds',j,c);  break;
				case 4:cp('f10',j,c);    break;
				case 5:cp('select',j,c); break;
			}
			$.userBehavior('个股页');
		}else{
			switch(j){
				case 0:cp('price',j,c);  break;
				case 1:cp('kline',j,c);  break;
				case 2:cp('news',j,c);   break;
				case 3:cp('funds',j,c);  break;
				case 4:cp('select',j,c); break;
				case 5:cp('fan',j,c); break;
			}
			$.userBehavior('个股页');
		}
	}
	
	//不重复刷新
	function nofresh(ele,fn){
		if(ele.fistChild){
			$.update.load(true);
		}else{
			fn();
		}
	}
	$.pop_ad = function( elem ){
		if(!$.tip){
			var mw = $.main.width
				,b = $.main.height-90
				,w = 160;
			$.tip = $.create('div',{ps:1,t:b,l:(mw-w)/2,w:w,h:50,display:'block'});
			//$.tip = $.create('a',{ps:1,t:b,l:(mw-w)/2,w:w,h:50,display:'block'});
			//$.tip.href='tel:010-58309196';
			//$.tip.innerHTML = "<img src='images/tel1.png'><div class='txt'> 牛股都是基因遗传<br>点击获取牛种子</div>"; 
			//$.tip.innerHTML = "<div class='txt' style='padding-left:10px;'><a href='http://4g.stockstar.com' target='_blank'>明日买什么股票会涨？</a></div>"; 
			
			var btn = $.create('div',{display:'block',w:80,h:24,lh:24,bg:'red',margin:'0 auto',textAlign:'center',borderRadius:'3px',i:'立即进入',color:'white'})
			$.tip.innerHTML += "<a href='http://4g.stockstar.com' target='_blank'><div class='txt' style='padding-left:10px;'>当前买什么股会暴涨？</div></a>"; 
			$.tip.firstChild.appendChild(btn)
			$.tip.firstChild.onmouseover = function(){ this.style.textDecoration = 'none'}
			$.tip.className='tips';	
			var close = $.A({i:'×'},$.tip)
			close.className='closes'
			close.onclick = function( e ){
				$.getEvent( e )
				elem.removeChild($.tip);
			}
			//$.tip.onclick = $.ad_weixin
		}
		/* setTimeout(function(){
			if($.tip.parentNode == elem ) elem.removeChild($.tip)
		},20000) */
		/* pic.desk_jian($.A({ps:1,l:250/2-15,w:20,h:10,bottom:'-10px'},$.tips,'canvas'),20,10); */
		elem.appendChild($.tip);
	}
	//$.ad_weixin = function(){ //微信广告
	//	if(!$.weixin){
	//		$.weixin = $.create('div');
	//		var  div = $.create('div')
	//			,top = $.create('div')
	//			,close = $.create('div')
	//		
	//		$.weixin.className ='weixin'
	//		div.className = 'cnt'
	//		top.className = 'top'
	//		close.className = 'close'
	//			
	//		div.appendChild(top)
	//		$.weixin.appendChild(div)
	//		$.weixin.appendChild(close);
	//		close.onclick = function(){
	//			document.body.removeChild($.weixin)
	//		}
	//	}
	//	if(!$.weixin.parentNode){
	//		document.body.appendChild($.weixin)
	//	}
	//}
	
	
	//栏目
	$.extend($ , {
		//初始化
		init : function(ele){			
			//加载第一页
			$.demo = $.getID(ele);       //最外层div
			$.w = $.demo.clientWidth;
			$.h = $.demo.clientHeight;
			
			$.status = 0;    //状态 0: 行情中心为首页 1实时行情为首页
			/* localStorage['selected'] = null;
			delete localStorage['selected']; */
			$.selected  = new select(); //自选股选择的内容
			//$.selectedValue;     //自选股临时存文件
			$.update.r_cookie({}); // 记录tab切换状态
			data = {};
			
		}
		//头部
		,top : function(ele){
			var e = $.getID(ele);
			$.head = $.A({ps:1,w:'100%',l:0,t:0},e);
			$.head.width = $.w;
		}
		//内容
		,center : function(ele){
			$.center = $.getID(ele);
			//$.M($.center,{h:$.h - 45-50});
			$.main = $.A({ps:1,w:'100%',t:0,l:0},$.center);
			var m =$.main;
			m.width = $.w;
			m.height = $.center.clientHeight;
			
			$.d = $.A({ps:1,w:'100%',h:9999,t:0,l:-$.w,zIndex:999,bg:'black'},$.center);
			$.d.content = $.A({ps:1,w:'100%',t:0,l:0},$.d);
			$.d.width = m.width;
			$.d.pages=[0,1,3,4,5,6]
			$.addDetail(0);
			
			
			//$main.pages所有栏目的 pages为一个数组>共有几页切换
			//$main.pages.content 所有栏目的子类>用于显示添加内容 
			//$main.pages.num 当前所在页数
		}
		,addDetail : function(n){
			$.d.num = n;
			$.scroll($.d,$.main);
		}
		//栏目
		,bottom : function(ele){
			$.nav = $.getID(ele);
			if($.isIphone && !$.browser.safari){
				$.M($.nav,{marginBottom:'45px'})
			}
		}
		,addChild : function(e){
			var ele = $.main || e,
				w = ele.width,
				h = ele.height;
			var page = [];
			ele.innerHTML = '';
			$.fors(ele.pages,function(i){
				page[i] = $.A({l:i*w,ps:1,w:'100%',t:0,h:h},ele);
				page[i].content = $.A({ps:1,w:'100%',t:0,l:0},page[i]);
				page[i].num = i;
				$.scroll(page[i]);
			})
			ele.pages = page;
		}
		//添加元素 更新数据
		,addValue : function(b){
			return;
			var  p = $.main.pages;
			if(!b){
				$.fors(p,function(i){
					$.update.Content(i)
				});
				b=0;
			}else{
				$.update.Content(b);
			}
		}
		//每操作一次就更新栏目、内容
		,update : {
			//判断栏目状态
			Nav : function(index){				
				$.fors($.nav.pages,function(n){
					var nav = this.firstChild;
					if(index!=n){
						if(nav.lastChild.nodeName =="CANVAS"){
							nav.removeChild(nav.lastChild)
						}
					}else{
						if(nav.lastChild.nodeName !="CANVAS"){
							var  w = nav.clientWidth-10
								,h = nav.clientHeight;
							var c = $.create('canvas',{ps:1,t:0,l:5,display:'block',zIndex:1});
							pic.current(c,w,h);
							nav.appendChild(c);
						}
						$.fors($.nav.pages,function(n){NavIcon(n,'#bababa');}) //更新栏目图标颜色
						NavIcon(index,'white') //更新栏目图标颜色
					}
				})	
			}
			//更换栏目，是否显示分时
			,navValue : function(b){
				var nav =[
					 [["首页"],["资讯"],["资金"],["自选"],["反馈"]]
					,[["分时"],["K线"],['资讯'],["资金"],["F10"],["自选"]]
					,[["分时"],["K线"],['资讯'],["资金"],["自选"],["反馈"]]
				];
				$.nav.innerHTML = $.div.nav(nav[b]);
				$.nav.pages = $.nav.getElementsByTagName('td');
				$.fors($.nav.pages,function(i){
					this.width = 100/$.nav.pages.length+'%'
					$.myAddListener(this,'mousedown',function (e) {
						$.getEvent(e);
					    $.curTab = 0;
						$.jump(i,$.head)
						$.update.Nav(i)//更新当状状态+canvas
						$.addDetail(i); //更新内容页状态
						$.set_cookie = i;
						if(parseInt($.d.style.left)==0){
							$.update.returnUp();
							//$.jump(1,$.d);
						}
						if ((i == 0 || i == 1) && $.nav.pages.length == 6) {
							$.update.Content(0);
							$.jump(0);
							$.jump(1,$.d);
							$.update.SMSG(i?'K':'T');
							if(i==0&&$.btn_zg){
								$.M($.btn_zg,{display:''})
							}
							if(i==1&&$.btn_zg){
								$.M($.btn_zg,{display:'none'})
							}
							//用户行为跟踪							
							return;
                        }
						$.update.Content(i);
						$.jump(i);
					})
				})
				$.fors($.nav.pages,function(n){NavIcon(n,'#bababa');}) //更新栏目图标
				$.main.pages = $.head.pages = nav[b];
				$.update.Head(0,0);
				$.addChild();
			}       
			//更新头部 仅用于栏目切换，其他请用$.column.head
			,Head : function(b,t,txt){ //txt用于百度进入传值	
				if(!t){
					var h = $.head , p = [] , s = $.status;
					h.innerHTML = '';
					$.fors(h.pages,function(i){
						p[i] = $.A({l:i*$.w,ps:1,w:'100%',t:0},h);
					})
					h.pages = p;
					ad(h.pages)
				}
				$.jump(b,$.head);
				function ad(e){
					var name='',n=s?$.curStk.name:'',code=s?$.curStk.code:'',f5=0;
					$.fors(e,function(i){
						if(!s){
							switch(i){
								case 0 : name = '证券之星'; f5=1; break;
								case 1 : name = '新闻中心'; f5=0; break;
								case 2 : name = '资金流向'; f5=0; break;
								case 3 : name = '自选股'; f5=1;   break;
								case 4 : name = '意见反馈'; f5=0; break;
							}
							$.column.head(name,0,0,i,f5);
						}else if(s==10){						
							switch(i){
								case 0 : name = '<div>'+n+'-分时'+'</div><p>'+code+'</p>'; f5=0; break;
								case 1 : name = '<div>'+n+'-K线'+'</div><p>'+code+'</p>';  f5=0; break;
								case 2 : name = n+'-资讯'; f5=0; break;
								case 3 : name = n+'-资金'; f5=0; break;
								case 4 : name = n+'-F10';  f5=0; break;
								case 5 : name = '自选';    f5=1; break;
							}
							$.column.head(name,1,0,i,f5);
							if($.return_cookie.index==0){ //从首页涨跌排行进，则返回首页
								txt = '证券之星';
							}
							if($.return_cookie.index==3){
								txt = '返回自选';
							}
							pic.back(h,i==0?txt||'返回':'返回',i);					
						}else{
							switch(i){
								case 0 : name = '<div>'+n+'-分时'+'</div><p>'+code+'</p>'; f5=0; break;
								case 1 : name = '<div>'+n+'-K线'+'</div><p>'+code+'</p>';  f5=0; break;
								case 2 : name = '资讯'; f5=0; break;
								case 3 : name = '资金'; f5=0; break;
								case 4 : name = '自选'; f5=1; break;
								case 5 : name = '反馈'; f5=0; break;
							}							
							$.column.head(name,1,0,i,f5);
							if($.return_cookie.index==3){
								txt = '返回自选';
							}
							pic.back(h,i==0?txt||'证券之星':'返回',i);
						}
					})
				}
			}
			,Content : function(i , b){
				var  e = $.main.pages[i].content
					,c = $.column , s = $.status;
				$.update.r_cookie({done:false});//初始化返回逻辑;	
				$.return_cookie.navindex(i);//返回逻辑
				if($.pop){ //删除自选弹出框
					$.demo.removeChild($.pop);
					delete $.pop;
				}
				$.update.load(); //加载开始
				if(!s){
					if(!b) $.his(i,0);
					switch(i){
						case 0 : c.home(e);     break;
						case 1 : c.news(e);     break;				
						case 2 : c.funds(e);    break;			
						case 3 : c.select(e,i); break;
						case 4 : c.back(e);     break;				
					}
				}else if(s==10){
					if(!b) $.his(i,10);
					switch(i){
						case 0 : c.price(e);           break;
						case 1 : 
							$.update.Head(1);
							$.update.SMSG('K');
							if($.btn_zg){
								$.M($.btn_zg,{display:'none'})
							}   
							break;
						case 2 : c.fund_news(e);       break;
						case 3 : c.funding(e);         break;
						case 4 : c.f10(e);             break;
						case 5 : c.select(e);          break;
					}
					$.pop_ad($.main.pages[0].content); //广告 《炒白银入门手册》波专线 免费领
				}else{
					if(!b) $.his(i,20);
					switch(i){
						case 0 : c.market();     break;
						case 2 : c.news(e);      break;
						case 3 : c.funds(e);     break;
						case 4 : c.select(e);    break;
						case 5 : c.back(e);      break;
					}
					$.pop_ad($.main.pages[0].content); //广告 《炒白银入门手册》波专线 免费领
				}
			}
			//更新栏目当前状态
			,Current : function(eleArr , index , cls){
				$.fors(eleArr,function(i){
					if(i != index){						
						$.removeClass(this , cls);
					}else{
						$.addClass(this , cls);
					}
				})
			}
			//更新 用于返回行情中心首页
			,home : function(){
				var rc = $.return_cookie;
				if($.set_cookie==0){ //回栏目页 如资金的涨跌排行进入，则回涨跌排行
					var i = rc.index;
					$.k = false;  //取消分时K线为真
					$.status = 0;	//为10为个股 20 大盘
					$.update.navValue(0);//更新栏目名称 1个股，2大盘
					setTimeout(function(){$.update.Nav(i);},400)//栏目当前状态为第0个
					$.update.Head(i); //更新头部
					$.jump(i);
					$.jump(1,$.d);
					rc.fn=function(){
						var m = $.main.pages[i].content;
						if($.getClass(m,'nav')){
							var tit = $.getClass(m,'nav').getElementsByTagName('td')
							,cnt = m.firstChild.childNodes;
							$.update.Current(tit,rc.tab,'current')
							$.update.Current(cnt,rc.tab+1,'dis')
						}
					};
					$.update.Content(i); //用于百度进入 和调用 rc.fn
				}else{ //回分时
					$.jump(1,$.d);
					$.jump(0);
					$.update.Head(0);
					$.update.Content(0); //百度进入时，需要加载
					$.update.Nav(0);
					$.set_cookie=0;
					$.update.SMSG('T');
				}
			}
			//显示搜索
			,search : function(i){
				var cur = $.demo;
				var h = $.main.height*2;//根据样式修改高度 search
				var self = this;	
				$.his(i,$.num);
				/*
				 * 搜索联想
				 */
				$.getScript(['s_v3.js'], function (){
					if(cur.div){
						cur.removeChild(cur.div);
					}
					var _dList = create();
					
					//初始化搜索框
					//var params = "&item=20&type=cn_sa,i&typepri=s&areapri=cn";
					var params = "item=20&type=cn_i,s";
					self.sb1 = new JRJ.ui.SearchBox(params, 'gb2312', 
						  //处理正确结果
						  function (arr){
								if(arr){
									  var inf = arr.CodeData,
										  result = [];
									  if(inf.length != 0){
										  for(var i=0; i<inf.length; i++){
											result.push( [inf[i]['code'], inf[i]['name'], inf[i]['type'].split('.')[0]] );
										  }
									  }else{
										result = [];
									  }
									  _dList.list(result);
									  
									  //为了使虚拟键盘上的"搜索"按钮能够获取到股票的三个信息。
									  $.searchResult = result;
								}
						  }
						  //处理错误提示
						 , function (data){
								var w = $.main.width/2-150;
								var h = $.main.height/2-50;
								
								var div = $.create(0,{i:$.div.pop('提示','请输入正确6位数股票代码或拼音'),
									ps:1,l:w,t:h
								});
								
								$.demo.appendChild(div);
								
								div.remove = function(){
									$.demo.removeChild(div);
								}
								$.move(div,h,0,800,2);
								
								_dList.list([]);
						 }
					);
				});
				function create(){
					$.column.head('搜索', 1, 1, i,0,1);
					pic.back($.head,'返回',i);
					
					cur.div = $.create(0,{ps:1,t:45,w:'100%',bg:'#333333',zIndex:999});
					
					var d = $.div.search(i);
					cur.div.appendChild(d);
					
					var text = $.getClass(d,'text');
					//$.M($.getClass(d,'searlist'),{h:h-40});
					function txt(){
						$.M(text,{color:'#999'});
						text.innerHTML = '代码/拼音';
					}
					txt();
					$.myAddListener(d.key,'mousedown',function(e){
						e = $.getEvent(e);
					})
					$.myAddListener($.getClass(d,'delete'),'mousedown',function(e){
						e = $.getEvent(e);
						txt();
					})
					/* $.myAddListener(d,'mousedown',function(e){
						//$.getEvent(e);
						if(text.innerHTML == '' || text.innerHTML == '代码/拼音'){
							txt();
						}else{
							$.M(text,{color:'#000'});
						}
						if(d.key.h<10 || !d.key.h){
							d.key.h = d.key.clientHeight;
						}
						if(d.key.clientHeight>10){
							move(d.key , d.key.h , 0 , 200,1);
						}
					}) */
					$.myAddListener(text,'mousedown',function(e){
						e = $.getEvent(e);
						var h = d.key.offsetHeight; 
						if(text.innerHTML =='代码/拼音'){
							text.innerHTML ='';
						};
						if(h<=10){
							$.move(d.key , 0 , d.key.h , 300);
						}
					})
					d.mousedown = function(){//隐藏键盘 $.div中调用
						if(text.innerHTML == '' || text.innerHTML == '代码/拼音'){
							txt();
						}else{
							$.M(text,{color:'#000'});
						}
						if(d.key.h<10 || !d.key.h){
							d.key.h = d.key.clientHeight;
						}
						if(d.key.clientHeight>10){
							$.move(d.key , d.key.h , 0 , 200,1);
						}
					}
					d.getVal = function(v){ //获取点击值 $.div中调用
						if(text.innerHTML == '代码/拼音') text.innerHTML='';
						if(v===false){//删除一个字段
							text.innerHTML = text.innerHTML.slice(0,text.innerHTML.length-1);
							if(text.innerHTML == '') txt();
						}else if(v=='清空'){
							text.innerHTML ='';
						}else{
							$.M(text,{color:'#000'});
							if(text.innerHTML.length<6){
								text.innerHTML += v;
							}
						}
						self.sb1.requestData(text.innerHTML);
					}
					cur.insertBefore(cur.div , cur.lastChild);
					$.M(cur.div,{h:0,o:'hidden'});
					m();
					return d;
				}
				function m() {
					if(parseInt(cur.div.style.height)>1){
						cur.removeChild(cur.div)
						cur.div = null;
						delete cur.div;
					}else{
						$.M(cur.div ,{h:h});				
					}
				}
				
				//用户行为跟踪
				$.userBehavior('搜索');
			}
			//更新搜索值-判断要进入的页面 b=1获取值，b=0清除值
			,addSelect : function(){
				var w = $.main.width/2-135;
				var h = $.main.height/2-50;
				
				try{
					if(localStorage['selected'].split(',').length >= 15){
						create('自选股','最多可以有15个自选股!');
					}else{
						if($.selected.add($.selectedValue)){
							create('自选股','自选成功!');
						}else{
							create('自选股','已在自选内');
						}
					}
				}catch(e){
					if($.getCookie('localStorage').split(',').length >= 15){
						create('自选股','最多可以有15个自选股!');
					}else{
						if($.selected.add($.selectedValue)){
							create('自选股','自选成功!');
						}else{
							create('自选股','已在自选内');
						}
					}
				}
				var div;
				function create(tit,cnt){
					div = $.create(0,{i:$.div.pop(tit,cnt),
							ps:1,l:w,t:h,zIndex:9999
					});
					$.demo.appendChild(div);
				}
				div.remove = function(){
					$.demo.removeChild(div);
				}
				$.move(div,h,0,800,2);
			}
			,deteSelect : function(id , code ,name, b, mkType){
//				var arr = ['{id:"1"|code:"399001"|name:"深证成指"|hp:"10479.6"|pl:"-0.08"|mkType:"i"|np:"10416.55"|lp:"10400.32"|hlp:"-8.4"|tm:"4559792.51"}', '{id:"0"|code:"199001"|name:"ABC"|hp:"1049.6"|pl:"0.08"|mkType:"i"|np:"10416.55"|lp:"10400.32"|hlp:"-8.4"|tm:"4559792.51"}'];
//				localStorage['selected'] = arr;
//				console.log(localStorage['selected']);
				var d = $.create()
					,m = $.main.pages
					,select = $.demo
					,code = code.replace(/code_/, '');
				if(code == '000001' && mkType == 'i'){
					remove(name);
				}
				else if(code == '399001' && mkType == 'i'){
					remove(name);
				}
				else{
					pop('您确定要删除"'+name+'"股票吗？', 0, code, mkType);
					if(b===1){
						select.removeChild($.pop);
						$.pop = null;
						var t = $.selected.del(id, code);
						var n = $.status == 0?3:$.status==10?5:4;
						$.column.select($.main.pages[n].content);
					}
					if(b===0){
						select.removeChild($.pop);
						$.pop = null;
					}
				}
				function remove(name){
					pop('无法删除的信息!','"'+name+'"不能被删除！');
					d.remove = function(){
						try{
							select.removeChild($.pop);
							$.pop = null;
						}catch(e){}
					}
					$.move(d,10,0,800,2);
				}
				function pop(value, b, code, mkType){
					if(!$.pop){
						$.pop = $.create();
						var w = $.main.width/2-135;
						var h = $.main.height/2-50;
					}
					$.M($.pop , {i:$.div.pop(value,b,id,code,mkType),ps:1,l:w,t:h});
					select.appendChild($.pop);
				}
			}
			//历史记录
			,returnUp : function(i){
				$.update.Head($.set_cookie);
				$.jump(1,$.d);
				if($.demo.div){
					$.demo.removeChild($.demo.div)
					delete $.demo.div;
				}
			}
			,refresh:function(i){ //刷新
				var s = $.status
					d = data;
				if(s!=10){
					switch(i){
						case 0 : d.dp = null ; break; //大盘
						case 1 : d.stkNews = null; break //新闻
						case 2 : d.ggzj = null; break; //资金
					}
				}
				$.main.pages[i].content.innerHTML = ''
				$.update.Content(i);
			}
			//用于table切换 b为真 则点击任何地方都切换
			,setTab : function(menu,content){
				var tit = $.create();
				var cnt = [];
				tit.innerHTML = $.div.subnav(menu);
				var tab = tit.getElementsByTagName('td');
				$.fors(tab, function (i) {
				    if (content[i]) {
				        cnt[i] = tit.appendChild(content[i]);
				        if ($.curTab != null) {
				            if ($.curTab == i) {
				                tab.className = 'current';
				                cnt[i].className = 'hide dis';
				            } else {
				                cnt[i].className = 'hide';
				            }
				        }
						cnt[i].className = 'hide';
						tab[0].className = 'current';
						if (cnt[0]) cnt[0].className = 'hide dis';
				        this.onclick = function () {
					        //用户行为跟踪
						  // $.userBehavior(this.firstChild.nodeValue)
							$.userBehavior(tab[i].innerHTML);
				        
				            $.update.Current(tab, i, 'current');
				            $.update.Current(cnt, i, 'dis');
							if($.return_cookie.done){
								$.update.r_cookie({tab:i});
							}
				        };
						//if ($.curTab != null && $.curTab == i) {this.onclick}
				    }
				})
				return tit;
			}
			,data : function(obj , cnt , i,h){				
				var  d = $.detail
					,e = $.d.content
					,p = 0;
				switch(cnt){
					case -1: return ;break;
					case 1:d.news(e,obj,i,h);break;	  //资讯					
					case 10:$.update.go(obj,10,0); p = 1;break;   //分时
				    case 11: d.news(e,obj,i,h); break;
					
					//大盘 需更新头部、栏目、内容
					case 20:
						$.update.go(obj,20,0);				
						p = 1;
					break;
				}
				$.jump(p,$.d);
				$.return_cookie.add(cnt); //添加记录
			}
			,GMSG: function(s){
				if(s.length>5){
					$.selectedValue = $.selected.setType($.curStk.code, 0, $.curStk.name, $.curStk.np, $.curStk.pl, $.curStk.type);
					$.update.addSelect();
					var e , i;
					if(!$.status){
						e = $.main.pages[3].content;
						i = 3;
					}else{
						e = $.main.pages[5].content;
						i = 5;
					}
					$.column.select(e,i);
				}else{
					if($.k){
						var p;
						if(s=='T'){
							p=0;
							if($.btn_zg){
								$.M($.btn_zg,{display:''})
							}
						}else if(s=='K'){
							p=1;
							if($.btn_zg){
								$.M($.btn_zg,{display:'none'})
							}
						}else if(s == 'Z'){
							p=2;
							$.update.Content(2);
							$.jump(2);
						}
						$.update.Nav(p);						
						$.jump(p,$.head);	
						$.set_cookie=p;							
					}else{
						if(s=='K'){
							$.update.Nav(1);
							$.jump(1);
							$.jump(1,$.d);
							$.update.Content(1);
							$.set_cookie=1;	
						}
					}
				}
				$.update.load(true);
			}
			,SMSG: function(s){
				if(s=='K' && $.status == 10){
					$.userBehavior('K线');
				}
				if(s=='K' && $.status==20){
					$.userBehavior('大盘K线');
				}
				//window.frames['webquote'].GMSG(s);
				GMSG(s);
				
			}
			,sendCode: function(s){ //发送股票代码  后期独立出来
				window.frames['webquote'].ChangeGw(s);
			}
			,more: function(ele,n) {
				var d = data;
			    switch(n){ //20以上为个股新闻
					case 0 :c(d.news,n);        break;
					case 1 :c(d.stkNews,n);     break;
					case 2 :c(d.resRept,n);     break;
					case 3 :c(d.anouc,n);       break;
					case 20:c(d.news10,n,1);    break;
					case 21:c(d.resRept10,n,1); break;
					case 22:c(d.anouc10,n,1);   break;
				}
				function c(d,n,b){
					if(!b){
						$.column.news(ele,d.length,n)
					}else{
						$.column.fund_news(ele,d.length,n)						
					}
				}
			}
			,load : function(b){//加载中...
				if(!b){
					var w = $.w/2-20
						,h = $.main.height/2-20;
					if(!$.load){
						$.load = $.A({ps:1,l:w,t:h,w:40,h:40,zIndex:999,bg:'url(images/loading.gif) no-repeat'},$.center)
					}else{
						$.M($.load,{l:w,t:h})
						$.center.appendChild($.load);
					}
				}else{
					if($.load.parentNode) $.center.removeChild($.load);
				}	
			}
			,go : function(obj,c,p){//c为栏目 p为第几页
				switch(c){
					case 0: chang(p,0,0,0); 
						break; 
					case 10 : 
						$.getStkObj({'code': 'code_'+obj.code},function(){
							chang(p,10,1,1);
						},(obj.type ? obj.type : 's'),true);
						break;
					case 20 :
						$.getStkObj({'code': 'code_'+obj.code},function(){
							chang(p,20,1,2);
						},(obj['code'].indexOf('IF') == -1)?'i':'IF',true);
						break;
				}
				function chang(p,cnt,k,n){
					$.set_cookie = 0; //用于新闻返回第3个$.head.pages[2]
					$.k = k; //为行情时，分时跳到K线只更新栏目状态
					$.status = cnt;	//为10为个股 20 大盘
					$.update.navValue(n);//更新栏目名称 1个股，2大盘
					setTimeout(function(){$.update.Nav(p);},400)//栏目当前状态为第0个
					$.update.Content(0)
					$.jump(p); //调转页
					$.update.Head(p); //更新头部
					//if (cnt == 20) { $.set_cookie = 0; $.column.head(); }
				}
			}
			,feedback: function () {
			    var d = $.create(),
			        content = $.status ? $.main.pages[5].content : $.main.pages[4].content,
                    flag = true,
                    info = '';
			    d.remove = function () {
			        if($.pop){
						$.demo.removeChild($.pop);	
						$.pop = null;
					}
			    }
			    $.move(d, 10, 0, 800, 2);
			    function pop(value, b, code) {
			        if (!$.pop) {
			            $.pop = $.create();
			            var w = $.main.width / 2 - 150;
			            var h = $.main.height / 2 - 10;
			        }
			        $.M($.pop, { i: $.div.pop(value, b), ps: 1, l: w, t: h });
			        $.demo.appendChild($.pop);
			    }

			    //提交反馈
			    //&& $.getClass(content, 'tel').getElementsByTagName('input')
                //&& $.trim($.getClass(content, 'tel').getElementsByTagName('input')[0].value).length > 0
			    if ($.getClass(content, 'cur')) {
                        var checkeditems = [],
                            items = content.getElementsByTagName('li'),
                            _tel = $.trim($.getClass(content, 'tel').getElementsByTagName('input')[0].value);
                        $.fors(items, function (i) {
                            if ($.getClass(items[i], 'cur')) {
                                if (i < 4) {
                                    checkeditems.push({ item: (i + 1), text: items[i].innerHTML.replace(/<.+?>/gim, '') });
                                }
                                else {
                                    if ($.getClass(content, 'msg').value.length > 0) {
                                        checkeditems.push({ item: (i + 1), text: items[i].innerHTML.replace(/<.+?>/gim, '') });
                                        info = $.getClass(content, 'msg').value;
                                    }
                                    else
                                        flag = false;
                                }
                            }
                        });
                        if (_tel.length > 0 && !(/^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$/.test(_tel))) {
                            flag = false;
                            pop('反馈', '手机号不正确');
                            return;
                        }
                }
			    else {
			        flag = false;
			    }

			    if (flag) {
			        var selected = '';
			        $.fors(checkeditems, function (i) {
			            selected += checkeditems[i].text+',';
			        });
			        var dataStr = '[{"actionid":"mstockstar_20120523","select":"' + selected.substring(0, selected.length-1) + '","information":"' + info + '","mobile":"' + _tel + '"}]';
//			        var obj = { tel: _tel, feedback: checkeditems, time: new Date() };
//			        localStorage['feedback'] = dataStr;
			        
			        var jsonpName = 'jsonp'+ new Date().getTime(),
			        	customJsonp = window[ jsonpName ] = function (data){

			        	switch(data['result']){
			        		case 1:
			        			pop('反馈', '您的反馈已成功提交！');
			        			break;
			        		case 0:
			        			pop('反馈', data['infomation'] == '' ? '抱歉，提交不成功' : data['infomation']);
			        			break;
			        	}
			        	
			        	// 强制垃圾处理
						window[ jsonpName ] = undefined;

						try {
							delete window[ jsonpName ];
						} catch(e) {}
			        };

			        $.getScript(['http://aps.jrj.com.cn/Json/join.aspx?json=' + escape(dataStr) + '&callback=' + jsonpName], customJsonp, 'UTF-8');
			    }
			    else {
			        pop('反馈', '请填写反馈内容');
			    }
            }
            ,r_cookie : function(obj){ //用于返回逻辑 index为页面当前页 tab为栏目当前页
				if(!$.return_cookie){
					$.return_cookie = {
						index:0,tab:0,navpage:0,fn:function(){},add:function(i){
							var n=0 , s = $.status , p = $.return_cookie.navpage;
							if(p==0){ //在首页点击 涨跌排行
								n = 0;
							}else if(p==3 && s == 0 || p==4 && s==20 || p==5 && s==10){
								n = 3;
							}else{
								n = 2;
							}
							$.return_cookie.index = n;
						}
						,navindex : function(i){
							$.return_cookie.navpage = i;
						}
					}
				}
				$.extend($.return_cookie,obj);
			}
		}
		//显示当前页所有的数据 栏目页
		,column : {
			//头部: 名称 ， 是否需要返回按钮，返回值
			head : function(name ,returns , key,i,f5,s){//f5为是否显示刷新 s为搜索
				add($.head.pages[i],[$.div.head(name , returns, key, i,f5,s)],1);
				if(!s) pic.search($.head,'head_img'+i);
				if(f5)pic.search($.head,'f5'+i,1);
			}
			//首页
			, home: function (ele, index) {
			    //行业板块：q=cn|bk&n=hybkHq&c=name,pl,pusc,pdsc&p=1023&o=pl,d
				var url = [
					 $.url+'data/home/qi.js?a=' + new Date().getTime()
					,$.url+'data/news/stock_news.js?a=' + new Date().getTime()
				]
				,num = 0,d1,d2,d3,d4,newd;
				function addele(){
					nofresh(ele,function(){
						add(ele,[$.update.setTab(['大盘指数','行业板块','涨跌排行'], [d1,d2,d3])])
						$.update.r_cookie({done:true})
						$.return_cookie.fn();
					})
				}
				if(data.dp){
				    d1 = add(0, [$.div.list(data.dp, -1, 0, 20,null,null, [1, 1, 0], 2), $.div.news(newsformat(data.stkNewsTemp.slice(0, 10)), 1, 1, 0)], 1);
				    d2 = $.div.list(data.hy, 1, [0, 1, 0, 0], 0, 1, null, [1, 0, 0],0);
				    d3 = $.div.list(data.zd, 2, [0, 1, 1, 1], 10, 0, null, [1, 1, 0], 2);
					addele();
                } else {
                    $.getScript(url, function (i) {
						num++;
						if(i==0){
							var _d = {m:['简称','最新','涨幅%','成交量'],c:[]}
								,ind = indexDPHq
								,c = ind.Column
								//,ifd = ifDPHq
								//,ic = ifd.Column;
							_d.c = listdate(ind.HqData,[c.code,c.name,c.np,c.pl,c.ta],1,2,0,3); //3为第3个加万
							/* if(ifd.HqData.length>0){
								_d.c.push(listdate(ifd.HqData,[ic.code,'股指期货',ic.np,ic.pl,ic.ta],1,2,3,3)[0])
							} */
							d1 = $.div.list(_d, -1, 0, 20, null, null, [1, 1, 0], 2);
							data.dp = _d;
//						}
//						if(i==1){
							var _d = {m:['行业名称','涨幅%','上涨家数','下跌家数'],c:[]}
								,hy = hybkHq
								,c = hy.Column;
							_d.c = listdate(hy.HqData,['code',c.name,c.pl,c.pusc,c.pdsc],1);//控制第1个涨幅
							d2 = $.div.list(_d, 1, [0, 1, 1, 1], 1, true, null, [1, 0, 0],0);
							data.hy = _d;
//						}
//						if(i==1){
							var _d = {m:['简称','最新价','涨幅%','成交量'],c:[]}
								,w = WAPP_MAIN_ZDPH
								,c = w.Column;
							_d.c = listdate(w.HqData,[c.code,c.name,c.np,c.pl,c.ta],1,2,3,3);//3为第3个加万
							_d.update = true;
							
							d3 = $.div.list(_d, 2, [0, 0, 1, 1], 10, 0, null, [1, 1, 0], 2, 0);
							
							// ?
							data.zd = _d;
							
							if (newd) d1.appendChild(newd);
						}
						if(i==1){ //放10条新闻，不需要更多
							var n = data.stkNewsTemp = newslist.content;
							newd = $.div.news(newsformat(n.slice(0, 10)), 1, 1, 0);
						}
						if(num==2){
							d1 = add(0,[d1,newd],1);
							addele();
						}
					},'GBK');
				}
				
				//用户行为跟踪
				$.userBehavior('首页');
			}		
			/*
			 * 涨跌排行及资金的排序( 需从接口中获得排序数据 )
			 * @param {Number} t 排序类型： 0=涨跌排行；1=个股资金；2=连续流入
			 * @param {Number} n 点击排序头th的index
			 * @param {Boolean} b 升降序标识
			 * @param {Function} func 排序请求的回调
			 */
			, updateRanking: function (t, n, b, func) {
			    var obj = {},
                    url = '', url1 = '',
                    //涨跌排行
					//a升序; d降序; pl:涨幅; ta:成交量
					zdph = $.url+'data/home/{sort}.js?a=' + new Date().getTime(),

                    //资金
                    //asc升序; desc降序; pl:涨幅; zjin:净流入
					ggzj = $.url+'data/fund/{sort}.js?a=' + new Date().getTime(),
                    //asc升序; desc降序; ZJNETIN:净流入; NETINDAYS:连续流入天数
					lxlr_canal = $.url+'data/fund/{sort}.js?a=' + new Date().getTime(),
                    //a升序; d降序; pl:涨幅;
					//lxlr_q = 'http://59.151.53.239:8080/?q=cn|s|sa&c=code,pl,name&{sort}',

                    stObj = '';

			    switch (t) {
			        case 0:
			            stObj = !b ? 'd' : 'a';
			            switch (n) {
			                case 2:
			                    url = zdph.replace(/\{sort\}/, 'qsp' + stObj);
			                    break;
			                case 3:
			                    url = zdph.replace(/\{sort\}/, 'qst' + stObj);
			                    break;
			            }
			            break;
			        case 1:
			            stObj = !b ? 'd' : 'a';
			            switch (n) {
			                case 1:
			                    url = ggzj.replace(/\{sort\}/, 'ggzj_zjin_' + stObj);
			                    break;
			                case 2:
			                    url = ggzj.replace(/\{sort\}/, 'ggzj_pl_' + stObj);
			                    break;
			            }
			            break;
			        case 2:
			            stObj = !b ? 'd' : 'a';
			            switch (n) {
			                case 1:
			                    url = lxlr_canal.replace(/\{sort\}/, 'V_BS_QUICKWIN2_ZJCONTNETIN_ZJNETIN_' + stObj);
			                    break;
			                case 2:
			                    url = lxlr_canal.replace(/\{sort\}/, 'V_BS_QUICKWIN2_ZJCONTNETIN_NETINDAYS_' + stObj);
			                    break;
			            }
			            break;
			    }

			    $.getScript([url], function () {
			        switch (t) {
			            case 0:
			                var _d = { m: ['简称', '最新价', '涨幅%', '成交量'], c: [] }
						        , w = WAPP_MAIN_ZDPH
						        , c = w.Column;
			                _d.c = listdate(w.HqData, [c.code, c.name, c.np, c.pl, c.ta], 1, 2, 3, 3);
			                _d.update = true;

			                func(_d);
			                break;
			            case 1:

			                var _d = { m: ['简称', '净流入', '涨幅%', '占成交比%'], c: listdate((data.ggzj = ZJData.HqData), [0, 1, 2, 3, 4], 0, 2, 3, 1) };
			                _d.update = true;
			                func(_d);
			                break;
			            case 2:
			                var _d = { m: ['股票名称', '净流入', '流入天数', '涨跌幅%'], c: [] };
			                //净流入加'万'
			                $.fors(V_BS_QUICKWIN2_ZJCONTNETIN.rows, function () {
			                    this.ZJNETIN = Math.round(this.ZJNETIN.toFixed(2));
			                    this.ZJNETIN += '万';
			                });
			                _d.c = listdate(V_BS_QUICKWIN2_ZJCONTNETIN.rows, ['STOCKCODE', 'STOCKNAME', 'ZJNETIN', 'NETINDAYS', 'UPDOWNRATIO'], 0, 0, 3, 1);
			                _d.update = true;
			                data.lxlr = _d;
			                func(_d);
			                break;
			        }
			    });
				
			    return obj;
			}
			//资讯
			, news: function (ele, skip, index) {
			    var p = 20, str = $.url, url = [
					 str + 'data/news/finance_news.js?a=' + new Date().getTime()
					, str + 'data/news/V_BS_RRPT_RRPTOV.js?a=' + new Date().getTime()
				    , str + 'data/news/V_BS_ANN_MLMS.js?a=' + new Date().getTime()
			    ];
				//研报数据转换
				function resRept(d,b){//id data name source
				    var _d = newstit([], d, ['FLAGRSHRPT', 'RLSDATERSHRPT', 'TIRSHRPT']);
					data.resRept = b ? data.resRept.concat(_d) : _d;
					return _d;
				}
				//公告数据转换
				function anouc(d, b) {
				    var _d = newstit([], d, ['FLAGANN', 'ANNDATE', 'EDTTI', 'ANNSOU']);
					data.anouc = b?data.anouc.concat(_d):_d;
					return _d;
				}
				
				if(skip){
					var d , i = index; //0头条1解盘2研报3公告
					function dd(d1,d2){
						d = d1.slice(skip,skip+p);
						return d2.concat(d);
					}
					if(i==0){
						data.news.content = dd(data.newsTemp,data.news);
						$.div.addnews(ele, newsformat(d), i);
					}
					if(i==1){
					    data.stkNews = dd(data.stkNewsTemp, data.stkNews);
						$.div.addnews(ele, newsformat(d), i);
                    }
					if (i == 2) {
					    data.resRept = dd(data.reportTemp, data.resRept);
					    $.div.addnews(ele,resRept(d,1), i);
					}
					if(i==3){
					    data.anouc = dd(data.anoucTemp, data.anouc);
					    $.div.addnews(ele, anouc(d,1), i);
					    return;
					}
				}
				else{					
					var d1,d2,d3,d4;
					function addele() {
						add(ele, [$.update.setTab(['头条', '解盘', '研报', '公告'], [d1, d2, d3, d4])]);						
					}
					function getimg(){
						if($.adurl && d4 && d1) addele()
					}
					var num=0;
						
					$.getScript(url,function(i){
						num ++;
						if (i == 0) {
						    //请求广告图片url
						    $.getScript(['http://rss.jrj.com.cn/webappimg.js?a='+new Date().getTime()], function () {
						        $.adurl = imglist;
						        var dat = data.newsTemp = newslist.content
								, d = data.news = dat.slice(0, p);
						        d1 = add(0, [
								$.div.ad('ad', $.adurl.img, null, null, '$.update.data({id:"' + $.adurl.id + '"},11,0,1)')
								, $.div.news(newsformat(d), 0, d.length < 20 ? -1 : 0)
                                ], 1);
						        getimg();
                            });
                        } if (i == 1) {
                            var dat = data.reportTemp = V_BS_RRPT_RRPTOV.rows
								, d = data.resRept = dat.slice(0, p);
                            var _d = resRept(data.resRept, 1);
                            d3 = $.div.news(_d, 2, _d.length < 20 ? -1 : 0);
                        } if (i == 2) {
                            var dat = data.anoucTemp = V_BS_ANN_MLMS.rows
								, d = data.anouc = dat.slice(0, p);
                            var _d = anouc(data.anouc, 1);
                            d4 = $.div.news(_d, 3, _d.length < 20 ? -1 : 0);
                        } if (num == 3) {
                            //解决百度链接进来stkNewsTemp报错
                            if (data.stkNewsTemp) {
                                var d = data.stkNews = data.stkNewsTemp.slice(0, p);
                                d2 = $.div.news(newsformat(d), 1);
                            } else {
                                $.getScript([$.url+'data/news/stock_news.js?a=' + new Date().getTime()], function () {
                                    data.stkNewsTemp = newslist.content;
                                    var d = data.stkNews = data.stkNewsTemp.slice(0, p);
                                    d2 = $.div.news(newsformat(d), 1);
                                    getimg();
                                });
                            }
                            getimg();
                        }
					},'GBK');
                }
				
				//用户行为跟踪
				$.userBehavior('资讯');
			}
			//资金
			,funds : function(ele , index){
			    var p = 20, str = $.url, url = [
					 str+'data/fund/ggzj_zjin_d.js?a=' + new Date().getTime()
					,str+ 'data/fund/hyzj.js?a=' + new Date().getTime()
					,str+ 'data/fund/V_BS_QUICKWIN2_ZJCONTNETIN.js?a=' + new Date().getTime()
				]
				,num = 0 , d1,d2,d3,fn3;
				function dd(d, t, p, plist, z, colorList, plPos,type) {//p为排行,z为调整涨幅
				    return $.div.list(d, p || 2, plist, 10, t || 0, null, colorList, plPos, type);
				}
				function addele(){
					nofresh(ele,function(){
						add(ele,[$.update.setTab(['个股资金','行业资金','连续流入'],[d1,d2,d3])]);
						$.update.r_cookie({done:true})
						$.return_cookie.fn();
					})
				}
				function a1(d){
				    var _d = { m: ['简称', '净流入', '涨幅%', '占成交比%'], c: listdate(d, [0, 1, 2, 3, 4], 0, 2,3,1) };
				    _d.update = true;
				    d1 = dd(_d, 0, 1, [0, 1, 1, 0], 3, [1, 1, 0], 0,1);
				}
				function a2(d){
				    var _d = { m: ['行业名称', '净流入', '涨幅%', '占成交比%'], c: listdate(d, [0, 1, 2, 3, 4], 0,2, 3,1) };
				    d2 = dd(_d, 1, 1, [0, 1, 1, 0], 3, [1, 1, 0], 0);
				}
				if(data.ggzj&&data.lxlr&&data.hyzj){
					a1(data.ggzj)
					a2(data.hyzj)
					data.lxlr.update = true;
					d3 = $.div.list(data.lxlr, 2, [0, 1, 1, 0], 10, 0,null, [1, 0, 0],0,2);
					addele();
				}else{
					$.getScript(url, function (i) {//ggzj个股资金 hyzj行业资金 lxlr连续流入
						num++;
						var d = data;
						if (i == 0) {
							a1((d.ggzj = ZJData.HqData))
						}
						if (i == 1) {
							a2((d.hyzj = BZJData.HqData))
						}
						if (i == 2) {
							var _d = { m: ['股票名称', '净流入', '流入天数', '涨幅%'], c: [] };
							//净流入加'万'
							$.fors(V_BS_QUICKWIN2_ZJCONTNETIN.rows, function () {
								this.ZJNETIN = Math.round(this.ZJNETIN);
								this.ZJNETIN += '万';
							});
							_d.c = listdate(V_BS_QUICKWIN2_ZJCONTNETIN.rows, ['STOCKCODE', 'STOCKNAME', 'ZJNETIN', 'NETINDAYS', 'UPDOWNRATIO'], 0, 0, 1);
							/* //填充“实时涨幅%”
							var codes = '';
							$.fors(_d.c,function(){
								codes += this.code + ',';
							});
							$.getScript(['http://59.151.53.239:8080?q=cn|s|sa&c=code,pl&i=' + codes.substring(0, codes.length - 1)], function () {
								$.fors(_d.c,function(i){
									$.fors(obj0.HqData,function(j){
										if (_d.c[i].code == this[0]) {
											//_d.c[i].n3 = (this[1] > 0 ? '+' + this[1] :this[1]) + '%';
											_d.c[i].n3 = this[1];
											return;
										}
									})
								})
							}); */
							_d.update = true;
							d3 = $.div.list(_d, 2, [0, 1, 1, 0], 10, 0, null, [1, 0, 1], 0, 2);
							fn3();
							d.lxlr = _d;
						}
						function fn3() {
							if (num == 3 && d3) {
								addele();
							}
						}; fn3();
					}, 'GBK')
				}
			    //用户行为跟踪
				$.userBehavior('资金');
			}
			//买卖点
			,trad : function(ele , index){
				if(ele.innerHTML != '') return;
				add(ele,[$.div.trad(data.trad[0],index)]);
			}
			// 自选股
			,select : function(ele,i){
//				localStorage.removeItem('selected');
//				console.log(localStorage['selected']);
				//localStorage.removeItem('selected');
				//请求自选股列表的最新价格等
				var _s = '';
				
				try{
					_s = localStorage['selected'];
				}catch(e){
					_s = $.getCookie('localStorage');
				}
				
				if($.selected.parseObj(_s.split(',')[0]).id != -1){
					$.getStkObj({'code': 'code_z'}, function () {
						//默认按涨幅%倒序(不要默认倒序了)
						try{
							var arr = localStorage['selected'].split(',')
							,sortArr = []
							,resultArr = [];
						}catch(e){
							var arr = $.getCookie('localStorage')
							,sortArr = []
							,resultArr = [];
						}
						
						/* $.fors(arr,function(){
							sortArr.push($.selected.parseObj( this ));
						})						
						//排序
						sortArr = $.sort(sortArr, 'pl', false);
						$.fors(sortArr,function(){
							resultArr.push($.selected.obj2str(this ));
						}) */
						
						try{
//							localStorage['selected'] = resultArr;
							add(ele,[$.div.select(localStorage['selected'],0,0,i)]);
						}catch(e){
							$.setCookie('localStorage', arr);
							add(ele,[$.div.select($.getCookie('localStorage').split(','),true,0,i)]);
						}
						
						$.select.div = ele;
						$.update.r_cookie({done:true}) //返回逻辑
						$.return_cookie.fn();
					}, 'z');
				}else{
					try{
						add(ele,[$.div.select(localStorage['selected'],0,0,i)]);
					}catch(e){
						add(ele,[$.div.select($.getCookie('localStorage').split(','),0,0,i)]);
					}
					$.update.r_cookie({done:true}) //返回逻辑
					$.return_cookie.fn();
				};
				//动态加载 xml广告
				/* $.loadXML('http://same.stockstar.com/s?z=stockstar&c=420&op=2',function(val){
					var a;
				}); */
				//用户行为跟踪
				$.userBehavior('自选股');
			}
			//反馈
			,back : function(ele){
				//用户行为跟踪
				$.userBehavior('反馈');
				
				if(ele.innerHTML != ''){$.update.load(true);return;}
				var d = $.div.back();
				var b = 0;
				d.showtxt = function(){
					if(b){
						$.M(this,{bd:'none',ft:0,visibility:'hidden'});
						$.move(this,100,0,200,b);
						$.M(ele,{t:0});
					}else{
						$.M(this,{bd:'1px solid #ccc',ft:12,visibility:'inherit'});
						$.move(this,0,100,200,b);
					}
					b = !b;
					this.onclick = function(){
					    $.M(ele, { t: -this.offsetTop });
					}
				}
				add(ele,[d]);
			}
			//分时 cnt 为栏目的数字10
			,price : function(){
				var e = $.main.pages[0].content;
				if(e.innerHTML == ''){
					add(e, [$.div.detail.f10('t')],1)
				};
				
				//$.update.load(1);
				var c = $.curStk.code.substring(0,1);
				//if(c!=2&&c!=9){ //显示诊股的
				//	$.d.num = 0; //从第0个开始滑动
				//	if(!$.btn_zg){
				//		//$.btn_zg = $.create(0,{i:'诊 股'});
				//		$.btn_zg = $.create(0,{i:'问 股'});
				//		$.btn_zg.className='zgbtn';
				//		/* $.btn_zg.onclick = function(e){
				//			$.getEvent(e);
				//			$.detail.zg($.curStk.code);
				//		} */
				//		$.btn_zg.onclick = function(e){
				//			$.getEvent(e);
				//			$.ad_weixin();
				//		}
				//		e.appendChild($.btn_zg);
				//	}else{
				//		$.M($.btn_zg,{display:''})
				//		e.appendChild($.btn_zg);
				//	}
				//}
				
				$.update.load(true);
				
				//用户行为跟踪
				$.userBehavior('分时');
				
			}
			//k线
			,kline : function(e){
				if(e.innerHTML == ''){
					add(e ,[$.div.detail.f10('k')]);
				}
				$.update.load(true);
				
				//用户行为跟踪
				$.userBehavior('K线');
			}
			//个股资金
			,funding : function(ele , index){
				//用户行为跟踪
				$.userBehavior('资金');
				
				if(ele.innerHTML !=''){$.update.load(true);return;}
				var str='http://hqquery.jrj.com.cn/szj.do?c=code,name,zlb,zls,zlin,b1,b2,b3,b4,s1,s2,s3,s4,j1,j2,j3,j4', code = $.curStk.code,url = [
					 'http://canal.stockstar.com/Base/V_JRJ_STK_NETRATIO_PERIOD/full=1&field=STOCKCODE,STOCKNAME,ZZJIN_5DAY,ZZJIN_10DAY,ZZJIN_20DAY,ZZJOUT_5DAY,ZZJOUT_10DAY,ZZJOUT_20DAY&filter-STOCKCODE-str=' + code
					,str+'&ids=' + code
					,str+',yzb,yzs&ids='+code
				],num=0,flow={},flag=true;//flow为资金图
				function format(d,a,b,t,useTOF){
					var _d = [];
					$.fors(a,function(i){
						_d.push({
							 'n1':a[i]
							, 'n2': (useTOF ? tof(d[b[i][0]]) : Math.round(d[b[i][0]])) + '万'
							, 'n3': (useTOF ? tof(d[b[i][1]]) : Math.round(d[b[i][1]])) + '万'
							, 'n4': t ? (useTOF ? tof(d[b[i][1]]) : Math.round(d[b[i][1]])) + '万' : Math.round(((((useTOF ? tof(d[b[i][0]]) : d[b[i][0]]) - (useTOF ? tof(d[b[i][1]]) : d[b[i][1]])) * 1000000)) / 1000000) + '万'
						})
					})
					return _d;
				} 
				var obj = {lx:{},jb:{},pic:'images/pic5.jpg'};
				function tof(a){//截成成几万，不要小数点
					var n = a/10000;
					return Math.round(n);
				}
				$.getScript(url,function(i){
				    num++;
					if(i==0){
					    obj.lx.menu = ['周期', '买入', '卖出', '净流量'];
					    if (V_JRJ_STK_NETRATIO_PERIOD.rows.length > 0) {
					        obj.lx.content = format(V_JRJ_STK_NETRATIO_PERIOD.rows[0]
							, ['5日', '10日', '20日']
							, [[
									 ['ZZJIN_5DAY']
									, ['ZZJOUT_5DAY']
							]
								, [
									 ['ZZJIN_10DAY']
									, ['ZZJOUT_10DAY']
								]
								, [
									 ['ZZJIN_20DAY']
									, ['ZZJOUT_20DAY']
								]
							]
						, false, false);
					    }
					    else {
					        flag = false;
					    }
					}
					if (i == 1) {
					    if (ZJData.HqData.length > 0) {
					        var z = ZJData
							, c = z.Column
							, h = z.HqData[0];
					        flow.zlb = h[c.zlb];
					        flow.zls = h[c.zls];
					        obj.name = h[1] + "-资金流向";
					        obj.n1 = $.dateformat(new Date(), "MM月dd日") + "资金流向";
					        //obj.n2 = "主力流入" + h[c.zlb] + "万";
					        obj.n2 = "主力流入" + tof(h[c.zlb]) + "万";
					        obj.n3 = "主力流出" + tof(h[c.zls]) + "万";
					        obj.n4 = "主力净流入" + tof(h[c.zlin]) + "万";
					        obj.jb.menu = ['级别', '买入', '卖出', '净流量'];
					        obj.jb.content = format(h
							, ['小单', '中单', '大单', '特大单']
							, [
								[
									 [c.b1]
									, [c.s1]
									, [c.j1]
								]
								, [
									 [c.b2]
									, [c.s2]
									, [c.j2]
								]
								, [
									 [c.b3]
									, [c.s3]
								    , [c.j3]
								]
								, [
									 [c.b4]
									, [c.s4]
									, [c.j4]
								]
							]
						, false, true);
                        }
					    else {
					        flag = false;
					    }
					}
					if (i == 2) {
					    if (ZJData.HqData.length > 0) {
					        var z = ZJData
							, c = z.Column
							, h = z.HqData[0];
					        flow.yzb = h[c.yzb];
					        flow.yzs = h[c.yzs];
                        }
					    else {
					        flag = false;
					    }
					}
					if (num == 3) {
					    if (flag) {
					        add(ele, [$.div.detail.fundsDetail(obj)]);
					        pic.flow(flow, ele, 'fundspic1');
					    }
					    else {
					        ele.innerText = "暂无资金流向数据";
					        ele.textContent = "暂无资金流向数据";
					        ele.style.textAlign = "center";
					        ele.style.padding = "10px";
					}
					}
				});
			}
			//f10
			,f10 : function(ele , index){
				//用户行为跟踪
				$.userBehavior('F10');
				$.M(ele,{bg:'#202020'})
				if(ele.innerHTML !=''){$.update.load(true);return;}
				var code = $.curStk.code , str = 'http://canal.stockstar.com/Base/' , url = [
				    $.url+'data/f10/' + code + '.js?a=' + new Date().getTime()
					 /* str + 'V_BS_COMPANYINFO/full=1&filter-STOCK_CODE-str=' + code
					,str+'V_JRJ_APOLLO_COM_COMCAPSUT/full=1&filter-STKCODE-str=' + code + '&limit=1&sort=CHDATE%20desc'
					, str + 'V_BS_PRECONTRACT/full=1&filter-STOCK_CODE-str=' + code
					, str + 'V_BS_HINT_ALL/full=1&filter-SEC_TYPE-int=1&filter-SEC_CODE-varchar=' + code + '&sort=HINT_DT%20desc&limit=1'
					, str + 'V_BS_EXCRA_INFO_MAIN/full=1&filter-SEC_CODE-varchar=' + code + '&sort=ENDDATE%20desc&limit=1'
					, str + 'V_JRJ_INCOME_INDUSTRY/full=1&filter-A_STOCKCODE-str=' + code + '&sort=PERIODDATE%20desc&limit=1&field=PERIODDATE'
					, str + 'V_JRJ_APOLLO_COM_COMCAPSUT/full=1&filter-STKCODE-str=' + code + '&limit=1&sort=CHDATE%20desc'
					, str + 'V_JRJ_APOLLO_COMSHHDTL/full=1&filter-STKCODE-str=' + code + '&filter-DATATYPE-int=1&filter-REFCSHHRNKTY-int=2&limit=1&sort=EDATE%20desc&field=EDATE'
					, str + 'V_JRJ_APOLLO_ANA_STK_FIN_IDX/full=1&filter-STOCKCODE-str=' + code + '&sort=ENDDATE%20desc&limit=3'
					, str + 'JRJ_STK_VAL_IDX/full=1&filter-STOCKCODE-str=' + code + '&field=SEC_SNAME,PE,PE_HY_SORT,PE_LS_SORT'
					, str + 'V_BS_GAINS/full=1&filter-SEC_CODE-srt=' + code + '&limit=1&sort=EPS_P3%20desc&field=SEC_SNAME,EPS_P3,RPT_COUNT,NP_AVG,EPS_AVG,EPS_MAX,EPS_MIN,NP'
					, str + 'V_BS_STKPBLFOIDC/full=1&filter-STKCODE-str=' + code */
				];
				var  c = data.company = {zl:{sr:[]},gb:{
					content:[]
					,gd:{
						title:'十大流通股东'
						,menu:['股东名称','持股数量(万股)','变化(万股)']
						,content:[]
					}}
					,cw : {cw:['财务水平',''],gk:['机构预测','images/pic3.jpg'],yj:['业绩变化趋势',''],content:[]						
						,name: ['每股收益','每股净资产','每股现金流','每股未分配利润','每股公积金','净资产收益率','主营业务收入','净利润']
					}
				},zl = c.zl , gb = c.gb , gd = gb.gd , cw = c.cw
				,arr = [];
				$.getScript(url, function (i) {
				    function format1(d, s) {
				        return d[s.split('-')[1] + '-' + s.split('-')[2]] || '';
				    }
				    function format2(d) {
				        return d.split('T')[0].split('-');
				    }
				    function format3(d) {
				        return d[0] + '年' + d[1] + '月' + d[2] + '日';
				    }
				        var d = V_BS_COMPANYINFO.rows[0];
				        //全称
				        zl.name = d.COM_NAME;
				        //主营业务
				        zl.n1 = d.COM_MAIN_OPERATION;
				        //公司网站
				        zl.n4 = d.COM_WEB;
				        //所属板块
				        zl.n5 = d.SECTION_NAME2;
				        //董事长
				        zl.n6 = d.COM_CORPORATION;
				        //董秘
				        zl.n7 = d.COM_D_SEC;

				        var d = V_JRJ_APOLLO_COM_COMCAPSUT.rows[0];
				        //最新总股本
				        zl.n2 = (d.NUMTSH / 10000) + '万股';
				        //流通A股
				        zl.n3 = (d.NUMFLASH / 10000) + '万股';
				        var v = V_BS_PRECONTRACT;
				        if (v && v.rows.length != 0) {
				            var d = v.rows[0]
								, str = d.DECLAREDATE == '' ? '' : d.DECLAREDATE.split('T')[0]
								, seasonObj = {
								    '03-31': '一季度'
									, '06-30': '半年报'
									, '09-30': '三季报'
									, '12-31': '年报'
								}
								, season = ''
								, dat = format2(d.APPO_DATE);
				            season = format1(seasonObj, str);
				            var dateResult = format3(dat);
				            var result = str.split('-')[0] + '年' + season + '报告于' + dateResult + '披露。';
				            //最新预约披露
				            zl.n9 = result;
				        } else {
				            zl.n9 = '无';
				        }
				    //交易提示
				        var v = V_BS_HINT_ALL
				        if (v && v.rows.length != 0) {
				            var d = v.rows[0], dateArr = format2(d.HINT_DT)
								, dat = format3(dateArr)
								, result = d.SEC_SNAME;
				            result += ' ' + dat + ' ' + d.ESP_HINT;
				            zl.n8 = result;
				        } else {
				            zl.info.n8 = '无';
				        }
				    //龙虎榜
				        var v = V_BS_EXCRA_INFO_MAIN;
				        if (v && v.rows.length != 0) {
				            var d = v.rows[0], dateArr = format2(d.ENDDATE)
								, dat = format3(dateArr)
								, result = '';
				            result += dat + ' ' + d.INFO_CLS_NAME;
				            zl.n10 = result;
				        } else {
				            zl.n10 = '无';
				        }
				    //主营业务收入
//				        var v = V_JRJ_INCOME_INDUSTRY;
//				        if (v.rows.length != 0) {
//				            var _date = v.rows[0]['PERIODDATE'].split('T')[0];
//				            $.getScript(['http://plus.jrj.com.cn/Base/V_JRJ_INCOME_INDUSTRY/full=1&filter-A_STOCKCODE-str=' + code + '&filter-PERIODDATE-dt=' + _date + '&sort=ITEM_ID%20desc'], function () {
		                if (V_JRJ_INCOME_INDUSTRY != null && V_JRJ_INCOME_INDUSTRY.rows.length != 0) {
		                    $.fors(V_JRJ_INCOME_INDUSTRY.rows, function () {
		                        zl.sr.push([
									 this.ITEM_NAME
									, $.fixDecimal(this.INCOME)
									, $.fixDecimal(this.PRI_RVNU_PCT)
		                        ]);
		                    });
		                    zl.sr = $.sort(zl.sr, 1, false);
		                }
//		                render();
//				            });
//				        }
				    //股本股东
				        var v = V_JRJ_APOLLO_COM_COMCAPSUT;
				        if (v && v.rows.length != 0) {
				            var d = v.rows[0];
				            gb.name = '截至' + d.MTIME.split('T')[0] + '，股本构成为：';
				            var total = d.NUMFLASH || 0
										+ d.NUMFLBSH || 0
										+ d.NUMHSH || 0
										+ d.NUMOTFLSH || 0
										+ d.NUMNFLSHBSST || 0;
				            gb.content = [
								 ['流通股', Math.round((d.NUMFLSH || 0) / 10000) + '万股']
								, ['流通A股', Math.round((d.NUMFLASH || 0) / 10000) + '万股']
								, ['流通B股', Math.round((d.NUMFLBSH || 0) / 10000) + '万股']
								, ['流通H股', Math.round((d.NUMHSH || 0) / 10000) + '万股']
								, ['其他', Math.round((d.NUMOTFLSH || 0) / 10000) + '万股']
								, ['非流通股', Math.round((d.NUMTSH - d.NUMFLASH || 0) / 10000) + '万股']
								   , ['合计', (d.NUMTSH ? Math.round(d.NUMTSH / 10000) : '') + '万股']
				            ];
				        }
				    //十大流通股东
//				        var v = V_JRJ_APOLLO_COMSHHDTL;
//				        if (v.rows.length != 0) {
//				            var _date = v.rows[0]['EDATE'].split('T')[0];
//				            $.getScript(['http://plus.jrj.com.cn/Base/V_JRJ_APOLLO_COMSHHDTL/full=1&filter-STKCODE-str=' + code + '&filter-DATATYPE-int=1&filter-REFCSHHRNKTY-int=2&filter-EDATE-dt=' + _date + '&limit=10&sort=NUMSH%20desc'], function () {
		                if (V_JRJ_APOLLO_COMSHHDTL != null && V_JRJ_APOLLO_COMSHHDTL.rows.length != 0) {
		                    $.fors(V_JRJ_APOLLO_COMSHHDTL.rows, function () {
		                        gd.content.push({
		                            'name': this.SHHNAME
									, 'n1': (this.NUMSH / 10000).toFixed(2)
									, 'n2': ((this.NUMSHCHG === '' ? this.NUMSH : this.NUMSHCHG) / 10000).toFixed(2)
		                        })
		                    })
		                }
//				                render();
//				            });
//				        }
				    //主要财务指标
				        var v = V_BS_YEARREPORT;
				        if (v && v.rows.length != 0) {
				            $.fors(v.rows, function () {
				            	//console.log(this.BPS);
				                cw.content.push({
				                    date: this.ENDDATE.split('T')[0]
				                    //每股收益
									, n1: this.EPSEED.toFixed(2) + '元'
				                    //每股净资产
									, n2: (this.BPS != ''?this.BPS.toFixed(2):'0') + '元'
				                    //每股现金流
									, n3: this.PS_NET_VAL.toFixed(2) + '元'
				                    //每股未分配利润
									, n4: (this.PS_UP != ''?this.PS_UP.toFixed(2):'0') + '元'
				                    //每股公积金
									, n5: (this.PS_CR != ''?this.PS_CR.toFixed(2):'0') + '元'
				                    //净资产收益率
									, n6: (this.ROE != ''?this.ROE.toFixed(2):'0') + '%'
				                    //主营业务收入
									, n7: (this.INC_H / 100000000).toFixed(2) + '亿元'
				                    //净利润
									, n8: (this.EPAR / 100000000).toFixed(2) + '亿元'
				                })
				            })
				        }
				    //财务水平
				        var j = JRJ_STK_VAL_IDX;
				        if (j && j.rows.length != 0) {
				            cw.cw[1] = j.rows[0].SEC_SNAME + '市盈率为' + $.fixDecimal(j.rows[0].PE) + '， 在行业内排名' + j.rows[0].PE_HY_SORT + '，在整个市场排名' + j.rows[0].PE_LS_SORT
				        }
				    //业绩变化趋势
				        var v = V_BS_GAINS;
				        if (v && v.rows.length != 0) {
				            var d = v.rows[0], dt = format2(d.EPS_P3)
								, dat = format3(dt)
								, b_zj = d.NP_AVG > d.NP;
				            cw.yj[1] = '截至' + dat + '，共有'
										+ d.RPT_COUNT + '家机构对'
										+ d.SEC_SNAME + ' ' + dt[0] + '年度业绩作出预测，<br>平均预测净利润为'
										+ (d.NP_AVG / 100000000).toFixed(2) + '亿元，平均预测每股收益为'
										+ d.EPS_AVG + '元(最高' + d.EPS_MAX + '元，最低'
										+ d.EPS_MIN + '元)。<br>照此预测，' + dt[0] + '年度净利润相比上年' + (b_zj ? '增长，增幅' : '减少，降幅') + '为'
										+ ((d.NP_AVG / d.NP - 1)*100).toFixed(2) + '%。';
				        }
				        var v = V_BS_STKPBLFOIDC, d;
				        if(v && v.rows.length != 0){
				        	$.fors(v.rows, function () {
					            d = this.RPTYR;
					            if (d == 2010) {
					                arr[0] = this;
					            } else if (d == 2011) {
					                arr[1] = this;
					            }
					            else if (d == 2012) {
					                arr[2] = this;
					            }
					            else if (d == 2013) {
					                arr[3] = this;
					            }
					            else if (d == 2014) {
					                arr[4] = this;
					            }
					        });
				        }

				    window.setTimeout(function () {
		                render();
                    }, 10);
                    
				    function render() {
				        var d1 = $.create(0, { i: $.div.detail.company(zl, 0) })
								, d2 = $.create(0, { i: $.div.detail.company1(gb, 0) })
								, d3 = $.create(0, { i: $.div.detail.company2(cw, 0) });
				        pic.vbs(arr, d3, 'funds-cw', $.main);
				        add(ele, [$.update.setTab(['公司资料', '股本股东', '财务分析'], [d1, d2, d3])]);
				    }
				},'GBK');
			}
			//资讯
			,fund_news : function(ele ,skip , index){
				//用户行为跟踪
				$.userBehavior('资讯');
				
				var  p = 20 , code = $.curStk.code
				,url = [  //'新闻','研报','公告'
					'http://stock.jrj.com.cn/share/webapp/webapp' + code + '.js'
					, 'http://canal.stockstar.com/Base/V_JRJ_REMOTING_NAVINSTITUTESTOCKPOOL/full=1&field=RES_ID,DECLAREDATE,RPT_TITLE&limit=' + p + '&sort=DECLAREDATE%20desc&filter-STOCKCODE-str=' + code + (skip ? '&skip=' + skip : '')
					, 'http://canal.stockstar.com/Base/V_BS_ANN_MLMS/full=1&field=FLAGANN,ANNDATE,EDTTI,ANNSOU&sort=ANNDATE%20desc&limit=' + p + '&filter-ISVALID-int=1&filter-FLAGCT-int=1&filter-SEITGC.SECODE-str=' + code + (skip ? '&skip=' + skip : '')
				];
				//研报数据转换
				function resRept(b){//id data name source
				    var _d = newstit([], V_JRJ_REMOTING_NAVINSTITUTESTOCKPOOL.rows, ['RES_ID', 'DECLAREDATE', 'RPT_TITLE']);
					data.resRept10 = b?data.resRept10.concat(_d):_d;
					return _d;
				}
				//公告数据转换
				function anouc(b){
				    var _d = newstit([], V_BS_ANN_MLMS.rows, ['FLAGANN', 'ANNDATE', 'EDTTI', 'ANNSOU']);
					data.anouc10 = b?data.anouc10.concat(_d):_d;
					return _d;
				}
				if(skip){
					var d , i = index; //20新闻21研报22公告
					function dd(d1,d2){
						d = d1.slice(skip,skip+p);
						return d2.concat(d);
					}
					if(i==20){
						data.news10 = dd(data.newsTemp10,data.news10);
					}
					if(i==21 || i==22){
						$.getScript([url[i-21]],function(){
							$.div.addnews(ele,i==22?resRept(1):anouc(1),i,0,2);
						});
						return;
					}
					$.div.addnews(ele,newsformat(d),i,0,2)
				}
				else{
					if(ele.innerHTML !=''){$.update.load(true);return;}
					var d1,d2,d3,num=0;
					$.getScript(url,function(i){
						num++;
						if(i==0){
							var  dat = data.newsTemp10 = newslist.content
								,d = data.news10 = dat.slice(0,p);
							if(d.length>0){
							    d1 = $.div.news(newsformat(d),20, d.length < 20 ? -1 : 0,2);
							}else{
								d1 = $.div.news([{name:'暂无相关新闻'}],-1,2);							
							}				
						}
						if (i == 1) {
						    var _d = resRept();
						    if (_d.length > 0) {
						        d2 = $.div.news(_d, 21, _d.length < 20 ? -1 : 0, 2);
						    } else {
						        d2 = $.div.news([{ name: '暂无相关研报' }], -1, 2);
						    }
						}
						if (i == 2) {
						    var _d = anouc();
						    if (_d.length > 0) {
						        d3 = $.div.news(_d, 22, _d.length < 20 ? -1 : 0, 2);
						    } else {
						        d3 = $.div.news([{ name: '暂无相关公告' }], -1, 2);
						    }
						}
						if(num==3){
							add(ele,[$.update.setTab(['新闻','研报','公告'],[d1,d2,d3])]);
						};
					},'GBK')
				}
			}
			//大盘页面
			,market : function(){
				var e = $.main.pages[0].content;
				if(e.innerHTML ==''){
					add(e,[$.div.detail.index('t')],1);
					$.update.load();
				}			
				$.update.load(true);
				//用户行为跟踪
				$.userBehavior('大盘页面');
			}
			,mkline : function(e){
				if(e.innerHTML ==''){
					add(e,[$.div.detail.index('k')]);
					$.update.load();
				}
				
				$.update.load(true);
				//用户行为跟踪
				$.userBehavior('大盘K线');
			}
		}
		//根据点击 显示 内容页
		,detail : {
			//新闻
		    news: function (ele, obj, i, h) {
		        ele.innerHTML = '';
				$.his(i,$.status);
				h = $.status == 20?2:!isNaN(h)?h:1; //更新头部
				$.update.load();
				var head;
				function deletop(){
					if($.news_top){
						$.d.removeChild($.news_top);
						$.news_top = null;
					}
				}
				if(parseInt(ele.style.top)<-50){
					deletop();
				}
				$.myAddListener(ele,'mousedown',function(){
					var dH = $.demo.clientHeight , eH = ele.clientHeight , st = parseInt(ele.style.top);
					if(eH>(dH+50)&&st<-100){
						if(!$.news_top){					
							$.news_top = $.create('div',{ps:1,l:$.main.width-40,t:$.main.height-35,w:30,h:30,textAlign:'center',zIndex:999});
							$.A({ps:1,l:10,t:-5,w:0,h:0,lh:0,borderWidth:'5px',borderColor:'transparent transparent #e72c2b transparent',borderStyle:'solid'},$.news_top);
							$.A({ps:1,l:5,t:5,w:20,h:17,lh:17,bg:'#e72c2b',borderRadius:'.5em',ft:'7',i:'TOP'},$.news_top);
							$.d.appendChild($.news_top);
						}else{
							if(!$.news_top.parentNode)$.d.appendChild($.news_top);
						}
						$.news_top.onclick = function(){
							ele.remove = function(){deletop();}
							$.move(ele,st,0,200,2,'t')
						}
					}
					if(st>=-100){deletop();}
				})
				if(i==0 || i==1 || i==20){//0头条 1解盘 20个股新闻
				    head = i ? (i == 1 ? '解盘' : '新闻') : '头条';
				    
				   //用户行为跟踪
					$.userBehavior(head);
				    
					$.getScript(['http://rss.jrj.com.cn/'+obj.id+'.js'],function(){
						var d = text.content[0];
						 var _d = newdate(
									obj.id,
									d.name,
									d.makedate,
									obj.time,
									d.source,
									'<p>' + d.content.replace(/(\r\n|\n|\r)/g, '</p><p>') + '</p>'
								);
						add(ele , [$.div.detail.news(_d)]);
						$.update.load(true);
					},'GBK')
				}//研报 21个股研报
				if(i==2 || i==21){
					head='研报'
					$.getScript(['http://canal.stockstar.com/Base/V_BS_RRPT_RRPTOV/full=1&field=FLAGRSHRPT,TIRSHRPT,ORGCNABB,SMRSHRPT&filter-FLAGRSHRPT-str=' + obj.id], function () {
					    var d = V_BS_RRPT_RRPTOV.rows[0];
						var _d = newdate(
							d.FLAGRSHRPT,
							d.TIRSHRPT,
							obj.date,
							obj.time,
							d.ORGCNABB,
							'<p>'+d.SMRSHRPT.replace(/(\r\n|\n|\r)/g, '</p><p>')+'</p>'
						);
						add(ele , [$.div.detail.news(_d)]);
						$.update.load(true);
					},'GBK')
				}//公告 22个股公告
				if(i==3 || i==22){
					head='公告'
					$.getScript(['http://canal.stockstar.com/Base/V_BS_ANN_MLCT/full=1&field=FLAGANN,CTCTT&filter-FLAGANN-str=' + obj.id], function () {
					    var d = V_BS_ANN_MLCT.rows[0];
						 var _d = newdate(
							d.FLAGANN,
							obj.name,
							obj.date,
							obj.time,
							d.source,
							'<p>' + d.CTCTT.replace(/(\r\n|\n|\r)/g, '</p><p>') + '</p>'
						);
						add(ele , [$.div.detail.news(_d)]);
						$.update.load(true);
					},'GBK')
                }
				$.column.head(head, 1, 1, h);
				pic.back($.head,'返回',h);
				$.M($.d.content,{t:0})
			}
			,zg : function(id){ //诊股
				$.userBehavior('诊股');
				$.column.head($.curStk.name+'-诊股', 1, 1,0);
				pic.back($.head,'返回',0);
				function go(){
					$.div.detail.zg($.d.content,id);
					$.M($.d.content,{t:0,l:0})
				}
				$.jump(0,$.d);
				go();
				setTimeout(go,500)
				setTimeout(go,1000)
			}
		}
	});
	$.init('container');
	$.top('header');
	$.center('main');
	$.bottom('nav');
	
	//viewManager.js控制百度link页 (已包含各个页面的入口！)
	$.viewTo();
	
	//$.set_cookie = 0; //用于返回更新
	function changall(){
		setTimeout(function(){
			var w = $.main.offsetWidth
				,h = $.demo.offsetHeight
				,mh = h-45-50
				,num = parseInt($.main.style.left)/$.main.width*w;
			//$.M($.demo,{h:h}); //总高
			$.M($.main,{l:num}); //内容
			$.M($.head,{l:num}); //头部
			$.M($.d,{l:-w}); //详细页
			
			if($.iframe && $.iframe.parentNode){//在师图
				$.M($.iframe,{h:mh})
				if(window.J) J.resizeAll(w,mh);
			}
			$.main.width = $.d.width = $.head.width = w;
			$.main.height = mh;
			$.fors($.main.pages,function(i){
				$.M(this,{l:i*w,h:mh})
			});
			$.fors($.head.pages,function(i){
				$.M(this,{l:i*w,w:w})
			})
			
			$.fors($.nav.pages,function(n){//栏目当前状态
				var nav = this.lastChild;
				if(nav.lastChild.nodeName =="CANVAS"){
					var  w = nav.clientWidth-10
						,h = nav.clientHeight;
					pic.current(nav.lastChild,w,h);
				}
			})
		},300);
	}
	$.myAddListener(window,"orientationchange",changall);
	window.onresize = changall;
	$.winLoad(function(){
		$.fullscreen();
		setTimeout(function(){window.onpopstate = function(e){
			if(e.state){
				var tate = e.state;
				if($.status != tate.status){
					function update(i){
						$.update.navValue(i);
					}
					$.status = tate.status;
					switch(tate.status){
						case 0 : update(0);break;
						case 10: update(1);break;
						case 20: update(2);break;
					}
				}
				function go(i){
					$.update.returnUp(i)
					$.jump(i,$.head)
					$.update.Nav(i)//更新当状状态+canvas
					$.addDetail(i); //更新详细内容页状态
					$.update.Content(i,true) //更新栏目内容
					$.update.Head(i) //更新头部信息
					$.set_cookie = i; //返回值
					$.jump(i);
					$.jump(1,$.d);
				}
				go(tate.num);
			}else{
				history.back()
			}
		};	
		/* function tips(val){			
			if($.storage.get('desk')!='undefined'){
				var index = $.storage.get('desk');
				if(index<=3){
					$.storage.set('desk',(++index));
					if(!$.tips){
						var mw = $.main.width
							,w = 250;
						$.tips = $.create(0,{ps:'fixed',l:(mw-w)/2,w:w,h:50,zIndex:999});
						$.tips.innerHTML = "<img src='logo.png' /> <div class='txt'>"+val+"</div>";
						$.tips.className='tips';				
						var close = $.A({i:'×'},$.tips)
						close.className='close'
						close.onclick = function(){
							$.demo.removeChild($.tips);
						}
						pic.desk_jian($.A({ps:1,l:250/2-15,w:20,h:10,bottom:'-10px'},$.tips,'canvas'),20,10);
						$.demo.appendChild($.tips);
					}
				}
			}else{
				$.storage.set('desk',0);
			}
		}
		if($.isIphone){
			if($.browser.safari && !$.browser.Ip_chorme && !$.browser.qq){
				tips("<p>把“股票行情”添加至主屏：</p> <p>点击<canvas class='pic' width='20' height='15' style='vertical-align: middle; margin:0px 3px'></canvas>然后“添加至主屏幕”</p>");
				$.M($.tips,{bottom:'-50px'})			
				pic.desk_iphone($.getClass($.tips,'pic'),20,15);
			}
		}
		if($.isAndroid){
			if($.browser.qq){
				tips("<p>把“股票行情”添加到主屏：</p> <p>1：点击 <canvas class='pic' width='20' height='15' style='vertical-align: middle;'></canvas> “添加书签”；<p>2：点击“桌面书签”</p>");
				$.M($.tips,{h:65,bottom:'10px'})
				pic.ad_qq($.getClass($.tips,'pic'),17,12);
			}
			if($.browser.uc){
				tips("<p>把“股票行情”添加到主屏：</p> <p>1：点击 <canvas class='pic' width='20' height='15' style='vertical-align: middle;'></canvas>“加入书签”>“确定”;<p>2：点击<canvas class='pic1' width='20' height='15' style='vertical-align: middle;'></canvas>“书签/历史”>“桌面<Br>　　　　　&nbsp;&nbsp;&nbsp;书签”</p>");
				$.M($.tips,{w:270,l:($.main.width-270)/2,h:80,bottom:'10px'})
				$.M($.tips.lastChild,{l:270/2-15})
				pic.ad_qq($.getClass($.tips,'pic'),16,12);
				pic.ad_qq($.getClass($.tips,'pic1'),16,12);
			}
		} */
	
		
	},300)});
	
})($);