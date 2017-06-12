<style lang='sass'>
    @import '../css/global.scss';
    $sjianwidth : $s20;
    .modal-mask.explain{
        span{height:$sjianwidth; width:$sjianwidth; display:block; position:relative;} 
        .demoSpan1{overflow:hidden; width:$sjianwidth/1.8;}
        .demoSpan1:before{content:''; height:$sjianwidth/2; width:$sjianwidth/2; display:block; border:$s5/2 solid #333; border-left-width:0; border-top-width:0; transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg); position:absolute; top:$s7; right:$s7;}
        
        li{
            @include box;
            padding:$s10 0;
            .text{ @include box-flex; line-height:$s25;}
        }

        .modal-container.pop-cnt{ max-width:none; @include contain('../images/main/activity-pop.png');
             @include box-sizing;
             @include transition-duration(0s);
            .content{ 
                margin-bottom:$s10; color:#000;
                @include align-items(flex-start);
                @include justify-content(flex-start);
                @include font-size(15px);
                overflow-y: scroll;
            }
        }   
        .close{ width:$s50; height:$s50; background:none;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask explain" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-paddingTop='126' data-paddingLeft='50' data-width='684' data-height='929' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="content img-size" data-width='580' data-height='740'>
                    <ul>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>活动时间：{{info.startTime.substr(0,8)}} - {{info.endTime.substr(0,8)}}</div>
                        </li>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>30天以下投资期限产品不参加本次掷骰子活动。活动期间，每日登录活动页面可免费获得1个大富翁福袋，拆开可随机获得红包或加息券奖励</div>
                        </li>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>单笔投资每满10000元≥30天产品可再获得1次掷骰子机会。如单笔投资20000元即获得2次机会，以此类推。单笔投资每满50000元≥90天产品可在获得5次普通骰子机会的同时，额外获得1次遥控骰子机会，以此类推。使用遥控骰子可自己指定想获得的点数。</div>
                        </li>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>每掷一次骰子，即走对应的步数。地图共118步，每步对应不同的奖品，奖品包括：10~200元红包、0.5%~2%加息券，红包加息券额度随机</div>
                        </li>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>每逢第10步及10的倍数，可即时抽奖一次，如未抽奖而继续掷骰子，视为自动放弃。奖品包括：双立人刀具套装、1000元京东卡、200元京东卡、100元京东卡、50元京东卡、30元京东卡、10元京东卡、小米移动电源等</div>
                        </li>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>活动结束前，到达终点的用户都可以获得300元京东卡1张，率先到达的前3名分别可获得3000元京东卡、ipad mini2、1000元携程卡（不同时享受300元京东卡奖品）</div>
                        </li>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>到达终点指正好到达第118步，如在第116步掷到5点，则会走到终点后退回第115步，以此类推；如已正好到达终点，则视为已参与本活动，尚剩余未能使用的掷骰子机会，一律无效。</div>
                        </li>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>实物奖品将在活动结束后15个工作日内联系您并发放，通知后15个工作日未领取则默认主动放弃领奖资格。</div>
                        </li>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>如发现并核实作弊行为，多融财富有权取消该用户获奖资格</div>
                        </li>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>活动最终解释权归多融财富所有</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    import pop from './pop.vue';
    import {realPrizes} from '../common/URL';
    export default {
        components : {
            pop
        },
        props : {
            transition : String,
        },
        data(){
            return{
                showModal : true , 
                info : window.info
            }
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
            closePropagtion : function( e ){
                e.stopPropagation();  //
                //e.cancelBubble = true;  // 
            },
            showPop : function(callback){
                this.showModal = true;
                if($.type(callback) == 'function'){
                    setTimeout(callback,550)
                }
            },
            closePop : function(callback){
                this.showModal = false;
                T.getPop(callback);
                bus.$emit('closePopEvent');
            }
        }
    }
</script>
