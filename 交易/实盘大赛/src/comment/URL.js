const http = 'http://zqtrc.yun.pingan.com'
//const http = 'http://jrj.yun.pingan.com'
module.exports = {
	checksignup : http+'/match/real/account/checksignup', //检查是否报名
	incomerank : http+'/match/real/rank/incomerank', //——收益排名
	accountinfo : http+'/match/real/account/accountinfo', //——账户信息（个人明细页）
	record : http+'/match/real/position/record', //——交易动态（调仓记录）
	current : http+'/match/real/position/current', //——当前持仓（实时）
	hisranklist : http+'/match/real/rank/hisranklist', //——榜单历史
	ranklistdetail : http+'/match/real/rank/ranklistdetail',//——榜单明细
	yieldcurve : http+'/match/real/rank/yieldcurve',//——收益图
	userImg : 'http://i.jrj.com.cn/pass/headPicsV2.jspa',//
}