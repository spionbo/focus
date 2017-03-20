<style lang='sass'>
    @import '../css/global';
    .modal-mask{
       .modal-header{
            .title-bg{
                .bg1{ @include contain('../images/pop/txt1.png');}
            }
        }
        .modal-body{
            .winning1-pop{
                padding:0 $s20;
                h2{ @include font-size(14px); padding:$s5 0; color:#fff600; text-align:center;}
                p{ @include font-size(10px); text-align:center; }
            }
            .img{ margin:0 auto $s5;
                @include contain('../images/pop/img1.png');
            }
        }
        .modal-footer{
            .submit.winnig-btn{
                @include box; @include box-orient(horizontal);
                @include boxMiddle;@include boxCenter;
                padding:0 $s10;
                .text-btn{ padding-left:$s5; @include font-size(11px); }
                >div{ @include box-flex;}
                .btn.btn2{ 
                    margin:0;
                     @include contain('../images/pop/btn.png');
                     text-deraction:underline;
                }
            }
        }
    }
</style>
<template>
<pop ref='pop' transition='bounceIn'>
    <div slot="header" class='title-bg img-size' data-marginTop='25' data-width='391' data-height='79'>
        <i class='bg1 img-size' data-width='189' data-height='49'></i>
    </div>
    <div slot='body' class='winning1-pop'>
        <h2>恭喜，获得{{name}}</h2>
        <div class='img img-size' data-width='181' data-height='95'></div>
        <p>奖品将于活动结束后15个工作日内联系发放</p>
    </div>
    <div slot='footer' class='submit winnig-btn img-size' data-marginTop='20'>
        <div class='btn btn2 img-size' data-width='327' data-height='60' @click='close'></div>
        <div class='text-btn' @click='address'>填写收货地址</div>
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
            name : String,
        },
        methods : {
            close : function(){
                this.$refs.pop.closePop();
            },
            address : function(){
                this.$refs.pop.closePop(()=>{
                    requirePop('addAddress');
                })
            }
        }
    }
</script>