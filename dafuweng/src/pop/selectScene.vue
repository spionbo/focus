<style lang='sass'>
    @import '../css/global';
    .modal-mask{
       .modal-header{
            h2{ font-weight:normal; @include font-size(18px); color:#fff600; }
        }
        .modal-footer{
           
        }
        .modal-body{
            .selectScene{
                .select-scene{
                    @include box;
                    @include boxCenter; @include boxMiddle;
                   .btn{
                        @include contain('../images/dice/selectone.png');
                        &.btn1{
                            margin-left:$s10;
                            @include contain('../images/dice/selecttwo.png');
                        }
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
        <h2>请选择摇骰方式</h2>
    </div>
    <div slot='body' class='selectScene img-size' data-paddingTop='10' data-paddingBottom='10'>
        <div class='select-scene img-size' data-paddingTop='40' data-paddingBottom='40'>
            <div v-show='normalChance' class='btn img-size' @click='showOnePop' data-width='189' data-height='164'></div>
            <div v-show='controllableChance' class='btn btn1 img-size' @click='showTwoPop' data-width='189' data-height='164'></div>
        </div>
        <p>使用遥控骰子可自己指定想获得的点数</p>
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
            transition : String,
            num : Number , 
            prize : Number , 
        },
        data(){
            return {
                controllableChance : false,
                normalChance : false , 
                oneClick : true
            }
        },
        mounted(){
            this.controllableChance = info.controllableChance > 0;
            this.normalChance = info.normalChance > 0;
        },
        methods : {
            showOnePop : function(){
                if(this.oneClick){
                    this.oneClick = false;
                    this.$refs.pop.closePop(()=>{
                        this.oneClick = true;
                        requirePop('scenedo',{
                            props: {
                                diceType : 1, //随机
                                diceNumber : -1,
                                transition : 'modal'//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                            }
                        });
                    })
                }
            },
            showTwoPop : function(){
                this.$refs.pop.closePop(()=>{
                    requirePop('selectSceneNum',{
                        props: {
                            showselectSceneNum : this.showTwoPop ,
                            transition : 'bounceIn'
                        }
                    });
                })
            }
        }
    }
</script>