import T from './global.js';
export default {
	ask : function( name , id ){ //提问
		if( name && id ){
			jrj.jsCallNative(125, JSON.stringify({ username: name, userid: id }));
		}else{//大厅
			jrj.jsCallNative(125, '');
		}
	}
	,login : function( status , callback , url ){ //登录  -1 登录 -2 accessToken("accessToken", "115","AccessToken过期"),
		url = url || window.location.href;
		T.urlCode();
		if(status == -1 ){
			window.location = url+((T.codeUrl.length>1?'&':'?')+'goto=/virtual/passportLogin&returnUrl='+url);
			//jrj.jsCallNative(108, JSON.stringify({retrunUrl:url}));
		}else if( status == -2 ){
			window.location = url+((T.codeUrl.length>1?'&':'?')+'goto=/virtual/accessTokenInvalid&returnUrl='+url);
			//jrj.jsCallNative(115, JSON.stringify({retrunUrl:url}));
		}else{ // 0 登录成功
			callback();
		}
	}
}