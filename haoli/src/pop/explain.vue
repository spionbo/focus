<style scoped>
    @import '../style/global';
    .modal-header{
        .title-bg{
            .t-2{ @mixin contain '../images/tit2.png'}
        }
    }
    .content{
        padding:0 20px;
        color:#fff;
        @mixin font-size 12px;
        dl{ 
            display:flex;
            padding-bottom:10px;
            overflow:hidden;
        }
        dd{ width:30px; line-height:22px;}
        dt{
            flex:1;
            line-height:22px;
            i{display:inline-block; width:10px; height:10px; margin-right:3px; @mixin contain '../images/star.jpg'; }
            p{ padding:3px 0; line-height:22px;@mixin font-size 12px;}
        }
    }
</style>
<template>
<pop ref='pop' height='900' :transition='transition' :closeCallback='closeCallback'>
    <div slot="header">
        <div class='title-bg img-size' data-width='390' data-height='79'>
            <i class='t-2 img-size' data-width='189' data-height='47'></i>
        </div>
    </div>
    <div slot='body' class='content'>
        <dl>
            <dd>1、</dd>
            <dt>活动时间：{{P.startTime}}至{{P.endTime}}</dt>
        </dl>
        <dl>
            <dd>2、</dd>
            <dt>每日排名：活动期间，每天进行一次排名，共7天，每天投资前6名可获得奖品</dt>
        </dl>
        <dl>
            <dd>3、</dd>
            <dt>总排名：活动期间进行一次总排名，以最后1天排名为准，累计财富值前8名可获赠奖品</dt>
        </dl>

        <p>4、排名规则如下：</p>
        <dl>
            <dd></dd>
            <dt>
                <p>
                    <i></i>排名统计时间，当天0:00~23:59，以提交订单时间为准
                </p>
                <p>
                    <i></i>购买30天及以上期限产品，参与排名，按财富值进行排名，财富值=投资金额*投资期限/360
                </p>
                <p><i></i>榜单实时展示，榜单结果以当天23:59最终结果为准，其余时间仅供参考</p>
                <p><i></i>如遇到财富值相同的，按最先到达的用户优先排名</p>
            </dt>
        </dl>

        <dl>
            <dd>5、</dd>
            <dt>
                每日榜单排名前6名依次可获得奖品：1000元京东购物卡+2.3%加息券、800元京东购物卡+2.3%加息券、500元京东购物卡+2.3%加息券、300元京东购物卡+2.3%加息券、200元京东购物卡+2.3%加息券、50元京东购物卡+2.3%加息券
            </dt>
        </dl>
        <dl>
            <dd>6、</dd>
            <dt>
                每周榜单排名前8名依次可以获得奖品：iPhone7 128G红色特别版+2.5%加息券、Gopro HERO5运动摄像机+2.5%加息券、irobot扫地机器人+2.5%加息券、Kindle Paperwhite+2.5%加息券、LG趣拍得+2.5%加息券、无印良品香薰机+2.5%加息券、凌美恒星钢笔+2.5%加息券、膳魔师保温杯+2.5%加息券
            </dt>
        </dl>
        <dl>
            <dd>7、</dd>
            <dt>
                2.3%/2.5%加息券使用条件：≥90天产品适用，起投金额≥1000元，有效期30天。加息券将在每日榜单/总榜确定后1~2个工作日内发放到您的多融账户，可登录多融理财APP或官网查看并使用。京东卡机实体奖品将统一于活动结束后15个工作日内发放。
            </dt>
        </dl>
        <dl>
            <dd>8、</dd>
            <dt>本次活动最终解释权归多融财富所有</dt>
        </dl>
    </div>
    <div slot='footer' class='submit'>
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    export default {
        components : {
            pop
        },
        data(){
            return {
                P:Public
            }
        },
        props : {
            transition : String,
            closeCallback : Function,
        },
        methods : {
            close(){
                this.$refs.pop.closePop();
            }
        }
    }
</script>