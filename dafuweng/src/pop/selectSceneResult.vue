<style lang='sass'>
    @import '../css/global';
    .modal-mask{
       .modal-header{
            h2{ font-weight:normal; @include font-size(18px); color:#fff600; }
        }
        .modal-footer{
            .submit.selectResult{
                @include box; @include boxCenter;
               .btn{ margin:0;
                    &.btn1{ @include contain('../images/pop/btn5.png') }
                    &.btn2{ @include contain('../images/pop/btn6.png'); margin-left:$s10; }
               }
            }
        }
        .modal-body{
            .selectresult{
                
                .btn{ margin:0 auto;
                    &.img1{@include contain('../images/dice/n1.png')}
                    &.img2{@include contain('../images/dice/n2.png')}
                    &.img3{@include contain('../images/dice/n3.png')}
                    &.img4{@include contain('../images/dice/n4.png')}
                    &.img5{@include contain('../images/dice/n5.png')}
                    &.img6{@include contain('../images/dice/n6.png')}
                }
            }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition'>
    <div slot="header" class='img-size' data-paddingTop='60' data-paddingLeft='60'>
        <h2>您选中遥控骰子为</h2>
    </div>
    <div slot='body' class='selectresult img-size' data-paddingTop='40' data-paddingBottom='40'>
        <div class='btn img-size' v-bind:class='getClass' data-width='188' data-height='151'></div>
    </div>
    <div slot='footer' class='submit selectResult'>
        <div class='btn btn1 img-size' @click='ok' data-width='128' data-height='48'></div>
        <div class='btn btn2 img-size' @click='back' data-width='128' data-height='48'></div>
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    import {dicePlay} from '../common/URL';
    import requirePop from './requirePop.js';
    export default {
        components : {
            pop
        },
        props : {
            showselectSceneNum : Function,
            transition : String,
            num : Number
        },
        computed : {
            getClass : function(){
               return 'img'+this.num;
            }
        },
        data(){
            return {
                isshow : true 
            }
        },
        methods : {
            ok : function(){
                this.$refs.pop.closePop(()=>{
                    requirePop('scenedo',{
                        props: {
                            diceType : 2, //遥控
                            diceNumber : this.num,
                            transition : 'modal'//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                        }
                    });
                })
                /*var self = this;
                T.ajax({
                    url : dicePlay,
                    data : { uid : T.uid , diceType : 2 , diceNumber : this.num },
                    callback : true,
                    success : function(_data){
                        if(_data.flag){
                            var memberWalk = _data.map.memberWalk;
                            bus.$emit('pointOnMap', memberWalk.nextPoint);
                            info.diceChance--;
                            self.$refs.pop.closePop();




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
               })*/
            },
            back : function(){
                this.$refs.pop.closePop(()=>{
                    this.showselectSceneNum();
                });
            }
        }
    }
</script>