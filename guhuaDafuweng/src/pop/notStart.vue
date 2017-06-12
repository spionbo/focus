<style scoped>
    @import '../style/global.css';
    .modal-header{
        .title-bg{
            
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
    <div slot="header"></div>
    <div slot='body' class='notStart'>
        <h2>感谢关注</h2>
        <div v-if='status==-1'><p>本次活动尚未开始</p><p>敬请期待</p></div>
        <div v-else>本次活动已结束</div>
    </div>
    <div slot='footer' class='submit img-size'>
        <div class="btn img-size" data-fontSize='30' data-width='327' data-height='60' data-lineHeight='60' @click='closeCallback'>回首页</div>
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    import store from '../store';
    import {mapState} from 'vuex';
    export default {
        store,
        components : {
            pop
        },
        computed : mapState([
            'status'
        ]),
        props : {
            transition : String,
        },
        methods : {
            closeCallback(){
                T.callApp.home();
            }
        }
    }
</script>