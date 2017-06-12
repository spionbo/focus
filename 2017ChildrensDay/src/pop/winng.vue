<style>
.modal-mask .modal-footer .btn.winbtn{
    background:none;
    @mixin contain '../images/btn2.png';
 }
</style>
<style scoped>
    @import '../style/global';
    .modal-header{
        .title-bg{
             color:#fff600;
            .img1{ @mixin contain '../images/people1.png',100% auto; }
            .img2{ @mixin contain '../images/people2.png',100% auto; }
            .img3{ @mixin contain '../images/people3.png',100% auto; }
            .img4{ @mixin contain '../images/people4.png',100% auto; }
            .img5{ @mixin contain '../images/people5.png',100% auto; }
        }
    }
    .content-bg{
        margin:0 auto;
        display:flex;
        color:#fff;
        justify-content:center;
        align-items:center;
        @mixin contain '../images/wing.jpg'
    }
</style>
<template>
<pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
    <div slot="header">
        <div class='title-bg img-size' data-width='390' data-height='79'>
            <div class='img img-size' :class='className' data-width='149' data-marginTop='6' data-height='110'></div>
            恭喜获得
        </div>
    </div>
    <div slot='body'>
        <div class='content-bg img-size' data-width='346' data-height='203' data-fontSize='26'>
            {{obj.prizeName}}
        </div>
        <div class='text'>
            {{obj.prizeType!=5?'奖励已发放到您的多融账户，可登录APP或官网查看并使用':'奖励将在活动结束后的15个工作日内统一发放'}}
        </div>
    </div>
    <div slot='footer' class='submit img-size'>
        <div class="btn winbtn img-size" data-fontSize='42' data-width='350' data-height='71' data-lineHeight='71' @click='goHome'>
            我知道了
        </div>
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
            className : String,
            obj : Object,
            closeCallback : Function,
            okCallback : Function,
            back:Function
        },
        methods : {
            close(){
                if(this.okCallback && this.okCallback() );
                this.$refs.pop.closePop();
            },
            goHome(){
                this.$refs.pop.closePop();
                this.back();
            }
        }
    }
</script>