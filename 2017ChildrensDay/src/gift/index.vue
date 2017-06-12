
<style scoped>
@import '../style/global';
.img1{ @mixin contain '../images/people1.png'; }
.img2{ @mixin contain '../images/people2.png'; }
.img3{ @mixin contain '../images/people3.png'; }
.img4{ @mixin contain '../images/people4.png'; }
.img5{ @mixin contain '../images/people5.png'; }
.modal-mask{
    overflow-y:auto;
}
.mask{ @mixin contain '../images/bg1.jpg';
    
    header{
        position:relative;
        display:flex;
        flex-direction:row;
        align-items: center;

        color:#fff;
        .img{ margin:0 20px;}
        

        .back{
            position:absolute;
            border-radius:7px;
            padding:3px 15px;
            background:#ff9dd1;
        }
    }
    .list{
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        .img{ margin:0 auto;}
        .img1,.img2,.img3{ @mixin contain '../images/xz/liping.png'}
        .img4,.img5{ @mixin contain '../images/xz/2liping.png'; background-position:center 0; }

        ul{
            display:flex;
            flex-direction:row;
            flex-wrap: wrap;
            li{ width:33.3%; padding-bottom:15px;

            }

            &.two{
                justify-content: center;
            }
        }
    }
    .content{ 
        margin:0 auto;
        overflow:hidden;
    }
    .liping{
        margin:0 auto;
        display:flex;
        align-items:center;
        justify-content:center;
        transition-duration:.3s;
        &.current{
            transform:translateY(-100%);
        }
        .img{
            transition-duration:.3s;
            &:hover{ transform:scale(1.2)}
        }
        .img1{ @mixin contain '../images/liping1.jpg'}
        .img2{ @mixin contain '../images/liping2.jpg'}
        .img3{ @mixin contain '../images/liping3.jpg'}
        .img4{ @mixin contain '../images/liping4.jpg'}
        .img5{ @mixin contain '../images/liping5.jpg'}
    }
    .submit{
        .btn{ margin:0 auto; @mixin contain '../images/btn1.jpg' ;}
        p{ padding-top:5px; text-align:center;}
    }
}
.collection{
    position:fixed;
    left:0; 
    top:0; 
    width:100%; 
    height:100%;
    background:rgba(0,0,0,.75);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    .img{ margin:0 auto;}
    transition-duration:.3s;
    opacity:0;


    p{
        text-align:center;
        padding-bottom:15px;
    }
    .cnt{
        transition-duration:.3s;
        transform-origin: -200px center;
        transform:rotate(-80deg);
        &.cur{
            transform:rotate(0deg);
        }
        &.cur1{
            transform:rotate(80deg);
        }
    }

}

</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask" v-bind:class='superClass'>
        <div class='mask img-size' data-height='1334'>
            <header class='img-size' data-height='245'>
                <div class='back img-size' data-fontSize='24' data-right='45' data-top='45' @click='closePop'>返回</div>
                <div class='img img-size' :class='className' data-width='117' data-height='157'></div>
                <div class='text img-size' data-fontSize='30'>看下我给大家伙准备了哪些礼物：</div>
            </header>
            <div class='content img-size' data-width='670' data-height='960'>
                <div class='liping img-size' v-show='liping' data-width='670' data-height='960'>
                    <div class='img img-size' :class='className' data-width='619' data-height='717'></div>
                </div>
                <div class='list img-size' v-show='showList' data-width='670' data-height='960'>
                    <div v-if='isHaveFree!=1' class='list-ul'>
                        <ul>
                            <li v-for='obj in 9'>
                                <div @click='prize' class='img img-size' :class='className' data-width='189' data-height='143'></div>
                            </li>
                        </ul>
                        <ul class='two'>
                            <li v-for='obj in 2'>
                                <div @click='prize' class='img img-size' :class='className' data-width='189' data-height='143'></div>
                            </li>
                        </ul>
                    </div>
                    <div v-if='isHaveFree==1' class='list-ul'>
                        <ul>
                            <li v-for='obj in 9'>
                                <div @click='prize' class='img img-size' :class='className' data-width='189' data-height='143'></div>
                            </li>
                        </ul>
                        <ul class='two'>
                            <li v-for='obj in 2'>
                                <div @click='prize' class='img img-size' :class='className' data-width='189' data-height='143'></div>
                            </li>
                        </ul>
                    </div>
                    <div class='submit'>
                        <p class='img-size' v-if='obj.needCoin>0' data-fontSize='24' data-paddingBottom='10'>{{obj.needCoin}}金币/次</p>
                        <div class='btn img-size' @click='prize' data-width='304' data-height='81'></div>
                        <p v-if='Freeofcharge==1' class='img-size' data-fontSize='30'>
                            本次拆礼物免费（每日1次）
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class='collection'>
            <p>我去藏礼物啦<br/>能不能找到大奖，就看你的啦~~</p>
            <div class='cnt'>
                <div class='img img-size' :class='className' data-width='117' data-height='157'></div>
            </div>
        </div>
        <!--<audio id='audio' controls="controls" autoplay loop="loop" style='display:none'>
          <source :src="mp3" type="audio/mpeg" />
        </audio>-->
    </div>
