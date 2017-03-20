<style lang='sass'>
    @import '../css/global';
    .modal-mask.publicTips{
        .modal-footer{
            .btn.defualt-btn{ 
                margin:0 auto; text-align:center; color:#873808; @include font-size(15px);
                 @include contain('../images/pop/defualt-btn.png');
            }
        }
        .modal-body{
            @include box-flex; @include boxCenter; @include boxMiddle;
            .publictext{
                @include font-size(15px);
            }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' superClass='publicTips' :closeCallback='closeCallback'>
    <div slot="header" class='img-size' data-height='55'></div>
    <div slot='body' class='publictext img-size' v-html='content' data-paddingTop='10' data-paddingBottom='10'>
    </div>
    <div slot='footer' class='submit'>
        <div class='btn defualt-btn img-size' data-marginBottom='50' data-width='327' data-height='60' data-lineHeight='60' @click='close'>
        {{okTxt}}
        </div>
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    import {realPrizes} from '../common/URL';
    export default {
        components : {
            pop
        },
        props : {
            transition : String,
            okTxt : String,
            content : String,
            closeCallback : Function,
            okCallback : Function
        },
        mounted(){
            
        },
        methods : {
            close : function(){
                this.$refs.pop.closePop();
                this.okCallback && this.okCallback.call(this);
            }
        }
    }
</script>