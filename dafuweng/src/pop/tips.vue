<style lang='sass'>
    @import '../css/global';
   .modal-header{
        .title-bg{
            .bg2{ @include contain('../images/pop/txt3.png');}
        }
    }
    .modal-footer{
        .btn.btn2{ 
             @include contain('../images/pop/btn.png');
        }
    }
    .tips-pop{
        padding:$s7 $s20;
        .txt{ @include box; padding:$s2 0;
            overflow:hidden; @include size(line-height,16px);
            .dian{ width:$s5; height:$s5; margin-right:$s5; margin-top:$s7; border-radius:100%; background:#fff; }
            h3{ @include box-flex; @include font-size(12px); font-weight:normal; }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition'>
    <div slot="header" class='title-bg img-size' data-marginTop='25' data-width='391' data-height='79'>
        <i class='bg2 img-size' data-width='191' data-height='51'></i>
    </div>
    <div slot='body' class='tips-pop'>
        <div class='txt'>
            <div class='dian'></div>
            <h3>按掷骰子得到的点数前进，每1步都设有奖品</h3>
        </div>
        <div class='txt'>
            <div class='dian'></div>
            <h3>第10步及10的倍数，可以抽奖</h3>
        </div>
        <div class='txt'>
            <div class='dian'></div>
            <h3>到达终点用户可获得300元京东卡，率先到达的前3名分别获3000元京东卡、iPad mini2、1000元携程卡</h3>
        </div>
    </div>
    <div slot='footer' class='submit'>
        <div class='btn btn2 img-size' style='margin:0 auto;' data-width='327' data-height='60' @click='close'></div>
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
            transition : String
        },
        methods : {
            close : function(){
                this.$refs.pop.closePop();
            }
        }
    }
</script>