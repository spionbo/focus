<style lang='sass'>
    @import '../css/global';
    .step-div{
        position:absolute;
        .packgae{
            position:absolute;
            @include contain('../images/prize/package.png');
            @include animation(packgae,9s);
            @include keyframes(packgae){
                50%{ transform:translateY(10px); -webkit-transform:translateY(10px);}
            }
        }
        .div-box{
            width:100%; height:100%;
        }
    }
</style>
<template>
<div class="step-div img-size" :data-left='left' :data-right='right' :data-top='top' :data-bottom='bottom'>
    <div class='div-box' :style='styleObject' ></div>
    <div v-show='showPackgae' class='packgae img-size' data-width='128' data-height='97' data-left='-22' data-top='-60'></div>
</div>
</template>
<script>
    export default {
        props : {
           width : Number ,
           height : Number ,
           left : Number ,
           top : Number ,
           right : Number ,
           bottom : Number ,
           transform : String,
           image : String
        },
        data (){
            var img = this.image?{backgroundImage:require('../images'+this.image)}:'';
            return {
                styleObject : {
                    img,
                    transform : this.transform,
                    '-webkit-transform' : this.transform,
                },
                showPackgae : false
            }
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
            packgaeOpen : function(){
                this.showPackgae = true;
            },
            packgaeClose : function(){
                this.showPackgae = false;
            },
        }
    }
</script>