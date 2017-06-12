<style scoped>
    @import '../style/global.css';
    .modal-header{
        .title-bg{
            i{@mixin contain '../images/txt2.png'}
        }
    }
    .modal-body{
        .notStart{ text-align:center; 
            p{ @mixin font-size 14px;}
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
    <div slot="header">
        <div class='title-bg img-size' data-width='391' data-height='79' data-marginTop='20'>
            <i class='img-size' data-width='188' data-height='48'></i>
        </div>
    </div>
    <div slot='body' class='notStart'>
        <h2>兑换成功</h2>
        <p v-if='obj.type==5'>积分兑换奖品，将在每月月初前15个工作日内统一发放上月奖品</p>
        <p v-if='obj.type!=5'>
            兑换{{obj.name}}成功；奖励已发放到您的多融账户，请注意查收并及时使用
        </p>
    </div>
    <div slot='footer' class='submit img-size'>
        <div class="btn img-size" data-fontSize='30' data-width='327' data-height='60' data-lineHeight='60' @click='close'>我知道了</div>
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
            status : Number,
            obj : Object
        },
        methods : {
            close(){
                this.$refs.pop.closePop();
            }
        }
    }
</script>