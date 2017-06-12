<style scoped>
@import '../style/global';
.box{
    position:absolute;
    .header{ overflow:hidden;}
    .coupon{
        position:absolute;
        .item{
            @mixin contain '../images/itemblue.png';
            &.red{
                @mixin contain '../images/itemred.png';
            }
            display:flex; flex-direction:column;
            h2{ color:#fffb98; text-align:center; font-weight:normal; }
            .content{
                flex:1;
                padding:5px 0; 
                text-align:center;
                box-sizing:border-box;
                color:#fff;
            }
        }
    }
    .left-btn{
        position:absolute;
        z-index:999;
    }
    .right-btn{
        position:absolute;
        z-index:999;
    }
    .prize{ 
        display:flex;
        justify-content:center;
        align-items:center;
        .text{
            padding:2px 20px;
            background:#ffd9ee;
            border-radius:5px;
            color:#ff005a;
        }
    }
    .people{
        float:left;
        display:flex;
        justify-content:center;
        align-items:center;
        .img1{ @mixin contain '../images/people1.png'; }
        .img2{ @mixin contain '../images/people2.png'; }
        .img3{ @mixin contain '../images/people3.png'; }
        .img4{ @mixin contain '../images/people4.png'; }
        .img5{ @mixin contain '../images/people5.png'; }
    }
    .about{ padding:2px 0 3px; color:#fa5a75; }
    .btn{ margin:0 auto 5px; @mixin contain '../images/btn3.png'; }
}
</style>
<template>
<div class='box img-size' data-width='560' data-height='475' data-top='247' data-left='95'>
   <div class='left-btn img-size' @click='leftEvent' data-left='-31' data-top='170' data-width='65' data-height='65'></div>
   <div class='right-btn img-size' @click='rightEvent' data-right='-31' data-top='170' data-width='65' data-height='65'></div>
   <div style='overflow:hidden'>
       <div class='effect'>
            <div class='option' v-for="item in list">
                <div class='header'>
                   <div class='people img-size' data-width='250' data-height='355'>
                        <div class='img-size' :class='item.class' data-width='220' data-height='297'></div>
                   </div>
                   <div class='coupon img-size' data-top='18' data-left='250'>
                        <div class='item red img-size' data-width='270' data-height='137'>
                            <h2 class='img-size' data-fontSize='24' data-height='40' data-lineHeight='40'>最高奖项</h2>
                            <div class='content img-size' v-html='item.max' data-fontSize='30' data-lineHeight='36'></div>
                        </div>
                        <div class='item blue img-size' data-marginTop='20' data-width='270' data-height='137'>
                            <h2 class='img-size' data-fontSize='24' data-height='40' data-lineHeight='40'>最低奖项</h2>
                            <div class='content img-size' v-html='item.min' data-fontSize='30' data-lineHeight='36'></div>
                        </div>
                        <div class='about img-size' data-fontSize='24'>{{item.text}}</div>
                   </div>
               </div>
               <div v-show='item.index==0' class='btn img-size' :class='{gray:isHaveFree<1}' @click='gift(item)' data-width='210' data-height='56'></div>
               <div v-show='item.index!=0' class='btn img-size' :class='{gray:userCoin<item.needCoin}' @click='gift(item)' data-width='210' data-height='56'></div>
               <div class='prize'>
                    <div class='text img-size' data-fontSize='24'>{{item.footer}}</div>
               </div>
           </div>
       </div>
   </div>
   
</div>
</template>
<script>
import requirePop from '../pop/requirePop.js';
import Move from '../widgets/moveEvent';
import box from '../components/box.vue';
import store from '../store';
import {mapState} from 'vuex';
    export default {
        store,
        computed:{
            ...mapState([
                'isHaveFree'
            ])
        },
        /*watch : {
            isHaveFree( newData , old ){
                var list = this.list[0];
                if(newData<=0){
                    list.footer = list.needCoin+'金币/次';
                    //self.list[0].footer = '';
                }else{
                    list.footer = '免费，每天限1次';
                }
                this.list.splice(0,1,list);
            }
        },*/
        components:{
            sectionBox : box 
        },
        data(){
            return {
                tel : '',
                isTel : false , 
                move : false , 
                Freeofcharge : false , //是否免费
                userCoin : 0,
                list : []
            }
        },
        mounted(){
            var self = this;
            T.init();

            self.$store.commit('all',function(data){
                self.$store.commit('haveFree',data.map.isHaveFree);
                var newList = [
                    {
                        index : 0,
                        class : 'img1',
                        max : '1.5%加息券<br>或100元红包',
                        min : '0.5%加息券<br>或5元红包',
                        text : '',
                        footer : '免费，每天限1次'
                    },
                    {
                        index : 1,
                        class : 'img2',
                        max : '膳魔师保温杯<br><em>（价值299）</em>',
                        min : '5元京东卡<br>或2%加息券',
                        text : '*有极小机率抽中iPhone7',
                        footer : '2000金币/次'
                    },
                    {
                        index : 2,
                        class : 'img3',
                        max : 'iPhone7Plus 128G<br><em>（价值7188）</em>',
                        min : '50元京东卡',
                        text : '*有很小机率抽中iPhone7',
                        footer : '20000金币/次'
                    },
                    {
                        index : 3,
                        class : 'img4',
                        max : 'iPhone7Plus 128G<br><em>（价值7188）</em>',
                        min : '150元京东卡',
                        text : '*有很小机率抽中iPhone7',
                        footer : '50000金币/次'
                    },
                    {
                        index : 4,
                        class : 'img5',
                        max : 'iPhone7Plus 128G<br><em>（价值7188）</em>',
                        min : '500元京东卡',
                        text : '*有一定机率抽中iPhone7',
                        footer : '100000金币/次'
                    }
                ];

                newList[0].isHaveFree = self.isHaveFree;
                self.userCoin = data.map.userCoin;


                data.map.lotteryMap.map(function( obj , i){
                    newList[i].needCoin = obj.needCoin;
                    newList[i].prizeType = obj.prizeType;
                    if(i==0) return;
                    newList[i].footer = obj.needCoin+'金币/次';
                });
                //newList[0].footer = '免费，每天限1次';
                /*if(data.map.isHaveFree>0){
                    newList[0].footer = '免费，每天限1次';
                }else{
                    newList[0].footer = '';
                }*/

                self.list = newList;
                self.$nextTick(function(){
                    T.setImgSize();
                    self.move = new Move({
                         nav : null
                        ,effect : $('.box .effect')
                        ,option : $('.box .option')
                        ,animate3d : false
                        ,auto : true
                    });
                });
            })
        },
        methods : {
            explain(){
                requirePop('explain')
            },
            investment(){
                T.callApp.investment();
            },
            leftEvent(){
                this.move.goPage(this.move.config.current-1)
            },
            rightEvent(){
                this.move.goPage(this.move.config.current+1)
            },
            gift( obj ){
                var self = this;
                if(obj.index == 0 && this.isHaveFree<1) return;
                if(this.userCoin < obj.needCoin) return ;
                T.click(()=>{
                    require.ensure([],(require)=>{
                        $('<div class="child">').appendTo('#app');
                        Vue.component(
                          'giftMask',
                          () => System.import('../gift/index.vue')
                        );
                        new Vue({
                            el : '#app .child' , 
                            render(h){
                                return h('giftMask',{
                                    props : {
                                         transition : 'mask',
                                         Freeofcharge : obj.Freeofcharge , 
                                         index : obj.index,
                                         prizeType : obj.prizeType,
                                         isHaveFree : self.isHaveFree,
                                         className : obj.class,
                                         obj : obj
                                    }
                                })
                            }
                        });
                    });
                })
            }
        }
    }
</script>