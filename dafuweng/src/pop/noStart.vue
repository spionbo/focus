<style lang='sass'>
    @import '../css/global';
    .modal-header{
        .title-bg{
            .bg1{@include contain('../images/pop/txt2.png');}
        }
    }
    .modal-body{
        .notStart{ text-align:center; 
            p{ @include font-size(14px);}
        }
    }
    .modal-footer{
        .btn.home{ 
             @include contain('../images/pop/btn1.png');
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
    <div slot="header" class='title-bg img-size' data-marginTop='25' data-width='391' data-height='79'>
        <i class='bg1 img-size' data-width='121' data-height='49'></i>
    </div>
    <div slot='body' class='notStart'>
        <h2>感谢关注</h2>
        <p v-if='status==-1'>本次活动尚未开始<br>敬请期待</p>
        <p v-else>本次活动已结束</p>
    </div>
    <div slot='footer' class='submit img-size' data-paddingTop='40'>
        <div class='btn home img-size' data-width='328' data-height='60' @click='goHome'></div>
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    export default {
        components : {
            pop
        },
        props : {
            transition : String,
            closeCallback : Function,
            status : Number,
        },
        methods : {
            goHome :function(){
                this.$refs.pop.closePop();
            }
        }
    }
</script>