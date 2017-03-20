<style lang='sass'>
    @import '../css/global';
    .modal-mask{
       .modal-header{
            padding-bottom:$s5;
            h2{ @include font-size(18px); color:#fff600; }
        }
        .modal-body{
            .address-pop{
                padding:0 $s20;
                li{ @include box; @include boxMiddle; @include size(padding-top,5px); @include size(padding-bottom,5px)}
                .text{ @include size(width,70px);  @include font-size(12px);}
                .cnt{ @include box-flex;}
                input{ display:block; width:100%; @include box-sizing;
                    border:none;
                    padding:$s4; background:#ff; border-radius:$s5;
                }
                .error{ height:0; @include transition-duration;
                    &.cur{
                        height:$s25; line-height:$s25; background:#fffde9; border:$s1 solid #ff1e00;
                    }
                }
            }
        }
        .modal-footer{
            .submit{
                padding:0 $s10;
                .btn.adressbtn{ margin:0 auto;
                    @include transition-duration;
                     @include contain('../images/pop/btn2.png');
                     &.update{@include contain('../images/pop/btn3.png');}
                     &.gray{ @include contain('../images/pop/btn4.png');}
                }
            }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition'>
    <div slot="header" class='img-size' data-paddingTop='60' data-paddingLeft='40'>
        <h2>填写联系方式</h2>
    </div>
    <div slot='body' class='address-pop'>
        <ul>
            <li>
                <div class='text'>联系人姓名</div>
                <div class='cnt'><input type='text' v-model='name' maxlength='9' placeholder='请输入姓名'></div>
            </li>
            <li>
                <div class='text'>联系人号码</div>
                <div class='cnt'><input type='tel' v-model='mobilePhone' maxlength='11' placeholder='请输入号码'></div>
            </li>
            <li>
                <div class='text'>联系人地址</div>
                <div class='cnt'><input type='text' v-model='address' placeholder='请输入地址'></div>
            </li>
        </ul>
    </div>
    <div slot='footer' class='submit img-size' data-marginTop='20'>
        <div class='btn adressbtn img-size' :class='{update:updateBtn}' data-width='246' data-height='60' @click='submit'></div>
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    import {contact,contactGet} from '../common/URL';
    import requirePop from './requirePop.js';
    export default {
        components : {
            pop
        },
        data (){
            return {
                name : '' , 
                mobilePhone : '' , 
                address : '',
                add : true ,
                updateBtn : false
            }
        },
        props : {
            transition : String
        },
        mounted(){
            var self = this;
            if(T.uid){
                T.ajax({
                    url : contactGet,
                    callback : true,
                    data : {uid:T.uid},
                    success : function( _data ){
                        self.updateBtn = false;
                        if(_data.flag==true){
                            self.updateBtn = true;
                            $.extend(self,_data.map);
                        }
                    }
                })
            }
        },
        methods : {
            pop : function( text ){
                require.ensure([],(require)=>{
                    var Pop = require('./index.js');
                    var pop = new Pop({
                        title : '&nbsp;',
                        content : text,
                        okBtn : true,
                        cancelBtn:false,
                        timing : 'errorcur', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                        okTxt : '确定',
                    });
                },'pop');
            },
            submit : function(event){
                var self = this , 
                    btn = $(event.target),
                    name = this.name , 
                    mobilePhone = this.mobilePhone, 
                    address = this.address ;

                if(!T.uid){
                    return self.pop('请登录后再操作');
                }
                if(!name || name.length<2){
                    return self.pop('姓名不能少于2位数！');
                }
                if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(mobilePhone))){
                    return self.pop('请输入正确的手机号！');
                }
                if(!address || address.length<5){
                    return self.pop('请输入正确地址！');
                }
                if(this.add==true){
                    this.add=false;
                    btn.addClass('gray');
                    T.ajax({
                        url : contact , 
                        data : { 
                            uid : T.uid , 
                            name : name , 
                            mobilePhone : mobilePhone , 
                            address : address
                        },
                        success : function( _data ){
                            require.ensure([],(require)=>{
                                var Pop = require('./index.js') , 
                                    text = '';
                                if(_data.success==true){
                                    text = self.updateBtn?"修改成功！":'添加成功!';
                                    self.$refs.pop.closePop(()=>{
                                    });
                                }else{
                                    text = '添加失败!'
                                }
                                var pop = new Pop({
                                    title : '&nbsp;',
                                    content : text,
                                    okBtn : true,
                                    cancelBtn:false,
                                    timing : 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                    okTxt : '确定',
                                });
                            },'pop');
                            self.add = true;
                            btn.removeClass('gray');
                        }
                    });
                }
            }
        }
    }
</script>