</transition>
</template>
<script>
    import {prize} from '../common/URL';
    import store from '../store';
    import requirePop from '../pop/requirePop.js';
    export default {
        store,
        props : {
            superClass : String,
            className : String,
            transition : String,
            closeCallback : Function,
            index : Number,
            isHaveFree : Number,
            prizeType : Number,
            Freeofcharge : Number,
            obj : Object
        },
        data(){
            return {
                showModal : true,
                liping : true,
                showList : false,
                mp3:0,
                width:117,
                height:157,
                isclick : true
            }
        },
        mounted(){
            var self = this;
            T.setImgSize();
           /* var mp3 = {
                '0':'超级玛丽',
                '1':'哆啦A梦',
                '2':'喜羊羊',
                '3':'喵',
                '4':'麦兜',
            }
            this.mp3 = this.index+'.mp3';

            $('html').on('touchstart',function(){
                $('#audio')[0].play();
            });*/
            /*setTimeout(function(){
                self.showList = true;
                $('.liping').css({marginTop:-$('.liping').height()+'px'});
                setTimeout(function(){
                    self.liping = false;
                },310);
            },1000);*/

            var collection = $('.collection') ,
                collectionCnt = $('.collection .cnt');

            setTimeout(function(){
                collection.css({opacity:1})
                setTimeout(function(){
                    collectionCnt.addClass('cur');
                    self.liping = false;
                    self.showList = true;
                    setTimeout(function(){
                        collectionCnt.addClass('cur1');
                        setTimeout(function(){
                            collection.css({opacity:0});
                            setTimeout(function(){
                                collection.remove();
                            },350);
                        },350)
                    },2000);
                },350);
            },3000);
        },
        methods : {
            closePropagtion( e ){
                e.stopPropagation();  //
                //e.cancelBubble = true;  // 
            },
            showPop(callback){
                this.showModal = true;
                if($.type(callback) == 'function'){
                    setTimeout(callback,500)
                }
            },
            closePop(callback , name){
                name = name || 'closePopEvent';
                this.showModal = false;
                this.closeCallback && this.closeCallback.call(this);
                setTimeout(()=>{
                    $(this.$el).remove();
                },510)
            },
            prize(){
                var self = this , 
                    text = '';

                if(self.obj.needCoin>0){
                    text = '<center>本次兑换需要花费:'+self.obj.needCoin+'金币</center>'
                }else{
                    text = '<center>本次拆礼物免费</center>';
                }
                if(!this.isclick) return;
                this.isclick = false;
                requirePop('publicTips',{
                    props:{
                        title : '提示',
                        content : text,
                        okTxt : '确定拆礼物',
                        cancelTxt : '取消',
                        closeCallback : function(){
                            self.isclick = true;
                        },
                        okCallback : function(){
                            T.ajax({
                                url : prize,
                                data :{
                                    uid : T.uid,
                                    prizeType : self.prizeType
                                }
                            }).then(data=>{
                                //console.log(data);
                                var prize = data.map.prize;
                                if(self.isHaveFree>0){
                                    self.$store.commit('haveFree',(self.isHaveFree-1));
                                }
                                self.$store.commit('all');
                                requirePop('winng',{
                                    props : {
                                         transition : 'rotate3d',
                                         className : 'img'+(self.index+1),
                                         closeCallback : self.closePop,
                                         back : self.closePop,
                                         obj : prize
                                    }
                                })
                            })
                        }
                    }
                });
            }
        }
    }
</script>