<style lang='sass'>
    @import '../css/vue-pop';
    $closewidth : $s20;
    .modal-mask.prize-module{
        .mask-wrapper{
            width:100%; height:100%;
            @include box;
            @include box-orient(vertical);
            @include contain('../images/myPrize-pop.jpg',100% auto);
            background-color:#daf2ff;
            .close{
                height:$closewidth; width:$closewidth; display:block; position:absolute;
                overflow:hidden; width:$closewidth/1.8;
                &:before{
                    content:''; height:$closewidth/2; width:$closewidth/2; display:block; border:$s3 solid #333; border-right-width:0; border-bottom-width:0; transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg); position:absolute; top:7px; left:7px;
                }
            }
            .title{ height:$s50; line-height:$s50; text-align:center; @include font-size(18px); color:#333; }
            .address{
                height:$s30; line-height:$s30; text-align:right; padding-right:$s50;
                color:#333; font-size:$s12;
                .link{ color:#4403fe; text-decoration:underline;}
            }
            .content{
                @include box-flex; margin-bottom:$s20; overflow-y:scroll;

                margin:$s20; background:#fff; padding:$s20;
                ul{ @include box; @include border(#ede7d9); padding:$s10 0;
                    li{ @include box-flex; @include font-size(15px);

                        &:last-child{ text-align:right;}
                    }
                }
            }
        }
        .fly{ position:absolute; 
            @include animation(flymove,9s);
            @at-root{
                @include keyframes(flymove){
                    50%{ transform:translateX(10px);
                        -webkit-transform:translateX(10px)
                    }
                }
            }
        }
        .niao{
            width:$s15; height:$s5;
            @include contain('../images/niao/o.png');
            @include animation(niao-fei);
            @include keyframes(niao-fei){
                0% {@include contain('../images/niao/o.png');}
                50% {@include contain('../images/niao/o1.png');}
                100% {@include contain('../images/niao/o.png');}
            }
            &.n1{
                @include transform(scale(.7) translateX(5px))
            }
            &.n2{
                @include transform(scale(.8) translateX(15px) translateY(-10px) rotate(-29deg))
            }
        }
        .no-prize{
            padding:$s100 0; text-align:center;
        }
    }
</style>
<template>
<transition :name="transition">
    <div class="modal-mask prize-module" v-show='showModal'>
        <div class="mask-wrapper">
            <div class='fly img-size' data-top='60' data-right='140'>
                <div class="niao"></div>
                <div class="niao n1"></div>
                <div class="niao n2"></div>
            </div>
            <div class="close img-size" data-width='50' data-height='50' data-top='50' data-left='50' @click='closePop'></div>
            <div class="title">我的奖品</div>
            <div class='address'>
                实物奖品请至我的奖品页面中填写<span class='link' @click='address'>联系地址</span>
            </div>
            <div v-if='list.length' class='content img-size' data-marginTop='100'>
                <ul v-for='item in list'>
                    <li>{{item.name}}</li>
                    <li>{{item.updateTime}}</li>
                </ul>
            </div>
            <div v-else class='no-prize'>
                暂无奖品
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    import {records} from '../common/URL';
    import requirePop from './requirePop.js';
    export default {
        props : {
            close : Function,
            transition : String,
        },
        data(){
            return {
                list : [],
                showModal : true
            }
        },
        mounted(){
            var self = this;
            T.setImgSize();
            if(T.uid){
                T.ajax({
                    url : records,
                    data : { uid : T.uid },
                    success : function( _data ){
                        self.list = _data.map.result;
                    }
                })
            }
        },
        methods : {
            closePropagtion : function( e ){
                e.stopPropagation();  //
                //e.cancelBubble = true;  // 
            },
            showPop : function(callback){
                this.showModal = true;
                if($.type(callback) == 'function'){
                    setTimeout(callback,550)
                }
            },
            closePop : function(callback){
                this.showModal = false;
                T.getPop(callback);
            },
            address : function(){
                this.closePop(()=>{
                    requirePop('addAddress');
                })
            }
        }
    }
</script>