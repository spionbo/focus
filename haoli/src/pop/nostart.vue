<style scoped>
    @import '../style/global';
    .modal-header{
        .title-bg{
            .t-1{ @mixin contain '../images/tit3.png'}
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
    <div slot="header">
        <div class='title-bg'>
            <i class='t-1 img-size' data-width='189' data-height='45'></i>
        </div>
    </div>
    <div slot='body' v-html='content'>
    </div>
    <div slot='footer' class='submit img-size'>
        <div class="btn img-size" data-fontSize='30' data-width='327' data-height='60' data-lineHeight='60' @click='close'>
            {{okTxt}}
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
            closeCallback : Function
        },
        data(){
            return {
                p : p
            }
        },
        methods : {
            close(){
                if(this.okCallback && this.okCallback() );
                this.$refs.pop.closePop();
            }
        }
    }
</script>