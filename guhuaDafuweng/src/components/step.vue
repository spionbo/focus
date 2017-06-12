<style scoped>
@import '../style/global.css';
.step{
    display:flex;
    justify-content:center;
    align-items:center;
    color:#ff5200;
    p{text-align:center;}
    position:relative;
    &.top{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        @mixin contain '../images/top-num1.png',cover;
        &.double{
            @mixin contain '../images/top-num.png',cover;
        }
        &._left{
            @mixin contain '../images/top-left-num.png',cover;
        }
        &._right{
            @mixin contain '../images/top-right-num.png',cover;
        }
    }
    &.left{
        @mixin contain '../images/left-num.png',cover;
        &.double{
            @mixin contain '../images/left-num1.png',cover;
        }
    }
    &.bottom{
        @mixin contain '../images/bottom-num1.png',cover;
        &.first{
            @mixin contain '../images/first.png',cover;
        }
        &.double{
            @mixin contain '../images/bottom-num.png',cover;
        }
        &._left{
            @mixin contain '../images/bottom-left-num.png',cover;
        }
        &._right{
            @mixin contain '../images/bottom-right-num.png',cover;
        }
    }
    &.luck-draw{
        display:flex;
        justify-content:center;
        align-items:center;
         @mixin contain '../images/dice-bg.png',cover;
        .draw{
            @mixin contain '../images/dice-do.png',cover;
            animation:luckD infinite 9s linear;
            @at-root{
                @keyframes luckD{
                    from{ transform:rotate(0deg)}
                    to{transform:rotate(360deg)}
                }
            }
        }
    }
    &.active{
        .child{
            z-index:11;
            animation: rotatesetp infinite 1s linear;
            @at-root{
                @keyframes rotatesetp{
                    50%{ transform:scale(1.1) }
                }
            }
        }
    }

    .child{
        position:absolute; 
        left:50%;top:50%;
        @mixin contain '../images/ppcur.png',cover;
        
    }
}


</style>
<template>
<div class='step img-size' v-bind:class="classObject" :data-num='num' data-fontSize='34' :data-width='width' :data-height='height'>
    <div v-if='num!=10&&num!=20'>
        <p class='text img-size' v-if='text' data-fontSize='19'>送{{text}}积分</p>
        <p>{{num}}</p>
        <div v-show='this.$store.state.currentPointMonth == num' class='child img-size' data-width='75' data-height='80' data-marginLeft='-37.5' data-marginTop='-40'></div>
    </div>
    <div v-else class='draw img-size' data-width='61' data-height='63'></div>
</div>
</template>
<script>
import ladder from '../components/ladder';
import store from '../store';
import {mapState} from 'vuex';
export default {
    store,
    components : {
        ladder : ladder
    },

    computed : {
         ...mapState({
            currentPointMonth : state=>{
                
                if(state.round>1 && state.currentPointMonth == 0 ){
                    state.currentPointMonth = 1;
                }
                return state.currentPointMonth;
            } 
         })
    },
    props : {
        num : Number,
    },
    data(){
        return {
            width : 132 , 
            height : 113,
            text : false,
        }
    },
    computed: {
        classObject: function () {
            let num = this.num , 
                text = '';
            if(num==7){
                this.text = 5
            }else if(num==11){
                this.text = 2
            }else if(num==15){
                this.text = 2
            }else if(num==19){
                this.text = 5
            }
            if(num==10||num==20){
                this.width = 113;
                return 'luck-draw';
             };
            if(num>23 || num<5){//24 1 2 3 4
                if(num==1){
                    text = 'bottom first';
                }else if(num==2){
                    text = 'bottom double';
                }else if(num==3){
                    text = 'bottom';
                }else if(num==24){
                    text = 'bottom _left';
                }else if(num==4){
                    text = 'bottom _right';
                }
            }else if(num>16){//17 - 23
                this.width = 100;
                this.height = 111;
                if(num%2==0){
                    text = 'left double';
                }else{
                    text = 'left';
                }
            }else if(num>11){//16 - 12
                if(num%2==0){
                    text = 'top double';
                }else{
                    text = 'top';
                }
                if(num==16){
                    this.width = 133;
                    text = 'top _left';
                }else if(num==12){
                    this.width = 133;
                    text = 'top _right';
                }
            }else if(num>4){//5 - 11
                this.width = 100;
                this.height = 111;
                if(num%2==0){
                    text = 'left double';
                }else{
                    text = 'left';
                }
            }
            if(num == this.$store.state.currentPoint){
                text += ' active';
            }
            return text;
        }
    },
}
</script>