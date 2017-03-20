<style lang='sass'>
    @import '../css/global';
    .modal-mask{
       .modal-header{
            .title-bg{
                .bg1{ @include contain('../images/pop/txt1.png');}
            }
        }
        .modal-footer{
            .btn.btn2{ 
                 @include contain('../images/pop/btn.png');
                &.winning{ margin:0 auto;}
            }
        }
        .modal-body{
            .winning-pop{
                padding:0 $s20;
                h2{ @include font-size(18px); color:#fff600; text-align:center;}
                p{ @include font-size(14px); text-align:center; }
            }
        }
    }
</style>
<template>
<pop ref='pop' transition='bounceIn'>
    <div slot="header" class='title-bg img-size' data-marginTop='25' data-width='391' data-height='79'>
        <i class='bg1 img-size' data-width='189' data-height='49'></i>
    </div>
    <div slot='body' class='winning-pop'>
        <h2>恭喜，获得{{prizeName}}</h2>
        <p>奖励已自动发放到您的多融账户</p>
        <p>请打开多融财富APP自行查收</p>
    </div>
    <div slot='footer' class='submit img-size' data-marginTop='20'>
        <div class='btn btn2 img-size' style='margin:0 auto' data-width='327' data-height='60' @click='close'></div>
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
            num : Number,
            prizeName : String,
            prizeType : Number
        },
        methods : {
            close : function(){
                this.$refs.pop.closePop();
            }
        }
    }
</script>