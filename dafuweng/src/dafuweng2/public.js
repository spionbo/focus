import {wealthAndLottery} from '../common/URL';
module.exports = {
    api : 'https://shimo.im/spreadsheet/GAPmGmOMnQ4RMvPa/qZrqr',
    money : 0, //财富值
    expectedPrize : '', //预计奖品
    cumulative : 0 , //再累计
    available : '', //可获得 奖品
    prize : '',//实际获取奖品
    getPrize : function(){ //一次性请求
        var self = this;
        if(!T.uid) return;
        T.ajax({
            url : wealthAndLottery,
            data : { uid : T.uid},
            success : function(_data){
                var map = _data.map;
                self.money = map.coin;
                self.prize = map.expectGet;
                self.cumulative = map.need;
                self.expectedPrize = map.expectGet;
                self.available = map.superiorGift;
                self.full = map.full;
            }
        })
    },
    update : function(){ //更新

    },
}
