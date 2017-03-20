<style lang='sass'>
    @import '../css/global';
    .modal-mask{
        &.scenedo-pop{
            background:rgba(0,0,0,.8);
            .modal-container{
                background:none;
            }
        }
        .modal-header{

        }
        .modal-footer{

        }
        .modal-body{
            @include box; @include boxCenter; @include boxMiddle;
            .scenedobg{ @include contain('../images/l.png'); 
                @include box; @include boxCenter; @include box-orient(horiznotal)
            }
            .scenedo{ position:relative;
                @include contain('../images/dice/dicedo.gif'); 
                @include transition-duration;
               // @include animation(scenedoAnimate,.5s , infinite , linear);
               /* @include keyframes(scenedoAnimate) {
                    from {
                        transform: rotate(0deg);
                        -webkit-transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                        -webkit-transform: rotate(360deg);
                    }
                };
                &.cur{
                    @include animation(none);
                }*/
                &.img1{ @include contain('../images/dice/001.png'); }
                &.img2{ @include contain('../images/dice/002.png'); }
                &.img3{ @include contain('../images/dice/003.png'); }
                &.img4{ @include contain('../images/dice/004.png'); }
                &.img5{ @include contain('../images/dice/005.png'); }
                &.img6{ @include contain('../images/dice/006.png'); }
            }
            .scenedo-num{ position:relative;
                @include transition-duration; opacity:0;
                @include transform('translateY(100px)');
                &.cur{ opacity:1;
                    @include transform('translateY(0px)');
                }
                &.img1{ @include contain('../images/dice/1.png'); }
                &.img2{ @include contain('../images/dice/2.png'); }
                &.img3{ @include contain('../images/dice/3.png'); }
                &.img4{ @include contain('../images/dice/4.png'); }
                &.img5{ @include contain('../images/dice/5.png'); }
                &.img6{ @include contain('../images/dice/6.png'); }
            }
        }
        .lights{
            position:fixed; left:0; top:0; opacity:.03;
            z-index:5;
            @include transition-duration;
            background:url('../images/sunlight.png');
            -webkit-transform-origin:left 0;
            @include transform(rotate(2deg));
            @include animation(lights,4s);
            @at-root{
                @include keyframes(lights){
                    0% {transform: rotate(10deg);-webkit-transform: rotate(2deg); opacity:.03;}
                    25% {transform: rotate(0deg);-webkit-transform: rotate(0deg); opacity:.1;}
                    50% {transform: rotate(-10deg);-webkit-transform: rotate(-2deg); opacity:.5;}
                    75% {transform: rotate(0deg);-webkit-transform: rotate(0deg); opacity:.1;}
                    100% {transform: rotate(10deg);-webkit-transform: rotate(2deg); opacity:.03;}
                }
            }
        }
    }
