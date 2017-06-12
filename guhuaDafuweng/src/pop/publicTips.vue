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
    .publicTips{
        display:flex;
        flex-direction:row;
        .cancel{
            margin-left:5px;
            padding: 0 20px;
            border-radius: 13px;
            background: linear-gradient(to bottom, #eee, #eee 40% , #ccc 55% , #ccc);
            color:#666;
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
    <div slot="header"></div>
    <div slot='body' v-html='content' class='notStart'>
    </div>
    <div slot='footer' class='submit publicTips img-size'>
        <div class="btn img-size" data-fontSize='30' data-width='327' data-height='60' data-lineHeight='60' @click='close'>
            {{okTxt}}
        </div>
        <div v-show='cancelTxt' class="cancel img-size" data-fontSize='30' data-height='60' data-lineHeight='60' @click='cancel'>
            {{cancelTxt}}
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
            status : Number,
            btnFn : Function,
            okTxt : String,
            content : String,
            closeCallback : Function,
            okCallback : Function,
            cancelTxt : {
                type: [String,Boolean],
                default: false,
            },
            cancelCallback : Function
        },
        methods : {
            close(){
                if(this.okCallback && this.okCallback() );
                this.$refs.pop.closePop();
            },
            cancel(){
                this.cancelCallback.call(this);
            }
        }
    }
</script>