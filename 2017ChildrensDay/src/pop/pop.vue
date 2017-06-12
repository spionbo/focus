<style>
    @import '../style/vue-pop';
    .modal-header{
        position: relative; z-index: 999;
        .bg{ 
            background:url('../images/title.png'); background-size:contain; 
            text-align:center;

            display:flex;
            justify-content:center;
            align-items:center;
            >div{ color:#fff;}
        }
    }
    .modal-body{
        background:#ffffff;
        .body-cnt{ flex:1; overflow-y:auto;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask" v-bind:class='superClass' @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container img-size" :data-width='width||600' :data-height='height||auto' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='82' data-height='81' data-top='-20' data-right='-20' @click='closePop'></div>
                </slot>
                <div class="modal-header">
                    <div class='bg img-size' data-fontSize='48' data-width='595' data-height='123' data-lineHeigh='120'>
                        <slot name="header">
                            default header
                        </slot>
                    </div>
                </div>
                <div class="modal-body">
                    <div class='body-bg img-size' data-marginTop='-60' data-paddingTop='80'>
                        <div class='body-cnt'>
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
            width : Number,
            height : Number
        },
        data(){
            return {
                showModal : true,
            }
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
            closePropagtion : function( e ){
                e.stopPropagation(); //
                //e.cancelBubble = true;  // 
            },
            showPop : function(callback){
                this.showModal = true;
                if($.type(callback) == 'function'){
                    setTimeout(callback,500)
                }
            },
            closePop : function(){
                this.showModal = false;
                this.closeCallback && this.closeCallback();
                setTimeout(()=>{
                    $(this.$el).remove();
                },510)
            }
        }
    }
</script>