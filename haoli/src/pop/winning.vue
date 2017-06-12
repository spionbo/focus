<style scoped>
    @import '../style/global';
    .modal-header{
        .title-bg{
            .t-3{ @mixin contain '../images/tit4.png'}
        }
    }
    .winning{
        padding:20px;
        >nav{
            display:flex;
            
            background:#d0bbff;
            border-radius:10px;
            overflow:hidden;
            color:#fff;
            .tab{
                flex:1;
                text-align:center;
                transition-duration:.3s;
                &.current{ color:#fff; 
                    background: linear-gradient(to top,#ff76b7,#ffcbe3);
                }
            }
        }
        .content{
            .explorer{
                color:#fde419;
                margin-bottom:10px;
                .time{
                    display:flex;
                    align-items:center;
                    .line{ flex:1; height:.5px; margin-left:5px; background:#fde419; font:0/0 arial; }
                }
            }
            .rank-list{
                padding:0; 
                box-shadow:0 0 0;
                border-width:0;
            }
            .effect-content{ display:none; overflow:hidden;}
            .text{ text-align:center;}
        }
        .page{
            text-align:center;
            overflow:hidden;
            padding:5px 0;
            >div{
                display:inline-block;
                background:#8c73ff;
                padding:2px 15px;
            }
            .pre{
                border-right:1px solid #7e63fc;
                border-top-left-radius:10px;
                border-bottom-left-radius:10px;
                
            }
            .next{
                border-top-right-radius:10px;
                border-bottom-right-radius:10px;
            }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' :closeCallback='closeCallback' height='800'>
    <div slot="header">
        <div class='title-bg img-size' data-width='390' data-height='79'>
            <i class='t-3 img-size' data-width='189' data-height='47'></i>
        </div>
    </div>
    <div slot='body' class='winning winningRank'>
        <nav class='img-size' data-fontSize='30' data-height='52' data-lineHeight='52'>
            <div class='tab current' @click='tab(0,$event)'>每日榜单</div>
            <div class='tab' @click='tab(1,$event)'>总榜单</div>
        </nav>
        <div class='content img-size' data-fontSize='30' data-marginTop='30'>
            <div class='explorer'>
               <p class='img-size' data-fontSize='20'>{{message}}</p>
               <div class='time img-size' data-fontSize='24'>
                    <time v-show='tabNum==0'>{{new Date(time).Format('yyyy-MM-dd')}}</time>
                    <time v-show='tabNum==1'>{{new Date(startTime).Format('yyyy-MM-dd')}} - {{new Date(endTime).Format('yyyy-MM-dd')}}</time>
                    <div class='line'></div>
               </div>
            </div>
            <div class='effect-content'>
                <transition :name="transition">
                    <div v-show='tabNum==0' class='cnt1 left-sider'>
                        <list :list='list'></list>
                        <div class='page img-size' data-fontSize='24'>
                            <div class='pre btn' :class='{active:!list.length}' @click='pre'>上一页</div><div class='next btn' @click='next'>下一页</div>
                        </div>
                    </div>
                </transition>
                <transition :name="transition">
                    <div v-show='tabNum==1' class='cnt2 left-sider'>
                        <list :list='list1'></list>
                    </div>
                </transition>
                 
                 <!--
                <div class='effect'>
                    <div class='option'>
                        <list :list='list'></list>
                        <div class='page img-size' data-fontSize='24'>
                            <div class='pre btn' :class='{active:!list.length}' @click='pre'>上一页</div><div class='next btn' @click='next'>下一页</div>
                        </div>
                    </div>
                    <div class='option'>
                        <list :list='list1'></list>
                    </div>
                </div>
                -->
            </div>
        </div>
    </div>
    <div slot='footer' class='submit'>
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    import list from '../module/rank-list';
    import {rankRecord} from '../common/URL';
    import Move from '../widgets/moveEvent';
    import Public from '../common/public';

    var messages = Public.messages , 
        preClick = false , nextClick = false;

    export default {
        components : {
            pop , 
            list
        },
        data(){
            return {
                P : Public , 
                time : 0,
                startTime : 0 ,
                endTime : 0,
                times : [],
                list : [],
                list1 :[],
                num1 : 0 , 
                num2 : 0 ,
                tabNum : 0 ,
                daySize : 0,
                message : messages[0],
                pageSize : 0,
                transition: 'left'
            }
        },
        mounted(){
           this.getRank(0,0);
           this.getRank(1,0);
           this.updateMove();
        },
        props : {
            transition : String,
            closeCallback : Function,
        },
        methods : {
            pre(){
                var type = 0 , num = 0;
                if(this.tabNum == 0){
                    if(this.num1>=this.daySize) return; 
                    this.num1++;
                }else{
                    this.num2++;
                }
                num = this[['num1','num2'][this.tabNum]];
                this.getRank(this.tabNum,num);

                preClick = true;
                nextClick = false;
            },
            next(){
                var type = 0 , num = 0;
                if(this.tabNum == 0){
                    if(this.num1<=0) return; 
                    this.num1--;
                    this.num1 = this.num1 <0 ? 0:this.num1;
                }else{
                    this.num2--;
                    this.num2 = this.num2 <0 ? 0:this.num2;
                }
                num = this[['num1','num2'][this.tabNum]];
                this.getRank(this.tabNum,num);

                nextClick = true;
                preClick = false;
            },
            tab( num , $event ){
                const tag = $($event.currentTarget);
                const li = $('.winningRank nav .tab');
                this.tabNum = num;

                li.removeClass('current');
                tag.addClass('current');
                this.transition = num==0?'left':'right';

                this.time = this.times[num];
                this.message = messages[num];

            },
            updateMove(){
                return;
                var self = this;
                if(!this.Move){
                    this.Move = new Move({
                         nav : $('.winningRank nav .tab')
                        ,effect : $('.winningRank .effect')
                        ,option : $('.winningRank .option')
                        ,animate3d : false
                        ,tabCallback:function( i ){
                            self.time = self.times[i];
                            self.message = messages[i];
                            self.tabNum = i;
                        }
                    });
                }else{
                    this.Move.update();
                }
            },
            getRank( type , num ){ //0为当天  1 为每周
                var self = this;

                T.ajax({
                    url : rankRecord ,
                    data : { recordNum : num , dayOrWeek :  type },
                    callback:true
                }).then(data=>{
                    if(type==0){
                        self.$set(self,'list',data.map.prizeRanks);
                        self.times[0] = data.map.startTime;
                        self.time = data.map.startTime;
                        self.daySize = data.map.daySize;
                    }else{
                        self.times[1] = data.map.startTime;
                        self.$set(self,'list1',data.map.prizeRanks);
                        self.startTime = data.map.startTime;
                        self.endTime = data.map.endTime;
                    }
                    self.$nextTick(()=>{
                        setTimeout(()=>{
                            $('.effect-content').show();
                            self.updateMove();
                        },510)
                    })
                });

            },
            close(){
                this.$refs.pop.closePop();
            }
        }
    }
</script>