/* 工具 */
(function(window){
	var doc = document , tool , http = 'http://m.stockstar.com/';
	(function(){
		var  navig = navigator
			,ua = navig.userAgent.toLowerCase()	
			,storage = window.localStorage
			,v = navig.vendor;
		tool = {
			set_stor : function(key,val){
				try{storage.setItem(key,val)}catch(e){}
			}
			,get_stor : function(key){
				try{return storage.getItem(key)}catch(e){}
			}
			,dele_stor : function(key){
				try{storage.removeItem(key)}catch(e){}
			}
			,ven : v
			,webkit : /webkit|khtml/.test(ua)
			,find_browser : function(val){
				return ua.indexOf(val)>-1
			}
		};
	})();
	(function(){
		function hrefurl(url){
			window.location.href=url; 
		}
		if(tool.find_browser('opera')){
			hrefurl(http+"p/index.php?pid=5&tid=1&did=1&sid=26");
		}
	})();
	window.$ = {
		extend : function(a,b){
			for(var i in b){
				a[i] = b[i];
			}
			return a;
		}
		,url : http
		,isAndroid : tool.find_browser("android")
		,isIphone : tool.find_browser("iphone")
		,create : function(a , css){
			var obj = doc.createElement(a||'div');
			if(css){$.M(obj,css);}
			return obj;
		}
		,browser : {
			 opera :  tool.find_browser('opera')
			,safari:  tool.webkit && tool.ven.indexOf('Apple')>-1 && tool.find_browser('safari')
			,chrome:  tool.webkit && tool.ven.indexOf('Google')>-1
			,uc:      tool.webkit && tool.find_browser('uc')
			,qq :     tool.find_browser('mqqbrowser')
			,Ip_chorme: tool.find_browser('iphone; u;')
		}
		,getID : function(a){
			return doc.getElementById(a);
		}
		,getClass : function(ele , className){
			return ele.getElementsByClassName(className)[0];
		}
		,addClass: function (ele , cls) {
			if(ele.classList){
				ele.classList.add(cls)
			}else{
				var str=ele.className;
				if((str=str.replace(cls,''))){};
				ele.className = str+' '+cls;
			}
        }
		,removeClass : function(ele , cls){
			if(ele.classList){
				ele.classList.remove(cls);
			}else{
				ele.className = ele.className.replace(cls , '');
			}
		}
		//获取时间
		,getMS : function() {
			var z = new Date();
			return (z.getMinutes() * 60 + z.getSeconds()) * 1000 + z.getMilliseconds()
		}
		//样式
		,M : function(ele, css){
			if(!ele || !css){
				return;
			}
			var z, y=ele.style, x;
			for(var i in css){
				z = css[i];
				x = isNaN(z)?z:z+'px';
				switch(i){
					
					case 'l' : y.left       = x; break;
					case 't' : y.top        = x; break;
					case 'w' : y.width      = x; break;
					case 'h' : y.height     = x; break;
					case 'o' : y.overflow   = z; break;
					case 'bd': y.border     = z; break;
					case 'lh': y.lineHeight = x; break;
					case 'ft': y.fontSize   = x; break;
					case 'bg': y.background = z; break;
					case 'ps': y.position   = (z==0)?'relative':'absolute'; break;
					
					case 'i' : ele.innerHTML = z; break;
					
					default:y[i] = z;
				}
			}
		}
		//创建子元素，并添加样式
		,A : function(css, father, tag){
			var ele = $.create(tag||'div');
			$.M(ele , css);
			father.appendChild(ele);
			return ele;
		}
		//event
		,myAddListener : function(ele, type, fn){
			if($.isIphone || $.isAndroid){
				var mapping = {
					mousedown	: 'touchstart',
					mouseup		: 'touchend',
					mousemove	: 'touchmove'
				};
				type = mapping[type] || type;
			}
			if (ele.addEventListener) {
				ele.addEventListener(type, fn, false);
			}
			else {
				ele.attachEvent('on'+type, fn);
			}
		}
		,myRemoveListener : function(ele,type,fn){
			if (ele.removeEventListener) {
				ele.removeEventListener(type, fn, false);
			}
			else {
				type = null
			}
		}
		,getEvent : function(e, def){
			e = e || window.event;
			if(!def){	//缺省执行
				if(!e.stopPropagation){	//IE
					e.cancelBubble = true
				}else{
					e.stopPropagation()
				}
				if(!e.preventDefault){	//IE
					e.returnValue = false
				}else{
					e.preventDefault()
				}
			}
			e = e.touches ? e.touches[0] : e;
			return e;
		}
		,winLoad : function(fn){
			window.addEventListener('load',function(){fn(arguments)},true);
		}
		,move : function(ele , from , to , time , b , h){
			h = h || 'h';
			var start = $.getMS();
			var end,num;
			(function(){
				end = $.getMS();
				num = b?from-from*(end - start)/time:from + (to*(end - start)/time-from*(end - start)/time);
				if(end - start < time){							
					var t = setTimeout(arguments.callee , 20);
				}else{
					direction(to);
					if(b==2)ele.remove();
					clearTimeout(t);
					return;
				}
				direction(num);
			})();
			function direction(n){
				switch(h){
					case 'h' : $.M(ele , {h:n}); break;
					case 't' : $.M(ele , {t:n}); break;
				}
			}
		}
		,his : function(i,state){
			if(history.pushState){
				history.pushState({num:i,status:state},'');	
			}else if(doc.location.hash){ 
				doc.location.hash = '#num:'+i+'#status:'+state;
			}
		}
		//排序
		,sort : function(arr , n , b){
			function up(c,d){
				var  v1 = parseFloat(c[n])
					,v2 = parseFloat(d[n]);
				if(b){return v1-v2};
				return v2-v1;
			}
			return arr.sort(up);
		}
		,fors : function(arr,fn){
			for(var i=0,len=arr.length;i<len;i++){
				fn.call(arr[i],i);
			}
		}
		,getIndex: function (v, arr) {
            var result = -1;
            $.fors(arr, function (i) {
                if (v == arr[i])
                    result = i;
            });
            return result;
        }
		,getScript: function(url, callback, charset , b){
			var head = doc.getElementsByTagName("head")[0] || doc.documentElement;
			$.fors(url,function(i){				
				var script = $.create("script");
				if ( charset ) {script.charset = charset;}
				script.src = this;
				script.onload = script.onreadystatechange = function() {
					if ( !this.readyState ||
							this.readyState === "loaded" || this.readyState === "complete" ) {
						callback(i);
					
						script.onload = script.onreadystatechange = null;
					}
				};				
				
				head.insertBefore( script, head.firstChild );
			})
		}
		,loadXML : function(val,fun){
			var xml;
			if (window.ActiveXObject){
				xml = new ActiveXObject("Microsoft.XMLHTTP");
			}else if(window.XMLHttpRequest){
				xml = new XMLHttpRequest()
			} else{  
                alert('error');
            }
			xml.open("GET",val,false);
			xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xml.onreadystatechange = function () {
				if (xml.readyState == 4 ){//&& xml.status == 200
					fun(xml.responseXML)
				}
			}
			xml.send();
		}
		,fixDecimal: function (x){
			var f_x = parseFloat(x);
			if (isNaN(f_x))
			{
				return '';
			}
			f_x = Math.round(f_x*100)/100;
			var s_x = f_x.toString();
			var pos_decimal = s_x.indexOf('.');
			if (pos_decimal < 0)
			{
				pos_decimal = s_x.length;
				s_x += '.';
			}
			while (s_x.length <= pos_decimal + 2)
			{
				s_x += '0';
			}
			return s_x;
		}
		,dateformat: function (d, format) {
            var o = {
                "M+": d.getMonth() + 1,
                "d+": d.getDate(),
                "h+": d.getHours(),
                "m+": d.getMinutes(),
                "s+": d.getSeconds(),
                "q+": Math.floor((d.getMonth() + 3) / 3),  //quarter
                "S": d.getMilliseconds()
            }
            if (/(y+)/.test(format))
                format = format.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(format))
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            return format;
        }
		,getStkObj: function (obj, callback, type , b) { 
			type = type||'s';
			if (obj.code != null) {
                var _code = obj.code.replace(/code_/, '');
                /*
                 * type表示i: 指数; s: 股票; z: 自选股; IF:  股指期货
                 */
            	switch(type){
            		case 'z':
            			//自选股存储部分
            			try{
            				var oriArr = localStorage['selected'].split(',')
            				,iUrl = 'http://q.jrjimg.cn/?q=cn|i&n=objInt&c=code,name,np,hp,lp,hlp,pl,tm&i='
            				,sUrl = 'q=cn|s&n=objStk&c=code,name,np,pl,tm,stp&i='
        					,ifUrl = 'q=cn|IF&n=objIF&c=code,name,np,pl,tm&i='
            				,url = '';
            			}catch(e){
            				var oriArr = $.getCookie('localStorage').split(',')
            				,iUrl = 'http://q.jrjimg.cn/?q=cn|i&n=objInt&c=code,name,np,hp,lp,hlp,pl,tm&i='
            				,sUrl = 'q=cn|s&n=objStk&c=code,name,np,pl,tm,stp&i='
        					,ifUrl = 'q=cn|IF&n=objIF&c=code,name,np,pl,tm&i='
            				,url = '';
            			}

            			for(var i=0; i<oriArr.length-1; i++){
            				var _obj = $.selected.parseObj(oriArr[i]);
            				
            				switch(_obj.mkType){
            					case 'i':
            						iUrl += _obj.code+',';
            						continue;
            					case 's':			
            						sUrl += _obj.code+',';
            						continue;
            					case 'IF':			
            						ifUrl += _obj.code+',';
            						continue;
            				}
            			}
            			var _obj = $.selected.parseObj(oriArr[oriArr.length-1]);
        				switch(_obj.mkType){
        					case 'i':
        						iUrl += _obj.code;
        						break;
        					case 's':			
        						sUrl += _obj.code;
        						break;
        					case 'IF':			
        						ifUrl += _obj.code;
        						break;
        				}
            			url = (iUrl == 'http://q.jrjimg.cn/?q=cn|i&n=objInt&c=code,name,np,hp,lp,hlp,pl,tm&i='?'http://q.jrjimg.cn/?':iUrl+'&')
            				+ (sUrl == 'q=cn|s&n=objStk&c=code,name,np,pl,tm,stp&i='?'':sUrl+'&')
            				+ (ifUrl == 'q=cn|IF&n=objIF&c=code,name,np,pl,tm&i='?'':ifUrl);

            			$.getScript([url], function () {
            				var idx = 0,
            				arr = [];

            				//股票
            				if(typeof objStk != 'undefined' && objStk != null && objStk.HqData){
            					while(idx < objStk.HqData.length){
    	            				var _obj = $.selected.parseObj(oriArr[idx]);
    	            				
    	            				_obj.code = objStk.HqData[idx][objStk.Column.code];
    	            				_obj.name = objStk.HqData[idx][objStk.Column.name];
    	            				_obj.np = objStk.HqData[idx][objStk.Column.np];//price
    	            				_obj.pl = objStk.HqData[idx][objStk.Column.pl];//percent
                                    _obj.tm = objStk.HqData[idx][objStk.Column.tm];
                                    
                                    //停牌指示
                                    _obj.stp = objStk.HqData[idx][objStk.Column.stp] == 1 ? objStk.HqData[idx][objStk.Column.stp] : 0;
                                    
                                    _obj.mkType = 's';
    	            				             
	            					arr.push($.selected.obj2str(_obj)); 
    	            				                                  
    	            				idx++;
    	            			}
            				}
            				idx = 0;
            				
            				//股指期货
            				if(typeof objIF != 'undefined' && objIF != null && objIF.HqData){
            					while(idx < objIF.HqData.length){
    	            				var _obj = $.selected.parseObj(oriArr[idx]);
    	            				
    	            				_obj.code = objIF.HqData[idx][objIF.Column.code];
    	            				_obj.name = '股指期货';
    	            				_obj.np = objIF.HqData[idx][objIF.Column.np];//price
    	            				_obj.pl = objIF.HqData[idx][objIF.Column.pl];//percent
                                    _obj.tm = objIF.HqData[idx][objIF.Column.tm];
                                    _obj.mkType = 'IF';
    	            				             
	            					arr.push($.selected.obj2str(_obj)); 
    	            				                                  
    	            				idx++;
    	            			}
            				}
            				idx = 0;

            				//指数
            				if(typeof objInt != 'undefined' && objInt != null && objInt.HqData){
            					while(idx < objInt.HqData.length){
    	            				var _obj = $.selected.parseObj(oriArr[idx]);
    	            				
    	            				_obj.code = objInt.HqData[idx][objInt.Column.code];
    	            				_obj.name = objInt.HqData[idx][objInt.Column.name];
    	            				
    	            				_obj.np = objInt.HqData[idx][objInt.Column.np];
    	            				_obj.hp = objInt.HqData[idx][objInt.Column.hp];
    	            				_obj.lp = objInt.HqData[idx][objInt.Column.lp];
    	            				_obj.hlp = objInt.HqData[idx][objInt.Column.hlp];
    	            				_obj.pl = objInt.HqData[idx][objInt.Column.pl];
    	            				_obj.tm = objInt.HqData[idx][objInt.Column.tm];
    	            				_obj.mkType = 'i';
    	            				                                  
	            					arr.push($.selected.obj2str(_obj)); 
	            					
    	            				idx++;
    	            			}
            				}
            				try{
            					localStorage['selected'] = arr;
            				}catch(e){//alert(arr.join(','));
            					$.setCookie('localStorage', arr.join(','));
            				}
	            			
                        	if (callback) callback();
							
							objStk = null;
							objInt = null;
							objIF  = null;
                        },'GBK',b);
            			
            			break;
            		case 'IF':
            			$.getScript(['http://q.jrjimg.cn/?q=cn|IF&n=objIF&c=code,name,np,hp,lp,hlp,pl,tm'], function () {
            				$.curStk = {
                                    code: objIF.HqData[0][objIF.Column.code],
                                    type: 'IF',
                                    name: '股指期货',
                                    np: objIF.HqData[0][objIF.Column.np],
                                    hp: objIF.HqData[0][objIF.Column.hp],
                                    lp: objIF.HqData[0][objIF.Column.lp],
                                    hlp: objIF.HqData[0][objIF.Column.hlp],
                                    pl: objIF.HqData[0][objIF.Column.pl],
                                    tm: objIF.HqData[0][objIF.Column.tm]
                                };
            				
            				if (callback) callback();
            				
            				objIF = null;
            				delete objIF;
                        },'GBK',b);
					break;
            		default:
            			var url = ['http://q.jrjimg.cn/?q=cn|'+type+'&n=objStk&c=code,name,np,hp,lp,hlp,pl,tm&i=' + _code];
						$.getScript(url,function(){
							var  o = objStk
								,oh = o.HqData[0]
								,c = o.Column;
							if(!!oh){
								$.curStk = {
										 code: oh[c.code]
										,type: type
										,name: oh[c.name]
										,np:   oh[c.np]
										,hp:   oh[c.hp]
										,lp:   oh[c.lp]
										,hlp:  oh[c.hlp]
										,pl:   oh[c.pl]
										,tm:   oh[c.tm]
									};
									if (callback && url) callback();
									objStk = null;
									delete objStk;
							}else{
								var w = $.main.width/2-150;
								var h = $.main.height/2-50;
								var div = $.create(0,{i:$.div.pop('提示','您输入的股票代码不存在!'),
									ps:1,l:w,t:h
								});
								$.demo.appendChild(div);
								
								div.remove = function(){
									$.demo.removeChild(div);
								}
								$.move(div,h,0,800,2);
							}
							
						},'GBK',b);
					break;
            	}
            	
            } else {
                if (callback) callback();
            }
		}
		,setCookie: function(name, value, expires, path, domain, secure){
	    		doc.cookie= name + "=" + escape(value) +
			    ((expires) ? "; expires=" + expires.toGMTString() : "") +
			    ((path) ? "; path=" + path : "") +
			    ((domain) ? "; domain=" + domain : "") +
			    ((secure) ? "; secure" : "");
	    }
		,getCookie : function(cname){
		      var cookieStr = doc.cookie.match("(?:^|;)\\s*" + cname + "=([^;]*)");
		      return cookieStr ? unescape(cookieStr[1]) : "";
		}
        ,trim: function (s) {
            return s.replace(/^\s+|\s+$/g, '');
        }
        /*
         * 查找给出项在数组中的索引
         * @param {string,int,object} item 查找的数组元素
         * @param {int} from 可选;查找的起始位置，默认为0
         * @return {int} 返回item在数组中的序号，不存在该元素返回-1
         */
      	,indexOf : function(array, item, from){
      		var len = array.length;
      		for (var i = (from < 0) ? Math.max(0, len + from) : from || 0; i < len; i++){
      			if (array[i] === item) return i;
      		}
      		return -1;
      	}
        /*
         * 用户行为跟踪
    	 * @param {String} pageType 用户进入的页面标识
    	 */
      	,userBehavior: function (pageType){
    		var aPath = localStorage['userPath'] ? localStorage['userPath'].split(',') : [],
    			_time = new Date().getTime(),
    			_type = $.typeHash[pageType] ? $.typeHash[pageType] : (pageType == 'END' ? pageType : '');
    		//文本转为typeHash
//    		console.log('click::'+pageType);
    		if(_type != ''){
    			aPath.push(_type + (_type == 'END' ? '' : ('|' + _time)));//
        		setTimeout(function (){
        			
        			localStorage['userPath'] = aPath;
        		}, 0);
    		}
    	}
    	/*
    	 * 发送用户行为
    	 * @param {Boolean} b 是否立刻发送
    	 * @param {Boolean} e 是否存在上次关闭前未发送的行为
    	 */
    	,sendUserBehavior: function (b, e){
    		localStorage.removeItem('userPath');
    		window.setTimeout(function (){
    			if(!localStorage['userId']){
    				$.getScript([http+'php/dcs.php?op=user'], function (){
    					localStorage['userId'] = uid;
    				});
    			}else{
    				if(e){
//    					console.log('has::'+localStorage['userPath']);
    						var a = localStorage['userPath'].split(','),
        					idx = a.indexOf('END'),
        					//typeof last {Array}
        					last = a.slice(0, idx+1),
        					now = a.slice(idx+1);
							$.getScript([http+'php/dcs.php?op=log&uid=' + localStorage['userId'] + '&req=' + last.join(',') + '&location=' + (doc.referrer == '' ? $.getPara('from') : doc.referrer)], function (){
								//
							});
	        				
	        				//准备进入计时状态
	        				e = false;
	        				
	        				//记录本次进入轨迹
	//        				console.log('now::'+now);
	        				localStorage['userPath'] = now;

//        				console.log('nowUserPath::'+localStorage['userPath']);
        			}else{//console.log(localStorage['userPath']);
        				if(localStorage['userPath'] && localStorage['userPath'].length != 0){
        					$.getScript([http+'php/dcs.php?op=log&uid=' + localStorage['userId'] + '&req=' + localStorage['userPath'] + '&location=' + (doc.referrer == '' ? $.getPara('from') : doc.referrer)], function (){
            					localStorage.removeItem('userPath');
            				});
        				}
        			}
    			}
    			
    			setTimeout(arguments.callee , 2*60*1000);
    		}, b ? 0 : 2*60*1000);
    	}
    	/*
    	 * HASH
    	 */
    	,typeHash: {
    		//一级页面A
    		'指数首页': 'I_A',
    		'个股页': 'S_A',
    		'大盘页面': 'M_A',
    		
    		//二级页面B
    		'首页': 'M_B',
    		'资讯': 'N_B',
    		'资金': 'F_B',
    		'自选股': 'SS_B',
    		'反馈': 'FB_B',
    		'分时': 'T_B',
    		'K线': 'K_B',
    		'大盘K线': 'IK_B',
    		'F10': 'F10_B',
    		'搜索': 'SC_B',
    		
    		//TAB(三级页面)C
    		'大盘指数': 'S_C',
    		'行业板块': 'B_C',
    		'涨跌排行': 'PL_C',
    		'头条': 'H_C',
    		'解盘': 'E_C',
    		'研报': 'R_C',
    		'公告': 'A_C',
    		'个股资金': 'SF_C',
    		'行业资金': 'BF_C',
    		'连续流入': 'CI_C',
    		'新闻': 'N_C',
    		'公司资料': 'IF_C',
    		'股本股东': 'ES_C',
    		'财务分析': 'CF_C',
    		'诊股': 'ZG_C'
    	}
		,storage : {
			 set :  function(key,val){tool.set_stor(key,val);}
			,get :  function(key){return tool.get_stor(key);}
			,dele : function(key){tool.dele_stor(key);}
		}
		,fullscreen : function(){
			var all = $.getID('container'),h = '100%';
			$.M(all,{h:all.clientHeight+100});
			function gt(){
				if(doc.body.scrollTop >=1){
					$.M(all,{h:h});
				}else{
					setTimeout(gt,10);
				}
				setTimeout(function(){$.M(all,{h:h});},600)
			}
			function top(){
				setTimeout(function(){
					window.scrollTo(1, 1);
					h = $.browser.safari?window.innerHeight:h;
					gt();
				},400);
			}
			if($.isAndroid){// || $.isIphone
				top();
			}else{
				$.M(all,{h:h});
			}
		}
		,desk : function(){
			if($.isIphone && $.browser.safari){
				
			}
		}
	};

	var exist = false;
//	console.log(localStorage['userPath']);
	//获取是否存在"userPath"的本地存储(意为判定是否有上次计时后未发送的行为轨迹)
	if(localStorage['userPath']){
		$.userBehavior('END');
		exist = true;
	}
	$.sendUserBehavior(true, exist);
})(window);

