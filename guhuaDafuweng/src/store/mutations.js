import {
    status , participate ,
    userMessage
} from '../common/URL';
import requirePop from '../pop/requirePop';
module.exports = {
    getInfo(state , callback) {
        T.ajax({
            url: status,
            callback : true
        }).then((data) => {
            $.extend(state,data.map);
            //state.status = data.map.status;
            if(state.status != 0){
                requirePop('notStart');
            }else{
                callback();
            }
        });
    },
    updateData(state , obj ){
        state.currentPoint = obj.nextPoint;
        state.round = obj.getRound;
        state.currentPointMonth = obj.currentPointMonth;
        state.roundMonth = obj.roundMonth;
    },
    participate(state) {
        T.ajax({
            url : participate,
            callback : true,
            data : { uid : T.uid }
        }).then( data =>{
            if(data.flag == false){
                requirePop('juedao',{
                    props: {
                        content : (data.errorMsg||'渠道用户不参加活动！'),
                        transition : 'rotate3d',
                        okTxt : '回首页',
                        closeCallback : function(){
                            T.callApp.home();
                        }
                    }
                },'publicTips');
            }
        })
    },
    userMessage(state){
        if(!T.uid) return;
        T.ajax({
            url : userMessage,
            data : { uid : T.uid }
        }).then( data =>{
            $.extend(state,data.map);
            state.integral = data.map.userCoin.points;
        })
    },
    updatePrize(state , obj){
        //state.prize = {...state.obj,obj}
        //state.diceRemainChance -= 1; //骰子机会减少
        $.extend(state.prize,obj);
    }
}