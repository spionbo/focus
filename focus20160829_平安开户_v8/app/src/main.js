import '../../../common/css/global.css';
import './css/main.css';
import T from '../../../common/js/global.js';
import $ from 'webpack-zepto';
import pop from './js/pop.js';
{
	const share = window.shareInfo;
	T.init({
		loadDone : function(){
			var wrap = $('.container');
			wrap.css3({transform:'translateY(0px)',opacity:1});
			{//微信平台分享
				if(T.weixin){
					require.ensure([],()=>{
						const InitWeChatShare = require('../../../common/js/wechat-share.js');
						InitWeChatShare({
							shareTitle: share.title,
							shareLink: share.url,
							shareDesc: share.content,
							shareImg: share.pic
						})
					});
				}
			}
			{//分享
				const p = new pop();
				p.share('.share-btn',share);
			}
			{//点击事件
				$('.main .btn1').click(()=>{
					T.btnEvent.call(this,()=> {
						require.ensure([],()=>{
							const callApp = require('../../../common/js/callApp.js');
							callApp.openList();
						});
					});
					window.dcsMultiTrack('DCS.dcsuri', 'ITOUGU_focus20160830_OPEN', 'WT.ti', 'ITOUGU_focus20160830_OPEN');
				});
				$('.leve_btn').click(()=>{
					const p1 = new pop();
					p1.text();
					window.dcsMultiTrack('DCS.dcsuri', 'ITOUGU_focus20160830_LEVE', 'WT.ti', 'ITOUGU_focus20160830_LEVE');
				})
			}
		}
	});
}