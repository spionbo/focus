<?php
/*
首先，t,tt,k,kk,demo,index.php这几个没用
create_k每天晚上运行, 用于生成每日K线

m.stockstar.com首先调用i.php
i.php 里注明是用混淆代码，然后调用ii.php
如果直接调用ii.php, 则用源代码运行，一般用于调试

ii.php里是一个网页必备的标签，然后根据是否混淆，调用js.php(混淆)或者jss.php(源码)
js.php 里注明是用混淆代码，然后调用jss.php
jss.php 用于加载模块，凡是在$load = array(...)里的模块都会加载
xuan.shi(施烜) 11:21:45
加载部分就是如此

然后重点讲ajax调用

1. 基本逻辑:
m.tockstar.com 分时图和K线图的数据是由前台发起ajax请求,
通过calljs.php来获得数据，返回可执行的js文件_('...')。
function _(str){...} 对其中字符串经行处理，分配给不同模块处理。

2. ajax请求格式:
calljs.php?key1=value1&key2=value2...
其中key1、key2...是请求类型，value1、value2...是各请求类型传递的参数

3. 请求类型参数说明:
下面两个仅传递参数用
GPJC: 表示返回的分时报价需要有股票中文名称
J: 表示本次ajax请求的是哪只股票的数据

DK: 来自K线模块
	DK参数处理见getValue函数$f=='DK'部分
	calljs.php?J=Z000001,s&DK=D,200 (取股票000001的日线前200条)
	调用 getKQdata

DT: 来自分时模块
	DK参数处理见getValue函数$f=='DT'部分
	calljs.php?J=Z000001,s&DT=5 (取股票000001的分时，从9点35开始的数据)
	调用 getDTdata
	
H: 来自盘口模块
	calljs.php?J=Z000001,s&H=任意值
	
RAND: ajax请求时增加随机字串，避免缓存。同时计算监控每个模块的耗时

*/

date_default_timezone_set('PRC');
if($_SERVER['HTTP_HOST']=='192.168.42.225'){
	error_reporting(E_ALL & ~E_NOTICE);
	ini_set('display_errors', '1');
}else{
	ini_set('display_errors', '0');
}
set_time_limit(0);

define('SOAP',0); //0, 则从cache得到数据
define('DEBUG_ORDER', myGet('DEBUG', 10));
define('BR','<BR />');
define('Split0','^^');
define('Split1','~');
define('Split2','|');
define('CACHE','/cache/');
//define('Qjrj', 'http://qsh.jrjc.local:82/');
define('Qjrj', 'http://q.jrjimg.cn/');
$cache = isset($cache) ? $cache : 0;
if(!$cache){
	//无缓存
	header("Expires: Mon, 26 Jul 2007 06:00:00 GMT");
	header("Last-Modified: Mon, 26 Jul 2007 05:00:00 GMT");
	header("Cache-Control: no-cache, must-revalidate");
}elseif($cache==1){
	//1日缓存
	header(      "Expires: " . gmdate("D, d M Y H:i:s",mktime(23,59,59)) . " GMT");
	header("Last-Modified: " . gmdate("D, d M Y H:i:s",mktime(23,59,59))-87600*5 . " GMT");
}elseif($cache==2){
	//多日缓存
	header(      "Expires: " . gmdate("D, d M Y H:i:s",mktime(23,59,59)+87600*5) . " GMT");
	header("Last-Modified: " . gmdate("D, d M Y H:i:s",mktime(0 , 0, 0)-87600*5) . " GMT");
}
$ContentType = isset($ContentType) ? $ContentType : 'text/html';
$Charset = isset($gbk) ? 'GBK' : 'UTF-8';
header("Content-type:$ContentType; Charset=$Charset");


$redis_db = -1;
$cache_num = 0;
$gCache = '';

//字符集GBK->UTF-8
function transToUTF($s){//GBK->UTF8
//	return mb_convert_encoding($s,"UTF-8","GBK");
	return iconv("GBK", "UTF-8", $s);
}

//字符集UTF-8->GBK
function transToGBK($s){//UTF8->GBK
//	return mb_convert_encoding($s,"GBK","UTF-8");
	return iconv("GBK", "UTF-8", $s);
}

//转向
function redirect($url){
	Header("Location: $url");
	exit;
}

//数据库
function sql_exec($db){
	$conn = mysql_connect('localhost','sam','shi'); 
	//$conn = mssql_connect(DB_IP, DB_UN, DB_PS); // or die("数据库服务器连接错误");
	mysql_select_db('stock'); 
	//mssql_select_db($db, $conn);

	return $conn;
}

//容错读取
function myGet($a, $b=''){
    //$a = strtoupper($a);
	return isset($_GET[$a]) ? $_GET[$a] : $b;
}
function myCookie($a){
	return isset($_COOKIE[$a]) ? $_COOKIE[$a] : '';
}
function mySession($a){
	return isset($_SESSION[$a]) ? $_SESSION[$a] : '';
}
function myInfo($a, $b, $c=''){
	return isset($a[$b]) ? $a[$b] : $c;
}

//字符串/数组
function myround($a,$b=4){
	$r = round($a,$b);
	return toBlank($r);
}
function myprice($s, $wei=10000){
	$wei = $wei ? $wei : 1;
	$s = str_replace(array('f','r'), '', $s);
//	$s = str_replace(array('00.'), '0.', $s);
	return round($s*$wei);
}

function showarr($arr){
	echo '/*<pre>';
	print_r($arr);
	echo '</pre>*/';
}
function getWei($gwdm, $deci=''){
	$jinwei_a = array(
		0=> 1,
		1=> 10,
		2=> 100,
		3=> 1000,
		4=> 10000,
		5=> 100000
	);
	return $deci==='' ? $jinwei_a[getDeci($gwdm)] : $jinwei_a[$deci];
}
function getDeci($gwdm){
	$t = substr($gwdm,0,3);
	if ($t=='S50'
	||	$t=='S51'
	||	$t=='S58'
	||	$t=='S90'
	||	$t=='Z03'	//?有吗
	||	$t=='Z11'
	||	$t=='Z12'
	||	$t=='Z15'
	||	$t=='Z16'
	||	$t=='Z18'){
		return 3;
	}else{
		$t = substr($gwdm,0,1);
		if($t!='S' && $t!='Z'){
			if($t=='C'){
				$ex_a = getAlist(0,'exlist');
                if(isset($ex_a[$gwdm][1])) return $ex_a[$gwdm][1];
			}
			if($t=='D'){
				$ii_a = getAlist(0,'iilist');
				if(isset($ii_a[$gwdm][1])) return $ii_a[$gwdm][1];
			}
			if($t=='E'){
				$fu_a = getAlist(0,'fulist');
				if(isset($fu_a[$gwdm][1])) return $fu_a[$gwdm][1];
			}
		}
		return 2;
	}
}
function fixTo($a, $b=2, $c=''){
	if($c=='ceil'){
		$wei = pow(10,$b);
		return ceil($a*$wei)/$wei;
	}else{
		return round($a, $b);
	}
}
function toArray($s){
	if($s){
		$a = explode(';', $s);
		for($i=0; $i<count($a); $i++){
			$a[$i] = explode(' ', $a[$i]);
		}
		return $a;
	}else{
		return false;
	}
}
function toString($a,$split1,$split2){
	if($a){
		for($i=0; $i<count($a); $i++){
			for($j=0; $j<count($a[$i]); $j++){
				$a[$i][$j] = toBlank($a[$i][$j]);
			}
			$a[$i] = rtrim(implode($split1, $a[$i]));
		}
		return implode($split2, $a);
	}else{
		return '';
	}
}
function getJys($a){
	$b = substr($a, 0 , 1);
	$jyslist = array(
		'S'=> 'SH',
		'Z'=> 'SZ',
		'C'=> 'EX',
		'D'=> 'II',
		'E'=> 'FU'
	);
	return isset($jyslist[$b]) ? $jyslist[$b] : $b;
}
function SZ2SHSZ($a){
	return str_replace(array('S','Z'), array('SH','SZ'), $a);
}
function SHSZ2SZ($a){
	return str_replace(array('SH','sh','SZ','sz'), array('S','S','Z','Z'), $a);
}
function alltrim($a){
	return str_replace(' ','',trim($a));
}

