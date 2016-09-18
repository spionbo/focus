import 'publicCss';
import './css/style';
import T from 'T';
import pop from './js/pop.js';
{
	const share = {
		 title : '新时代证券开户交易立送30元现金和15年爱投顾投资顾问冠军王伦投资内参'
		,content : '新时代开户立得30元现金红包，豪送超值王伦强者恒强内参，活动时间：9月19日-10月16日'
		,pic : 'http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160913/app/share.png'
		,url : window.location.href
	}
	,allUrl = 'http://sjcms.jrj.com.cn/app_tg.php?channel=V4V6497Y9&tgqdcode=45NHQDAM8'
	,URL = {
		 weixin_ios : allUrl
		,ios : allUrl
		,android : allUrl
	};
	T.init({
		loadDone : function(){
			T.setHtml5();
			T.animate();
			T.start();
		}
		,animate : function(){
			var wrap = $('.container');
			wrap.css3({transform:'translateY(0px)',opacity:1});
			{//微信平台分享
				if(T.weixin){
					setTimeout(()=>{
						require.ensure([],()=>{
							const InitWeChatShare = require('wechatShare');
							InitWeChatShare({
								shareTitle: share.title,
								shareLink: share.url,
								shareDesc:  share.content,
								shareImg: share.pic
							})
						});
					},1000);
				}
			}
			{//分享
				const p = new pop();
				p.share('.main .share',share);
				const p1 = new pop();
				p1.share('.book-footer .submit .btn',share);
				$('.main .share,.book-footer .submit .btn').click(function(event) {
					window.dcsMultiTrack('DCS.dcsuri', 'ITOUGU_focus20160913_share', 'WT.ti', 'ITOUGU_focus20160913_share');
				});
			}
			{//开户
				$('.main .activity .btn').click(function(event) {
					T.btnEvent.call(this,()=> {
						window.location.href = 'http://itougu.jrj.com.cn/marketing/zhuanti/common/XSDZQ_i.jspa'
					},URL);
					window.dcsMultiTrack('DCS.dcsuri', 'ITOUGU_focus20160913_open', 'WT.ti', 'ITOUGU_focus20160913_open');
				});
			}
			{//王伦内参及他的头像
				$('.book-top .btn,.book-top .about .img').click(()=>{
					T.btnEvent.call(this,()=> {
						window.location.href = 'http://itougu.jrj.com.cn/account/adviser/091124010076736396/'
					},URL);
					window.dcsMultiTrack('DCS.dcsuri', 'ITOUGU_focus20160913_user', 'WT.ti', 'ITOUGU_focus20160913_user');
				});
			}
			{//分享（3处）的UV

			}
		}
		,start : function(){
			setTimeout(()=>{
				require.ensure([],()=>{
					const star = require('./js/start.js');
					const stars = new star({
						dome : $('.main .star-dian')
					});
				});
			},1000)
		}
	});
}