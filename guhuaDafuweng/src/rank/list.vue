<style scoped>
@import '../style/global.css';
.title ul,.content ul{
    display:flex; 
    flex-diraction:row;
    &.active{
        background:#fff5d6;
    }
    li{
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:5px 0;
        color:#333; 

        @mixin size height,25px;
        @mixin size line-height,25px;
        @mixin font-size 12px;

        &.c2{ justify-content:flex-start;}

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
</style>
<template>
<div class='content' v-bind:style="{minHeight:height}">
    <transition :name="transition">
        <div v-show='show' class='left-sider'>
            <ul class='active'>
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
            <div v-if='week.length<1' class='text-align:center'>
                暂无记录
            </div>
        </div>
    </transition>
    <transition :name="transition">
        <div v-show='!show' class='left-sider'>
            <ul class='active'>
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
            <div v-if='month.length<1' class='text-align:center'>
                暂无记录
            </div>
        </div>
    </transition>    
</div>
</template>
<script>
import {walkRank} from '../common/URL';
export default {
    props : {
        memberOnMap : Object,
        week : Array,
        month : Array,
        show : Boolean,
        transition : String ,
        height : String
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
    }
}
</script>