//时间处理
function t2i($t){
	return substr($t,0,4).substr($t,5,2).substr($t,8,2).substr($t,11,2).substr($t,14,2);
}
function t2m($t){
	if($t>1130 && $t<1300) $t = 1130;
	if($t>1500) $t = 1500;
	if($t<930) $t = 930;
	return $t;
}
function m2oEX($t){
	$t -= floor($t/100)*40+390; //4:30 = 0;
	return $t;
}
function m2o($t){
	/*
		9点半到3点一共240分钟
		9点半到11点半是前120分钟
		1点到3点是120-240分钟
	*/
	$t -= floor($t/100)*40+570; //9:30 = 0; 11:29=119; 13:00=210; 14:59=329
	if($t>119 && $t<210) $t = 119;
	elseif($t>=210) $t -= 90; //9:30 = 0; 11:29=119; 13:00=120; 14:59=239
	return max(min(239,$t),0);
}

//LOG
function writeLog($s){
	//return;
	$handle = fopen(CACHE.'log.txt','ab');
	fwrite($handle,date('Ymd H:i:s : ').$s."\n");
	fclose($handle);
}

//目录文件
function checkDir($dir){
	if(!file_exists($dir)){
		mkdir($dir, 0777);
		chmod($dir, 0777);
	}
}

//有效判断
function isFileExpire($file,$type='KDATA'){
	if(!file_exists($file)){
		return true;
	}
	if(filesize($file)==0){
		//writeLog($file.' size is 0');
		//return true;
	}

	if($type=='KDATA' || $type=='QDATA'){
		$btime_Hi = '2359';	//凌晨建立缓存(K线入库。)
	}elseif($type=='GWLIST'){	//GWLIST || JC
		$btime_Hi = '0900';	//最新股票清单
	}elseif($type=='JC'){	//GWLIST || JC
		$btime_Hi = '0900';	///决策更新，昨日晚随K线入库。
	}

	//txt文件时间
	$ftime  = date('YmdHi',filemtime($file));

	//上一个更新时间
	$lastTradeTime = getLastTradeDate(time()).$btime_Hi;

	$now = date('YmdHi');

	//今天开始的最近的更新时间，可能是今天以后，比如今天是双休日或特别假期
	$nextTradeTime = getNextTradeDate(time()- 87600).$btime_Hi;

	/*
	echo $file.BR;
	echo $lastTradeTime.' --lastTradeTime'.BR;
	echo $ftime.' --ftime ';
	echo $ftime<=$lastTradeTime ? 'earlier than lastTradeTime, Expire! ' : 'later than lastTradeTime, Keep!';
	echo BR;

	echo $nextTradeTime.' --nextTradeTime'.BR;
	echo $now.' --now ';
	if($now>$nextTradeTime){
		echo 'later than NextTradeTime'.BR;
		echo $ftime<=$nextTradeTime ? 'ftime earlier than NextTradeTime, Expire! ' : 'ftime later than NextTradeTime, Keep!';
	}else{
		echo 'earlier than NextTradeTime, Keep!';
	}
	//exit;*/

	return 
		//文件时间早于lastTradeTime,则过期
		$ftime<$lastTradeTime 
		||
		//过了nextTradeTime,但文件时间早于nextTradeTime,则过期
		($now>=$nextTradeTime && $ftime<$nextTradeTime);
}
function isTradeDate($date){
	$week = date('N',$date);
	if($week==6 || $week==7) return false;
	//列出本年度周一至周五停牌的日子
	//如果不维护，会在这一天生成新的缓存，增加些微工作量而已，其他无影响
	$stoplist = array(
		 20110103
		,20110202
		,20110203
		,20110204
		,20110207
		,20110208
		,20110404
		,20110405
		,20110502
		,20110606
		,20110912
		,20111003
		,20111004
		,20111005
		,20111006
		,20111007
	);
	$d = date('Ymd', $date);
	if(in_array($d, $stoplist)) return false;
	return true;
}
function getNextTradeDate($t){
	for($i=1;$i<30;$i++){
		$t+=86400;
		if(isTradeDate($t)) return date('Ymd', $t);
	}
}
function getLastTradeDate($t){
	for($i=1;$i<30;$i++){
		$t-=86400;
		if(isTradeDate($t)) return date('Ymd', $t);
	}
}

//压缩算法
function fromDif($_l,$_n,$d=''){
	if($d && is_numeric($_n) ){
		return str_pad($_l+$_n+1, 6, "0", STR_PAD_LEFT);
	}else{
		return ($_n) ? $_n : $_l;
	}
}
function toDif($last,$new,$dif=''){
	if($dif){
		return toBlank($new-$last-$dif);
	}else{
		return ($new==$last) ? '' : $new;
	}
}
function toBlank($a){
	return $a*1 ? $a : '';	//此处不能取整，权息用到小数
}
function toBlankInt($a, $b=1){
	return $a*1 && $b ? round($a) : '';	//此处不能取整，权息用到小数
}

//股物清单
function getAlist($refresh='0',$type='string'){
	checkDir(CACHE);
	$gwsfile = CACHE.'gwlist_s.txt';
	$gwafile = CACHE.'gwlist_a.txt';
	if(isFileExpire($gwsfile,'GWLIST') || $refresh){
		
		//来源1-数据库
		//$link = mysql_connect('localhost','sam','shi'); 
		//if (!$link) { 
		//	die('Could not connect to MySQL: ' . mysql_error()); 
		//} 
		////echo 'Connection OK';
		//mysql_select_db('stock'); 
		//mysql_query("set names gbk");
		//$query = mysql_query('select * from gwlist order by jys, code');

		//来源2-sio
		$limit = 120000;

		//共3674
		$gw = array();
		for($i=1050; $i<50100 && $i<$limit; $i+=1000){	//2322
			$gw = array_merge($gw, getGwlist($i, 's'));
		}
		for($i=1050; $i<8100 && $i<$limit; $i+=1000){	//368
			$gw = array_merge($gw, getGwlist($i, 'i'));
		}
		for($i=1050; $i<3100 && $i<$limit; $i+=1000){	//134
			$gw = array_merge($gw, getGwlist($i, 'f'));
		}
		//for($i=1050; $i<1100 && $i<$limit; $i+=1000){	//1
		//	$gw = array_merge($gw, getGwlist($i, 'w'));
		//}
		for($i=1050; $i<17100 && $i<$limit; $i+=1000){	//849
			$gw = array_merge($gw, getGwlist($i, 'bd'));
		}
		usort($gw, "jyscode");

		$s = '';
		$out = '';
		$last_gpdm = 0;
		$last_gwlb = '';
		$last_jys = '';
		$gw_a = array();


		for($i=0, $len=count($gw); $i<$len; $i++){
			$rs = $gw[$i];
//showarr($rs);
			$next_jys = trim($rs[0]);
			if($next_jys!=$last_jys){
				$last_gpdm = 0;
				$last_gwlb = '';
			}

			//确定有差异的排在前面
			$s  = trim($rs[2]).' ';							//name
			$s .= trim($rs[3]).' ';							//pyjc
			$s .= toDif($last_gwlb, trim(strtoupper($rs[4]))).' ';		//gwlb
			$s .= toDif($last_gpdm, trim($rs[1]), 1).' ';	//gpdm
			$s .= toDif($last_jys, $next_jys).' ';	//jys
			$out .= rtrim($s).";";
			$last_gpdm = trim($rs[1]);
			$last_gwlb = trim(strtoupper($rs[4]));
			$last_jys = $next_jys;

			array_push($gw_a, 
				array(
					$next_jys.$rs[1]
					,trim($rs[4])
				)
			);
		}

		$out = substr($out,0,-1);

		$out = str_replace(
			array('国债', '股份', '科技', '指数', '中证', '上证', '深证', 'B股' , '中国', '电子', '东方', '上海', '基金',
				  '集团', '药业', '地债', '能源', '成长', '地产', '控股', '化工', '电力', '发展', '高新', '投资', '银行'),
			array('a'   , 'b'   , 'c'   , 'd'   , 'e'   , 'f'   , 'g'   , 'h'   , 'i'   , 'j'   , 'k'   , 'l'   , 'm'   ,
				  'n'   , 'o'   , 'p'   , 'q'   , 'r'   , 's'   , 't'   , 'u'   , 'v'   , 'w'   , 'x'   , 'y'   , 'z'   ),
			$out
		);

		file_put_contents($gwsfile, $out);
		
		file_put_contents($gwafile, serialize($gw_a));
	}
	else{
		return $type=='string' 
			? file_get_contents($gwsfile)
			: unserialize(file_get_contents($gwafile));
	}
	return $type=='string' 
		? $out 
		: $gw_a;
}