//增加动态<link>
//var _link = $.create('link');
//_link.rel = 'stylesheet';
//_link.type = 'text/css';
//_link.href = 'style/base.css?a=' + new Date().getTime();
//document.getElementsByTagName('head')[0].appendChild(_link);

//自定义对像用于存数组
(function(window){
	function pusharr(arr){
		var o = '{'
			//+ 'column  : 0'         
				+ 'id      : 0'
				+ '|code    : "000001"'
				+ '|name    : "上证指数"'
				+ '|hp   : "暂无数据"'
				+ '|pl : "暂无数据"'
				+ '|mkType : "i"'
			+ '},'
			+ '{'
			//+ 'column  : 0'         
				+ 'id      : 1'
				+ '|code    : "399001"'
				+ '|name    : "深证成指"'
				+ '|hp   : "暂无数据"'
				+ '|pl : "暂无数据"'
				+ '|mkType : "i"'
			+ '}'
		arr.push(o);
		//本地存储
		try{			
			if(!localStorage['selected']){
				localStorage['selected'] = [o];
			}
		}catch(e){
			$.setCookie('localStorage', o);
		}
	}
	window.select = function(){
		//console.log(localStorage['selected'])
		if(this instanceof select){
			try{
				//本地存储
				if(!localStorage['selected']){
					this.content = [];
					pusharr(this.content);
				}else{
					this.content = localStorage['selected'].split(',')
				}
			}catch(e){
				if($.getCookie('localStorage') == ''){
					this.content = [];
					pusharr(this.content);
				}else{
					this.content = $.getCookie('localStorage').split(',')
				}
			}
		}else{
			return new select();
		}
		//初始化自选股内容区DIV变量
		$.select = {};
	};
	select.prototype.add = function(obj){
		var obj_new = this.parseObj(obj)
			//has指是否有添加过的自选股
			,has = false;
		
		if(this.content.length == 1){
			if(this.parseObj(this.content[0]).id == -1){
				//替换"暂无数据"
				this.content = [obj];
			}else{
				this.content.push(obj);
			}
		}else{
			for(var i=0; i<this.content.length; i++){
				if(this.parseObj(this.content[i]).code != obj_new.code){
					has = false;
					continue;
				}else if(this.parseObj(this.content[i]).mkType == obj_new.mkType){
					has = true;
					break;
				}
			}

			if(!has){
				//push改为向数组头添加
				this.content.splice(0, 0, this.obj2str(obj_new));
			}
		}
		
		//本地存储部分
		try{
			localStorage['selected'] = this.content;
		}catch(e){
			$.setCookie('localStorage', this.content.join(','));
		}
		return !has;
	};
	select.prototype.del = function(id, code){
		var idx = 0;
		for(var i=0; i<this.content.length; i++){
			if(this.parseObj(this.content[i]).code == code.replace(/code_/, '')){
				this.content.splice(i, 1);
				idx = i;
				break;
			}
		}
		if(this.content.length == 0){
			this.content.push('{'
					//+ 'column  : -1'         
					+ 'id      : -1'
					+ '|name    : "暂无数据"'
					+ '|hp   : "暂无数据"'
					+ '|pl : "暂无数据"'
					+ '|mkType : "s"'
				+ '}');
		}
		
		try{
			localStorage['selected'] = this.content;
		}catch(e){
			$.setCookie('localStorage', this.content.join(','));
		}
		
		return idx;
	};
	select.prototype.setType = function(_code, _id, _name, _price, _percent, _mkType){
		var obj = '{code:"' + _code +'"|id:"'+ _id +'"|name:"'+ _name +'"|hp:"'+ _price +'"|pl:"'+ _percent +'"|mkType:"'+ (_mkType?_mkType:'s') +'"}';
		return obj;
	};
	select.prototype.parseObj = function (obj){
		obj = obj.replace(/\|/g, ',');
		return eval('('+obj+')');
	};
	select.prototype.obj2str = function(o){
		   var r = [];
		   if(typeof o == 'string' || o == null) {
		     return o;
		   }
		   if(typeof o == 'object'){
		     if(!o.sort){
		       r[0]='{'
		       for(var i in o){
		         r[r.length]=i;
		         r[r.length]=':"';
		         r[r.length]=this.obj2str(o[i]);
		         r[r.length]='"|';
		       }
		       r[r.length-1]='"}'
		     }else{
		       r[0]='['
		       for(var i =0;i<o.length;i++){
		         r[r.length]=this.obj2str(o[i]);
		         r[r.length]='|';
		       }
		       r[r.length-1]=']'
		     }
		     return r.join('');
		   }
		   return o.toString();
	}
})(window);
//图片
(function(window){
	var PI2 = Math.PI*2;
	var canvas = function(ele,w,h){
		ele.width = w;
		ele.height = h;
		this.canvas = ele;
		this.ctx = ele.getContext('2d');
	}
	canvas.prototype = {
		a: function(a, b, c, d, e, f){this.ctx.arc(a, b, c, d, e, f);return this;}
		,b: function(a){this.ctx.beginPath();return this;}
		,c: function(a){this.ctx.closePath();return this;}
		,cr: function(a, b, c, d){this.ctx.clearRect(a, b, c, d);return this;}
		,l: function(a, b){this.ctx.lineTo(a, b);return this;}
		,m: function(a, b){this.ctx.moveTo(a, b);return this;}
		,f: function(a){if(a){this.fs(a)}this.ctx.fill();return this;}
		,s: function(a){if(a){this.ss(a)}this.ctx.stroke();return this;}
		,fr: function(a, b, c, d){this.ctx.fillRect(a, b, c, d);	return this;}
		,fs: function(a){this.ctx.fillStyle = a;	return this;}
		,ft: function(a, b, c){this.ctx.fillText(a, b, c);return this;}
		,fo: function(a){this.ctx.font = a;return this;}
		,sr: function(a, b, c, d){this.ctx.strokeRect(a, b, c, d);return this;}
		,ss: function(a){this.ctx.strokeStyle = a; return this;}
		
		,sv: function(){this.ctx.save();return this;}
		,rs: function(){this.ctx.restore();return this;}
		,rt: function(a){this.ctx.rotate(a);return this;}
		,tl: function(a, b){this.ctx.translate(a, b);return this;}		
		,lg: function(a,b,c,d, e){
			this.grad = this.ctx.createLinearGradient(a,b,c,d);
			for(var i=0, len=e.length; i<len; i++){
				this.grad.addColorStop(e[i][0], e[i][1]);
			}
			return this;
		}
		,qc: function(a, b, c, d){this.ctx.quadraticCurveTo(a, b, c, d);return this;}
		,lw: function(a){this.ctx.lineWidth = a||1;	return this;}
		,sd: function(a, b, c, d){
			this.ctx.shadowOffsetX = a;
			this.ctx.shadowOffsetY = b;
			this.ctx.shadowColor = c;
			this.ctx.shadowBlur = d;
			return this;
		}
		,global : function(a){ this.ctx.globalCompositeOperation = a; return this;}
		,toPic : function(){return this.ctx.canvas.toDataURL()}
	}
	function yuan(ctx,w,h,r){
		ctx
		.b()
		.m(0,r)
		.qc(0,0,r,0)
		.l(w-r,0)
		.qc(w,0,w,r)
		.l(w,h-r)
		.qc(w,h,w-r,h)
		.l(r,h)
		.qc(0,h,0,h-r)
		.c();
	}
	window.pic = {
		search:function(ele,name,f5){
			var w = 38,h=35;
			var can = new canvas($.getClass(ele,name),w+5,h+5);	
			$.myAddListener(can.canvas,'mousedown',function(){
				fill(true)
			});
			$.myAddListener(can.canvas,'mouseup',function(){
				fill()
			})
			function fill(bool){
				can.cr(0,0,w+5,h+5).b().sv().tl(2.5,2.5)
				yuan(can,w,h,5)
				if(!bool){
					can.lg(0,0,0,h,[
						[0,'#414141']
						,[.45,'#2a2a2a']
						,[.45,'#0a0a0a']
						,[1,'#000000']
					])
				}else{
					can.lg(0,0,0,h,[
						[0,'#ff0306']
						,[.45,'#e33331']
						,[.45,'#c80000']
						,[1,'#b4000b']
					])
				}
				can.f(can.grad)
				.s('rgba(255,255,255,.2)')
				.b()			
				.tl(w/2-2,h/2)
				if(!f5){
					can
					//.sd(0,0,'black',2)
					.a(0,0,h*.3,0,PI2)
					.lw(2.5)
					.s('#ffffff')
					.b()
					.tl(h*.2,h*.2)
					.rt(-.9)
					.f('#ffffff')
					.fr(0,0,w*.1,w*.2).rs();
				}else{
					can.b().tl(1,0).a(0,0,h*.3,0,-PI2/1.1,true)
					.lw(2.5)
					.s('#ffffff')
					.b()
					.tl(w/4.2,-h/6)
					.rt(.6)
					.m(8,0)
					.l(8,8)
					.l(0,8)
					.c()
					.f('#ffffff')
					.rs()
				}
			}
			fill();
		}
		,home : function(ele,color){
			var w = 24,h=20,th = h*.5 , ge = 3;
			var can = new canvas(ele,w,h);
			can.cr(0,0,w,h).b()
				.m(w/2,0)
				.l(0,th)
				.l(ge/2,th+ge)
				.l(ge*1.5,th)
				.l(ge*1.5,h)
				.l(w-ge*1.5,h)
				.l(w-ge*1.5,th)
				.l(w-ge/2,th+ge)
				.l(w,th)
				.c()
				.f(color)
				.tl(w*.7,0)
				yuan(can,w*.1,h*.5,1)
				can.f(color)
		}
		,news : function(ele,color){
			var w = 20, h = 20 , th = h*.35, bh = h-2-th,lw = w*.35,rw = w-lw;
			var can = new canvas(ele,w,h);
			can.cr(0,0,w,h).b()
			.f(color)
			.fr(0,0,w*.6,th)
			.fr(w*.6+2,0,w-2-w*.6,th)
			.tl(0,th+2)
			.fr(0,0,lw,bh)
			.tl(lw+1,0)
			.fr(0,0,rw,2)
			.fr(0,3,rw,2)
			.fr(0,6,rw,2)
			.fr(0,9,rw,2)
		}
		,funds : function(ele,color){
			var w = 19,h = 20 , tw = w*.5 , th = h*.2 
				,bw = w/2 , bh = (h-th)/2;
			var can = new canvas(ele,w,h);
			can.sv().cr(0,0,w,h).b().tl(w/2,0)
			.m(0,th*.1)
			.l(tw/4,0)
			.qc(tw/2.5,0,tw/2,th*.2)
			.l(tw/5,th) //改腰部大小 5越小 腰越大
			.l(-tw/5,th) //改腰部大小
			.l(-tw/2,th*.2)
			.qc(-tw/2.5,0,-tw/4,0)
			.c()
			.f(color)
			.rs().b().tl((w/2-bw),th-1)
			for(var i=0;i<PI2;i+=.2){
				can.l(bw+bw*Math.cos(i),bh+bh*Math.sin(i))
			}
			can.f(color)
			.global('destination-out')
			.b()
			.fo('bold 10px serif')
			.ft('$',bw/1.5,12)
		}	
		,select : function(ele,color){
			var w = 18,h = 20;
			var can = new canvas(ele,w,h);
			can.cr(0,0,w,h).f(color)
			.fr(0,0,w,h)
			.global('destination-out')
			.b()
			.fr(w*.1,h*.45,w*.8,h*.15)
			.fr(w*.40,h*.2,w*.2,h*.65)
		}
		,price : function(ele,color){//分时
			var w = 25,h = 20 , j=4, th = h-j;//j箭头
			var can = new canvas(ele,w,h);
			can.cr(0,0,w,h).m(0,h*.7)
			.l(w*.1,h*.7)
			.l(w*.2,h)
			.l(w*.3,h*.5)
			.l(w*.4,h*.5)
			.l(w*.5,0)
			.l(w*.6,h*.6)
			.l(w*.7,h*.6)
			.l(w*.8,h*.7)
			.l(w*.9,h*.6)
			.l(w,h*.6)
			.lw(2)
			.s(color)
		}
		,fan : function(ele,color){ //反馈
			var w = 24,h = 20 , j=4, th = h-j;//j箭头
			var can = new canvas(ele,w,h);
			can.cr(0,0,w,h).f(color)
			.fr(0,0,w,th)
			.b()
			.tl(w/2,th)
			.m(-j,0)
			.l(0,j)
			.l(j,0)
			.c()
			.f(color)
		}
		,f10 : function(ele,color){
			var w = 24,h = 20;
			var can = new canvas(ele,w,h);
			can.cr(0,0,w,h).f(color).fr(0,0,w,h).global('destination-out')
			.b().fo('bold 12px serif')
			can.ctx.textAlign = 'center';
			can.ctx.textBaseline = 'middle'
			can.ft('F10',w/2,12)
		}
		,back : function(ele,value,i){
			var w = 75,h = 33,r=5;
			var rw=w*.85,lw=w-rw;
			var nav = $.getClass(ele,'head_return'+i);
			var can = new canvas(nav,w+5,h+5);
			function fill(bool){
				can.cr(0,0,w+5,h+5).sv().tl(2.5,2.5).b().m(lw+5,0)
				.l(0,h/2).l(lw+5,h).l(w-r,h).qc(w,h,w,h-r).l(w,r).qc(w,0,w-r,0).c()
				if(!bool){
					can.lg(0,0,0,h,[
						[0,'#414141']
						,[.5,'#2a2a2a']
						,[.5,'#090909']
						,[1,'#000000']
					])
				}else{
					can.lg(0,0,0,h,[
						[0,'#ff0306']
						,[.5,'#e33331']
						,[.5,'#c80000']
						,[1,'#b4000b']
					])
				}
				can.f(can.grad)
				.lw(1)
				.s('rgba(255,255,255,.2)')
				.fs('#fff').rs()
			}
			fill();
			var txt = $.A({ps:1,t:0,l:3,h:35,lh:35,w:'100%',ft:14,textAlign:'center'},nav.parentNode);
			txt.innerHTML = value;
			$.myAddListener(txt,'mousedown',function(){
				fill(true)
			});
			$.myAddListener(txt,'mouseup',function(){
				fill()
			})
		}
		,kline : function(ele,color){
			var w = 24,h = 20;
			var can = new canvas(ele,w,h);
			can.cr(0,0,w,h)
				.b().m(0,0).l(0,h).l(w,h).lw(2.5).s(color)
				l(w*.2,h*.2);l(w*.5,h*.1);l(w*.8,0);
			function l(l,t){
				can.sv().b().tl(l,t).f(color).fr(0,0,w*.1,h*.6).fr(-w*.05,h*.1,w*.2,h*.4).rs()
			}
		}
		,flow : function(obj,ele,name){ //资金流入
			var tu = $.getClass(ele,name),par=tu.parentNode
				,w = par.clientWidth,h=par.nextSibling.clientHeight
				,num = [obj.yzb,obj.yzs,obj.zlb,obj.zls].sort(up)
				,lw=50,rw=w-lw
				,bh=35,th=h-bh //th为最大高度
				,ww=rw/6; //柱状图大小			
			var max = num[0]
				,yzb = obj.yzb/max*th
				,yzs = obj.yzs/max*th
				,zlb = obj.zlb/max*th
				,zls = obj.zls/max*th;				
			var num = (max/100000000).toFixed(2);	
			var can = new canvas(tu,w,h);
			can.b()
				.f('black')
				.fr(0,0,w,h)
				.b()
				.fo('normal 12px SimSun')
				.fs('#ffffff')
				.ft(num+'亿',0,12)
				.ft('0亿',lw-30,th)
				.b()
				.fo('normal 14px SimSun')
				.ft('主力',lw+ww-20,th+15)
				.ft('散户',w-ww-30,th+15)
				.sv()
				.tl(10,h-15)
				.b()
				.f('red')
				.fr(0,0,20,10)
				.fs('#ffffff')
				.fo('normal 12px SimSun')
				.ft('流入',25,10)
				.f('green')
				.fr(60,0,20,10)
				.fs('#ffffff')
				.ft('流出',85,10)
				.rs()
				.b()
				.tl(lw-.5,.5)
				.m(0,0)
				.l(0,th)
				.l(rw,th)
				.s('#666666')
				//yzb散户流入 yzs-散户流出 zlb--主力流入；zls--主力流出
				z([zlb,zls,yzb,yzs])
			function z(arr){
				$.fors(arr,function(i){
					can.b()
					.f(i%2==0?'red':'green')						
					if(i>1){							
						can.sv().tl(ww,0)
						.fr(ww*i+5*i+.5,th-this,ww,this)
						.rs()
					}else{
						can.fr(ww*i+5*i+.5,th-this,ww,this)
					}
				})
			}
			function up(a,b){
				return b-a;
			}
		}
		,vbs : function(obj,ele,name,e){//f10预测图
			//av = 预测每股  be 实际每股
			var arr = [];
			$.fors(obj,function(){
				arr.push(this.BEPS,this.AVETEPS);
			});
			var ar = arr.sort(up) , al = ar[ar.length-1]
				,num = ar[0]+(al>0?0:parseFloat(-al))
				,min = al>0?0:al/num
				,w = e.width-20,h=200
				,lw = 35,bw = w-lw,bh=h-50.5
				,ww = bw/14,v=ww-5; //宽度
			var th = bh+min*bh;
			var can = new canvas($.getClass(ele,name),w,h);
			can.b().f('#202020')
			.fr(0,0,w,h)
			fr(h-50);
			txt(num,h-50);
			can.b()
			.s('#2d2d2d')
			.sr(lw,.5,bw,h-50)
			.b().sv()
			.tl(lw+5,0)
			.m(0,th)
			.l(bw,th)
			.s('#585858')
			$.fors(obj,function(i){
				z([this.AVETEPS,this.BEPS],i);
			})
			year();
			f1('预测每股收益(元)','#3e77be',0)
			f1('实际每股益(元)','#fad259',w/2)
			function z(a,i){ //树状图
				var  a1 = a[0]/num*(bh-10)
					,a2 = a[1]/num*(bh-10)
					,w0 = i*(ww*2) , h0 = th-a1
					,w1 = w0+ww ,  h1 = th-a2;
				can.b().sv()
				.tl(v*i,0)
				.f('#3e77be')
				.fr(w0,h0,ww,a1)
				/* .s('black')
				.sr(w0,h0,ww,a1) */
				
				.f('#fad259')
				.fr(w1,h1,ww,a2)
				/* .s('black')
				.sr(w1,h1,ww,a2) */
				.rs()
			}
			function up(a,b){
				return b-a;
			}
			function txt(n,h){
				var h=h/6,max = ar[0] , min = al<0?al:0
					,n1 = (max-al)/5;
				f(max,0,15)
				f(max-n1,1,17)
				f(max-n1*2,2,21)
				f(max-n1*3,3,24)
				f(max-n1*4,4,26)
				f(al,5,28)
				function f(a,i,t){
					can.b().sv()
					.tl(0,i*h)	
					.fo('normal 12px SimSun')
					.fs('white')
					.ft(a!=0?a.toFixed(2):0,0,t)
					.rs()
				}
			}
			function fr(h){
				h = h/6
				for(var i=0;i<6;i++){
					if(i%2==0){					
						can.b().sv().tl(lw,i*h)
						.f('#242424')
						.fr(0,0,bw,h)
						.s('#2d2d2d')
						.sr(0,0,bw,h)
						.rs()
					}
				}
			}
			function year(){//2010年
				f(2010,.5)
				f(2011,3.5)
				f(2012,6.5)
				f(2013,9.5)
				f(2014,12)
				
				function f(t,i){
					can.b().sv()
					.tl(ww*i,h-50)
					.fo('normal 14px SimSun')
					.fs('white')
					.ft(t,0,20)
					.rs()
				}
			}
			function f1(t,c,l){
				can.b().sv()
				.tl(l,h-20)
				.f(c)
				.fr(0,0,10,10)
				.fo('normal 12px SimSun')
				.fs('white')
				.ft(t,15,10)
				.rs()
			}
		}
		,current : function(ele,w,h){ //栏目当前状态
			var can = new canvas(ele,w,h)
				,t = 5
				,h = h-t-3;
			can.cr(0,0,w,h).b().m(w/2,0).l(w/2+7,t).l(w/2-7,t).c().f('#ff0306').tl(0,t)
			yuan(can,w,h,5)
			can.lg(0,0,0,h,[
				 [0,'#ff0306']
				,[.39,'#e13533']
				,[.39,'#bc0000']
				,[1,'#b4000b']
			])
			.f(can.grad).b().tl(0,h*.39).f('rgba(255,255,255,.5)').fr(0,0,w,.5)
		}
		,desk_iphone : function(ele,w,h){
			var can = new canvas(ele,w,h)
				,jw = 7 , jh = 10
				,lw = 12 , bw = 3;
			can.b().m(5,3.5)
			.l(0,3.5).l(0,h).l(w,h).l(w,h-6).lw(3).s('#383838')
			.b().m(w-jw,0).l(w,jh/2).l(w-jw,jh).c().f('#383838')
			.b().m(bw,jh+2).qc((w-jw-bw)/2,jh/2-2.5,w-jw,jh/2-2.5).l(w-jw,jh/2+2).qc((w-jw)/2,jh/2,bw,jh+2).c().f('#383838')
		}
		,desk_jian : function(ele,w,h){
			var can = new canvas(ele,w,h)
			can.b().m(0,0).l(w,0).l(w/2,h).c().f('#cececd')
		}
		,ad_qq : function(ele,w,h){
			var can = new canvas(ele,w,h)
				,r = 1.5 , fh = 2;
			function y(y){
				can.b().a(r,y,r,0,Math.PI*2).f('#384852')
			}
			function H(y){
				can.b().f('#384852').fr(r+3,y,w-r+3,fh)
			}
			y(r);y(h/1.5-r*1.3);y(h-r);H(0);H(h/1.5-fh*1.5);H(h-fh);
		}
	};
})(window);
