<style scoped>
@import '../style/global.css';
    .bg{ background:#fffbee; }
    .rank{
        background:#fffbee;
        margin-bottom:80px;
        header{
            position:relative; z-index:3;
            padding-bottom:5px;
            margin-bottom:10px;

            h1{ 
                height:33px; line-height:33px; 
                padding-top:5px;
                color:#ff5300; text-align:center; 
                font-weight:normal;
            }
            @mixin contain '../images/bg1.jpg';
            background-size:100% auto;
            background-position:0 bottom;
        }
        .back{
            position:absolute; 
            left:15px; top:15px;
            width:10px; height:10px; 
            border-top:3px solid #ff5300;
            border-left:3px solid #ff5300;
            transform:rotate(-45deg);
        }
        nav{
            margin-top:10px;
            ul{
                display:flex;
                flex-diraction:row;
                justify-content:center;
                align-items:center;
                li{
                    height:25px; line-height:25px; padding:0 20px; color:#fff; background:#ffba00;
                    &.active{ background:#fe7634; }
                }
            }
        }
    }
    .container{
        margin:5px 15px 0;
        position:relative;
    }
</style>
<template>
<div class='child-transition bg'>
    <div class='module-scroll'>
        <section class='rank'>
            <header>
                <h1 class='img-size' data-fontSize='36'><div class='back' @click='back'></div>历史榜单</h1>
                <nav class='img-size' data-fontSize='24'>
                    <ul>
                        <li class='active' @click='tab(0,$event)'>周排名</li>
                        <li @click='tab(1,$event)'>月排名</li>
                    </ul>
                </nav>
            </header>
            <div class='container'>
                <transition :name="transition">
                    <list v-show='show' 
                        :url='walkRank' 
                        monthOrWeek='1' >
                    </list>
                </transition>
                <transition :name="transition">
                    <list v-show='!show' 
                        :url='walkRank' 
                        monthOrWeek='0'>
                    </list>
                </transition>
            </div>
        </section>
    </div>
</div>
</template>
<script>
import {walkRank} from '../common/URL';
import list from './list';
export default {
    components : { 
        list
    },
    data(){
        return {
            show : true , 
            transition : 'left' , 
            walkRank : walkRank
        }
    },
    mounted(){
        var self = this;
        T.setImgSize();
        setTimeout(()=>{
            $('nav.nav li a').eq(1).addClass('active');
        },200);
    },
    beforeRouteLeave(to, from, next){
        $('nav.nav li a').eq(1).removeClass('active');
        next();
    },
    filters : {
        getClass : function( obj ){
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
        back(){
            router.back();
        },
        setTime( timeMap , i ){
            this.times[i] = timeMap;
            if(i!=0) return;
            this.timeMap = timeMap;
        },
        tab( i  , $event ){
            const li = $('.rank header li');
            var tag = $event.currentTarget , 
                self = this , 
                tab = 0;
            li.removeClass('active');
            $(tag).addClass('active');
            this.show = i==0;
            this.transition = i==0?'right':'left';

            tab = i==0?1:0;
        }
    }
}
</script>