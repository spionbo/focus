<style scoped>
@import '../style/global';
.banner{
    @mixin contain '../images/banner.jpg';
    background-color:#fff;
    position:relative; z-index:1;

    .explorer{ 
        position:absolute;
        right:0;
        border-top-left-radius:10px; border-bottom-left-radius:10px;
        background:linear-gradient(to bottom,#ff86ac 5%,#ff3b77 95%,#f92351);
        text-align:center; color:#fff;
    }
    .step{
        position:absolute; 
        left:50%;
        background:rgba(125,95,255,.6);
        border-radius:10px;
        text-align:center; color:#fff;
    }
    .text{
        position:absolute; 
        left:0; width:100%; text-align:center;
        h2,h3{ padding:0 15px; font-weight:normal; color:#ff4c83;}
    }
    .text1{
        position:absolute;
        left:50%;
        >div{ position:absolute; }
        .img1{ @mixin contain '../images/text/number1.png'; animation:bannertxt 2s infinite linear; }
        .img2{ @mixin contain '../images/text/number2.png'; animation:bannertxt 2s infinite linear .2s; }
        .img3{ @mixin contain '../images/text/number3.png'; animation:bannertxt 2s infinite linear .4s; }
        .img4{ @mixin contain '../images/text/number4.png'; animation:bannertxt 2s infinite linear .6s; }
        @at-root{
            @keyframes bannertxt{
                30%{ transform:scale(1)}
                50%{ transform:scale(2)}
                70%{ transform:scale(1)}
            }
        }
    }
    .text2{
        position:absolute; 
        @mixin contain '../images/text1.png';
        transform-origin: center -500px;
        transform:rotate(-3deg);
        left:50%;
        animation:bannertxt2 5s infinite linear; 
        @at-root{
            @keyframes bannertxt2{
                50%{ transform:rotate(3deg)}
            }
        }
    }
}
.Investment{
    background:linear-gradient(to bottom,#ffffff , #f4f4fb);
    display:flex;
    align-items:center;
    justify-content:center;
    .btn{ 
        @mixin contain '../images/btn1.png';
        text-align:center;
        color:#fff;
    }
}
.footer{
    position:relative; z-index:2;
    @mixin contain '../images/bg.jpg';
    .text{
        position:absolute;
        color:#fff;
        h3{}
    }
    .myprize{
         position:absolute; color:#fff; text-align:center; text-decoration:underline;
         animation:myprize infinite 3s linear;
         @at-root{
            @keyframes myprize{
                30%{ color:#6afdff; }
                70%{ color:#fffc00; }
            }
         }
    }
}
</style>
<template>
<div class='module-scroll'>
    <div class='banner img-size' data-height='998'>

        <div class='explorer img-size' @click='explain' data-top='35' data-width='94' data-height='50' data-lineHeight='50' data-fontSize='26'>规则</div>
        <div class='text1 img-size' data-top='60' data-marginLeft='-190'>
            <div class='img1 img-size' data-left='0' data-width='101' data-height='88'></div>
            <div class='img2 img-size' data-left='90' data-width='102' data-height='90'></div>
            <div class='img3 img-size' data-left='180' data-width='106' data-height='89'></div>
            <div class='img4 img-size' data-left='270' data-width='105' data-height='88'></div>
        </div>

        <div class='text2 img-size' data-top='154' data-width='566' data-marginLeft='-283' data-height='104'></div>

        <div class='step img-size' data-width='314' data-height='72' data-lineHeight='72' data-top='774' data-marginLeft='-157' data-fontSize='36'>Step1 赚金币</div>
        <div class='text img-size' data-top='890' data-lineHeight='50'>
            <h2 class='img-size' data-fontSize='30'>我当前的金币：{{userCoin}}</h2>
            <h3 class='img-size' data-fontSize='24'>* 金币=投资金额*产品期限/360（除20天以下产品）</h3>
        </div>
    </div>
    <div class='Investment img-size' data-height='155'>
        <div class='btn img-size' data-width='494' data-height='85' data-lineHeight='85' data-fontSize='36' @click='investment'>立即投资</div>
    </div>
    <div class='footer img-size' data-height='1069'>
        <div class='text img-size' data-left='157' data-fontSize='30' dasta-width='460' data-height='79' data-top='150'>
            <p>向以下5位童年小伙伴索要礼物</p>
            <h3 class='img-size' data-fontSize='30'>* 最高/最低奖项各有不同哟~</h3>
        </div>
        <section-box></section-box>
        <div class='myprize img-size' @click='myprize' data-lineHeight='40' data-fontSize='30' data-top='790' data-left='270' data-width='238'>查看我的奖品></div>
    </div>
</div>
</template>
<script>
import requirePop from '../pop/requirePop.js';
import box from '../components/box.vue';
import {mapState} from 'vuex';
import store from '../store';
    export default {
        store,
        computed:{
            ...mapState([
                'userCoin'
            ])
        },
        components:{
            sectionBox : box
        },
        data(){
            return {
                tel : '',
                isTel : false
            }
        },
        mounted(){
            T.init();
            
        },
        methods : {
            explain(){
                requirePop('explain')
            },
            investment(){
                T.callApp.investment();
            },
            myprize(){
                T.click(function(){
                    requirePop('myprize')
                })
            }
        }
    }
</script>