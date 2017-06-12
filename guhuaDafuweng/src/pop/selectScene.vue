<style scoped>
    @import '../style/global.css';
    .selectScene{
        .select-scene{
            display:flex;
            justify-content:center;
            align-items:center;
            .right-slide{
                margin-left:10px;
            }
           .btn{
                @mixin contain '../images/selectone.png';
                &.btn1{
                    
                    @mixin contain '../images/selecttwo.png';
                }
           }
        }
        p,p.tips{ @mixin font-size 12px; padding-top:5px; color:#fff600; text-align:center; }
        p.tips{ text-align:left; padding:0 25px 5px; color:#fff;  }
    }
</style>
<template>
<pop ref='pop' :transition='transition' superClass='selectScene'>
    <div slot="header" class='img-size' data-paddingTop='60' data-paddingLeft='60'>
        <h2>请选择骰子</h2>
    </div>
    <div slot='body' class='img-size' data-paddingTop='10' data-paddingBottom='10'>
        <div class='select-scene img-size' data-paddingTop='40' data-paddingBottom='40'>
            <div class='left-slide' v-if='oddNumbersDice>0'>
                <div v-show='normalChance' class='btn img-size' @click='showOnePop' data-width='183' data-height='119'></div>
                <p>剩余{{oddNumbersDice}}次机会</p>
            </div>
            <div class='right-slide' v-if='evenNumbersDice>0'>
                <div v-show='controllableChance' class='btn btn1 img-size' @click='showTwoPop' data-width='183' data-height='119'></div>
                <p>剩余{{evenNumbersDice}}次机会</p>
            </div>
        </div>
    </div>
    <div slot='footer' class='submit'>
        <p class='tips'>{{P.tips}}</p>
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    import requirePop from './requirePop.js';
    import store from '../store';
    import {mapState} from 'vuex';
    export default {
        store,
        components : {
            pop
        },
        props : {
            transition : String,
            num : Number , 
            prize : Number , 
        },
        computed : mapState([
            'evenNumbersDice',
            'oddNumbersDice'
        ]),
        data(){
            return {
                controllableChance : true,
                normalChance : true , 
                oneClick : true , 
                P : Public
            }
        },
        mounted(){
            
        },
        methods : {
            scendo( num ){
                if(this.oneClick){
                    this.oneClick = false;
                    this.$refs.pop.closePop(()=>{
                        this.oneClick = true;
                        requirePop('scenedo',{
                            props: {
                                diceType : num, //随机
                                diceNumber : -1,
                                //transition : 'modal'//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                            }
                        });
                    })
                }
            },
            showOnePop(){
                this.scendo(1) //1个
            },
            showTwoPop(){
                this.scendo(2) //2个
            }
        }
    }
</script>