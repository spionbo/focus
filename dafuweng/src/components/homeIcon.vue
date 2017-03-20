<style lang='sass'>
@import '../css/global';
    .icon-home{
        position: fixed; z-index:997; right:0.625rem;
        background:url('../images/home.png');
        background-size: contain;
        @include transition-duration;
        @include transform(translateY(-100px) rotate(-15deg));
        transform-origin: center 0;
        -webkit-transform-origin: center 0;
        opacity:0;
        &.cur{
            @include transform(translateY(0) rotate(-15deg));
            opacity:1;
        }
        @include animation(icon-home,9s,infinite,ease);
        @at-root{
            @include keyframes(icon-home){
                50%{transform:rotate(15deg); -webkit-transform:translateY(15deg); }
            }
        }
    }
</style>
<template>
<div class="icon-home img-size" data-width='154' data-height='153'
     @click='goHome' data-left='10' data-bottom='400'>

</div>
</template>
<script>
    export default {
        mounted(){
            setTimeout(function(){
                $('.icon-home').addClass('cur')
            },1500)
        },
        methods : {
            goHome : function(){
                //T.callApp.home();
                router.replace({ path: '/', query: {
                    wap:T.wap,uid:T.uid
                }});
            }
        }
    }
</script>