<style scoped>
@import '../style/global.css';
.bg{ @mixin contain '../images/bg-repeat.jpg',100% auto,repeat-y;}
.module{
    position:relative; z-index:1;
    @mixin contain '../images/bg.jpg',100% auto;
    box-sizing:border-box;
    .main{
        display:flex;
        justify-content:center;
        align-items:center;
        margin:0 auto;
        @mixin contain '../images/box.png';
    }
    .ttdwf{
        position:absolute;  z-index:9;
        @mixin contain '../images/title.png';
    }
    .bottom-bg{
        position:absolute; box-sizing:border-box;
        @mixin contain '../images/bottom.png';
        .text{ text-align:center; color:#fff;
            font-weight:normal;
            em{ color:#f3d989;}
            overflow:hidden;
            .htxt{ 
                transition-duration:.5s;
                /*animation:bottomhtxt infinite 5s linear;
                @at-root{
                    @keyframes bottomhtxt{

                        0%{transform:translateY(0%);}

                        30%{transform:translateY(-25%);}
                        50%{transform:translateY(-25%);}

                        70%{transform:translateY(-50%);}
                        100%{transform:translateY(-50%);}
                    }
                }*/
                .h{ height:25%; }
            }
        }
    }
    .book{
        position:absolute; z-index:9;
        @mixin contain '../images/about.png';
    }
    .my-game-number{ position:absolute; z-index:8; text-align:center; 
        color:#fff; @mixin contain '../images/titl2.png'; 
        em{ font-weight:bold; color:#fff300;}
    }
    .opportunity{ 
        position:absolute;
        left:50%;
        color:#fff; text-align:center;
        em{ color:#fff603;}
        span{ display:inline-block; margin-left:5px; margin-top:-2px; vertical-align:middle;
            width: 0; height: 0; border-top: 6px solid transparent;
            border-left: 10px solid #fff603; border-bottom: 6px solid transparent;
            animation:oppor infinite .5s linear;
            @at-root{
                @keyframes oppor{
                    50%{ transform:translateX(3px)}
                }
            }
        }
    }
    .game-do{ position:absolute;  overflow:hidden;
        left:50%; 
        transition-duration:.3s;
        @mixin contain '../images/dice-btn.png';
        &:hover{ -webkit-filter:brightness(1.5); }
        .do{ @mixin contain '../images/dice/004.png';
            animation:luckD infinite 9s linear;
        }
    }
}
.through{
    margin:10px 0;
    padding:5px 10px;
    background:#904af1;
    box-shadow:0 0 1.1875rem rgba(0,0,0,.3) inset;
    overflow:hidden; 
    color:#fff; font-size:14px;

    .text{ 
        float:left;
    }
    .cnt1{
        overflow:hidden;
        .scroll-text{
            float:left;
            white-space: nowrap;
            animation:through infinite 20s linear;
            @at-root{
                @keyframes through{
                    from{
                        transform:translateX(0);
                    }
                    to{
                        transform:translateX(-50%);
                    }
                    
                }
            }
        }
    }
    i{ display:inline-block; 
        width:15px; height:14px; 
        vertical-align:middle; 
        margin-top:-2px; margin-right:5px; 
        @mixin contain '../images/laba.png'; 
    }
}


</style>
<template>
<div class='child-transition'>
    <div class='module-scroll bg'>
        <!--<div class='through'>
            <div class='text'>
                <i></i>温馨提示：
            </div>
            <div class='cnt1'>
                <div class='scroll-text'>{{through}}{{through}}</div>
            </div>
        </div>-->
        <div style='height:20px'></div>
        <article class='module img-size' data-height='1334'>
            <div class='main img-size' data-width='686' data-height='1032'>
                <ladder></ladder>
            </div>
            <div class='ttdwf img-size' data-width='464' data-height='404' 
            data-left='150' data-top='180'></div>

            <div class='my-game-number img-size' data-left='176' data-top='500' data-width='395' data-height='87' data-lineHeight='87'>
                剩余骰子数：<em>{{diceRemainChance}}</em>
            </div>

            <div class='bottom-bg img-size' data-width='458' data-height='110' 
                data-left='148' data-top='800'
                data-paddingTop='60' data-paddingLeft='57'>
                <div class='text img-size' data-fontSize='30' data-width='343' 
                    data-height='46'>
                    <div class='htxt img-size' data-height='184'>
                        <div class='h img-size'data-height='46'>
                            您的成绩：<em>{{round}}圈{{currentPoint}}步(周)</em>
                        </div>
                        <div class='h img-size'data-height='46'>
                            您的成绩：<em>{{roundMonth}}圈{{currentPointMonth}}步(月)</em>
                        </div>
                        <div class='h img-size'data-height='46'>
                            当前积分：<em>{{integral}}</em>
                        </div>

                        <div class='h img-size'data-height='46'>
                            您的成绩：<em>{{round}}圈{{currentPoint}}步(周)</em>
                        </div>
                        <div class='h img-size'data-height='46'>
                            您的成绩：<em>{{roundMonth}}圈{{currentPointMonth}}步(月)</em>
                        </div>
                        <div class='h img-size'data-height='46'>
                            当前积分：<em>{{integral}}</em>
                        </div>
                    </div>
                </div>
            </div>

            <div class='book img-size' data-width='93' data-height='96' 
            data-right='161' data-top='131' @click='explain'></div>


            <div class='game-do img-size' data-top='601' data-width='378' data-marginLeft='-189' data-height='96' @click='gameStart'>
                <div class='do img-size' data-width='73' data-height='76' data-marginLeft='60' data-marginTop='8'></div>
            </div>
            <div class='opportunity img-size' data-top='710' data-width='400' data-marginLeft='-200' data-fontSize='24' @click='investment'>单笔投资每满5000元获得1次机会<br><em>获取更多掷骰子机会</em><span></span></div>
        </article>

    </div>
</div>
</template>
<script>
import ladder from '../components/ladder';
import requirePop from '../pop/requirePop.js';
//import compontentLoad from '../pop/require.js';
import {mapState} from 'vuex';
export default {
    components : {
        ladder : ladder,
    },
    computed : {
        through( ){
            var text = '' , 
                status = this.$store.state.status;
            if(status==-1){
                text = '大富翁活动还未开始，敬请期待。'
            }else if(status==0){
                text = '本期活动（4.21~5.4）期间，积分兑换奖品，限量兑换，先换先得，换完为止，请注意兑换时间！'
            }else{
                text = '大富翁活动已结束！'
            }
            return text;
        },
        ...mapState([
            'round',
            'diceRemainChance',
            'currentPoint',
            'roundMonth' ,
            'currentPointMonth',
            'integral'
        ])
    },
    mounted(){
        T.setImgSize();

        var htxt = $('.htxt') , 
            height = htxt.height() , 
            len = htxt.find('.h').length/2,
            h = htxt.find('.h').eq(0).height(),
            percent = 0;

        function go(){
            percent++;
            htxt.css({'-webkit-transform':'translateY('+-h*percent+'px)'});
            if(percent>=len){
                setTimeout(function(){
                    htxt.css({'-webkit-transform':'translateY(0px)','-webkit-transition-duration':'0s'});
                    percent = 0;
                    setTimeout(function(){
                        htxt.css({'-webkit-transition-duration':'.5s'});
                    },20);
                },510);
            }

            setTimeout(go,2500);
        }
        go();
    },
    methods : {
        explain(){
            /*compontentLoad('explain',{
                props : {
                    transition : 'fadeIn'
                }
            })
            return;*/
            requirePop('explain',{
                props : {
                    transition : 'fadeIn'
                }
            })
        },
        gameStart(){
            if(this.diceRemainChance>0){
                requirePop('gameStart',{ 
                    props : {
                        transition : 'rotate3d'
                    }
                },'selectScene');
            }else{
                if(!T.uid){
                    requirePop('gologin',{
                        props: {
                            content : '对不起，请登录后再操作。',
                            transition : 'rotate3d',
                            okTxt : '去登录',
                            okCallback : function(){
                                T.login();
                            }
                        }
                    },'publicTips');
                }else{
                    requirePop('juedao',{
                        props: {
                            content : '对不起，您的剩余骰子数为0',
                            transition : 'rotate3d',
                            okTxt : '去投资获取机会',
                            okCallback : function(){
                                T.callApp.investment();
                            }
                        }
                    },'publicTips');
                }
            }

        },
        investment(){
            T.callApp.investment();
        }
    }
}
</script>