//分时
function getDTdata($top, $gw, $type, $need_gpjc){
/*
	  $top			//索取第几分钟后的数据，[0-239]
	, $gw			//股物代码，格式为S600001或Z000001，为交易所标志(S/Z)+股票代码；缺省用J的参数
	, $type			//股票类型, s:股票，i:指数；缺省用J的参数
	, $need_gpjc	//是否需要传股票中文名称
	
	
	//返回的数据分5部分
	//[0]盘前及开盘数据，仅请求的$top参数是0时有数据
	//[1]当日分时数据
	//[2]最新日价格信息
	//[3]系统时间
	//[4]停牌标志
*/
	global $real;	//本函数获得的实时数据全局化

	//交易所：S/Z
	$jys = SHSZ2SZ(getJys($gw));
		
	//股票代码：000001
	$gpdm = substr($gw,1);	

	//小数报价变整数报价需要放大的倍数，一般是100倍
	$wei = getWei($gw); //例如：substr($gw,0,2)=='S90' ? 1000 : 100;

	//实时行情地址
	$url = Qjrj.'?q=cn|'.$type.'&i='.$gpdm.'&c=l';
	//http://q.jrjimg.cn/?q=cn|s&i=000001&c=l
	
	//处理后的所有数据， getRealValue是从$real中取数据
	$real = getFile($url);

	//开盘价
	$open = myround(getRealValue('op')*$wei);	// open
	
	//报价时间
	$t = getRealValue('time');					// time

	//20110728150305

	if(!$t) return '';
	
	//停牌标志
	$stop = $type!='i' && getRealValue('stp') ? 1 : 0;

	//交易时间20120630
	$trade_date = substr($t, 0, 8);
	
	//第几分钟
	$time_order = m2o(t2m(substr($t, 8, 4)));	//0-239







	

	//返回字符串
	$ss = '';
	
	//[0]盘前及开盘数据	
	if(!$top && $real){ //top==0,取盘前信息
		$ss = $trade_date.',';
		$ss .= myround(getRealValue('lcp')*$wei).',';		// 昨收
		$ss .= $open.',';									// 开盘
		$ss .= myround(getRealValue('ceqt')*$wei);			// 流通股
		if($need_gpjc) $ss .= ','.getRealValue('name'); 	// 中文名
	}

	$ss .= Split1;
	
	//[1]当日分时数据		
	$lt = -1;
	$ll = 0;
	$lv = 0;
	$la = 0;
	
	//检查缓存目录，不存在则新建
	checkDir(CACHE.$jys.'T/');
	
	//缓存文件名
	$Tkey = CACHE.$jys.'T/'.$gwdm.'T.txt';
	
	//输出字符串
	$out = '';
	
	//前端的数据到了第100分钟，则发送从第99分钟开始的数据
	if($top) $top--;

	if($top<$time_order){
		$now_order = $trade_date.str_pad($time_order, 3, "0", STR_PAD_LEFT);

		//缓存是否使用，现在是没有使用的状态 0 &&
		if(0 && file_exists($Tkey) && ($str = file_get_contents($Tkey)) && ($now_order <= substr($str, 0, 11))){
			//缓存
			$out = substr($str, 12);	//11是:
		}
		else if(!$stop){

			//来源一，有均价，有开高低收，正排序。分时图
			if($type=='s'){
				$url =  'http://flashdata2.jrj.com.cn/today/min_binary/share/'.$gpdm.'.sio.zlib';
			}elseif($type=='i'){
				$url =  'http://flashdata2.jrj.com.cn/today/min_binary/index/'.$gpdm.'.sio.zlib';
			}elseif($type=='f'){
				$url =  'http://flashdata2.jrj.com.cn/today/min_binary/fund/'.$gpdm.'.sio.zlib';
			}elseif($type=='bd'){
				$url =  'http://flashdata2.jrj.com.cn/today/min_binary/bond/'.$gpdm.'.sio.zlib';
			}elseif($type=='w'){
				$url =  'http://flashdata2.jrj.com.cn/today/min_binary/warrant/'.$gpdm.'.sio.zlib';
			}elseif($type=='IF'){
				$url =  'http://flashdata2.jrj.com.cn/today/min_binary/IF/'.$gpdm.'.sio.zlib';
			}
			
			//showarr($url);
			//time,I,4;mp,F,4;mta,d,8;mtm,d,8;mavg,F,4;mine,B,1;mop,F,4;mhp,F,4;mlp,F,4

			//二进制转换成自定义格式
			$minutes = sioToData($url);
			//showarr($minutes);
			
			for ($i=0, $cnt=count($minutes); $i<$cnt; $i++){
				$minute = $minutes[$i];
				$nc = round($minute[1]*$wei);
				if(!$minute[2] && ($i<$cnt-1 || !$nc)) continue;
				//showarr($minute);
				$no = round($minute[6]*$wei);
				$nh = round($minute[7]*$wei);
				$nl = round($minute[8]*$wei);
				if(!$no) $no = $nc;
				if(!$nh) $nh = $nc;
				if(!$nl) $nl = $nc;
				$nv = $minute[2]; 
				$na = round($minute[4]*$wei*10); //均线放大1000倍，多精确1位
				$nt = t2m($minute[0]);
				//$nt += $trade_date*10000;
				$s  = $nv.' ';					//0	量
				$s .= toBlankInt($nl-$ll).' ';	//1 低
				$s .= toBlankInt($no-$nl).' ';	//2 开
				$s .= toBlankInt($nh-$nl).' ';	//3 高
				$s .= toBlankInt($nc-$nl).' ';	//4 收
				$s .= toBlankInt($na-$la).' ';	//5	额
				$s .= toBlankInt($nt-$lt-1);	//6	时

				$lt = $nt;
				$ll = $nl;
				$lv = $nv;
				$la = $na;

				$out .= rtrim($s).';';
				//showarr($nt.':'.$s);
			}
			
			/* 来源二，无均价，无开高低收，倒排序
			$url = 'http://data.share.jrj.com.cn/fs.do?code='.$gpdm.'&page=1&size=240';
			$minutes = getFile2($url);
			for ($i=count($minutes)-1-$top; $i>=0; $i--){
				$minute = explode(',',$minutes[$i]);
				$no = round($minute[0]*$wei);
				$nh = round($minute[0]*$wei);
				$nl = round($minute[0]*$wei);
				$nc = round($minute[0]*$wei);
				$nv = $minute[1]; 
				$na = 0; //均线放大10倍，多精确1位
				$nt = t2m(substr($minute[4], 0, 4));
				//echo $minute[4].' '.$nt.BR;
				$nt += $trade_date*10000;
				$s  = toBlankInt($nv-$lv).' ';		//0
				$s .= toBlankInt($na-$la).' ';		//1
				$s .= toBlankInt($nl-$ll).' ';		//2
				$s .= toBlankInt($no-$nl).' ';		//3
				$s .= toBlankInt($nh-$nl).' ';		//4
				$s .= toBlankInt($nc-$nl).' ';		//5
				$s .= toBlankInt($nt-$lt-1);		//6

				$lt = $nt;
				$ll = $nl;
				$lv = $nv;
				$la = $na;

				$out .= rtrim($s).';';
			}
			*/

			$out = substr($out,0,-1);
			file_put_contents($Tkey, m2o($nt).':'.$out);
			//showarr('get new ticks');
			//showarr(array($nt,m2o($nt), $now_order, $minute[0]));
		}
	}

	$ss .= $out;
	$ss .= Split1;
	
	//[2]最新日价格信息
	if(!$stop){
		$s  = substr($t, 8, 6).' ';							//0 数据时间'091234';
		$s .= myround(getRealValue('ta')).' ';				//1 日总量 手
		$s .= myround(getRealValue('tm')).' ';				//2 日总额 万元
		$L  = getRealValue('lp');
		$L  = $L<19999 && $L>0 ? round($L*$wei) : 0;
		$s .= $L.' ';										//3 日最低
		$s .= toBlankInt(getRealValue('hp')*$wei-$L).' ';	//4 日最高
		$s .= toBlankInt(getRealValue('np')*$wei-$L).' ';	//5 现价
		$s .= getRealValue('cot').' ';						//6 委比
		$s .= getRealValue('inna').' ';						//7 内盘量
		$s .= getRealValue('outa').' ';						//8 外盘量
		$s .= getRealValue('tr').' ';						//9 换手
		$s .= getRealValue('cat');							//10 量比
				
		$ss .= rtrim($s);
	}
	$ss .= Split1;
	
	//[3]系统时间, 决定了刷新器的时间显示
	$ss .= date('H:i:s');
	
	//[4]停牌标志
	$ss .= Split1;
	$ss .= $stop;
	return $ss;		
}

