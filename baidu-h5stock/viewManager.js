(function(){
$.extend($ , {
	/*
	 * viewTo
	 * 
	 * 百度链接参数
	 * 1、首页
	 * page表示进入的具体页面类型( 类型有home\news\fund\feedback ) ( 默认为首页 )
	 * 
	 * 示例: m.stockstar.com?page=fund
	 * (注: 首页home可不带参，m.stockstar.com等于m.stockstar.com?page=home)
	 * 
	 * 2、实时行情页
	 * code表示 股票等代码
	 * type表示 s: 股票;
	 * page表示进入的具体页面类型( 类型有timeline\kline\news\fund\f10 ) ( 默认为分时页 )
	 * 
	 * 示例: m.stockstar.com?code=600383&type=s&page=kline
	 * 
	 * 3、大盘指数页
	 * code表示 指数代码
	 * type表示i: 指数; IF:  股指期货 ( 默认为股票 );
	 * page表示进入的具体页面类型( 类型有timeline\kline\news\fund\ ) ( 默认为分时页 )
	 * 
	 * 示例: m.stockstar.com?code=000001&type=i&page=fund 或 m.stockstar.com?code=IF&type=IF&page=kline
     *
     * 4、新闻正文页
	 * type表示i: 指数; s: 股票; IF:  股指期货 ( 默认为股票 );
     * news_category表示新闻类别:  h:头条，j:解盘，r:研报，a:公告，stk_n:个股新闻，stk_r:个股研报，stk_a:个股公告
	 * page表示进入的具体页面类型( 类型有home\news\fund\feedback\timeline\kline\news\fund\f10 )
	 * newsid表示新闻id，有两种形式：1.'00000000000005drr2'（研报和公告）；2.'2012/05/07162313021295' （'年/月/日时分+8位id'）
     *
	 * 示例: m.stockstar.com?code=600383&type=s&page=kline
     *       m.stockstar.com?newsid=2012/05/07162313021295&type=s&news_category=h&page=news
     *       m.stockstar.com?newsid=00000000000005drr2&type=s&news_category=stk_r&page=news&code=600000
	 * 
	 */
	viewTo: function (){
	    var obj = {};

        

	    //首页
	    if ($.getPara('code') == '') {

	        obj['page'] = $.getPara('page') == '' ? 'home' : $.getPara('page');
	        //0首页或10个股20大盘
	        $.status = 0;


	        //新闻正文页
	        if ($.getPara('newsid') != '') {
	            obj['id'] = $.getPara('newsid');
	            obj['type'] = ($.getPara('type') == '' ? '0' : $.getPara('type'));
	            obj['news_category'] = ($.getPara('news_category') == '' ? '0' : $.getPara('news_category'));
	            obj['code'] = $.getPara('code');
	            $.guideToNews(obj);
            }
	        else {
	            $.guideToMain(obj);
	        }
		//个股页
        } else {
            obj['code'] = $.getPara('code');
            obj['page'] = ($.getPara('page') == '' ? 'timeline' : $.getPara('page'));
            //0首页或10个股20大盘
            $.status = 10;

            //新闻正文页
            if ($.getPara('newsid') != '') {
                obj['id'] = $.getPara('newsid');
                obj['type'] = ($.getPara('type') == '' ? 's' : $.getPara('type'));
                obj['news_category'] = ($.getPara('news_category') == '' ? '0' : $.getPara('news_category'));

                //股票页
                if (obj['type'] == 's') {
                    $.guideToNews(obj);
                    //大盘指数页
                } else {
                    $.guideToNews(obj, 'dapan');
                }
            }
            else {
                obj['type'] = ($.getPara('type') == '' ? 's' : $.getPara('type'));
                
                //股票页
                if(obj['type'] == 's'){
                	$.guideToStk(obj);
                //大盘指数页
                }else{
                	$.guideToStk(obj, 'dapan');
                }
            }
		}
	},
	
	guideToMain: function (obj){
		var hx = {
				  'home': 0,
				  'news': 1,
				  'fund': 2,
				  'feedback':4
				  },
			index = (hx[ obj['page'] ] ? hx[ obj['page'] ] : 0);
		//控制底部导航类型( 0首页类或1股票类 )
		$.update.navValue(0);
		
		//控制底部导航当前选中
		setTimeout(function(){$.update.Nav(index)},400);

		$.update.Content(index);
//		$.addValue();
		
		//控制页面内容跳转至
		$.jump(index);
		
		//控制头部切换至
		$.update.Head(index);
	},
	
	guideToStk: function (obj, dapan){	
		var hx = {
				  'timeline': 0,
				  'kline': 1,
				  'news': 2,
				  'fund': 3,
				  'f10':4
				  },
			dapanHx = {
				  'timeline': 0,
				  'kline': 1,
				  'news': 2,
				  'fund': 3
			},
			index = (dapan == 'dapan'?(dapanHx[ obj['page'] ] ? dapanHx[ obj['page'] ] : 0):(hx[ obj['page'] ] ? hx[ obj['page'] ] : 0));

		$.getStkObj( {'code': 'code_' + obj['code']} , function (){
			$.k = 1; //用于进大盘和个股
			//大盘
			if(dapan == 'dapan'){
				$.status = 20;
				//$.update.go({'name':$.curStk.name, 'code': obj['code']},20,index);
			}
			
			//控制底部导航类型( 0首页类或1个股类2大盘类 )
			$.update.navValue(dapan == 'dapan'?2:1);

			//控制底部导航当前选中
			$.update.Nav(index);
			if(index==1){
				$.update.Content(0);
				$.jump(0);
				setTimeout(function(){$.update.SMSG('K')},300);
			}else{
				$.update.Content(index);
	//			$.addValue();
				
				//控制页面内容跳转至
				$.jump(index);
			}
			
			//控制头部切换至
			$.update.Head(index);
		}, obj['type']);
	},

	guideToNews: function (obj, dapan) {
	    //新闻类型      h:头条，j:解盘，r:研报，a:公告，stk_n:个股新闻，stk_r:个股研报，stk_a:个股公告
	    var t = {
	        'h': 0,
	        'j': 1,
	        'r': 2,
	        'a': 3,
	        'stk_n': 20,
	        'stk_r': 21,
	        'stk_a': 22
	    },
		news_category = (t[obj['news_category']] ? t[obj['news_category']] : 0),
	    hx = {
	        'home': 0,
	        'news': 1,
	        'fund': 2,
	        'feedback':4
	    },
	    stkHx = {
	        'timeline': 0,
	        'kline': 1,
	        'news': 2,
	        'fund': 3,
	        'f10': 4
	    },
			dapanHx = {
			    'timeline': 0,
			    'kline': 1,
			    'news': 2,
			    'fund': 3
			},
		index = (obj.code == '' ? (hx[obj['page']] ? hx[obj['page']] : 0) :
                (dapan == 'dapan' ? (dapanHx[obj['page']] ? dapanHx[obj['page']] : 0) : (stkHx[obj['page']] ? stkHx[obj['page']] : 0)));

        
	    $.curTab = news_category > 3 ? news_category - 20 : news_category;//设置当前tab
	    if (obj.code == '') {
	        $.set_cookie = 1;
	        //控制底部导航类型( 0首页类或1个股类2大盘类 )
	        $.update.navValue(0);
	        //控制底部导航当前选中
	        $.update.Nav(index);
	        
	        $.update.Content(index);
//	        $.addValue();
	        //控制页面内容跳转至
	        $.jump(index);
	        $.update.data({ id: obj.id }, 11, news_category, 0);
        }
	    else {
	        $.getStkObj({ 'code': 'code_' + obj['code'] }, function () {
	            $.set_cookie = 2;

	            //大盘
	            if (dapan == 'dapan') {
	                $.status = 20;
	                $.update.go({ 'name': $.curStk.name, 'code': obj['code'] }, 20, index);
	            }
	            //控制底部导航类型( 0首页类或1个股类2大盘类 )
	            $.update.navValue(dapan == 'dapan' ? 2 : 1);
	            //控制底部导航当前选中
	            $.update.Nav(index);
	            
	            $.update.Content(index);
//	            $.addValue();
	            //控制页面内容跳转至
	            $.jump(index);
	            $.update.data({ id: obj.id }, 11, news_category, 0);
            }, obj['type']);
	    }
	},
	
	getPara: function(paraName){ 
		 var str=window.location.href;
		 if (str.indexOf(paraName)!=-1)
		 {
		  var pos_start=str.indexOf(paraName)+paraName.length+1;
		  var pos_end=str.indexOf("&",pos_start);
		  if (pos_end==-1)
		  {
		   return str.substring(pos_start);
		  }
		  else
		  {
		   return str.substring(pos_start,pos_end)
		  }
		 }
		 else
		 {
		  return '';
		 }
	}
	
});
})();