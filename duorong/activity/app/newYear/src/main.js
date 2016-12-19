import '../css/style';
import content from './module/content.vue';
import '../../../common/js/modules/time.js';

window.activity = { //初始化
	prvTime : '2016/12/15',
	startTime : '2016/12/16',
	TimeText : '2016年12月20号-2017年1月2号',
	endTime : '2017/1/3',
	getPrize : '2017年1月10', //兑奖时间
	tel : '4006-293-993',
	status : 1 // 1活动未开始 2活动进行中 3活动结束
}
timeInit({
	timeElem : null,
	prev : activity.prvTime,
	prevCallback : function(){
		activity.status = 1;
	},
	start : activity.startTime,
	startCallback : function(){
		activity.status = 2;
	},
	end : activity.endTime,
	endCallback : function(){
		activity.status = 3;
	},
	getTime : true
})
new Vue({
	el : 'body',
	components : { content }
});
