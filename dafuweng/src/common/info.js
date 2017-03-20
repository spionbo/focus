import {status,map,welcome} from './URL';
import requirePop from '../pop/requirePop.js';
var info = {
	api : 'https://shimo.im/spreadsheet/GAPmGmOMnQ4RMvPa/1nP14' , 
    name : '金融财富大富翁',
	version : '1.0' , 
    startTime : null,
    endTime : null,
    status : -1 ,
    mapLength : 118 , //总共118步
    init : function(){
        info.getTime(()=>{});
        info.onmap(()=>{});
    },
    click : function( callback ){
        info.getTime(()=>{
            var status = info.status , text = '';
            if(status == 0 ){ //进行中
                return callback();
            }
            setTimeout(()=>{
                requirePop('mainchuowutisih',{
                    props: {
                        status : info.status,
                        startTime : info.startTime,
                        endTime : info.endTime,
                        transition : 'bounceIn',
                        closeCallback : function(){
                            T.callApp.home();
                        }
                    }
                },'noStart');
            },500);
        })
    },
    getTimes : [],
    getTime : function(callback){
        if(info.startTime){
            return callback && callback()
        }
        T.getAppInfo();
        info.getTimes.push(callback);
        if(info.getTimes.length<=1){
            T.ajax({
                url : status , 
                callback : true,
                data : {
                    channel : 'H5',
                    uid : T.uid
                },
                success : function( _data ){
                    info.startTime = new Date(_data.map.startTime).Format('yy/MM/dd hh:mm:ss')
                    info.endTime = new Date(_data.map.endTime).Format('yy/MM/dd hh:mm:ss');
                    info.status = _data.map.status;
                     info.getTimes.map(( callback )=>{
                        callback && callback();
                    })
                }
            })
        }
    },
    getDices : [],
    getDice : function( callback ){
        if(!T.uid) return;
        if(info.diceChance !=void 0 ) return callback && callback();
        info.getDices.push(callback);
        if(info.getDices.length<=1){
            info.getTime(()=>{
                if(info.status!=0) return;
                T.ajax({//掷骰机会
                    url : welcome , 
                    callback : true,
                    data : {
                        uid : T.uid
                    },
                    success : function( _data ){
                        //normalChance - 普通骰子机会, controllableChance - 遥控骰子 机会
                        info.diceChance = _data.map.diceChance;
                        info.controllableChance = _data.map.controllableChance; //遥控
                        info.normalChance = _data.map.normalChance; //普通
                        info.getDices.map(( callback )=>{
                            callback && callback();
                        })
                    }
                });
            })
        }
    },
    map : {},
    onmaps : [],
    onmap : function( callback ){
        if(!T.uid) return;
        if(info.map.pointOnMap !=void 0 ){
            callback && callback(info);
        }else{
            info.onmaps.push(callback);
            if( info.onmaps.length<=1){
                info.getTime(()=>{
                    if(info.status!=0) return;
                    T.ajax({//掷骰机会
                        url : map , 
                        callback : true,
                        data : {
                            uid : T.uid
                        },
                        success : function( _data ){
                            info.map = _data.map;
                            info.onmaps.map(( callback )=>{
                                callback && callback();
                            })
                            /*diceChance:4 //剩余骰子机会
                            pointOnMap: 23 //地图上的位置
                            achievePrizePoint = false; //是否抽奖点 
                            hasRaffle = false; 表示 如果在抽奖点上， 是否有抽奖机会
                            rank{[138****0001, 138****0002, 138****0003, 138****0004]}*/
                        }
                    });
                });
            }
        }
    },
	author : 'bo.peng',
	http : 'http://www.duorongcf.com',
	email : 'spion@qq.com',
}
module.exports = info;