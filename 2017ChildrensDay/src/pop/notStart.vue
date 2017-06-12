<style scoped>
    @import '../style/global';
    .modal-header{
        .title-bg{
            
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
    <div slot="header">
        <div class='title-bg img-size' data-width='390' data-height='79'>
            {{status==-1?'活动未开始':'活动已结束'}}
        </div>
    </div>
    <div slot='body' style='text-align:center;'>
        {{status==-1?'活动未开始':'活动已结束'}}
    </div>
    <div slot='footer' class='submit img-size'>
        <div class="btn img-size" data-fontSize='30' data-width='327' data-height='60' data-lineHeight='60' @click='close'>
            确定
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
                'status'
            ])
        },
        components : {
            pop
        },
        props : {
            transition : String
        },
        methods : {
            closeCallback(){
                T.callApp.home();
            },
            close(){
                //if(this.okCallback && this.okCallback() );
                this.$refs.pop.closePop();
                T.callApp.home();
            }
        }
    }
</script>