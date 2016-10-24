var  URL = 'https://t.jrj.com.cn/redirect.jspa?url=http://i0.jrjimg.cn/zqt-m/webview/transaction/firm/';
function login( callback , status , url ){//登录  -1 登录 -2 accessToken("accessToken", "115","AccessToken过期"),
	url = url || URL;
	if(status == -1 ){
		window.location = 'http://itougu.jrj.com.cn/?goto=/virtual/passportLogin&returnUrl='+url;
		//jrj.jsCallNative(108, JSON.stringify({retrunUrl:url}));
	}else if( status == -2 ){
		window.location = 'http://itougu.jrj.com.cn/?goto=/virtual/accessTokenInvalid&returnUrl='+url;
		//jrj.jsCallNative(115, JSON.stringify({retrunUrl:url}));
	}else{ // 0 登录成功
		callback();
	}
}
module.exports = {
	ask : function( name , id ){ //提问
		login(()=>{
			if( name && id ){
				jrj.jsCallNative(125, JSON.stringify({ username: name, userid: id , usernanme: name })); //usernanme ios 错误
			}else{//大厅
				jrj.jsCallNative(125, '');
			}
		})
	}
	,login : login
	,myIndex : function( id ){ //
		jrj.jsCallNative(113, JSON.stringify({ id: id }));
	}
	,openList : function(){ //开户列表
		window.location = 'http://t.jrj.com.cn/openAccount/activity/index.jspa?type=openAccount&tgqdcode=M582DBXT';
		//jrj.jsCallNative(107, JSON.stringify({ opentype: 2, broker: 'HTZQ' }));
	}
    ,stock: function ( code ) {//个股终端页
        jrj.jsCallNative(100, JSON.stringify({ stockCode: code, stockMarket: 1 }));
    }
    ,share : function( obj ){
		var href = 'http://www.itougu.com/?share={"title":"'
					+encodeURIComponent(obj.title)
					+'","content":"'+encodeURIComponent(obj.content)
					+'","url":"'+encodeURIComponent(obj.url)
					+'","imgurl":"'+encodeURIComponent(obj.pic)+'"}';
			window.location.href = href;
		return false;
	}
}