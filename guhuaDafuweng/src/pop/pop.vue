<template>
<pop ref='pop' :transition='transition' :superClass='superClass' :closeCallback='closeCallback'>
    <div slot="main" class='modal-container img-size' data-width='555' data-height='454'>
        <slot name="close">
            <div class="close img-size" data-width='82' data-height='81' @click='closePop'></div>
        </slot>
        <div class="modal-header">
            <slot name="header">
                <div class='title-bg img-size' data-width='391' data-height='79' data-marginTop='20'></div>
            </slot>
        </div>
        <div class="modal-body img-size" data-paddingLeft='40' data-paddingRight='40'>
            <slot name="body">
                default body
            </slot>
        </div>
        <div class="modal-footer img-size" data-paddingBottom='40'>
            <slot name="footer">
                <div class="btn img-size" data-width='327' data-height='60' data-lineHeight='60'></div>
            </slot>
        </div>
    </div>
</pop>
</template>
<script>
    export default {
        props : {
            superClass : String,
            transition : String,
            closeCallback : Function,
        },
        data(){
            return {
                
            }
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
            closePop(callback){
                this.$refs.pop.closePop(callback);
            }
        }
    }
</script>