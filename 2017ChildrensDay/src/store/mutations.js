import requirePop from '../pop/requirePop';
import {
    status ,
    vip ,
    lottery,
    all
} from '../common/URL';
module.exports = {
    getInfo(state,callback) {
        T.ajax({
            url: status,
            callback : true
        }).then((data) => {
            $.extend(state,data.map);
            state.startTime = new Date(data.map.startTime).Format('yyyy-MM-dd hh:mm:ss');
            state.endTime = new Date(data.map.endTime).Format('yyyy-MM-dd hh:mm:ss');
            //state.status = data.map.status;
            if(state.status != 0){
                requirePop('notStart');
            }else{
                callback();
            }
        });
    },
    vip() {
        if(!T.uid) return;
        T.ajax({
            url: vip,
            data : {uid:T.uid},
            callback : true
        }).then((data) => {
            if(!data.flag){
                requirePop('publicTips',{
                    props:{
                        title : '提示',
                        content : '<center>'+data.errorMsg+'</center>',
                        closeCallback : function(){
                            T.callApp.home();
                        }
                    }
                });
            }else{
                
            }
        });
    },
    all(state,callback){
        T.ajax({
            url : all , 
            data : {
                uid : T.uid
            }
        }).then(data=>{
            state.userCoin =  data.map.userCoin;
            callback(data);
        })
    },
    haveFree(state , n){
        state.isHaveFree = n;
    }
}