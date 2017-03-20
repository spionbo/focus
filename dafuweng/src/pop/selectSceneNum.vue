<style lang='sass'>
    @import '../css/global';
    .modal-mask{
       .modal-header{
            h2{ font-weight:normal; @include font-size(18px); color:#fff600; }
        }
        .modal-footer{
           
        }
        .modal-body{
            .selectSceneNum{
                ul{ @include box; @include boxCenter;
                    li{ margin:$s5;
                        &.img1{@include contain('../images/dice/n1.png')}
                        &.img2{@include contain('../images/dice/n2.png')}
                        &.img3{@include contain('../images/dice/n3.png')}
                        &.img4{@include contain('../images/dice/n4.png')}
                        &.img5{@include contain('../images/dice/n5.png')}
                        &.img6{@include contain('../images/dice/n6.png')}
                    }
                }
                p{ @include font-size(12px); text-align:center; }
            }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition'>
    <div slot="header" class='img-size' data-paddingTop='60' data-paddingLeft='60'>
        <h2>请选择摇骰点数</h2>
    </div>
    <div slot='body' class='selectSceneNum'>
        <ul>
            <li class='img1 img-size' data-width='127' data-height='94' @click='prizedo(1)'></li>
            <li class='img2 img-size' data-width='127' data-height='94' @click='prizedo(2)'></li>
            <li class='img3 img-size' data-width='127' data-height='94' @click='prizedo(3)'></li>
        </ul>
        <ul>
            <li class='img4 img-size' data-width='127' data-height='94' @click='prizedo(4)'></li>
            <li class='img5 img-size' data-width='127' data-height='94' @click='prizedo(5)'></li>
            <li class='img6 img-size' data-width='127' data-height='94' @click='prizedo(6)'></li>
        </ul>
        <p style='padding-top:0.625rem'>使用遥控骰子可自己指定想获得的点数</p>
    </div>
    <div slot='footer' class='submit'>
        
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    import requirePop from './requirePop.js';
    export default {
        components : {
            pop
        },
        props : {
            showselectSceneNum : Function,
            transition : String
        },
        methods : {
            prizedo : function( num ){
                this.$refs.pop.closePop(()=>{
                    requirePop.call(this,'selectSceneResult',{
                        props: {
                            transition : 'bounceIn',//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                            num : num,
                            showselectSceneNum : this.showselectSceneNum
                        }
                    });
                });
            }
        }
    }
</script>