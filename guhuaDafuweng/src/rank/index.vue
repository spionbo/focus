<style scoped>
@import '../style/global.css';
    .rank{
        min-height:100%;
        box-sizing:border-box;
        padding:20px 20px 60px 20px;
        background:#fffbee;
        header{
            h1{ @mixin contain '../images/tit1.jpg'; background-position:center 0; }
        }
        .jian{ display:inline-block; margin-left:5px; margin-top:-2px; 
            vertical-align:middle;
            width: 0; height: 0; border-top: 6px solid transparent;
            border-left: 10px solid #00a0e3; 
            border-bottom: 6px solid transparent;
        }
        nav{
            padding-top:20px;
            margin-bottom:20px;
            aside{
                float:right; padding-top:3px;
            }
            ul{
                display:flex;
                flex-diraction:row;
                justify-content:center;
                align-items:center;
                li{
                    height:25px; line-height:25px; padding:0 20px; color:#fff; background:#ffba00;
                    &.active{ background:#fe7634; }
                    span{ @mixin font-size 12px; }
                }
            }
        }
        >aside{
            color:#fe7634;
            dl{ padding:2px 0; overflow:hidden; 
                dt{ padding-left:15px;}
                dd{
                    float:left;
                     text-align:left;
                }
            }
        }
        .box{
            box-shadow:0 0 10px #ffa579;
            background:#fff;
            .title ul,.content ul{
                display:flex; 
                flex-diraction:row;
                &.active{
                    background:#fff5d6;
                }
                li{

                    display:flex;
                    justify-content:center;
                    align-items:center;
                    padding:5px 0;
                    color:#333; 

                    @mixin size height,25px;
                    @mixin size line-height,25px;
                    @mixin font-size 12px;

                    &.c1{ width:40px; }
                    &.c2{ width:90px; justify-content:flex-start;}
                    &.c3{ width:80px;}
                    &.c4{ flex:1; }


                    .me{
                        @mixin size width,16px; 
                        @mixin size height,12.5px; 
                        @mixin contain '../images/me.jpg'; 
                    }

                    .ranks{
                        @mixin size width,14px; 
                        @mixin size height,18.5px;
                        overflow:hidden; text-indent:-999px;
                        &.r1{
                            @mixin contain '../images/one.jpg'; 
                        }
                        &.r2{
                            @mixin contain '../images/two.jpg'; 
                        }
                        &.r3{
                            @mixin contain '../images/tree.jpg'; 
                        }
                    }

                }
            }
            .title{
                
            }
            .content{
                overflow:hidden;
                position:relative;
                transition-duration:.5s;
            }
        }
    }
</style>
<template>
<div class='child-transition'>
    <div class='module-scroll'>
        <section class='rank'>
            <header>
                <h1 class='img-size' data-width='627' data-height='87'></h1>
            </header>
            <nav class='img-size' data-fontSize='24'>
                <router-link to="/history" class='active' tag='aside'>
                    历史榜单 <span class='jian'></span>
                </router-link>
                <ul>
                    <li class='active' @click='tab(0,$event)'>周排名</li>
                    <li @click='tab(1,$event)'>月排名</li>
                </ul>
            </nav>
            <div class='container'>
                <section class='box'>
                    <div class='title'>
                        <ul>
                            <li class='c1'>排名</li>
                            <li class='c2'>用户<span>(手机号)</span></li>
                            <li class='c3'>成绩</li>
                            <li class='c4'>奖品</li>
                        </ul>
                    </div>
                    <div class='content' v-bind:style="{minHeight:height}">
                        <transition :name="transition">
                            <div v-show='show' class='left-sider'>
                                <ul v-if='memberOnMap' class='active'>
                                    <li class='c1'>
                                        <div v-bind:class='memberOnMap | getClass'>{{memberOnMap.index==-1?'--':memberOnMap.index}}</div>
                                    </li>
                                    <li class='c2'>{{memberOnMap.mobilePhone}}<span class='me'></span></li>
                                    <li class='c3'>{{memberOnMap.round}}圈{{memberOnMap.currentpoint}}步</li>
                                    <li class='c4'>{{memberOnMap.prizeName}}</li>
                                </ul>
                                <ul v-if='week.length>0' v-for='obj in week'>
                                    <li class='c1'>
                                        <div v-bind:class='obj | getClass'>{{obj.index}}</div>
                                    </li>
                                    <li class='c2'>{{obj.mobilePhone}}</li>
                                    <li class='c3'>{{obj.round}}圈{{obj.currentpoint}}步</li>
                                    <li class='c4'>{{obj.prizeName}}</li>
                                </ul>
                                <div v-if='week.length<1' class='no-data'>
                                    暂无记录
                                </div>
                            </div>
                        </transition>
                        <transition :name="transition">
                            <div v-show='!show' class='left-sider'>
                                <ul v-if='memberOnMap' class='active'>
                                    <li class='c1'>
                                        <div v-bind:class='memberOnMap | getClass'>{{memberOnMap.index==-1?'--':memberOnMap.index}}</div>
                                    </li>
                                    <li class='c2'>{{memberOnMap.mobilePhone}}<span class='me'></span></li>
                                    <li class='c3'>{{memberOnMap.round}}圈{{memberOnMap.currentpoint}}步</li>
                                    <li class='c4'>{{memberOnMap.prizeName}}</li>
                                </ul>
                                <ul v-if='month.length>0' v-for='obj in month'>
                                    <li class='c1'>
                                        <div v-bind:class='obj | getClass'>{{obj.index}}</div>
                                    </li>
                                    <li class='c2'>{{obj.mobilePhone}}</li>
                                    <li class='c3'>{{obj.round}}圈{{obj.currentpoint}}步</li>
                                    <li class='c4'>{{obj.prizeName}}</li>
                                </ul>
                                <div v-if='month.length<1' class='no-data'>
                                    暂无记录
                                </div>
                            </div>
                        </transition>
                    </div>
                </section>
            </div>
            <aside class='img-size' data-fontSize='24' data-lineHeight='40' data-paddingTop='40' data-paddingBottom='50'>
                <dl>
                    <dd>*</dd>
                    <dt>榜单实时更新，数据仅供参考。实际获奖名单以每周/每月最后1天23:59:59为准</dt>
                </dl>
                <dl>
                    <dd>*</dd>
                    <dt>奖品以每一期活动公示为准，实物奖发奖时间为每月月初前15个工作日内统一发放</dt>
                </dl>
                <dl>
                    <dd>*</dd>
                    <dt>积分可至“积分兑换”栏目查看并兑换奖品</dt>
                </dl>
                <dl>
                    <dd>*</dd>
                    <dt>周/月榜成绩：指在单一自然周/月内所走步数之和（即所掷骰子点数之和）。
                    <br/>周榜：每周继续上周路程，不重新回到起点，按每圈24步折算成绩。
                    <br/>月榜：每月第1天，回到起点，重新计算成绩，上月成绩清零。</dt>
                </dl>
            </aside>
        </section>
    </div>
</div>
</template>
<script>
import {walkRank} from '../common/URL';
import list from './list';
export default {
    data (){
        return {
            memberOnMap : '',
            memberOnMaps : [],
            week : [],
            month : [],
            show : true , 
            transition : 'left' , 
            height : 0
        }
    },
    components : {
        list
    },
    mounted(){
        var self = this;
        T.setImgSize();
        if(!T.uid) return; 
        T.ajax({
            url : walkRank,
            data : { 
                uid : T.uid ,
                monthOrWeek : 1,
                historical : 0
            },
        }).then(data=>{
            self.$set(self,'week',data.map.memberOnList);
            self.memberOnMap = data.map.memberOnMap;
            self.memberOnMaps[0] = data.map.memberOnMap;
        });
        T.ajax({
            url : walkRank,
            data : { 
                uid : T.uid ,
                monthOrWeek : 0,
                historical : 0
            },
        }).then(data=>{
            self.$set(self,'month',data.map.memberOnList);
            self.memberOnMaps[1] = data.map.memberOnMap;
        });
    },
    filters : {
        getClass( obj ){
            var text = '' ,
                rank = obj.index ;
            if(rank==1){
                text = 'ranks r1';
            }else if(rank==2){
                 text = 'ranks r2';
            }else if(rank==3){
                 text = 'ranks r3';
            }else{
                 text = 'text';
            }
            return text;
        }
    },
    methods : {
        tab( i  , $event ){
            const li = $('.rank nav li');
            var self = this , 
                tag = $event.currentTarget;
            li.removeClass('active');
            $(tag).addClass('active');

            this.show = i==0;
            this.transition = i==0?'left':'right';
            self.memberOnMap = self.memberOnMaps[i];

            this.height = this[['week','month'][i]].length*35;
            this.height = this.height <35 ? '35px':this.height+40+'px';
        }
    }
}
</script>