<style lang='sass'>
	@import '../../css/global.scss';
	.main-box{ @include font-size(15px); background:url(../../images/main/mainbg.jpg) #f3d989 no-repeat; background-size:100%; color:#000;
		.tit{ 
			@include box; @include boxCenter; @include boxMiddle;
			padding:$s10; 
			>p{
				@include box-flex;
			}
			.btn{  @include transition-duration;
				position:relative; z-index:2;
				@include contain('../../images/main/btn5.jpg')
				&.btn2{ @include contain('../../images/main/btn4.jpg')};
				.m{ @include transition-duration; position:absolute; width:100%; text-align:center; color:#ea2414; font-size:$s14;}
			}
		}
		.bg{ margin:0 auto; @include contain('../../images/main/h2_title.jpg'); text-align: center;
			@include box-sizing;
			&.tit2{ @include contain('../../images/main/h2_title2.jpg'); }
			em{ color:#ef0000}
		 }
		.car{ margin:$s10 0;
			@include contain('../../images/main/car.gif');
		}
		.text{ padding:$s10 $s10 0; text-align:center; line-height:$s20;
			a{ color:#4403fe; text-decoration:underline; }
		 }
		em{ color:#cc0000; }
		.submit{
			padding:$s5 $s10; 
			.btn{ margin:0 auto; @include transition-duration;
				@include contain('../../images/main/btn1.jpg') 
				&.btn2{
				 	@include contain('../../images/main/btn3.jpg');
				 	&:hover{ @include contain('../../images/main/btn2.jpg'); };
				}
				&.btn-login{
				 	@include contain('../../images/main/login_btn.jpg');
				 	&:hover{ @include contain('../../images/main/login_btn_hover.jpg'); };
				}
				&.nextGame-btn{
					@include contain('../../images/main/btn8.jpg');
				 	&:hover{ @include contain('../../images/main/btn9.jpg'); };
				}
			}
		}
	}
</style>
<template>
<div class="main-box">
	<div class="tit">
		<p>
			每天可以免费获得<em>1个</em>大富翁福袋
		</p>
		<div class="btn img-size" :class="{btn2:isLucky}" data-width='200' data-height='67' @click='receive'></div>
	</div>
	<div v-if='info.map.pointOnMap && info.map.pointOnMap>=info.mapLength' class="bg tit2 img-size" data-width='680' data-height='138' data-paddingTop='25' data-lineHeight='45'>
		您已完成大富翁活动，您的名次为：<em>{{info.map.userRank}}</em></br>
		获得奖品：<em>{{info.map.prizeOfRank}}</em>
	</div>
	<div v-else class="bg img-size" data-width='569' data-height='101' data-lineHeight='101'>
		您的剩余掷骰机会：
		<span v-if='islogin'><em>{{diceChance}}</em></span>
		<span v-else>登录后查看</span>
	</div>
	<div class="submit">
		<div v-if='islogin'>
			<div v-if='info.map.pointOnMap<info.mapLength'>
				<div v-if='diceChance>0' class="btn btn2 img-size" @click='luckDraw' data-width='559' data-height='98'></div>
				<div v-else class="btn img-size" @click='investment' data-width='559' data-height='98'></div>
			</div>
			<div v-else class="btn nextGame-btn img-size" @click='nextGame' data-width='559' data-height='98'></div>
		</div>
		<div v-else>
			<div class="btn btn-login img-size" @click='login' data-width='559' data-height='98'></div>
		</div>
	</div>
	<div class="text">
		单笔投资每满1万≥30天产品可获1个普通骰子<br>每满5万≥90天产品可额外获1个遥控骰子<br><a href='javascript:void(0)' @click='investment'>立即投资</a>
	</div>
	<div class="car img-size" data-height='84'></div>
</div>
</template>
<script>
	import {getlucky,setlucky} from '../../common/URL';
	import requirePop from '../../pop/requirePop.js';
	export default {
		props : {
		},
		data (){
			return {
				islogin : false, 
				diceChance : 0 , //掷骰机会
				isLucky : false,
				info : info
			}
		},
		beforeCreate(){
			var self = this;
			T.getAppInfo();
			/*if(T.localStorage.getItem('nextGame')=='true' && info.map.pointOnMap && info.map.pointOnMap>=info.mapLength){
				router.replace({ path: '/end', query: {
                    wap:T.wap,uid:T.uid,
                    pointOnMap:info.pointOnMap,
                }});
			};*/
		},
		watch : {
			info : function(){
				setTimeout(T.setImgSize,100);
			}
		},
		mounted(){
			var self = this;
			setTimeout(T.setImgSize,300)
			setTimeout(T.setImgSize,800)
			this.islogin = T.isLogin;
			if(!this.islogin || !T.uid) return;
			info.click(()=>{
				T.ajax({
					url : getlucky , 
					data : {
						uid : T.uid
					},
					success : function( _data ){
						self.isLucky = _data.map.hasGot;
					}
				});
				info.getDice(function(){
					self.diceChance = info.diceChance;
				});
			})
		},
		methods : {
			login : function( callback ){
				T.login(callback);
			},
			receive : function(event){ //立即领取
				var self = this ,
					targ = $(event.target);
				T.login(()=>{
					if(self.isLucky==true){
						requirePop('lingquguo',{
	                        props: {
								content : '您已经领取过！',
								transition : 'bounceIn',
								okTxt : '确定'
	                        }
	                    },'publicTips');
					}else{
						T.ajax({
							url : setlucky , 
							data : {
								uid : T.uid
							},
							success : function( _data ){
								if(_data.flag == true){
									var text = '恭喜您 ，成功领取';
									if(_data.map.type==1){ //红包
										text += _data.map.amount+'元红包';
									}else if(_data.map.type==2){ //加息券
										text += _data.map.amount+'%加息券';
									}else if(_data.map.type==5){ //实物
										text += _data.map.amount;
									}

									requirePop('lingquguo',{
				                        props: {
											content : text,
											transition : 'bounceIn',
											okTxt : '确定'
				                        }
				                    },'publicTips');
									targ.addClass('btn2')
								}
								self.isLucky=true;
							}
						})
					}
				})
			},
			investment : function(){
				T.callApp.investment();
			},
			luckDraw : function(){
				T.goPage.call(this,info.map.pointOnMap,1);
				/*var num = info.map.pointOnMap , 
					module = 'module1';
				if(num>24 && num<48){
					module = 'module2'
				}else if(num>48 && num<72){
					module = 'module3'
				}else if(num>72 && num<96){
					module = 'module4'
				}else if(num>96 && num<119){
					module = 'module5'
				}

				router.push({ path: module, query: {
					wap:T.wap,uid:T.uid,
					pointOnMap:num,
					diceChance : this.diceChance
				}})*/
			},
			nextGame : function(){

				//T.localStorage.setItem('nextGame','true',{ expires : 9999});
						
                router.replace({ path: '/end', query: {
                    wap:T.wap,uid:T.uid,
                    pointOnMap:info.pointOnMap,
                }})
            }
		}
	}
</script>