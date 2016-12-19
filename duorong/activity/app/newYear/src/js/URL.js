const http = ''; //http://192.168.0.245:8888
module.exports = {
	prizes : http+'/activity/prizes.do', //会判断渠道用户 , 所有奖品
	address : http+'/activity//address-add.do',//添加收货地址
	raffle : http+'/activity/member-raffle.do', //用户抽奖
	exchange : http+'/activity/exchange-prize.do', //兑换 
	goldcoin : http+'/activity/goldcoin-detail.do', //金币明细
	goldcoinget : http+'/activity/goldcoin-detail-get.do', //金币明细
}