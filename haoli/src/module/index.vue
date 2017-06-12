<style scoped>
@import '../style/global';
    .main{
        .banner{
            @mixin contain '../images/banner.jpg'
        }
        .text{
            text-align:center;
            h2{ font-weight:normal; color:#fde31c;}
            p{ color:#fff;}
        }
        .submit{

            .btn{ margin:0 auto; text-align:center; @mixin contain '../images/btn1.png'; color:#fff; }
        }
        .about{
            text-align:right;
            padding:20px 20px; 
            .btn{
                display:inline-block;
                color:#edceff;
                padding:5px 15px;
                background:#856bff; box-shadow:3px 3px 5px rgba(0,0,0,.35) inset;
                border-radius:10px; 
            }
        }
    }
</style>
<template>
<div class='module-scroll'>
    <div class='main'>
        <div class='money'>
            <div class='m_1'></div>
            <div class='m_2'></div>
            <div class='m_3'></div>
            <div class='m_4'></div>
            <div class='m_5'></div>
            <div class='m_6'></div>
            <div class='m_7'></div>
            <div class='m_8'></div>
            <div class='m_9'></div>
            <div class='m_10'></div>
        </div>
        <div class='banner img-size' data-height='605'></div>
        <div class='text img-size' data-paddingTop='40' data-paddingBottom='40' data-lineHeight='50'>
            <h2 class='img-size' data-fontSize='36'>投资≥30天以上产品即可参加排名</h2>
            <p class='img-size' data-fontSize='30'>实时排名，按照财富值排名</p>
        </div>
        <div class='submit'>
            <div @click='Investment' class='btn img-size' :class='{gray:P.status==1}' data-width='500' data-height='72' data-lineHeight='72'>{{P.status==1?'活动已结束':'立即投资'}}</div>
        </div>
        <div class='about'>
            <div class='btn jiang img-size' @click='winning' data-fontSize='24'>中奖名单</div>
            <div class='btn acivity img-size' @click='acivity' data-fontSize='24'>活动规则</div>
        </div>

        <Rank></Rank>
    </div>
</div>
</template>
<script>
import requirePop from '../pop/requirePop.js';
import {status,participate} from '../common/URL';
import Public from '../common/public';

import Rank from './rank'
    export default {
        components : {
            Rank
        },
        data(){
            return {
                P : Public
            }
        },
        mounted(){
            T.init();
            T.ajax({
                url : status
            }).then(data=>{
                Public.status = data.map.status;
                Public.startTime = new Date(data.map.startTime).Format('yyyy-MM-dd');
                Public.endTime = new Date(data.map.endTime).Format('yyyy-MM-dd');
                if(Public.status==0 || Public.status==1 ){
                    if(T.uid){
                        T.ajax({
                            url : participate ,
                            callback : true,
                            data : {uid:T.uid}
                        }).then(data=>{
                            Public.vip = data.flag;
                            if(data.flag) return;
                            requirePop('vip',{
                                props:{
                                    content : '<div style="padding:20px 0; text-align:center;">'+(data.errorMsg||'渠道用户不参加活动！')+'</div>',
                                    okTxt : '回首页',
                                    closeCallback : function(){
                                        T.callApp.home();
                                    }
                                }
                            },'publicTips');
                        })
                    }
                }else{
                    requirePop('statuserror',{
                        props:{
                            content : '<div style="padding:20px 0; text-align:center;">'+(data.errorMsg||(Public.status==-1?'活动未开始！':'活动已结束！'))+'</div>',
                            okTxt : '回首页',
                            closeCallback : function(){
                                T.callApp.home();
                            }
                        }
                    },'publicTips');
                }
            })
        },
        methods : {
            Investment(){
                if(this.P.status==1) return;

                T.callApp.investment();
            },
            acivity(){
                requirePop('explain');
            },
            winning(){
                //T.click(()=>{
                    requirePop('winning');
                //})
            }
        }
    }
</script>