//K线
function getKQdata($refresh=0,$gwdm,$line,$to=100,$from=0,$type='string',$gwtype='s'){
	/*
		$refresh=0			刷新开关，0 使用缓存文件，1 重新生成K线
		,$gwdm				股票代码
		,$line				K线类型，D 日线, 5/15/30/60 分钟线
		,$to=100			取值范围
		,$from=0			取值范围，取今日之前的第$to根K线 到 今日之前的第$from根K线
		,$type='string'		返回类型，字符串或数组，字符串用于发给前端，数组用于php程序调用
		,$gwtype='s'		股票类型，s:股票，i:指数
	*/
	$gwdm = strtoupper($gwdm);
	if(!$gwdm) return;
    $jys = $gwdm{0};
	$gpdm = substr($gwdm,1);

	if(strlen($gpdm)!=6) return '';
	if($to<=0) $to = 10000;
	if(!is_numeric($from) || $from<0) $from = 0;
	$l2 = substr($gpdm,0,2); //左边2字符，用于判断AB股
	$wei = getWei($gwdm);

	//判断代码是否是A股或B股, 否则则可能是指数债券或基金
	if ($jys == 'Z') {
		$isAB = ($l2=='00' || $l2=='20' || $l2=='30') ? 1 : 0;
	} else if ($jys == 'S') {
		$isAB = ($l2=='60' || $l2=='90') ? 1 : 0;
	} else if ($jys == 'C' || $jys == 'E') {
		$isAB = 0;
    }

	$dif=1;

	//只接受D-日线或5/15/30/60分钟线
	if($line=='D'){
        $mytop = 10000;
	}elseif($line=='5'
        || $line=='15'
        || $line=='30'
        || $line=='60'){
		$mytop = 300;
	}else{
		return;
	}

	//建立目录
	checkDir(CACHE);
	checkDir(CACHE.$jys.$line.'/');
	checkDir(CACHE.$jys.'Q/');

	//缓存文件, 保留K线和权息数据
	$Kkey = CACHE.$jys.$line.'/'.$gwdm.$line.'.txt';	//所有k线
	$Kkey1 = CACHE.$jys.$line.'/'.$gwdm.$line.'1.txt';	//前200日K线
	$Kkey2 = CACHE.$jys.$line.'/'.$gwdm.$line.'2.txt';	//200-1000日K线
	$Qkey = CACHE.$jys.'Q/'.$gwdm.'Q.txt';

	$e = array(1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13,1e14,1e15,1e16,1e17,1e18);

	//如果过期或文件大小==0
	if(isFileExpire($Kkey, 'KDATA') || $refresh=='1'){
		//仅当日线D且是A或B股
		if($line=='D' && $isAB){//重建权息数据
			$qx_a= array();

			$url = 'http://canal.stockstar.com/base/V_JRJ_STK_EX_FACTOR/filter-STOCKCODE-str='.$gpdm;
			$s = file_get_contents($url);
			$s = strstr($s, 'ACTOR=[');
			$s = substr($s, 12,-9);
			$s = str_replace(array(" ", "\n", "\r", "\t", '"'), "", $s);
			$arr = trim($s) ? explode('},{',$s) : array();
			$data = array();
			for($len=count($arr), $i=$len-1; $i>=0; $i--){
				$arr[$i] = explode(',', $arr[$i]);
				$data[$i] = array();
				for($j=0, $sublen=count($arr[$i]); $j<$sublen; $j++){
					list($key, $value) = explode(':', $arr[$i][$j]);
					$data[$i][$key] = $value;
				}

				$qx_a[$len-$i-1] = array(
					$data[$i]['EX_DATE']
					,1
					,$data[$i]['CASH']
					,$data[$i]['DIV_SHR']+$data[$i]['TRAN_SHR']
					,0
					,$data[$i]['ISS_SHR']
					,$data[$i]['ISS_PRC']
				);
			}
			rsort($qx_a);
		}
		else{
			$qx_a = false;
		}
		$qxlenth = count($qx_a);

		//查询K线sql，注意这里K线是倒排序的
		$data = array();
	
		if($line=='D'){
			//日线
			if($gwtype=='s'){
				$url =  'http://flashdata2.jrj.com.cn/history/share/'.$gpdm.'/other/'.$gpdm.'_dayk.sio.zlib';
			}elseif($gwtype=='i'){
				$url =  'http://flashdata2.jrj.com.cn/history/index/'.$gpdm.'/other/'.$gpdm.'_dayk.sio.zlib';
			}elseif($gwtype=='f'){
				$url =  'http://flashdata2.jrj.com.cn/history/fund/'.$gpdm.'/other/'.$gpdm.'_dayk.sio.zlib';
			}elseif($gwtype=='bd'){
				return '';
				$url =  'http://192.168.42.99:8099/s.aspx?resName=HSDAYK&filter-STOCKCODE-str='.$gpdm.'&filter-MARKETTYPE-int=1&limit=10000';
			}elseif($gwtype=='w'){
				$url =  'http://flashdata2.jrj.com.cn/history/warrant/'.$gpdm.'/other/'.$gpdm.'_dayk.sio.zlib';
			}elseif($gwtype=='IF'){
				$url =  'http://flashdata2.jrj.com.cn/history/IF/'.$gpdm.'/other/'.$gpdm.'_dayk.sio.zlib';	
				//http://flashdata2.jrj.com.cn/history/IF/IF1205/other/IF1205_dayk_last_200.sio.zlib				
			}
			//d,I,4;lcp,F,4;np,F,4;op,F,4;hp,F,4;lp,F,4;ta,d,8;tm,d,8,mine,B,1
	
			//分时
			//$url =  'http://flashdata2.jrj.com.cn/today/min_binary/share/'.$gpdm.'.sio.zlib';
			//time,I,4;mp,F,4;mta,d,8;mtm,d,8;mavg,F,4;mine,B,1;mop,F,4;mhp,F,4;mlp,F,4
			
			//读取二进制数据并转换格式, $gwtype=='bd' 永不成立
			$data = $gwtype=='bd' ? sioToData2($url) : sioToData($url);
		}
		else{
			return '';
		}

		$cqx = -1; //目前到了第几次除权息了
		$cqx_one = 1;

		$last_v_len = 0;
		$last_a_len = 0;
		$last_date = 0;
		$last_cqx = -1;

		$kd_s = '';
		$qx_s = '';

		//echo $sql.BR;
		$j = count($data);
		//生成K线
		while($j--){ //降序
			if(!isset($data[$j][7])){
				continue;
			}
			$rs=array(
				$data[$j][0],	//时间
				$data[$j][3],	//开
				$data[$j][4],	//高
				$data[$j][5],	//低
				$data[$j][2],	//收
				$data[$j][6],	//量
				$data[$j][7]	//额
			);
			
			//处理权息
			if($qx_a){
				if($cqx_one && $rs[0]<$qx_a[0][0]){
					$cqx = 0; 						//否则$cqx=-1
				}
				$cqx_one = 0;						//仅执行一次
				for($i=$cqx+1; $i<$qxlenth; $i++){
					if(substr($rs[0],0,8)<$qx_a[$i][0]){
						$_z = $qx_a[$i];
						//计算此日期之前的向前复权比例
						if($line=='D'){
							$qx_a[$i][1] = ($rs[4]-$_z[2]+$_z[5]*$_z[6])/(1+$_z[3]+$_z[4]+$_z[5])/$rs[4];
							if($i>0){
								$qx_a[$i][1] *= $qx_a[$i-1][1];
								$qx_a[$i-1][1] = round($qx_a[$i-1][1],6); //保留6位小数
								if($i==$qxlenth-1){
									$qx_a[$i][1] = round($qx_a[$i][1],6);
								}
							}
						}
						$cqx++;
					}else break; //退出循环，取下一个日期
				}
			}

			//处理K线
			//字符串格式是：开,高,低,收,量,额,日,权
/*
这里用两天的日线报价举例说明压缩步骤
每一个步骤都是唯一可逆的
字段含义：日，开，高，低，收，量，额
数据没有空格
20120701,10.51,10.92,10.13,10.34,12345678,123456789;
20120702,10.41,10.92,10.23,10.64,22345678,223456789;

压缩开始

压缩步骤1: 开高低收放大100倍，去掉小数点
20120701,1051,1092,1013,1034,12345678,123456789;
20120702,1041,1092,1023,1064,22345678,223456789;

压缩步骤2:开高收取低的相对值
20120701,38,79,1013,31,12345678,123456789;
20120702,18,69,1023,41,22345678,223456789;

压缩步骤3:日期取上一个日期的相对值-1
20120701,38,79,1013,31,12345678,123456789;
0,18,69,1023,41,22345678,223456789;

压缩步骤4:交易量和交易额保留4位整数，并写成取整和进位两部分
20120701,38,79,1013,31,1235,4,1235,5;
0,18,69,1023,41,2235,5,2235,5;
前端只需要4位整数

压缩步骤5:交易量和交易额部分的进位部分取上一日期的相对值

20120701,38,79,1013,31,1235,4,1235,5;
0,18,69,1023,41,2235,0,2235,0;

压缩步骤6: 调整顺序
	日，开，高，低，收，量取整，量进位，额取整，额进位
 -> 开，高，低，收，量取整，额取整，日，量进位，额进位
	现在数据状况如下
	0 开 		与低差额
	1 高 		与低差额
	2 低	
	3 收 		与低差额
	4 量取整
	5 额取整
	6 日 		与上日差额-1
	7 量进位 	与上日差额
	8 额进位 	与上日差额
	9 第几次除权息 	与上日差额
38,79,1013,31,1235,1235,20120701,4,5;
18,69,1023,41,2235,2235,0,0,0;

压缩步骤7: 用空格分隔这个字串
38 79 1013 31 1235 1235 20120701 4 5;
18 69 1023 41 2235 2235 0 0 0;

步骤8: 单独数字0，可以用空格代替，toBlank()
38 79 1013 31 1235 1235 20120701 4 5;
18 69 1023 41 2235 2235      ;

压缩步骤9: 去掉每日数据末尾空格
38 79 1013 31 1235 1235 20120701 4 5;
18 69 1023 41 2235 2235;

压缩结束
*/			
			
			//*$wei把小数放大至整数，
			if($rs[0]!=$last_date){
				$L = round($rs[3]*$wei);
				$k_s = '';
				//toBlank意思是当结果为0时,返回空字符串
				//-$L是取与最低价的差额
				$k_s .= toBlank(round($rs[1]*$wei-$L)).' ';			//0 开 				与低差额
				$k_s .= toBlank(round($rs[2]*$wei-$L)).' ';			//1 高 				与低差额
				$k_s .= toBlank(round($L)).' ';						//2 低	
				$k_s .= toBlank(round($rs[4]*$wei-$L)).' ';			//3 收 				与低差额
				//这样开高低收：'1.05, 1.09, 1.01, 1.03'
				//就变成 '4 8 101 2'，变得很短
				
				
				$v_len = max(0,strlen($rs[5])-4);
				if($v_len%3==1) $v_len--;
				$k_s .= toBlank(round($rs[5]/$e[$v_len])).' ';		//4 量取整
				$a_len = max(0,strlen($rs[6])-4);
				if($a_len%3==1) $a_len--;
				$k_s .= toBlank(round($rs[6]/$e[$a_len])).' ';		//5 额取整

				//$dif=1, 日期一般差额为1，周末差额为3
				//差额-$dif以后，周二-周五的日期都可以省略了
				$k_s .= toBlank($last_date-$rs[0]-$dif).' ';		//6 日 				与上日差额-1
				$k_s .= toBlank($v_len-$last_v_len).' ';			//7 量进位 			与上日差额
				$k_s .= toBlank($a_len-$last_a_len).' ';			//8 额进位 			与上日差额
				$k_s .= toBlank($cqx-$last_cqx).' ';				//9 第几次除权息 	与上日差额
				//$k_s .= myInfo($rs, 7);	//新增信息地雷

				$last_date = $rs[0];
				$last_v_len = $v_len;
				$last_a_len = $a_len;
				$last_cqx = $cqx;

				$kd_s .= rtrim($k_s).";";	//保存所有的，仍然是倒排序!!!
			}else{
				writeLog($gwdm.' '.$last_date.' data repeat');	//有重复日K数据
			}
		}
		$kd_s = substr($kd_s,0,-1);
		$kd_s1 = sliceStrData($kd_s, 0, 200);		//这里并没有使用$from, $to
		$kd_s2 = sliceStrData($kd_s, 200, 1000);	//这里并没有使用$from, $to

		//下面把结果写入文件
        file_put_contents($Kkey, $kd_s);
        file_put_contents($Kkey1, $kd_s1);
        file_put_contents($Kkey2, $kd_s2);

		if($line=='D'){
			$qx_s = toString($qx_a,' ',";");
			file_put_contents($Qkey, $qx_s);
		}else{
			$qx_s = '';
		}
	}
	else{	//文件缓存有效
		
		//从文件读取数据
		if($from==0){
			//$kd_s1 = file_get_contents($Kkey);	//webstock.stockstar.com 
			$kd_s1 = file_get_contents($Kkey1);		//m.stockstar.com 0-200
		}else{
			$kd_s2 = file_get_contents($Kkey2);		//m.stockstar.com 200-1000
		}
		if($type=='array'){
			$kd_s = file_get_contents($Kkey);
		}
		$qx_s = file_get_contents($Qkey);

	}

	//输出数组格式, 进用于服务器程序内部调用
	if($type=='array'){
		$last_date = 0;
		$last_v_len = 0;
		$last_a_len = 0;
		$last_cqx = -1;
		$kd_s_a = explode(';', $kd_s);
		$kd_a = array();
		$to = min($to, count($kd_s_a));

		for($i=0; $i<$to; $i++){
			if(!$kd_s_a[$i]) break;
			$y = explode(' ', rtrim($kd_s_a[$i]));
			$last_date -= myInfo($y,6,0)+$dif;
			$last_v_len += myInfo($y,7,0);
			$last_a_len += myInfo($y,8,0);
			$last_cqx += myInfo($y,9,0);
			$L = myInfo($y,2)/$wei;

			//输出的K线数组是正排序的
			$kd_a[$to-$i-1] = array(
				$last_date,
				myInfo($y,0)/$wei+$L,
				myInfo($y,1)/$wei+$L,
				$L,
				myInfo($y,3)/$wei+$L,
				myInfo($y,4)*$e[$last_v_len],
				myInfo($y,5)*$e[$last_a_len],
				$last_cqx
			);
		}
		$qx_a = toArray($qx_s);

		return array($kd_a, $qx_a ? array_slice($qx_a,0,$last_cqx+1) : false);
	}

	//输出字符串, 是精简格式, 用于web
	elseif($type=='string'){
		//if(strlen($kd_s)<=0) return Split1;

		if(!$from){
			//不写K线起始点, 则发从今之前第0-200日K线, 包含权息数据
			return $kd_s1.Split1.$qx_s;
		}else{
			//写了K线起始点, 则发从今之前第200-1000日K线, 不包含权息数据
			return $kd_s2;
		}
	}
}
function sliceStrData($str, $from, $to){
	if($from==0 && $to>=10000){
		return $str;
	}
	$a = explode(';', $str);
	$a = array_slice($a, $from, $to-$from);
	return implode(';',$a);
}
function mytrim($item){
	$item = rtrim($item);
}
function cqx($a, $b, $c=2, $d=''){
	global $qx_a;
	if(!$qx_a || $b<0) return $a;
	//echo $a.BR;
	//echo $b.BR;
	//echo $qx_a[$b][1].BR;
	//echo $a*$qx_a[$b][1].BR.BR;
	return fixTo($a*$qx_a[$b][1], $c, $d);
}

