<style scoped>
    @import '../style/global';
    .content{
        dl{padding:5px 0; line-height:28px; }
    }
    .explain{
        .modal-footer{
            .btn{ background:none; @mixin contain '../images/btn1.png'; }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' superClass='explain' height='800' :closeCallback='closeCallback'>
    <div slot="header">
        活动规则
    </div>
    <div slot='body'>
        <div class='content'>
            <dl>
                <dd></dd>
                <dt><b>1、</b>活动时间：{{startTime}} - {{endTime}}</dt>
            </dl>
            <dl>
                <dd>2、赚金币</dd>
                <dt>活动期间，投资20天及以上产品即可获得金币。金币=投资金额*期限/360</dt>
            </dl>
            <dl>
                <dd>3、要礼物</dd>
                <dt>
                    <p>
                        ① 活动期间，每天1次免费机会，可向“马里奥”要礼物，礼物为优惠券，最高1.5%加息券或100元红包，最低0.5%加息券或5元红包。
                    </p>
                    <p>
                         ② 花费不同数量的金币，可自行选择向“哆啦A梦”“加菲猫”“喜羊羊”“麦兜”要礼物，最高及最低礼物各有不同，具体参见活动页面
                    </p>
                </dt>
            </dl>
            <dl>
                <dd>4、礼物发放</dd>
                <dt>
                    <p>① 优惠券，将即时发放到您的多融账户，可登录APP或官网查看并使用</p>
                    <p>② 实物奖品，将在活动结束后的15个工作日内完成发放，礼品以收到的实物为准</p>
                </dt>
            </dl>
            <dl>
                <dd>5、活动最终解释权归多融财富所有</dd>
                <dt></dt>
            </dl>
        </div>
    </div>
    <div slot='footer' class='submit img-size'>
        <div class="btn img-size" data-fontSize='30' data-width='494' data-height='85' data-lineHeight='85' @click='close'>
            我知道了
        </div>
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    import store from '../store';
    import {mapState} from 'vuex';

    export default {
        store,
        computed:{
            ...mapState([
                'startTime',
                'endTime'
            ])
        },
        components : {
            pop
        },
        props : {
            transition : String
        },
        methods : {
            close(){
                if(this.okCallback && this.okCallback() );
                this.$refs.pop.closePop();
            }
        }
    }
</script>