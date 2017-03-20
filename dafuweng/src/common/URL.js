const http = ''
module.exports = {
    status : http+'/activity/tycoon/status.do', //活动状态
    participate : http+'/activity/tycoon/participate.do', //渠道用户
    getlucky : http+'/activity/tycoon/lucky-bag.do', //每天一次免费福袋 - 查看
    setlucky : http+'/activity/tycoon/lucky-bag/get.do', //每天一次免费福袋 - 领取
    welcome : http+'/activity/tycoon/welcome.do', //5. 剩余投掷骰子机会 - 活动欢迎页(剩余骰子机会)
    map : http+'/activity/tycoon/on-map.do', //5. 6. 用户投骰子页面 - 用户在地图上的位置
    dicePlay : http+'/activity/tycoon/dice-play.do', //开始投骰子
    records : http+'/activity/tycoon/member-records.do', //用户中奖记录
    contact : http+'/activity/tycoon/contact-add.do', //地址
    raffle : http+'/activity/tycoon/raffle.do', //抽奖
    realPrizes : http+'/activity/tycoon/real-prizes.do', //终点奖品
    contactGet : http+'/activity/tycoon/contact-get.do', //获取联系人信息
}