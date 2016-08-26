/*
数据交互上面的问题，都是北京提供，
由王梓骅负责处理的，如果我这边说的不详细或不明白，可以问王梓骅
*/

//================ 首 页 ============
//首页 大盘指数，行业板块，涨跌排行
'http://m.stockstar.com/data/home/qi.js?a=1406614414055'

//首页 新闻
'http://m.stockstar.com/data/news/stock_news.js?a=1406614414055' 

//涨跌排行 ： a升序; d降序; pl:涨幅; ta:成交量  sort为值
'http://m.stockstar.com/data/home/{sort}.js?a=1406614414055'


//以上a=1406614414055 为传输的参数，具体王梓骅知道

//================ end 首页 =========

//=================== 首页资讯 =====================
//图片
'http://rss.jrj.com.cn/webappimg.js?a=1406614414055'
//头条
'http://m.stockstar.com/data/news/finance_news.js?a=1406614414055'
//研报
'http://m.stockstar.com/data/news/V_BS_RRPT_RRPTOV.js?a=1406614414055'
//公告
'http://m.stockstar.com/data/news/V_BS_ANN_MLMS.js?a=1406614414055'
//解盘
'http://m.stockstar.com/data/news/stock_news.js?a=1406614414055'

//=================== end 首页资讯 =====================


//================ 资金 =========
//个股资金
'http://m.stockstar.com/data/fund/ggzj_zjin_d.js?a=1406614414055'
//行业资金
'http://m.stockstar.com/data/fund/hyzj.js?a=1406614414055'
//连续流入
'http://m.stockstar.com/data/fund/V_BS_QUICKWIN2_ZJCONTNETIN.js?a=1406614414055'

//个股资金 asc升序; desc降序; pl:涨幅; zjin:净流入  sort为值
'http://m.stockstar.com/data/fund/{sort}.js?a=1406614414055'

//连续流入 asc升序; desc降序; ZJNETIN:净流入; NETINDAYS:连续流入天数  sort为值
'http://m.stockstar.com/data/fund/{sort}.js?a=1406614414055'

//================ end 资金 =========

//======== 个股资讯 ==============

'http://rss.jrj.com.cn/stock/webapp000050.js'
'http://canal.stockstar.com/Base/V_JRJ_REMOTING_NAVINSTITUTESTOCKPOOL/full=1&field=RES_ID,DECLAREDATE,RPT_TITLE&limit=20&sort=DECLAREDATE%20desc&filter-STOCKCODE-bO=000050'
'http://canal.stockstar.com/Base/V_BS_ANN_MLMS/full=1&field=FLAGANN,ANNDATE,EDTTI,ANNSOU&sort=ANNDATE%20desc&limit=20&filter-ISVALID-int=1&filter-FLAGCT-int=1&filter-SEITGC.SECODE-bO=000050'

//点击资讯 查看内容页
//新闻
'http://rss.jrj.com.cn/2014/03/17061316874308.js'
//研报
'http://canal.stockstar.com/Base/V_BS_RRPT_RRPTOV/full=1&field=FLAGRSHRPT,TIRSHRPT,ORGCNABB,SMRSHRPT&filter-FLAGRSHRPT-str=000000000000090l33'
//公告
'http://canal.stockstar.com/Base/V_BS_ANN_MLCT/full=1&field=FLAGANN,CTCTT&filter-FLAGANN-str=00000000000009srti'
//======== end 个股资讯 ==============

//=========== 个股资金 =================
'http://hqquery.jrj.com.cn/szj.do?c=code,name,zlb,zls,zlin,b1,b2,b3,b4,s1,s2,s3,s4,j1,j2,j3,j4,yzb,yzs&ids=000050'
'http://hqquery.jrj.com.cn/szj.do?c=code,name,zlb,zls,zlin,b1,b2,b3,b4,s1,s2,s3,s4,j1,j2,j3,j4&ids=000050'
'http://canal.stockstar.com/Base/V_JRJ_STK_NETRATIO_PERIOD/full=1&field=STOCKCODE,STOCKNAME,ZZJIN_5DAY,ZZJIN_10DAY,ZZJIN_20DAY,ZZJOUT_5DAY,ZZJOUT_10DAY,ZZJOUT_20DAY&filter-STOCKCODE-str=000050'
//=========== end 个股资金 =================

//================= f10 ==========
'http://m.stockstar.com/data/f10/000050.js?a=1406616758387'
//================= end f10 ==========
