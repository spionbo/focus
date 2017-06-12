<style>
    @import '../style/global.css';
    .modal-mask{
        &.scenedo-pop{
            background:rgba(0,0,0,.8);
            .modal-container{
                background:none;
            }
        }
        .modal-body{
            display:flex; 
            justify-content:center;
            align-items : center;
            .scenedobg{ 
                @mixin contain '../images/l.png'; 
                display:flex; 
                flex-direaction:column;
                justify-content:center;
                align-items : center;
            }
            .selectSceneNum{

            }
            .scenedo{ position:relative;
                @mixin contain '../images/dice/dicedo.gif'; 
                transition-duration:.3s;
                &.img1{ @mixin contain '../images/dice/001.png'; }
                &.img2{ @mixin contain '../images/dice/002.png'; }
                &.img3{ @mixin contain '../images/dice/003.png'; }
                &.img4{ @mixin contain '../images/dice/004.png'; }
                &.img5{ @mixin contain '../images/dice/005.png'; }
                &.img6{ @mixin contain '../images/dice/006.png'; }
            }
            .scenedo-num{ position:relative;
                transition-duration:.3s; opacity:0;
                transform:translateY(100px);
                &.cur{ opacity:1;
                    transform:translateY(0px);
                }
                &.img1{ @mixin contain '../images/dice/1.png'; }
                &.img2{ @mixin contain '../images/dice/2.png'; }
                &.img3{ @mixin contain '../images/dice/3.png'; }
                &.img4{ @mixin contain '../images/dice/4.png'; }
                &.img5{ @mixin contain '../images/dice/5.png'; }
                &.img6{ @mixin contain '../images/dice/6.png'; }
                &.img7{ @mixin contain '../images/dice/7.png'; }
                &.img8{ @mixin contain '../images/dice/8.png'; }
                &.img9{ @mixin contain '../images/dice/9.png'; }
                &.img10{ @mixin contain '../images/dice/10.png'; }
                &.img11{ @mixin contain '../images/dice/11.png'; }
                &.img12{ @mixin contain '../images/dice/12.png'; }
            }
        }
        .lights{
            position:fixed; left:50%; top:0; opacity:.0;
            z-index:5;
            @mixin contain '../images/sunlight.png';
            transform-origin:center bottom;
            transform : rotate(2deg);
            animation : lights 10s infinite linear;
            animation-delay: .5s;
            @at-root{
                @keyframes lights{
                    0% {transform: rotate(10deg); opacity:.8;}
                    25% {transform: rotate(0deg); opacity:1;}
                    50% {transform: rotate(-10deg); opacity:.5;}
                    75% {transform: rotate(0deg); opacity:.6;}
                    100% {transform: rotate(10deg); opacity:.8;}
                }
            }
        }
    }
</style>
<template>
<pop ref='pop' superClass='scenedo-pop'>
    <div slot="close"></div>
    <div slot="header"></div>
    <div slot='body' class='selectSceneNum img-size' data-paddingTop='200' data-paddingBottom='10'>
        <div class='lights img-size' data-width='726' data-height='699' data-top='100' data-marginLeft='-363'></div>
        <div class='scenedobg img-size' data-width='374' data-height='130' data-paddingLeft='54'>
            <div class='scenedo img-size' data-width='139' data-height='144' data-top='-60'></div>
            <div v-show='diceType==2' class='scenedo img-size' data-marginLeft='-10' data-width='139' data-height='144' data-top='-60'></div>
            <div class='scenedo-num img-size' data-width='114' data-height='92' data-top='-30'></div>
        </div>
    </div>
    <div slot='footer' class='submit'></div>
</pop>
</template>
<script>
    import requirePop from './requirePop.js';
    import pop from './pop.vue';
    import {dicePlay} from '../common/URL';
    import store from '../store';
    export default {
        store,
        components : {
            pop
        },
        props : {
            diceType : Number,
            diceNumber : Number,
        },
        mounted(){
            var self = this;
            var obj = { uid : T.uid , diceType : self.diceType };
            if(self.diceType==2){
                obj.diceNumber = self.diceNumber;
            }
            //self.do(5 , 6 , ()=>{});

            T.ajax({
                url : dicePlay,
                data : obj
            }).then(data=>{
                if(data.flag){
                    const memberWalk = data.map.memberWalk;
                    const diceNumList = data.map.diceNumList;
                    
                    var num1 , num2;
                    if(diceNumList.length>1){
                        num1 = diceNumList[0];
                        num2 = diceNumList[1];
                    }else{
                        num1 = diceNumList[0];
                        num2 = 0;
                    }
                    self.do(num1,num2,()=>{
                        self.$refs.pop.closePop();
                        if(memberWalk.nextPoint == 10 || memberWalk.nextPoint == 20){
                            requirePop('continue');
                        }else{
                            requirePop('winning');
                        }
                        self.$store.commit('updateData',memberWalk);
                        self.$store.commit('updatePrize',memberWalk);
                        self.$store.commit('userMessage',memberWalk); //更新数据
                    })


                    /*if(map.prizeType == 1){//红包

                    }else if(map.prizeType == 2){//加息券

                    }else{//5 实物

                    }*/
                    
                    
                }else{
                    self.$refs.pop.closePop();
                    requirePop('touzhijihui',{
                        props: {
                            content : data.errorMsg,
                            transition : 'rotate3d',
                            okTxt : '投资获取机会',
                            closeCallback : function(){
                                T.callApp.investment();
                            }
                        }
                    },'publicTips');
                }
            })
        },
        methods : {
            do( num , num1 , callback ){
                var self = this,
                    scene = $('.scenedo').eq(0) , 
                    scene1 = $('.scenedo').eq(1),
                    snum = $('.scenedo-num'),
                    str = 'img1 img2 img3 img4 img5 img6 img7 img8 img9 img10 img11 img12';

                if(num1==0){
                    scene1.hide();
                }
                setTimeout(()=>{
                    scene.removeClass(str).addClass(' img'+num);
                    setTimeout(()=>{
                        scene1.removeClass(str).addClass(' img'+num1);
                        snum.removeClass(str).addClass('cur img'+(num+num1));
                        setTimeout(callback,300);
                    },1030);
                },2830);
            }
        }
    }
</script>