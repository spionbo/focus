//https://shimo.im/sheet/3FDuhYVvoQA838kX/AgKt0
import * as actions from './actions';
import mutations from './mutations';
export default new Vuex.Store({
    actions,
    mutations,
    state : {
        status : -1,
        vip : -1,
        userCoin : 0,
        startTime:'',
        endTime:'',
        isHaveFree : -1
    }
});