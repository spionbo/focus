<style lang='sass'>
    @import '../css/global';
    .people{
        position:absolute; @include transition-duration; z-index:995;
        .people-div{ 
            position:absolute; left:0; bottom:0; @include contain('../images/people.png'); 

            @include animation(people-div,5s);
            @at-root{
                @include keyframes(people-div){
                    0%{transform:translateY(0); -webkit-transform:translateY(0); }
                    50%{transform:translateY(-2px);-webkit-transform:translateY(-5px); }
                    100%{transform:translateY(0);-webkit-transform:translateY(0); }
                }
            }
        }
        .people-light{ position:absolute; left:0; bottom:0; @include contain('../images/people-light.png'); }
        .people-light1{ position:absolute; bottom:0; left:0; @include contain('../images/people-light1.png');
            @include transform('rotate(10deg)');
            @include animation(people-light1,5s);
            @at-root{
                @include keyframes(people-light1){
                    0% {transform: rotate(10deg);-webkit-transform: rotate(10deg); opacity:1;}
                    25% {transform: rotate(0deg);-webkit-transform: rotate(0deg); opacity:.8;}
                    50% {transform: rotate(-10deg);-webkit-transform: rotate(-10deg); opacity:.5;}
                    75% {transform: rotate(0deg);-webkit-transform: rotate(0deg); opacity:.8;}
                    100% {transform: rotate(10deg);-webkit-transform: rotate(10deg); opacity:1;}
                }
            }
        }
    }
</style>
<template>
<div class="people img-size" data-width='258' data-height='250' @click='f5'>
    <div class='people-light img-size' data-width='207' data-height='101' data-left='84' data-bottom='66'></div>
    <div class='people-light1 img-size' data-width='258' data-height='122' data-bottom='50' data-left='54'></div>
    <div class='people-div img-size' data-width='133' data-height='189' data-bottom='100' data-left='145'></div>
</div>
</template>
<script>
    export default {
        props : {
        },
        data (){
            return {
                step : {
                    '0' : { left:131 , bottom:-60 },
                    '1' : { left:125 , bottom:-2 },
                    '2' : { left:227 , bottom:36 },
                    '3' : { left:323 , bottom:78 },
                    '4' : { left:211 , bottom:124 },
                    '5' : { left:105 , bottom:168 },
                    '6' : { left:7 , bottom:206 },
                    '7' : { left:-95 , bottom:250 },
                    '8' : { left:8 , bottom:288 },
                    '9' : { left:115 , bottom:326 },
                    '10' : { left:220 , bottom:376 },
                    '11' : { left:115 , bottom:410 },
                    '12' : { left:227 , bottom:450 },

                    '13' : { left:331 , bottom:494 },
                    '14' : { left:213 , bottom:540 },
                    '15' : { left:115 , bottom:580 },
                    '16' : { left:19 , bottom:622 },
                    '17' : { left:-91 , bottom:670 },
                    '18' : { left:19 , bottom:716 },
                    '19' : { left:117 , bottom:756 },
                    '20' : { left:213 , bottom:804 },
                    '21' : { left:107 , bottom:842 },
                    '22' : { left:7 , bottom:878 },
                    '23' : { left:-99 , bottom:928 },
                    '23' : { left:-99 , bottom:928 },
                    '24' : { left:21 , bottom:966 },
                }
            };
        },
        mounted(){
        },
        methods : {
            go : function(num){
                num = num<0?0:num;
                var people = $('.people') , 
                    obj = this.step[num],
                    originWidth = 375 ,
                    ratio = T.body.width()/originWidth;
                people.css({left:(obj.left*ratio/2)+'px',bottom:(obj.bottom*ratio/2)+'px'})
            },
            f5 : function(){
                window.location.reload();
            }
        }
    }
</script>