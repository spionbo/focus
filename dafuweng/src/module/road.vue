<style lang='sass'>
    @import '../css/global';
    .m1-content{
        position:relative; z-index:5;
        background-size:contain; background-repeat:no-repeat;
        @include transition-duration;
        opacity:0; @include transform(translateY(10px));
        &.cur{
            opacity:1;
            @include transform(translateY(0));
        }
    }
</style>
<template>
<div class="m1-content img-size" :style='styleObject' data-width='639' data-height='1128' data-marginLeft='64' data-paddingLeft='26'>
    <step ref='0' left='250' bottom='68' transform='rotate(25deg) skew(-43deg)' data-width='130' data-height='88'></step>
    <step ref='1' left='362' bottom='118' transform='rotate(25deg) skew(-43deg)' data-width='130' data-height='70'></step>
    <step ref='2' left='462' bottom='158' transform='rotate(23deg) skew(-46deg)' data-width='122' data-height='76'></step>
    <step ref='3' left='358' bottom='200' transform='rotate(23deg) skew(-45deg)' data-width='112' data-height='76'></step>
    <step ref='4' left='256' bottom='244' transform='rotate(23deg) skew(-43deg)' data-width='112' data-height='76'></step>
    
    <step ref='5' left='152' bottom='286' transform='rotate(23deg) skew(-43deg)' data-width='112' data-height='76'></step>
    <step ref='6' left='52' bottom='328' transform='rotate(23deg) skew(-43deg)' data-width='112' data-height='76'></step>
    <step ref='7' left='156' bottom='368' transform='rotate(23deg) skew(-46deg)' data-width='108' data-height='76'></step>
    <step ref='8' left='264' bottom='406' transform='rotate(23deg) skew(-46deg)' data-width='108' data-height='76'></step>
    <step ref='9' left='368' bottom='446' transform='rotate(22deg) skew(-48deg)' data-width='108' data-height='80'></step>
    <step ref='10' left='254' bottom='492' transform='rotate(23deg) skew(-46deg)' data-width='124' data-height='74'></step>
    
    <step ref='11' left='360' bottom='532' transform='rotate(23deg) skew(-46deg)' data-width='124' data-height='74'></step>
    <step ref='12' left='466' bottom='572' transform='rotate(22deg) skew(-47deg)' data-width='118' data-height='80'></step>
    <step ref='13' left='360' bottom='616' transform='rotate(22deg) skew(-47deg)' data-width='114' data-height='82'></step>
    <step ref='14' left='262' top='386' transform='rotate(22deg) skew(-45deg)' data-width='106' data-height='82'></step>
    <step ref='15' left='164' top='346' transform='rotate(22deg) skew(-45deg)' data-width='108' data-height='82'></step>
    
    <step ref='16' left='56' top='300' transform='rotate(22deg) skew(-46deg)' data-width='120' data-height='82'></step>
    <step ref='17' left='160' top='260' transform='rotate(22deg) skew(-46deg)' data-width='114' data-height='76'></step>
    <step ref='18' left='258' top='218' transform='rotate(22deg) skew(-45deg)' data-width='114' data-height='76'></step>
    <step ref='19' left='366' top='170' transform='rotate(22deg) skew(-45deg)' data-width='112' data-height='84'></step>
    <step ref='20' left='260' top='128' transform='rotate(22deg) skew(-47deg)' data-width='110' data-height='84'></step>
    
    <step ref='21' left='156' top='84' transform='rotate(22deg) skew(-47deg)' data-width='110' data-height='84'></step>
    <step ref='22' left='52' top='42' transform='rotate(22deg) skew(-48deg)' data-width='110' data-height='84'></step>
    <step ref='23' left='170' top='0' transform='rotate(22deg) skew(-48deg)' data-width='110' data-height='84'></step>

    <people ref='people'></people>
</div>
</template>
<script>
    import step from './step';
    import people from './people';
    import requirePop from '../pop/requirePop.js';
    export default {
        components : {
            step,people
        },
        props : {
           image : String
        },
        /*watch : {
            image : function(newVal, oldVal){
                debugger;
            }
        },*/
        data(){

            var img = require('../images'+this.image);
            return {
                styleObject : {
                    backgroundImage:'url('+img+')'
                },
                diceChance : 0,  //用户抽奖机会
                pointOnMap : 0, //用户现在走在第几步了
            }
        },
        mounted(){
            var self = this;
            setTimeout(()=>{
                $('.m1-content').addClass('cur')
            },1000);
            self.diceChance = self.$route.query.diceChance;
            self.pointOnMap = self.$route.query.pointOnMap;
        },
        methods : {
            setRoad : function( num , initNum , newNum ){
                this.$refs.people.go(num);
                var pointOnMap = parseInt(newNum),
                    i = 0 , 
                    max = Math.ceil(pointOnMap/10)*10-initNum;
                for(;i<23;i++){
                    this.$refs[i].packgaeClose();
                    if(i==max){
                        this.$refs[i].packgaeOpen();
                    }
                };
                try{
                    /*require.ensure([],(require)=>{
                        var pop = require('../pop/index.js')
                        new pop({
                            title : '',
                            width:'70%',
                            content : '步数：'+pointOnMap+'<br>-是否可以抽奖:'+info.map.achievePrizePoint+'<br>是否抽过：'+info.map.hasRaffle,
                            okBtn : true,
                            cancelBtn:false,
                            okTxt:'确定',
                            timing : 'errorcur'
                        });
                    },'pop');*/

                    if(info.map.achievePrizePoint==true && info.map.hasRaffle==false){ //抽奖条件
                        this.prize();
                    }
                }catch(e){
                    console.log(info)
                }
            },
            prize : function(){
                setTimeout(function(){
                    requirePop('prizedoPlay');
                },50)
            }
        }
    }
</script>