//数据反馈 ===================================================================================
function calljs($a){
	global $need_gpjc;
	global $log;
	global $time0;
	global $time1;
	global $cache_num;
	$need_gpjc = 0;
	$log = array();
	$time0 = microtime_float();
	$time1 = $time0;
	$cache_num = 0;

	$str = array();
	foreach($a as $f => $v){
		if(preg_match ("/[' ]/i",$v)){
			$s =  'Injection Attack From '.$_SERVER['SERVER_ADDR'];
			echo $s;
			writeLog($s.' : '.$f.'='.$v);
			exit;
		}
		$v1 = explode(',',$v);
		$returnValue = getValue($f, $v);
		if($returnValue){
			$content = $f.'='.$v1[0].'::'.str_replace('"', "'", $returnValue);
		}else{
			$content = $f.'='.$v1[0];
		}
        if($f=='RAND'){
            array_unshift($str, $content);
        }else{
            array_push($str, $content);
        }
		
		$time2 = microtime_float();
		$t = round($time2-$time1);
		if($t>=0){
			$log[] = $f.':'.$t;
		}
		$time1 = $time2;
	}

	return '_("'.implode(Split0,$str).'");';
}
function getValue($f, $v){
	if($f=='DK'){
		global $gwdm;
		global $gwtype;
		
		$arr = explode(',',$v);
		$line = myInfo($arr, 0);
		$to = myInfo($arr, 1);
		$from = myInfo($arr, 2);
		$refresh = myInfo($arr, 3);
		
		/*
		echo $v.BR;
		echo $gwdm.BR;
		echo $type.BR;
		echo $line.BR;
		echo $to.BR;
		echo $refresh.BR;
		*/
		return getKQdata($refresh,$gwdm,$line,$to,$from,'string',$gwtype);
	}		
	elseif($f=='DP'){ 		//底边指数
		$url = Qjrj.'?q=cn|i&i=000001,399001&c=m';
		
		$data = getFile($url);
		$ss = '';
		$ss .= getRealValue('np' , 0, $data).',';
		$ss .= getRealValue('lcp', 0, $data).',';
		$ss .= getRealValue('tm' , 0, $data).Split1;
		$ss .= getRealValue('np' , 1, $data).',';
		$ss .= getRealValue('lcp', 1, $data).',';
		$ss .= getRealValue('tm' , 1, $data);
		return $ss;
	}
	elseif(substr($f,0,2)=='DT'){
		global $gwdm;
		global $gwtype;
		global $need_gpjc;
		
		
		//支持两种格式：
		//1：calljs.php?J=Z000001,s$DT=0
		//2：calljs.php?$DT=0,Z000001,s
		
		$arg  = explode(',',$v);
		
		$top  = $arg[0];	//从当日第几个分钟开始，总共240分钟
		if(isset($arg[1])){	//代码
			$gw = $arg[1];
		}else{
			$gw = $gwdm;
		}
		if(isset($arg[2])){	//i指数, s股票
			$type = $arg[2];
		}else{
			$type = $gwtype;
		}
		return getDTdata($top, $gw, $type, $need_gpjc);
	}
	elseif($f=='G'){
		list($url, $p, $order) = explode(';', $v);
		$url = Qjrj.'?q=cn|'.$url;
		$url .= '&c=l&p='.$p.'&o='.$order;
		$data = getFile($url);
		$ss = $data[2].';';	//page, pages
		for($i=0,$len=count($data[1]); $i<$len; $i++){
			if(!$data[1][$i]) break;
			$ss .= SHSZ2SZ(getRealValue('id', $i, $data)).',';
			$stop= getRealValue('stp',$i, $data)==1 ? 0 : 1;
			$ss .= getRealValue('np', $i, $data)*$stop.',';
			$ss .= getRealValue('lcp',$i, $data).',';
			$ss .= getRealValue('op', $i, $data)*$stop.',';
			$ss .= getRealValue('hp', $i, $data)*$stop.',';
			$ss .= getRealValue('lp', $i, $data)*$stop.',';
			$ss .= getRealValue('ta', $i, $data).',';
			$ss .= getRealValue('tm', $i, $data).',';
			$ss .= getRealValue('bp1', $i, $data).',';
			$ss .= getRealValue('sp1', $i, $data).',';
			$ss .= getRealValue('ceqt', $i, $data).',';
			$ss .= getRealValue('teqt', $i, $data).',';
			$ss .= ';';
		}
		return substr($ss,0,-1);
	}
	elseif($f=='GPJC'){
		global $need_gpjc;
		$need_gpjc = 1;
		return;
	}
	elseif($f=='GW'){ 		//GW清单
		return getAlist($v);
	}
	elseif($f=='H'){		//盘口
		global $gwdm;
		global $gwtype;
		//global $real;
		//showarr($real);
		//if($gwtype=='i'){	//webquote.stockstar.com
		if($gwtype=='i'){	//m.stockstar.com
			//板块排名
			$url = 'http://q.jrjimg.cn/?q=cn|bk|1&p=1050&o=pl,d&c=code,pl,tm';
			$bkorder = getFile($url);
			$ss = '';
			for($i=0, $len=count($bkorder[1]); $i<$len; $i++){
				$z = $bkorder[1][$i];
				$ss .= ($z[0]-400115949).',';
				$ss .= $z[1].',';
				$ss .= $z[2].';';
			}
			return substr($ss, 0, -1);
		}
	
		$stop = $gwtype=='i' || ($gwtype!='i' && getRealValue('stp'));
		
		$jys = getJys($gwdm);
		$gpdm = substr($gwdm,1);
		
		$wei = getWei($gwdm);
		$ss = '';
		//$ss = $gwdm;
		//$ss .= Split1;



		//10档卖盘
		$first = 0;
		for ($i=1; $i<=5 && !$stop; $i++){  
			$_p = getRealValue('sp'.$i)*$wei;
			if (!is_numeric($_p)||$_p==0) break;
			if($i==1){	
				$ss .= round($_p).',';
				$first = $_p;
			}else{
				$ss .= round($_p-$first).',';
			}
			$ss .= getRealValue('sa'.$i).',';
		}

		$ss = substr($ss, 0, -1).Split1;

		//10档买盘
		$last_p = 0;
		for ($i=1; $i<=5 && !$stop; $i++){  
			$_p = getRealValue('bp'.$i)*$wei;
			if (!is_numeric($_p)||$_p==0) break;
			if($i==1){	
				$ss .= round($_p).',';
				$sb1 = $_p;
			}else{
				$ss .= round($first-$_p).',';
			}
			$ss .= getRealValue('ba'.$i).',';
		}
		
		$ss = substr($ss, 0, -1).Split1;
		$ss .= getRealValue('tr');
		
		return $ss;
	}
	elseif($f=='J'){		//global gwdm
		global $gwdm;
		global $gwtype;
		list($gwdm, $gwtype) = explode(',', $v);
	}
	elseif($f=='O'){
		global $need_gpjc;
		list($jys, $type, $ab, $top) = explode(',',$v);
		$pre = $jys=='S' ? 'sh' : 'sz';
		$ab = strtolower($ab);
		
		$order = array('pl','pl','sl','tm','ta','cat','min5pl');
		$desc = $type=='1' ? 'a' :'d';
		$url = Qjrj.'?q=cn|s|'.$pre.',s'.$ab.'&c=l&o='.$order[$type].','.$desc.'&p='.$top;
		//showarr($url);
		$data = getFile($url);

		for($i=0,$len=count($data[1]); $i<$len; $i++){
			$gwdm = $jys.getRealValue('code', $i, $data);
			if($need_gpjc) $gwdm .= getRealValue('name', $i, $data);
			$wei = getWei($gwdm);
			$R = getRealValue('lcp', $i, $data)*$wei;
			$C = getRealValue('np', $i, $data)*$wei-$R;
			$value = getRealValue($order[$type], $i, $data);
			$result[$i] = implode(',',array($gwdm,$R,$C,$value));
		}
		return implode(';',$result);
	}
	elseif($f=='Q'){		//老版指数模块
		list($limit_jys,$limit_type,$limit_group,$limit_top)=explode('_',$v);

		$gwlist = getAlist(0,'array');

		$cnt = count($gwlist);
		$i = 0; //这里顺序与js相反，js用了到排序来获得股票数组
		$j = 3;
		$k = 0;		
		$gwarray = array();
		while($i<$cnt){
			$gw = $gwlist[$i];
			if(isset($gw[1])
				&& $gw[1]==$limit_type 
				&& ($limit_jys=='all' 
					|| $limit_jys==substr($gw[0],0,1)
					)
				&& ($limit_group=== 'all'	
					||	(strlen($limit_group)==4 
						&&	substr($gw[0],1,4)===$limit_group
						)
					)
			){
				if($j>=$limit_top){
					$gwarray[] = substr($gw[0],1);
					$k++;
				}
				$j++;
				if($k>20) break;
			}
			$i++;
		}
		
		$url = Qjrj.'?q=cn|i&c=l&i='.implode(',', $gwarray);
		$data = getFile($url);
		$ss = '';
		for($i=0,$len=count($data[1]); $i<$len; $i++){
			$ss .= SHSZ2SZ(getRealValue('id', $i, $data)).',';
			$ss .= getRealValue('np', $i, $data).',';
			$ss .= getRealValue('lcp',$i, $data).',';
			$ss .= getRealValue('op', $i, $data).',';
			$ss .= getRealValue('hp', $i, $data).',';
			$ss .= getRealValue('lp', $i, $data).',';
			$ss .= getRealValue('ta', $i, $data).',';
			$ss .= getRealValue('tm', $i, $data).',';
			$ss .= getRealValue('tm', $i, $data).',';
			$ss .= ';';
		}

		return substr($ss,0,-1);
	}
	elseif($f=='RAND'){
		//return '';
		//list($id, $rand) = explode(',',$v);

		/*统计各项目花费时间*/
		global $log;
		global $time0;
		global $time1;
		
		//RAND耗时
		$time2 = microtime_float();
		$log[] = 'RAND:'.round($time2-$time1,2);
		
		//统计总连接数和总耗时
		$log[] = 'total:'.round($time2-$time0,2);
		
		array_unshift($log, date('H:i:s'));
		
		return implode(',',$log);
	}
	elseif($f=='X'){
		global $gwdm;
		global $gwtype;
		//global $real;
		if($gwtype!='i' && getRealValue('stp')){	//停牌
			return;
		}
		else if($gwtype=='i' || $gwtype!='i' && getRealValue('stp')){
			return;
		}
		else{

			$jys = getJys($gwdm);
			$gpdm = substr($gwdm,1);
			
			$k = 0;
			
			$ss = '';
			
			$l_m = 0;
			$l_p = 0;
			$wei = getWei($gwdm);

			if($gwtype!='bd'){
				$url = 'http://data.share.jrj.com.cn/mx.do?code='.$gpdm.'&page=1&size='.$v;
				$zhubis = getFile2($url);
			}else{
				$url = 'http://192.168.42.99:8099/s.aspx?resName=FEED_HS_TRANSDETAIL&filter-STOCKCODE-str='.$gpdm.'&filter-MARKETTYPE-int=1&sort=TRADEDATE%20DESC&limit='.$v;
				$zhubis = getFile3($url);
			}
			//showarr($url);

			$i=count($zhubis);
			$first = 1;
			while($i--){
				$zb = explode(',', $zhubis[$i]);
				$volume = $zb[1];
				if($volume>0 || $first){
					$first = 0;
					$minute = $zb[4];
					$price = $zb[0]*$wei;
					$ss .= ($l_m-$minute).','.round(($price-$l_p)).','.$volume.','.($zb[5]>0?'B':'S').';';
					$k++;
					$l_m = $minute;
					$l_p = $price;
				}

				if ($k>=$v) {
					break;
				}
			}
			return substr($ss,0,-1);
		}
	}
	elseif($f=='Z'){
		global $need_gpjc;

		$ss = '';
		list($group,$id,$ver,$noqh,$noii) = explode(',',$v);
		$zxgarray = explode(';',$ver);
		
		//showarr($zxgarray);
		//showarr($_COOKIE['zxg']);

		$gwarray = array();	
		$gwarray_i = array();	
		$gwarray_f = array();	
		$gwarray_bd = array();	
		for ($i=0, $cnt = count($zxgarray); $i<$cnt; $i++){
			if(!$zxgarray[$i]) continue;
			$arr = explode(',',$zxgarray[$i]);
			$gwdm = $arr[0];
			$jys = getJys($gwdm);
			$gpdm = substr($gwdm,1,6);			
			if($jys == 'SH' || $jys == 'SZ'){
				$type = substr($gwdm,7);
				if($type==''){
					$gwarray[] = $gpdm;
				}else if($type=='i'){
					$gwarray_i[] = $gpdm;
				}else if($type=='f'){
					$gwarray_f[] = $gpdm;
				}else if($type=='bd'){
					$gwarray_bd[] = $gpdm;
				}
			}
		}
		if(count($gwarray)){
			$url = Qjrj.'?q=cn|s&i='.implode(',', $gwarray).'&p=1050&c=l';
			//showarr($url);
			$data = getFile($url);
		}else{
			$data = array('',array());
		}
		
		if(count($gwarray_i)){
			$url = Qjrj.'?q=cn|i&i='.implode(',', $gwarray_i).'&p=1050&c=l';
			$data_i = getFile($url);
		}else{
			$data_i = array('',array());
		}		
		if(count($gwarray_f)){
			$url = Qjrj.'?q=cn|f&i='.implode(',', $gwarray_f).'&p=1050&c=l';
			$data_f = getFile($url);
		}else{
			$data_f = array('',array());
		}		
		if(count($gwarray_bd)){
			$url = Qjrj.'?q=cn|bd&i='.implode(',', $gwarray_bd).'&p=1050&c=l';
			$data_bd = getFile($url);
		}else{
			$data_bd = array('',array());
		}

		global $rrr;
		$rrr = array();
		
		for($i=0, $len=count($data[1]); $i<$len; $i++){
			getPriceStr($i, $data, $need_gpjc);
		}		
		for($i=0, $len=count($data_i[1]); $i<$len; $i++){
			getPriceStr($i, $data_i, $need_gpjc);
		}		
		for($i=0, $len=count($data_f[1]); $i<$len; $i++){
			getPriceStr($i, $data_f, $need_gpjc);
		}		
		for($i=0, $len=count($data_bd[1]); $i<$len; $i++){
			getPriceStr($i, $data_bd, $need_gpjc);
		}
		
		$ss = '';
		for ($i=0, $cnt = count($zxgarray); $i<$cnt; $i++){
			if(!$zxgarray[$i]) continue;
			$arr = explode(',',$zxgarray[$i]);
			$gwdm = substr($arr[0],0,7);
			$ss .= $rrr[$gwdm].Split2;
		}
		return substr($ss,0,-1);
	}
}
function getPriceStr($i, $data, $need_gpjc){
	global $rrr;
	$id  = getRealValue('id', $i, $data);
	$wei = getRealValue('hp', $i, $data)*1==0 ? 0 : getWei(SHSZ2SZ($id));
	$L   = getRealValue('lp', $i, $data)*$wei;
	$gwdm = SHSZ2SZ($id);
	
	$ss = $gwdm;
	if($need_gpjc) $ss.= getRealValue('name', $i, $data);
	$ss .= ',';	//0
	$ss .= myround(getRealValue('np' , $i, $data)*$wei-$L).',';	//1
	$ss .= myround(getRealValue('lcp', $i, $data)*$wei-$L).',';	//2
	$ss .= myround(getRealValue('op' , $i, $data)*$wei-$L).',';	//3
	$ss .= myround(getRealValue('hp' , $i, $data)*$wei-$L).',';	//4
	$ss .= myround($L).',';   									//5
	$ss .= myround(getRealValue('ta' , $i, $data)).',';      	//6
	$ss .= myround(getRealValue('tm' , $i, $data)).',';    		//7
	$ss .= myround(getRealValue('bp1', $i, $data)*$wei-$L).','; //8 buy1
	$ss .= myround(getRealValue('sp1', $i, $data)*$wei-$L).',';	//9 sell1
	$ss .= myround(getRealValue('ceqt', $i, $data)).',';		//10 ceqt
	$ss .= myround(getRealValue('teqt', $i, $data));			//11 teqt
	$rrr[$gwdm] = $ss;
}
function getFile($a){
	$source = file_get_contents($a);
	$s =str_replace(array('}','[',']'), '{', $source);
	$s = explode('{', $s);
	$arr   = explode(',', $s[2]);
	$pages = '';
	for($i=2; $i>=1; $i--){
		$key = explode(':', $arr[$i]);
		$pages .= $key[1].',';
	}
	$arr   = explode(',', $s[4]);
	$keys = array();
	for($i=0,$len=count($arr); $i<$len; $i++){
		$key = explode(':', $arr[$i]);
		$keys[$key[0]] = $key[1];
	}

	$s = strstr($source, 'HqData:[');
	$s = substr($s, 11,-6);
	$s = str_replace(array(" ", "\n", "\r", "\t", '"'), "", $s);
	$value = explode('],[',$s);

	for($i=0, $len=count($value); $i<$len; $i++){
		$value[$i] = trim($value[$i]) ? explode(',', $value[$i]) : '';
	}
	return array($keys, $value, substr($pages, 0, -1));
}
function getFile3($a){
	$source = file_get_contents($a);
	$s = explode('},{', $source);
	$s[0] = strstr($s[0], '"TRADEDATE');

	$data = array();

	for($i=0,$len=count($s); $i<$len; $i++){
		$z = explode('","', str_replace('":"', '","', $s[$i]));
		$data[$i] = implode(',', array($z[11]/10000, $z[13], $z[15], 0, $z[9]/1000, str_replace(array('"', '}]}'), '', $z[17])));
	}

	return $data;
}
function getFile2($a){
	$s = file_get_contents($a);
	$s = strstr($s, 'DetailData:[');
	$s = substr($s, 20,-8);
	$s = str_replace(array(" ", "\n", "\r", "\t", '"', 'A1:', 'A2:', 'A3:', 'A4:', 'A5:', 'A6:', ':'), "", $s);
	return $s ? explode('},{',$s) : array();
}
function getRealValue($key, $i=0, $source=0){
	if(!$source){
		global $real;
		$source = $real;
	}
	return
		isset($source[0][$key]) && isset($source[1][$i][$source[0][$key]]) 
		? $source[1][$i][$source[0][$key]]
		: '';
}

