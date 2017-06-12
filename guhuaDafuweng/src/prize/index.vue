<style scoped>
@import '../style/global.css';
    .bg{ background:#fffbee; }
    .prize{
        height:100%;
        box-sizing:border-box;
        display:flex;
        flex-direction:column;
        nav{
            @mixin contain '../images/bg1.jpg';
            background-position:0 bottom;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            ul{
                display:flex;
                flex-direction:row;

                li{
                    flex:1;
                    color:#fe7634;
                    font-size:15px;
                    border-bottom:2px solid #ffb08a;
                    text-align:center;
                    &.active{
                        border-color:#ff5300;
                        color:#ff5300;
                    }
                }
            }
        }
        .box{
            background-color:#fff;
            margin:20px;
            
            overflow:hidden;
            box-shadow:0 0 5px #ffdcbb;
            
            .tit ul,.cnt ul{
                padding:0 20px 0;
                display:flex;
                flex-direction:row;
            }
            .tit{ padding-bottom:5px; color:#ff5300;}
            li{
                flex:1;
                &:nth-child(1){ flex:1;}
                &:nth-child(2){ flex:2;}
                &:nth-child(3){ flex:1;}
            }
            .cnt{
                @mixin contain '../images/prize-bg.png';
                color:#333;
                padding-bottom:20px;
                line-height:25px;
            }
        }
        >aside{
            color:#fe7634;
            margin:0 20px; 
            dl{ padding:1px 0; overflow:hidden; 
                display:flex;
                flex-diraction:row;
                dd{
                    width:15px; text-align:left;
                }
            }
        }
        .content{
            flex:1;
            display:flex;
            background-color:#fff;
            box-shadow:0 0 5px #ffdcbb;
            overflow:hidden;
            position:relative;
            transition-duration:.5s;

            .list-child{
                flex:1;
                display:flex;
            }
        }
    }
</style>
<template>
<div class='child-transition bg'>
    <div class='module-scroll'>
        <section class='prize img-size' data-paddingBottom='150'>
            <nav class='img-size' data-height='140'>
                <ul class='img-size' data-height='60' data-lineHeight='60'>
                    <li class='active' @click='tab(0,$event)'>我的奖品</li>
                    <li @click='tab(1,$event)'>积分兑换记录</li>
                </ul>
            </nav>
            <div class='content img-size' data-margin='40'>
                <transition :name="transition">
                    <div v-show='show' class='list-child left-sider'>
                        <list :url='record'  :pageSize='pageSize' type='1'></list>
                    </div>
                </transition>
                <transition :name="transition">
                    <div v-show='!show' class='list-child left-sider'>
                        <list :url='record' :pageSize='pageSize' type='2'></list>
                    </div>
                </transition>
            </div>
            <aside class='img-size' data-fontSize='24' data-lineHeight='40'>
                <dl>
                    <dd>*</dd>
                    <dt>红包，加息券发放到您的多融账户，可登录APP或官网查看并使用</dt>
                </dl>
                <dl>
                    <dd>*</dd>
                    <dt>积分兑换奖品，将在每月月初前15个工作日内统一发放上月奖品</dt>
                </dl>
                <dl>
                    <dd>*</dd>
                    <dt>2017年6月01日之后的积分兑换记录请在积分商场中查看</dt>
                </dl>
            </aside>
        </section>
    </div>
</div>
</template>
<script>
import {record} from '../common/URL'
import list from './list';
export default {
    components : {
        list
    },
    data(){
        return {
            list : [] , 
            list1 : [] , 
            show : true,
            transition : 'left',
            record : record , 
            pageSize : 20
        }
    },
    mounted(){
        var self = this;
        T.init();
        /*if(!T.uid) return; 
        T.ajax({
            url : record , 
            data : {
                uid :T.uid , 
                recodeType : 1 , //1,我的奖品; 2积分兑换记录
                pageOn : 1 , 
                pageSize : 20
            }
        }).then(data=>{
            self.list = data.map.page.rows;
        })
        T.ajax({
            url : record , 
            data : {
                uid :T.uid , 
                recodeType : 2 , //1,我的奖品; 2积分兑换记录
                pageOn : 1 , 
                pageSize : 20
            }
        }).then(data=>{
            self.list1 = data.map.page.rows;
        })*/
    },
    methods : {
        tab( i  , $event ){
            const li = $('.prize nav li');
            var tag = $event.currentTarget;
            li.removeClass('active');
            $(tag).addClass('active');

            this.show = i==0;
            this.transition = i==0?'right':'left';

            this.height = this[['list','list1'][i]].length*35+65;
            this.height = this.height <35 ? '35px':this.height+'px';
            
        }
    }
}
</script>