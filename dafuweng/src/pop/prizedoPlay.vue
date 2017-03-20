<style lang='sass'>
  @import '../css/vue-pop';
    .modal-mask{
        .prizedo{
            position:relative; z-index:3;
            @include contain('../images/prize/bg.png');

            .close{ position:absolute; top:0; right:0;}
            .content{
                @include box-sizing;
                .li{ 
                    float:left; text-align:center;
                    @include contain('../images/prize/min-box.png'); 
                    @include box;
                    @include box-sizing;
                    @include box-orient(vertical);
                    @include boxCenter;
                    @include boxMiddle;
                    @include transition-duration(.08s);
                    padding-bottom:$s5;
                    color:#cc0000; 

                    p{ @include font-size(7px); white-space: nowrap; }

                    .img{
                        margin:$s8 auto $s5;
                        @include contain('../images/prize/jd.png');
                        &.img2{ @include filter(hue-rotate(293deg));}
                        &.img3{ @include filter(hue-rotate(156deg));}
                        &.img4{ @include filter(hue-rotate(331deg));}
                        &.img5{ @include filter(hue-rotate(201deg) saturate(7));}
                        &.img6{ @include filter(hue-rotate(320deg) saturate(7));}
                    }
                    .dao{
                        margin:$s5 auto $s2;
                        @include contain('../images/prize/dao.png');
                    }
                    .you{
                        margin:$s8 auto $s4;
                        @include contain('../images/prize/you.png');
                    }
                    &.btn{
                        @include contain('../images/prize/choujiang.png'); 
                        &:hover{ @include filter(hue-rotate(-38deg)); }
                        &.gray{ @include filter(grayscale(100%)) }
                    }
                    &.cur{
                        @include transform(scale(1.1))
                    }
                }
            }
        }
    } 
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask" v-bind:class='superClass'  @click='closePop'>
        <div class="modal-wrapper prizedo img-size" data-width='624' data-height='678' @click='closePropagtion'>
            <div class='close img-size' data-width='79' data-height='79'  @click='closePop'></div>
            <div id='PrizeDo' class="content img-size" data-paddingTop='117' data-paddingLeft='38'>
                <div class='li img-size' data-width='165' data-height='153' data-marginLeft='14' data-marginTop='16'>
                    <div class='img img1 img-size' data-width='115' data-height='74'></div>
                    <p>10元京东购物卡</p>
                </div>
                <div class='li img-size' data-width='165' data-height='153' data-marginLeft='14' data-marginTop='16'>
                    <div class='img img2 img-size' data-width='115' data-height='74'></div>
                    <p>30元京东购物卡</p>
                </div>
                <div class='li img-size' data-width='165' data-height='153' data-marginLeft='14' data-marginTop='16'>
                    <div class='img img3 img-size' data-width='115' data-height='74'></div>
                    <p>50元京东购物卡</p>
                </div>
                <div class='li img-size' data-width='165' data-height='153' data-marginLeft='14' data-marginTop='16'>
                    <div class='img img4 img-size' data-width='115' data-height='74'></div>
                    <p>100元京东购物卡</p>
                </div>
                <div @click='submit' class='li btn img-size' data-width='165' data-height='153' data-marginLeft='14' data-marginTop='16'>
                    
                </div>
                <div class='li img-size' data-width='165' data-height='153' data-marginLeft='14' data-marginTop='16'>
                    <div class='you img-size' data-width='109' data-height='79'></div>
                    <p>小米移动电源</p>
                </div>
                <div class='li img-size' data-width='165' data-height='153' data-marginLeft='14' data-marginTop='16'>
                    <div class='img img5 img-size' data-width='115' data-height='74'></div>
                    <p>200元京东购物卡</p>
                </div>
                <div class='li img-size' data-width='165' data-height='153' data-marginLeft='14' data-marginTop='16'>
                    <div class='img img6 img-size' data-width='115' data-height='74'></div>
                    <p>1000元京东购物卡</p>
                </div>
                <div class='li img-size' data-width='165' data-height='153' data-marginLeft='14' data-marginTop='16'>
                    <div class='dao img-size' data-width='131' data-height='88'></div>
                    <p>双立人刀具套装</p>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    import {raffle} from '../common/URL';
    import requirePop from './requirePop.js';
    export default {
        props : {
            transition : String,
        },
        data (){
            return {
                isclick : true,
                resultNum : null,
                resultName : '',
                showModal : true,
            }
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
            closePropagtion : function( e ){
                e.stopPropagation();//
                //e.cancelBubble = true;  // 
            },
            submit : function(){
                var self = this,
                    num = 0 ,
                    len = 7 ,
                    arr = [0,1,2,5,8,7,6,3] , 
                    li = $('#PrizeDo .li') , 
                    timer = 0;
                if(!self.isclick) return;
                T.ajax({
                    url : raffle , 
                    data : {
                        uid : T.uid
                    },
                    callback : true,
                    success : function( _data ){
                        if(_data.flag){
                            var product = {
                                '双立人刀具套装':4,
                                '1000元京东购物卡':5,
                                '200元京东购物卡':6,
                                '小米移动电源':3,
                                '100元京东购物卡':7,
                                '50元京东购物卡':2,
                                '30元京东购物卡':1,
                                '10元京东购物卡':0
                            }
                            self.resultName = _data.map.prizeName;
                            self.resultNum = product[self.resultName];
                            //_data.map.prize.name.indexOf()
                            //self.resultNum
                        }else{
                            self.closePop();
                            require.ensure([],(require)=>{
                                var pop = require('./index.js')
                                new pop({
                                    title : '',
                                    width:'70%',
                                    content : '<center>'+(_data.errorMsg||'操作失败，请联系客服！')+'</center>',
                                    okBtn : true,
                                    cancelBtn:false,
                                    okTxt:'确定',
                                    timing : 'errorcur'
                                });
                            },'pop');
                        }
                    }
                })
                self.isclick = false;
                function go(){
                    li.removeClass('cur');
                    if(num>len){
                        num=0;
                    }
                    li.eq(arr[num]).addClass('cur');
                    num++;
                }
                timer = setInterval(go,80);
                var timeNum = 100 , index = 0;
                function end(){
                    index++;
                    timeNum += 20;
                    li.removeClass('cur');
                    if(num>len){
                        num=0;
                    }
                    li.eq(arr[num]).addClass('cur');
                    if( num==self.resultNum && index>20){
                        self.isclick = true;
                        self.closePop(()=>{
                            requirePop('winning1',{
                                props: {
                                    name : self.resultName
                                }
                            });
                        })
                    }else{
                        num++;
                        setTimeout(end,timeNum)
                    }
                }
                setTimeout(function(){
                    clearInterval(timer);
                    end();
                },3000)
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
                bus.$emit('closePopEvent');
            }
        }
    }
</script>