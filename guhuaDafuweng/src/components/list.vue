<style scoped>
@import '../style/global.css';

.box{
    
    box-shadow:0 0 10px #ffa579;
    background:#fff;
    overflow:hidden;
    text-align:center;
    
    .title{
        background:#fff5d6;
       
    }
    .content{
        overflow:hidden;
        position:relative;
        transition-duration:.5s;
    }
}
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

        span{ @mixin font-size 12px;}

        &.c1{ width:40px; }
        &.c2{ width:70px; justify-content:flex-start;}
        &.c3{flex:1;}
        &.c4{flex:1;}

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
.tit-tab{
    display:flex;
    flex-direction:row;
    padding:10px;
    justify-content:center;
    .btn{ 
        border-radius:5px;
        background:#ffdccb;
        padding:0 10px;
        height:25px; line-height:25px; 
        box-shadow:0 0 5px #ffa77c inset;
        color:#ff5300;
    }
    .time{
        flex:1;
       height:25px; line-height:25px; 
       display:inline-block;
       margin:0 5px;
       background:#ffdccb; 
       color:#ff5300;
       text-algin:center;
       border-radius:10px;
       box-shadow:0 0 5px #ffa77c inset;
    }
    .pre{
        
    }
    .next{

    }
}

</style>
<template>
<section class='box left-sider'>
    <div class='tit-tab img-size' data-fontSize='24'>
        <div class='btn pre' :class='{gray:historical==timeSize}' @click='pre'>上一页</div>
        <div v-if='timeMap.startTime' class='time'>
            20{{new Date(timeMap.startTime).Format('yy/MM/dd')}} 至 20{{new Date(timeMap.endTime).Format('yy/MM/dd')}}
        </div>
        <div v-if='!timeMap.startTime' class='time'>
            --
        </div>
        <div class='btn next' :class='{gray:historical==1}' @click='next'>下一页</div>
    </div>
    <div class='title img-size' data-fontSize='24'>
        <ul>
            <li class='c1'>排名</li>
            <li class='c2'>用户<span class='img-size' data-fontSize='20'>(手机号)</span></li>
            <li class='c3'>成绩</li>
            <li class='c4'>奖品</li>
        </ul>
    </div>
    <div class='content' v-bind:style="{minHeight:height}">
        <!--<ul class='active'>
            <li class='c1'>
                <div v-bind:class='memberOnMap | getClass'>{{memberOnMap.index==-1?'--':memberOnMap.index}}</div>
            </li>
            <li class='c2'>{{memberOnMap.mobilePhone}}<span class='me'></span></li>
            <li class='c3'>{{memberOnMap.round}}圈{{memberOnMap.currentpoint}}步</li>
            <li class='c4'>{{memberOnMap.prizeName}}</li>
        </ul>-->
        <ul v-if='list.length>0' v-for='obj in list'>
            <li class='c1'>
                <div v-bind:class='obj | getClass'>{{obj.index}}</div>
            </li>
            <li class='c2'>{{obj.mobilePhone}}</li>
            <li class='c3'>{{obj.round}}圈{{obj.currentpoint}}步</li>
            <li class='c4'>{{obj.prizeName}}</li>
        </ul>
        <div v-if='list.length<1' class='no-data'>
            暂无记录
        </div>
    </div>
</section>
</template>
<script>
import {walkRank} from '../common/URL';
export default {
    props : {
        url : String,
        monthOrWeek : Number,
        historical : {
            type : Number ,
            default : 1
        },
    },
    data (){
        return {
            memberOnMap : '',
            list : 0,
            timeMap : 0,
            page : 0,
            timeSize : 1
        }
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
    mounted(){
        this.getData();
    },
    methods : {
        getData(){
            var self = this;
            self.historical = parseInt(self.historical);
            if(!T.uid) return;
            T.ajax({
                url : self.url,
                data : { 
                    uid : T.uid ,
                    monthOrWeek : self.monthOrWeek,
                    historical : self.historical
                },
            }).then(data=>{
                self.$set(self,'list',data.map.memberOnList);
                self.memberOnMap = data.map.memberOnMap;
                self.timeMap = data.map.timeMap;
                self.timeSize = data.map.timeMap.timeSize || 1;
            });
        },
        pre(){
            var self = this;
            self.historical = parseInt(self.historical);
            if((self.historical+1) <= self.timeSize){
                self.historical += 1;
                self.getData();
            }
        },
        next(){
            var self = this;
            self.historical = parseInt(self.historical);
            if((self.historical-1) >= 1 ){
                self.historical -= 1;
                self.getData();
            }
        }
    }
}
</script>