</style>
<template>
<pop ref='pop' superClass='scenedo-pop' transition='bounceIn'>
    <div slot="header"></div>
    <div slot='body' class='selectSceneNum img-size' data-paddingTop='200' data-paddingBottom='10'>
        <div class='lights img-size' data-width='1846' data-height='2362'></div>
        <div class='scenedobg img-size' data-width='374' data-height='130'>
            <div class='scenedo img-size' data-width='139' data-height='144' data-marginLeft='80' data-top='-60'></div>
            <div class='scenedo-num img-size' data-width='114' data-height='92' data-top='-30'></div>
        </div>
    </div>
    <div slot='footer' class='submit'></div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    import requirePop from './requirePop.js';
    import {dicePlay,map} from '../common/URL';
    export default {
        components : {
            pop
        },
        props : {
            diceType : Number,
            diceNumber : Number
        },
        mounted(){
            var self = this;
            var obj = { uid : T.uid , diceType : self.diceType };
            if(self.diceType==2){
                obj.diceNumber = self.diceNumber;
            }
            //self.do(2 , function(){})

            T.ajax({
                url : dicePlay,
                data : obj,
                callback : true,
                success : function(_data){

                    if(_data.flag){
                        T.ajax({//掷骰机会
                            url : map , 
                            callback : true,
                            data : {
                                uid : T.uid
                            },
                            success : function( _data1 ){
                                info.map = _data1.map;
                                var memberWalk = _data.map.memberWalk;

                                var popName = '' , 
                                    props = {};
                                info.diceChance--;
                                if(self.diceType==2){
                                    info.controllableChance--;
                                }else{
                                    info.normalChance--;
                                }

                                if(memberWalk.prizeType==1){ //红包
                                    popName = 'winning';
                                    props = {
                                        num : memberWalk.prizeAmount , 
                                        prizeName : memberWalk.prizeName,
                                        prizeType : memberWalk.prizeType
                                    }
                                }else if(memberWalk.prizeType==2){ //加息券
                                    popName = 'winning';
                                    props = {
                                        num : memberWalk.prizeAmount,
                                        prizeName : memberWalk.prizeName,
                                        prizeType : memberWalk.prizeType
                                    }
                                }else if(memberWalk.prizeType==5){ //实物
                                    popName = 'winning1';
                                    props = {
                                        num : memberWalk.prizeAmount , 
                                    }
                                }
                                if(memberWalk.achieveEndPoint == true){ //已到终点
                                    self.do(memberWalk.diceResult , function(){
                                        self.$refs.pop.closePop(()=>{
                                            bus.$emit('pointOnMap', memberWalk.nextPoint); //更新步数
                                            setTimeout(()=>{
                                                info.onmap(()=>{
                                                    return requirePop('goEnd',{
                                                        props: {
                                                            num : info.map.userRank,
                                                            name : info.map.prizeOfRank,
                                                            transition : 'bounceIn'
                                                        }
                                                    });
                                                });
                                            },350);
                                        })
                                    });
                                    return;
                                }

                                self.do(memberWalk.diceResult , function(){
                                    self.$refs.pop.closePop(()=>{
                                        if(popName.length>2){ //中奖
                                            setTimeout(()=>{
                                                requirePop(popName,{props:props});
                                            },350)
                                        }
                                        bus.$emit('pointOnMap', memberWalk.nextPoint); //更新步数
                                    })
                                });
                            }
                        });
                        /*if(popName.length>2){
                            bus.$on('closePopEvent',function(){
                                bus.$emit('pointOnMap', memberWalk.nextPoint); //更新步数
                            })
                        }*/
                        //nextPoint

                        /*memberWalk{    
                        nextPoint;  //下一个地图上的点    
                        achievePrizePoint = false;  //是否抽奖点 10， 20     
                        prizeName;  //普通中奖信息；   
                        prizeType; // 类型:1：红包 2：加息券 5：实物    
                        prizeAmount; //    
                        achieveEndPoint = false;  //是否到达终点    
                        orderOfRank; //用户到达终点后的排名
                        }*/
                    }else{
                        self.$refs.pop.closePop();
                        require.ensure([],(require)=>{
                            var Pop = require('./index.js');
                            var pop = new Pop({
                                title : '&nbsp;',
                                content : '<center>'+_data.errorMsg+'</center>',
                                okBtn : true,
                                cancelBtn:false,
                                timing : 'bounceIn', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                okTxt : '投资获取机会',
                                okCallback : function(){
                                    pop.close();
                                    T.callApp.investment();
                                }
                            });
                        },'pop');
                    }
                }
           })
        },
        methods : {
            do : function( num , callback ){
                var self = this,
                    scene = $('.scenedo') , 
                    snum = $('.scenedo-num');
                var str = 'img1 img2 img3 img4 img5 img6';

                setTimeout(()=>{
                    scene.removeClass(str).addClass(' img'+num);
                    snum.removeClass(str).addClass('cur img'+num);
                    setTimeout(callback,300);
                },2830)
            }
        }
    }
</script>