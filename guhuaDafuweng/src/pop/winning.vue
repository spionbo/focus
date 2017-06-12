<style scoped>
    @import '../style/global.css';
    .modal-mask{
       .modal-header{
            .title-bg{
                .bg1{ @mixin contain '../images/txt1.png';}
            }
        }
        .modal-body{
            .winning-pop{
                padding:0 $s20;
                h2{ color:#fff600; text-align:center;}
                p{ text-align:center; }
            }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition'>
    <div slot="header" class='title-bg img-size' data-marginTop='25' data-width='391' data-height='79'>
        <i class='bg1 img-size' data-width='189' data-height='49'></i>
    </div>
    <div slot='body' class='winning-pop'>
        <h2 class='img-size' data-paddingTop='10' data-paddingBottom='10' data-fontSize='34'>恭喜，获得{{prize.prizeName}}</h2>
        <p class='img-size' data-fontSize='24'>奖励已自动发放到您的多融账户，请打开多融财富APP自行查收</p>
        <h3 v-if='prize.getCredits>0' class='img-size' data-fontSize='30' data-paddingTop='10' data-paddingBottom='10'>另送：{{prize.getCredits}}积分</h3>
        <p v-if='prize.getCredits>0' class='img-size' data-fontSize='24'>积分可至“积分兑换”栏目兑换奖品</p>
    </div>
    <div slot='footer' class='submit img-size' data-marginTop='20'>
        <div class="btn img-size" data-width='327' data-height='60' data-lineHeight='60' @click='close'>OK，我知道了</div>
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    import store from '../store';
    import {mapState} from 'vuex';
    export default {
        store,
        computed : {
            /*getPrizeType(){
                var prize = this.$store.store.prize;

            },*/
            ...mapState([
                'prize'
            ])
        },
        components : {
            pop
        },
        data(){
            return {

            }
        },
        props : {
            transition : String,
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
            close(){
                this.$refs.pop.closePop();
            }
        }
    }
</script>