<style>
    .modal-mask.myprize{
        .modal-container{  }
    }
</style>
<style scoped>
    @import '../style/global';
    
    .modal-header{
        .title-bg{
            
        }
    }
    .explain-red{ font-size:12px; color:#ff4c83; }
    .list{
        max-height:250px;
        overflow-y:auto;
        border:1px solid #c9c9c9;
        padding:10px;
        margin:10px 0;
        border-radius:10px;
        background:#ebebeb;
        ul{
            display:flex;
            flex-direction:row;
            &:first-child{ 
                li{ font-weight:bold;}
            }
            li{ flex:1;
                display:flex;
                align-items:center;
                padding:3px;
                font-size:13px;
                /*&:nth-child(2){ flex:1.5}*/
            }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' superClass='myprize'>
    <div slot="header">
        <div class='title-bg img-size' data-width='390' data-height='79'>
            我的奖品
        </div>
    </div>
    <div slot='body'>
        <div class='explain-red'>
            * 实物奖品，将在活动结束后的15个工作日内完成发放，礼品以收到的实物为准
        </div>
        <div class='list'>
            <ul>
                <li>奖品</li>
                <li>获取时间</li>
            </ul>
            <ul v-if='list.length' v-for='obj in list'>
                <li>{{obj.giftName}}</li>
                <li>{{new Date(obj.addTime).Format('yyyy-MM-dd hh:mm:ss')}}</li>
            </ul>
            <div v-if='!list.length' class='no-data'>
                暂无数据
            </div>
        </div>
    </div>
    <div slot='footer' class='submit'>
        
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    import {record} from '../common/URL';
    export default {
        components : {
            pop
        },
        props : {
            transition : String,
        },
        data(){
            return {
                list : []
            }
        },
        mounted(){
            var self = this;
            T.ajax({
                url : record ,
                data : {
                    uid : T.uid , 
                }
            }).then(data=>{
                self.$set(self,'list',data.map.lotteryList)
            });
            
        },
        methods : {
            close(){
                if(this.okCallback && this.okCallback() );
                this.$refs.pop.closePop();
            }
        }
    }
</script>