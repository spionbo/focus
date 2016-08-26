﻿/**
 * @fileOverview WEBAPP股票查询框
 * @copyright (c) 2012 (jrj.com)
 * @author zihua.wang@jrj.com.cn
 * @version 2.0
 * @change 2012.05.29 在新UI基础上重构。
 */

if(typeof JRJ=="undefined" || !JRJ){
	var JRJ = {};
}
if(typeof JRJ.ui=="undefined" || !JRJ.ui){
	JRJ.ui = {};
} 
JRJ.ui.SearchBox = function (param, charset, success, failer){
	JRJ.ui.SearchBox.focusInstance = this;
	
	this.url = "http://code.jrjimg.cn/code?1=1";
	this.param = param;
	this.charset = charset;
	this.success = success;
	this.failer = failer;
	
	/*
	 * @property {String} 查询延时
	 */
	this.timerDelay = "200"; 
	
	/*
	 * @property {Object} timer
	 */
	
	/*
	 * @property {String} 查询内容
	 */
	this.requestTxt = '';
	
	this.init(success);
};
JRJ.ui.SearchBox.prototype = {
		init: function (success){
			success();
		},
		requestData: function(txt) {
			this.requestTxt = txt;
			var self = this;
			
			this.stopRequest();
			
			this.timer = setTimeout(function (){
				var oSrc = self.url + self.param + "&key=" + self.requestTxt + "&d=" + new Date().getTime();
				
				$.getScript([oSrc], function (){
					self.handleResponse(SCodeData);
				}, self.charset);
				
				self.timer = setTimeout(arguments.callee, self.timerDelay);
			}, this.timerDelay);
	    },
	    /**
		 * @ignore
		 */
	    handleResponse : function(data){
	    	if(data.CodeData.length != 0){
	    		this.success(data);
	    	}else{
	    		this.failer(data);
	    	}
	    	this.stopRequest();
	    },
	    
	    stopRequest: function (){
	    	window.clearTimeout(this.timer);
	    	this.timer = null;
	    }
};