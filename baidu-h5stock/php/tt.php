<?php
//$ob = 'no';
header(      "Expires: " . gmdate("D, d M Y H:i:s",mktime(23,59,59)+87600*5) . " GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s",mktime(0 , 0, 0)-87600*5) . " GMT");
//header("Content-type:text/html; Charset=UTF-8");
header("Content-type:text/html; Charset=GBK");
function myGet($a, $b=''){
    //$a = strtoupper($a);
	return isset($_GET[$a]) ? $_GET[$a] : $b;
}
?>
<html>
<head>
<meta content="text/html; charset=GBK" http-equiv="Content-Type" />
<meta name="description" content="stock os">
<meta name="robots" content="noindex,nofollow" />
<meta http-equiv="X-UA-Compatible" content="IE=9" />
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" /> 
<style><?php include_once('css/style1.css');?></style>
<style id="style2"><?php include_once('css/style2.css');?></style>
<title>证券之星</title>
</head>

<body>
<?php
// style="background-color:red"
$agent = $_SERVER["HTTP_USER_AGENT"];
//echo '<div id="flashdiv" style="left:-110px">';
////print_r($agent);
////Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; BOIE9;ZHCN)
////Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)
//
//if(strstr($agent, "Firefox") || strstr($agent, "Opera")){
//	echo '<object id="demo" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="10" height="10" align="middle"><param name="movie" value="demo5.swf" /></object>';
//}else if(strstr($agent, "IE")){
//	echo '<object id="demo" type="application/x-shockwave-flash" data="demo5.swf" width="10" height="10"><param name="movie" value="demo5.swf" /></object>';
//}
//echo '</div>';
?>
</body>

</html>
<script>
<?php
$ver = 0;
$ob = isset($ob) ? $ob : 0;
$phone = 0;

//加载模块
$load = array( //0 1 2 3 4 5 6 7 8 9
//1. 基础模块
	 'comm'=>1				//基本定义，比如浏览器和Windows相关
	,'debug'=>myGet('D')	//debug
	,'math'=>1				//数学函数
	,'prototype'=>1			//自定义原生对象方法
	,'tools'=>1				//tools
	,'ic'=>!$phone && strstr($agent, "IE") && !strstr($agent, "IE 9")
							//IE兼容			
	//,'cimage'=>1			//canvas image
	//,'scroll'=>v(array(1))	//自定义滚动条
	
//2. 增强功能(可选)
	//,'gd'=>0				//简单绘图模块
 	//,'skt'=>v(array(1))		//web socket
	//,'twn'=>v(array(1))		//动感
	
//3. 股票核心模块	
	,'main_mini'=>v(array(1))	//核心程序
	,'ini_mini'=>v(array(1))		//初始化
	,'css_mini'=>v(array(1))		//样式控制
	,'rf' =>1			    //刷新间隔控制
	//,'gw' =>v(array(1))		//股票清单
	//,'ti' =>v(array(1))		//底部横条
	,'ky' =>v(array(1))     //键盘控制
	
//4. 股票应用(可选)
	//,'app'=>v(array(1))     //应用管理
	,'tk_mini' =>v(array(1))     //分时图
	//,'kl_mini' =>v(array(1))     //K线图
	,'pk_mini' =>v(array(1))     //盘口
	//,'pk' =>v(array(1))     //盘口
	//,'zb' =>v(array(1))     //分笔
	//,'bk' =>v(array(1))     //板块
	//,'zx' =>v(array(1))     //自选
	//,'rn' =>v(array(1))     //滚动新闻
	//,'dp' =>v(array(1))		//滚动条大盘

//5. iframe嵌入(可选)	
	//,'F10'=>v(array(1))		//F10
	//,'tg' =>v(array(1))     //通告
	//,'csd'=>v(array(1))		//财神道
	//,'zxn'=>v(array(1))		//资讯
	//,'pso'=>v(array(0))		//PSO

//6. 交互(可选)
 	//,'yj' =>v(array(1))		//鼠标右键
	//,'his'=>v(array(1))     //浏览历史
	//,'sct'=>v(array(1))     //快捷键
	//,'help' =>v(array(1))	//帮助界面
	//,'sys'=>v(array(1))     //系统设置
	
//7. 启动
	//,'lb' =>v(array(1))     //上层标签
	//,'login' =>v(array(1))  //登录
	,'begin'=>1   //启动
);

function v($a){
	global $ver;
	return isset($a[$ver]) ? $a[$ver] : 0;
}


//加载js程序
$i = 0;
foreach($load as $key=>$value){
	$i++;
	if($value){
		if(!$ob){
			include_once('js/'.$key.'.js');
		}else{
			//$s = file_get_contents('ob/'.$key.$ob.'.js',NULL,NULL,713); //去掉混淆代码注册说明
			$s = file_get_contents('ob/'.$key.'_Obfs.js');
			echo trim($s);
		}
		//下面是debug 
		if($i>43){
			echo 'alert("'.$key.'");';
			echo "\n";
		}
	}
	//echo "\n"; //检查代码时打开
	//echo 'alert("'.$key.'");';
	//echo "\n"; //检查代码时打开
}

?> 
</script>