//time
function microtime_float(){
  list($usec, $sec) = explode(" ", microtime());
  return ($usec + $sec%100)*1000;
}

//network->local序列
function NToV($a, $b){
	$b = implode('', array_reverse(str_split($b, 1)));
	$v = unpack($a, $b);
    return round($v[1], 3);
}

//股物清单
function getGwlist($a, $b){
	$s = file_get_contents(Qjrj.'?q=cn|'.$b.'&o=id,a&c=s&p='.$a);
	$s = strstr($s, 'HqData:[');
	$s = substr($s, 10,-6);
	$s = str_replace(array(" ", "\n", "\r", "\t", '"'), "", $s);
	$arr = explode('],[',$s);

	$data = array();
	for($i=0,$len=count($arr); $i<$len; $i++){
		if(!trim($arr[$i])) continue;
		$row = explode(',', $arr[$i]);
		$jys = str_replace(array('sh','sz','nu'),array('S','Z','S'),substr($row[0], 0, 2));
		$code = $row[1];
		//$name = transToUTF($row[4]);
		$name = $row[2];
		$pyjc = getfirstchar($name);
		$data[$i] = array($jys, $code, $name, $pyjc, $b);
	}

	return $data;
}
function getfirstchar($str){  
	//$str=iconv("UTF-8","gb2312", $str); 
	$str = str_replace(
		array('申万菱信量化小盘', '锦州港', '太平洋', '保龄宝', '深央企', '天玑科技', '银禧科技', '科斯伍德', '盾安环境', '申通地铁', '苏州高新', '腾达建设', '宏图高科', '申华控股', '丰和', '宏基', '空调', '螳螂', '深圳', '禧', '禧', '荃', '馨', '骅', '麟', '锂', '榈', '柘', '琚', '濮', '怡', '锆', '浔', '锝', '獐', '鹭', '晖', '钽', '泸', '莞', '芙', '窖', '钼', '丰', '沱', '宸', '孚', '榕', '琪', '晟', '兖', '岷', '钰', '漯', '鑫', '兴泸', '滕州', '诸暨', '工行', '中行', '行业', '银行', '重庆', '成长', '西藏', '广厦', '*', '甬',  '癀', '岘', '钛', '昊', '-', '(', ')'), 
		array('SWLXLHXP'        , 'JZG'   , 'TPY'   , 'BLB'   , 'SYQ'   , 'TJKJ'    , 'YXKJ'    , 'KSWD'    , 'DAHJ'    , 'STDT'    , 'SZGX'    , 'TDJS'    , 'HTGK'    , 'SHKG'    , 'FH'  , 'HJ'  , 'KT'  , 'TL'  , 'SZ'  , '玑', 'X' , 'Q' , 'X' , 'H' , 'L' , 'L' , 'L' , 'Z' , 'J' , 'P' , 'Y' , 'G' , 'X' , 'D' , 'Z' , 'L' , 'H' , 'T' , 'L' , 'G' , 'F' , 'J' , 'M' , 'F' , 'T' , 'C' , 'F' , 'R' , 'Q' , 'S' , 'Y' , 'M' , 'Y' , 'L' , 'X' , 'XL'  , 'TZ'  , 'ZJ'  , 'GH'  , 'ZH'  , 'HY'  , 'YH'  , 'CQ'  , 'CZ'  , 'XZ'  , 'GS'  , '' , 'Y' ,  'H' , 'X' , 'T' , 'H' , '' , '' , '' ), $str);
	$len = strlen($str); 
	$out = '';
	for($i=0; $i<$len; $i++){ 
		$char = $str[$i];
		$charord = ord($char);
		//echo $charord.BR;
		if($charord>=48 && $charord<=122){
			$out .= strtoupper($char);
		}elseif(isset($str[++$i])){
			$asc = $charord*256 + ord($str[$i]) - 65536; 
			if($asc>=-20319 && $asc<=-10247){
				if    ($asc<=-20284) $out .= "A";  
				elseif($asc<=-19776) $out .= "B";  
				elseif($asc<=-19219) $out .= "C";  
				elseif($asc<=-18711) $out .= "D";  
				elseif($asc<=-18527) $out .= "E";   
				elseif($asc<=-18240) $out .= "F";   
				elseif($asc<=-17923) $out .= "G";   
				elseif($asc<=-17418) $out .= "H";                
				elseif($asc<=-16475) $out .= "J";                
				elseif($asc<=-16213) $out .= "K";                
				elseif($asc<=-15641) $out .= "L";                
				elseif($asc<=-15166) $out .= "M";                
				elseif($asc<=-14923) $out .= "N";                
				elseif($asc<=-14915) $out .= "O";                
				elseif($asc<=-14631) $out .= "P";                
				elseif($asc<=-14150) $out .= "Q";                
				elseif($asc<=-14091) $out .= "R";                
				elseif($asc<=-13319) $out .= "S";                
				elseif($asc<=-12839) $out .= "T";                
				elseif($asc<=-12557) $out .= "W";                
				elseif($asc<=-11848) $out .= "X";                
				elseif($asc<=-11056) $out .= "Y";                
				elseif($asc<=-10247) $out .= "Z";  
			}
		}
	}
	//echo ord("0").BR; //48
	//echo ord("9").BR; //57
	//echo ord("A").BR; //65
	//echo ord("z").BR; //122
	return $out;
}

