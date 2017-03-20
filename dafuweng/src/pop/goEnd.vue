<style lang='sass'>
    @import '../css/global';
    .modal-mask{
       .modal-header{
            .title-bg{
                .bg3{@include contain('../images/pop/txt4.png');}
            }
        }
        .modal-footer{
            .btn.btn2{ 
                 @include contain('../images/pop/btn.png');
            }
        }
        .modal-body{
            .goend{
                padding:$s7 $s20;
                h3{ @include font-size(15px); color:#fff600; text-align:center; }
                .text{ margin:$s5 auto;
                    @include font-size(14px);
                    @include size(line-height,20px);
                    padding:$s5 $s10; box-shadow:0 3px 10px rgba(0,0,0,.3) inset; 
                    border-radius:$s5; background:rgba(0,66,232,.3);
                    em{ @include font-size(18px); padding:0 $s3; font-weight:bold; color:#fff600;}
                }
                p{ @include font-size(12px); text-align:center; }
            }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition'>
    <div slot="header" class='title-bg img-size' data-marginTop='25' data-width='391' data-height='79'>
        <i class='bg3 img-size' data-width='191' data-height='48'></i>
    </div>
    <div slot='body' class='goend img-size' data-paddingTop='10' data-paddingBottom='10'>
        <h3>恭喜！您已达到终点</h3>
        <div class='text img-size' data-marginTop='10' data-marginBottom='10' data-paddingTop='10' data-paddingBottom='10'>
            <ul>
                <li>名次：第<em>{{num}}</em>名</li>
                <li>奖品：{{name}}</li>
            </ul>
        </div>
        <p>奖品将于活动结束后15个工作日内联系您并发放</p>
    </div>
    <div slot='footer' class='submit'>
        <div class='btn btn2 img-size' style='margin:0 auto;' data-width='327' data-height='60' @click='close'></div>
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
            num : Number,
            name : String,
            transition : String,
        },
        mounted(){
            
        },
        methods : {
            close : function(){
                this.$refs.pop.closePop();
            }
        }
    }
</script>