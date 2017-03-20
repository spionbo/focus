import Pop from './index.js';
import '../css/explain';
module.exports = {
	open : function(){
		var text = `
			<ul>
				<li>
					<span class='demoSpan1'></span>
					<div class='text'>活动时间：`+info.startTime.substr(0,8)+` - `+info.endTime.substr(0,8)+`</div>
				</li>
				<li>
					<span class='demoSpan1'></span>
					<div class='text'>30天以下投资期限产品不参加本次掷骰子活动。活动期间，每日登录活动页面可免费获得1个大富翁福袋，拆开可随机获得红包或加息券奖励</div>
				</li>
				<li>
					<span class='demoSpan1'></span>
					<div class='text'>单笔投资每满5000元≥30天产品可再获得1次掷骰子机会。如单笔投资20000元即获得4次机会，以此类推。单笔投资每满30000元≥90天产品可在获得6次普通骰子机会的同时，额外获得1次遥控骰子机会，以此类推。使用遥控骰子可自己指定想获得的点数。</div>
				</li>
				<li>
					<span class='demoSpan1'></span>
					<div class='text'>每掷一次骰子，即走对应的步数。地图共118步，每步对应不同的奖品，奖品包括：10~200元红包、0.5%~2%加息券，红包加息券额度随机</div>
				</li>
				<li>
					<span class='demoSpan1'></span>
					<div class='text'>每逢第10步及10的倍数，可即时抽奖一次，如非即时抽奖而关闭页面，视为自动放弃。奖品包括：双立人刀具套装、1000元京东卡、200元京东卡、100元京东卡、50元京东卡、30元京东卡、10元京东卡、小米移动电源等</div>
				</li>
				<li>
					<span class='demoSpan1'></span>
					<div class='text'>活动结束前，到达终点的用户都可以获得300元京东卡1张，率先到达的前3名分别可获得5000元京东卡、ipad air2、2000元携程卡（不同时享受300元京东卡奖品）</div>
				</li>
				<li>
					<span class='demoSpan1'></span>
					<div class='text'>到达终点指正好到达第118步，如在第116步掷到5点，则会走到终点后退回第115步，以此类推；如已正好到达终点，则视为已参与本活动，尚剩余未能使用的掷骰子机会，一律无效。</div>
				</li>
				<li>
					<span class='demoSpan1'></span>
					<div class='text'>实物奖品将在活动结束后15个工作日内联系您并发放，通知后15个工作日未领取则默认主动放弃领奖资格。</div>
				</li>
				<li>
					<span class='demoSpan1'></span>
					<div class='text'>如发现并核实作弊行为，多融财富有权取消该用户获奖资格</div>
				</li>
				<li>
					<span class='demoSpan1'></span>
					<div class='text'>活动最终解释权归多融财富所有</div>
				</li>
			</ul>
		`;

		var pop = new Pop({
			title : '&nbsp;',
			content : text,
			okBtn : true,
			cancelBtn:false,
			okTxt:'确定',
			superClass : 'explain',
			timing : 'bounceIn', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
		});
		pop.element.submit.remove();
		pop.element.close.html('');
		pop.element.title.addClass('img-size').attr({'data-height':80})
		pop.element.bg.addClass('img-size').attr({'data-width':684,'data-height':929});
		T.setImgSize();
	}
};