//解析sio
function sioToData2($a){
	$source = file_get_contents($a);
	$s = explode('},{', $source);
	$s[0] = strstr($s[0], '"STOCKCODE');
	
	$data = array();

	for($i=0,$len=count($s); $i<$len && trim($s[$i]); $i++){
		$z = explode('","', str_replace('":"', '","', $s[$i]));
		$data[$i] = array($z[13], $z[17], $z[5], $z[3], $z[7], $z[9], $z[11], $z[15]);
	}

	return $data;
}
function sioToData($url){
	$allfile = file_get_contents($url);
	if(!$allfile) return false;
	$allfile = gzuncompress($allfile);
	
	//Header 固定块的头信息 8-138
	$STR = substr($allfile, 8, 130);
	$field_type = array();
	for($i=0; $i<10; $i++){			
		$a = unpack(
			'A10Field/'
			.'A2Type/'
			.'CLen'
		, substr($STR, $i*13, 13));
		$field_type[$i] = array($a['Field'], $a['Type'], $a['Len']);
	}
	//showarr($field_type);
	
	//field 固定块的Field 139
	$STR = substr($allfile, 139, 59);
	$head = myField($field_type, $STR);
	//showarr($head);
	
	list(
		 $BlockName	
		,$Fields		
		,$ActRecords	
		,$MaxRecords	
		,$StartIndex	
		,$EndIndex	
		,$KeyField	
		,$IsFixed		
		,$HeaderLen	
		,$RecordLen	
	) = $head;
	
	
	//数据块 头信息
	$STR = substr($allfile, $StartIndex, $HeaderLen);
	$field_type = array();
	for($i=0; $i<$Fields; $i++){			
		$a = unpack(
			'A10Field/'
			.'A2Type/'
			.'CLen'
		, substr($STR, $i*13, 13));
		$field_type[$i] = array($a['Field'], $a['Type'], $a['Len']);
	}
	//showarr($field_type);
	
	//数据块 数据内容
	$data = array();
	$StartIndex += $HeaderLen;
	for($i=0; $i<$ActRecords; $i++){
		$STR = substr($allfile, $StartIndex, $RecordLen);
		$data[$i] = myField($field_type, $STR);
		$StartIndex += $RecordLen;
	}
	//showarr($data);

	return $data;
}
function myField($field_type, $STR){
	$data = array();
	$point = 0;
	for($j=0, $len=count($field_type); $j<$len; $j++){			
		$a = $field_type[$j];
		$data[$j] = myUnpack(trim($a[1]), substr($STR, $point, $a[2]));
		$point += $a[2];
	}
	return $data;
}
function myUnpack($type, $str){
	if($type=='I'){
		$v = unpack('N', $str);
		return $v[1];
	}elseif($type=='F'){
		return NToV('f', $str);
	}elseif($type=='d'){
		return NToV('d', $str);
	}elseif($type=='L'){
		return NToV('L', $str);
	}elseif($type=='B'){
		$v = unpack('A*', $str);
		return $v[1];
	}elseif($type=='S'){
		$v = unpack('A*', $str);
		return $v[1];
	}elseif($type=='s'){
		$v = unpack('s', $str);
		return $v[1];
	}
}
function jyscode($a, $b){
	if($a[0]==$b[0]){
		return ($a[1] < $b[1]) ? -1 : 1;
	}
	return ($a[0] < $b[0]) ? -1 : 1;
}
?>