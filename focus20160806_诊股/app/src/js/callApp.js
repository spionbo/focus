export default {
	ask : function( name , id ){ //提问
		if( name && id ){
			jrj.jsCallNative(125, JSON.stringify({ username: name, userid: id }));
		}else{//大厅
			jrj.jsCallNative(125, '');
		}
	}
	,login : function( n ){ //登录  -1 登录 -2 accessToken("accessToken", "115","AccessToken过期"),
		var num = n == -1 ? 108 : 115
		jrj.jsCallNative(num, '');
	}
}