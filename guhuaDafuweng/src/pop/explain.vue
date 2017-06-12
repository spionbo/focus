<style scoped>
    @import '../style/global.css';
    .explain{
        @mixin contain '../images/explain.png';
        width:20rem; height:20rem;
        position:relative; z-index:999;
        .close{ position:absolute; top:0; right:0; }
        display:flex;
    }
    .content{
        margin:0 20px;
        flex:1;
        overflow-y:scroll;
        .img{ @mixin contain '../images/text1.png'; }
    }
</style>
<template>
<pop ref='pop' :transition='transition'>
    <div slot="main" class='explain img-size' data-width='655' data-height='947'>
        <div class='close img-size' data-width='84' data-height='84' @click='close'></div>
        <div class='content img-size' data-marginTop='140' data-marginBottom='50'>
            <div class='img img-size' data-height='1324'></div>
        </div>
    </div>
</pop>
</template>
<script>
    export default {
        mounted(){
            T.setImgSize();
        },
        props : {
            transition : String
        },
        methods : {
            close(){
                this.$refs.pop.closePop();
                this.okCallback && this.okCallback.call(this);
            }
        }
    }
</script>