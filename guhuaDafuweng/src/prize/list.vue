<style scoped>
@import '../style/global.css';
.boxd{
    flex:1;
    display:flex;
    box-sizing:border-box;
    padding-bottom:10px;
    flex-direction:column;
    .tit ul,.cnt ul{
        padding:5px 20px 0;
        display:flex;
        flex-direction:row;
    }
    .tit{ color:#ff5300;
        @mixin contain '../images/prize-bg.png';
        background-position:center bottom;
    }
    li{
        flex:1;
        &:nth-child(1){ flex:1.5;}
        &:nth-child(2){ flex:1.2;}
        &:nth-child(3){ flex:1.5;}
    }
    .cnt{
        color:#333;
        line-height:25px;
        flex:1;
        padding-bottom:20px;
        overflow-y:auto;
    }
}
</style>
<template>
<article class='boxd'>
    <div class='tit img-size' data-paddingBottom='60' data-fontSize='30'>
        <ul>
            <li>奖品</li>
            <li>{{type==1?'获取':'兑换'}}时间</li>
            <li>获取途径</li>
        </ul>
    </div>
    <div class='cnt scroll img-size' data-fontSize='24'>
        <ul v-for='obj in list'>
            <li>{{obj.name}}</li>
            <li>20{{new Date(obj.time).Format('yy/MM/dd')}}</li>
            <li>{{obj.descpt}}</li>
        </ul>
        <div v-if='list.length<1' style='padding:20px; text-align:center'>
            暂无记录
        </div>
    </div>
</article>
</template>
<script>
export default {
    props : {
        type : String,
        url : String,
        pageOn : {
            type : Number , 
            default : 1
        },
        pageSize : {
            type : Number , 
            default : 20
        }
    },
    data(){
        return{
            list : [] , 
            more : false
        }
    },
    mounted(){
        var self = this,
            pageOn = this.pageOn ,
            pageSize = this.pageSize , 
            loading = true;

        T.init();
        if(!T.uid) return; 
        function getList(){
            if(loading==false) return;
            loading = false;
            T.ajax({
                url : self.url , 
                data : {
                    uid :T.uid , 
                    recodeType : self.type , //1,我的奖品; 2积分兑换记录
                    pageOn : pageOn , 
                    pageSize : pageSize
                }
            }).then(data=>{
                var list = data.map.page.rows;
                if(!list || !list.length) return;
                self.list = self.list.concat(list);
                loading = true;
                self.$nextTick(function(){
                    var box = $('.boxd .scroll').eq(parseInt(self.type)-1);
                    box.unbind().on('scroll',function(){
                        var scrollHeight = box[0].scrollHeight , 
                            height = box.height();
                        var scrollTop = $(this).scrollTop()+height+50;
                        if(scrollTop>scrollHeight){
                            if(pageOn<=data.map.page.totalPage && loading==true){
                                pageOn++;
                                getList();
                                self.more = false;
                            }else{
                                self.more = true;
                            }
                        }
                    })

                });
            })
        };
        getList();
    }
}
</script>