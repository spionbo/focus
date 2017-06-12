<style scoped>
@import '../style/global.css';
    .bg{ background:#fffbee; }
    .integral{
        @mixin contain '../images/bg1.jpg';
        background-position:0 40px;
        margin-bottom:80px;

        header{
            color:#333;
            padding:10px;
            em{ color:#ff5300; }
        }
        .box{
            background:#fff;
            margin:20px;
            overflow:hidden;
            box-shadow:0 0 5px #ffdcbb;
            ul{
                li{ float:left; overflow:hidden;
                    padding-bottom:10px;
                    &:nth-child(even){ float:right;}
                }
                .img{
                    position:relative; z-index:1;
                    @mixin contain '../images/coupon.jpg';
                    margin-bottom:5px;
                    text-align:center;
                    color:#fff;
                }
                .footer{
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                }
                .left{ color:#ff5300;
                    font-weight:bold;
                    i{ display:inline-block; @mixin contain '../images/money.jpg';
                        width:10px; height:10px; margin-right:3px;
                    }
                }
                .tag{ 
                    position:absolute; 
                    right:0; top:0;
                    @mixin contain '../images/x.png';
                }
                .right{
                    flex:1;
                    display:flex;
                    flex-direction:column;
                    align-items:flex-end;
                    color:#fe3451;
                    .btn{ margin-top:3px; @mixin contain '../images/btn.jpg'}
                }
            }
        }
    }
</style>
<template>
<div class='child-transition bg'>
    <div class='module-scroll'>
        <section class='integral'>
            <header class='title img-size' data-height='140' data-fontSize='36'>
                我的积分：<em>{{userInfo.userCoin || 0}}</em>
                <p v-if='userInfo.cleanCoin>0' class='img-size' data-fontSize='28'>(其中{{userInfo.cleanCoin}}积分奖于{{userInfo.lastTime.Format('yy-MM-dd hh:mm:ss')}}过期)</p>
            </header>
            <article class='box img-size' data-paddingTop='40' data-paddingLeft='40' data-paddingRight='40'>
                <ul>
                    <li v-for='obj in list' class='img-size' data-height='180'>
                        <div class='img img-size' data-width='280' data-height='134' data-lineHeight='134'
                            data-fontSize='34'>{{obj.name}}
                            <div v-if='obj.type==5' class='tag img-size' data-width='52' data-height='48'></div>
                        </div>
                        <div class='footer'>
                            <div class='left img-size' data-fontSize='24'>
                                <i></i>{{obj.needGoldCoin}}
                            </div>
                            <div class='right img-size' data-fontSize='18'>
                                <div class='text'>
                                    <!--剩余{{obj.num}}-->
                                </div>
                                <div class='btn img-size' :class='{gray:obj.surplusQty==0}' data-width='75' data-height='31' @click='exchange(obj)'></div>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </article>
        </section>
    </div>
</div>
</template>
<script>
import {creditsMsg,exchange} from '../common/URL';
import requirePop from '../pop/requirePop.js';
export default {
    data (){
        return {
            list : [] , 
            userInfo : '',
        }
    },
    mounted(){
        var self = this;
        T.init();
        if(!T.uid) return; 
        T.ajax({
            url :　creditsMsg , 
            data : { uid : T.uid }
        }).then(data=>{
            self.$set(self,'list',data.map.listParameters);
            self.userInfo = data.map.userCoinMsg;
            self.$nextTick(()=>{
                T.setImgSize();
            })
        });
    },
    methods : {
        exchange( obj ){
            if(obj.surplusQty==0) return;
            requirePop('tips',{
                props: {
                    content : '确定兑换'+obj.name+'吗？',
                    okTxt : '确定',
                    cancelTxt : '取消',
                    transition : 'rotate3d',
                    okCallback : function(){
                        T.ajax({
                            url : exchange,
                            callback : true,
                            data :{
                                uid : T.uid,
                                prizeId : obj.id
                            }
                        }).then(data=>{
                            if(data.flag==false){
                                requirePop('jifwen',{
                                    props: {
                                        content : (data.errorMsg||'积分不够！'),
                                        okTxt : '确定',
                                        transition : 'rotate3d'
                                    }
                                },'publicTips');
                                return;
                            }
                            requirePop('exchange',{
                                props : {
                                    obj : obj
                                }
                            })
                        })
                    },
                    cancelCallback : function(){
                        this.$refs.pop.closePop();
                    }
                }
            },'publicTips');





        }
    }
}
</script>