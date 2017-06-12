<style>
    @import '../style/global';
    .modal-header{
        .title-bg{
            
        }
    }
    .modal-mask.publicTips{
        .modal-footer{
            .submit{
                display:flex;
                .btn{
                    flex:1;
                    &.cancel{
                        margin-left:5px;
                        background:#cccccc;
                    }
                }
            }
        }
    }
    
</style>
<template>
<pop ref='pop' class='publicTips' :transition='transition' :closeCallback='closeCallback'>
    <div slot="header">
        <div class='title-bg img-size' data-width='390' data-height='79'>
            {{title||'提示'}}
        </div>
    </div>
    <div slot='body' v-html='content' style='text-align:center'>
    </div>
    <div slot='footer' class='submit img-size'>
        <div class="btn img-size" data-fontSize='30' data-width='327' data-height='60' data-lineHeight='60' @click='close'>
            {{okTxt||'确定'}}
        </div>
        <div class="btn cancel img-size" v-if='cancelTxt' data-fontSize='30' data-height='60' data-lineHeight='60' @click='cancelClose'>
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
            cancelTxt : String,
            okTxt : String,
            title : String,
            content : String,
            closeCallback : Function,
            okCallback : Function,
            cancelCallback : Function
        },
        methods : {
            close(){
                if(this.okCallback && this.okCallback() );
                this.$refs.pop.closePop();
            },
            cancelClose(){
                if(this.cancelCallback && this.cancelCallback() );
                this.$refs.pop.closePop();
            }
        }
    }
</script>