<style lang='sass'>
  @import '../css/vue-pop';
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask" v-bind:class='superClass' @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container img-size" data-width='555' data-height='454' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="modal-header">
                    <slot name="header">
                        default header
                    </slot>
                </div>
                <div class="modal-body">
                    <slot name="body">
                        default body
                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <div class="btn img-size" data-width='327' data-height='60'></div>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</transition>
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
                showModal : true,
            }
        },
        mounted(){
            T.setImgSize();
            bus.$on('closePop',this.closePop);
        },
        methods : {
            closePropagtion : function( e ){
                e.stopPropagation();  //
                //e.cancelBubble = true;  // 
            },
            showPop : function(callback){
                this.showModal = true;
                if($.type(callback) == 'function'){
                    setTimeout(callback,500)
                }
            },
            closePop : function(callback , name){
                name = name || 'closePopEvent';
                this.showModal = false;
                T.getPop(callback);
                bus.$emit(name);
                this.closeCallback && this.closeCallback.call(this);
            }
        }
    }
</script>