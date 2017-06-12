const http = ''
module.exports = {
    status : http+'/activity/tycoon-settled/status.do', //活动状态
    participate : http+'/activity/tycoon-settled/participate.do', //渠道用户
    userMessage : http+'/activity/tycoon-settled/user-message.do', //用户信息
    
    dicePlay : http+'/activity/tycoon-settled/dice-play.do', //开始投骰子
    walkRank : http+'/activity/tycoon-settled/walk-rank.do', //排行
    creditsMsg : http+'/activity/tycoon-settled/credits-msg.do', //积分
    exchange : http+'/activity/tycoon-settled/prize-exchange.do', //积分兑换
    record : http+'/activity/tycoon-settled/prize-record.do', //兑换记录及奖品记录

    
}