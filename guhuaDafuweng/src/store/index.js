import * as actions from './actions';
import mutations from './mutations';
export default new Vuex.Store({
    actions,
    mutations,
    state : {
        status : -1,
        currentPoint : 0,//当前位置，
        round : 0 ,//当前圈数；
        roundMonth : 0,
        currentPointMonth : 0,
        evenNumbersDice : 0,//双数机会
        oddNumbersDice : 0,//单数机会，
        //todayChance : 0,//当日机会（0为没有，1为有）
        diceRemainChance : 0,//总机会
        integral : 0 , //积分
        prize : {//奖品相关
            diceNumList : 0 ,//获得的色子数；
            achievePrizePoint : 0 , //是否获得一次机会；
            getCredits : 0 , //获得的积分数；
            getRound : 0 , //当前圈数；
            nextPoint : 0 , //走到的位置；
            prizeAmount : 0, //奖品的金额；
            prizeName : 0 , //奖品的名字
            raisedRates : 0 , //加息额度（type =2 时）；
            prizeType : 0 //奖品类型；（1：红包 2：加息券 5：实物）
        }
    }
});