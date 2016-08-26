<?php
date_default_timezone_set('PRC');
if($_SERVER['HTTP_HOST']=='192.168.43.41'){
//	error_reporting(E_ALL);
//	ini_set('display_errors', '1');
}
set_time_limit(0);

define('SOAP',0); //0, 则从cache得到数据
define('REDIS_EX', 13); //0, 则从cache得到数据
define('TITLE', 'web chart'); //0, 则从cache得到数据
define('MEMCACHE_TIMEOUT', 864000); //股票共享内存保存时间为10天
define('DEBUG_ORDER', myGet('DEBUG', 10));
define('BR','<BR />');
define('Split0','^^');
define('Split1','~');
define('Split2','|');
define('CACHE','/data/jrjsrv/www/cache/m.stockstar.com/cache/');
//define('Qjrj', 'http://qsh.jrjc.local:82/');
define('Qjrj', 'http://q.jrjc.local:82/');
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
	$t -= floor($t/100)*40+570; //9:30 = 0; 11:29=119; 13:00=210; 14:59=329
	if($t>119 && $t<210) $t = 119;
	elseif($t>=210) $t -= 90; //9:30 = 0; 11:29=119; 13:00=120; 14:59=239
	return max(min(239,$t),0);
}

//二进制转出
function formatData($value){
	$data = '';
	$len = strlen($value);
	switch($len){
		case 21://Tick:逐笔
		case 25://逐笔,长度25,i2Time/iPrice/i2Volume/aflow/IOrder
			if(strlen($value) == 21)
				$format = "i2Time/iPrice/i2Volume/a*BuySell";
			else
				$format = "i2Time/iPrice/i2Volume/aBuySell/IOrder";

			$data = Format($value,$format);
			$data["Time"] = intTolong($data["Time2"],$data["Time1"]);
			$data["Volume"] = intTolong($data["Volume2"],$data["Volume1"]);
			$data["Price"] = $data["Price"] / 1000;
			unset($data["Time2"]);
			unset($data["Time1"]);
			unset($data["Volume1"]);
			unset($data["Volume2"]);
			break;
		case 72://Minute:分钟
			$format = "i2Time/iMinNo/iFlow/iOpen/iHigh/iLow/iPrice/i2_Amount/i2Amount/i2_Volume/i2Volume/iOrders/i_Orders";
			$data = Format($value,$format);

			$data["Open"] = $data["Open"] / 1000;
			$data["High"] = $data["High"] / 1000;
			$data["Low"] = $data["Low"] / 1000;
			$data["Price"] = $data["Price"] / 1000;
			$data["Time"] = date('Hi',intTolong($data["Time2"],$data["Time1"]));
			$data["Date"] = date('Ymd',intTolong($data["Time2"],$data["Time1"]));

			$data["VolumeAll"] = intTolong($data["Volume2"],$data["Volume1"]);
			$data["Volume"] = $data["VolumeAll"]- intTolong($data["_Volume2"],$data["_Volume1"]);

			$data["AmountAll"] = intTolong($data["Amount2"],$data["Amount1"]);
			//$data["Amount"] = $data["AmountAll"]-intTolong($data["_Amount2"],$data["_Amount1"]);
			//$data["Orders"] = $data["Orders"] - $data["_Orders"];

			unset($data["Time2"]);
			unset($data["Time1"]);
			unset($data["Volume1"]);
			unset($data["Volume2"]);
			unset($data["_Volume2"]);
			unset($data["_Volume1"]);
			unset($data["Amount2"]);
			unset($data["Amount1"]);
			unset($data["_Amount2"]);
			unset($data["_Amount1"]);
			unset($data["Orders"]);
			unset($data["_Orders"]);
			unset($data["MinNo"]);
			unset($data["Flow"]);
			break;
		case 60: //排名
			$format = "IrePrice/IPrice/I2Value/a10Code/a*Name";
			$data = Format($value,$format);

			$data["rePrice"] = $data["rePrice"] / 1000;
			$data["Price"] = $data["Price"] / 1000;
			$data["Value"] = intTolong($data["Value2"],$data["Value1"]) / 1000;
			break;
		case 64://Basic:实时文字报价
		case 128:
		case 130:
		case 208:
			//if(strlen($value) == 128)
			//	$format = "iMO/iMH/iML/iMP/i2MA/i2MV/i2Time/iMinNo/iFlow/irePrice/iOrders/iBuy/iSell/iOpen/iHigh/iLow/iPrice/i2Amount/i2Volume/a12Name";
			//elseif(strlen($value) == 208)
			//	$format = "iMO/iMH/iML/iMP/i2MA/i2MV/i2Time/iMinNo/iFlow/irePrice/iOrders/iBuy/iSell/iOpen/iHigh/iLow/iPrice/i2Amount/i2Volume/a12Name";
			//else
			if(strlen($value) == 64)
				$format = "i2Time/iMinNo/iFlow/irePrice/iOrders/iBuy/iSell/iOpen/iHigh/iLow/iPrice/i2Amount/i2Volume";
			else
				$format = "iMO/iMH/iML/i2MA/i2MV/i2Time/iMinNo/iFlow/irePrice/iOrders/iBuy/iSell/iOpen/iHigh/iLow/iPrice/i2Amount/i2Volume/a12Name";

			$data = Format($value,$format);

			$data["MO"] = $data["MO"] / 1000;
			$data["MH"] = $data["MH"] / 1000;
			$data["ML"] = $data["ML"] / 1000;
			$data["rePrice"] = $data["rePrice"] / 1000;
			$data["Buy"] = $data["Buy"] / 1000;
			$data["Sell"] = $data["Sell"] / 1000;

			$data["Open"] = $data["Open"] / 1000;
			$data["High"] = $data["High"] / 1000;
			$data["Low"] = $data["Low"] / 1000;
			$data["Price"] = $data["Price"] / 1000;

			//$data["Time"] = date('Y-m-d H:i:s',intTolong($data["Time2"],$data["Time1"]));
			$data["Time"] = intTolong($data["Time2"],$data["Time1"]);
			$data["Volume"] = intTolong($data["Volume2"],$data["Volume1"]);
			$data["Amount"] = intTolong($data["Amount2"],$data["Amount1"]);
			$data["MVolume"] = $data["Volume"] - intTolong($data["MV2"],$data["MV1"]);

			unset($data["MA1"]);
			unset($data["MA2"]);
			unset($data["MV1"]);
			unset($data["MV2"]);
			unset($data["MinNo"]);
			unset($data["Flow"]);
			unset($data["Orders"]);
			unset($data["Time2"]);
			unset($data["Time1"]);
			unset($data["Volume1"]);
			unset($data["Volume2"]);
			unset($data["Amount1"]);
			unset($data["Amount2"]);
			break;

		case 120://实时买卖5档
			$format = "IBP_0/IBP_1/IBP_2/IBP_3/IBP_4/I2BV_0/I2BV_1/I2BV_2/I2BV_3/I2BV_4/ISP_0/ISP_1/ISP_2/ISP_3/ISP_4/I2SV_0/I2SV_1/I2SV_2/I2SV_3/I2SV_4/";
			$tmp = Format($value,$format);
			for($i=0;$i<5;$i++){
				$data["BuyPrice"][$i] = $tmp["BP_".$i] / 1000;
				$data["SellPrice"][$i] = $tmp["SP_".$i] / 1000;
				$data["BuyVolume"][$i] = intTolong( $tmp["BV_".$i."2"] ,$tmp["BV_".$i."1"]);
				$data["SellVolume"][$i] =intTolong( $tmp["SV_".$i."2"] ,$tmp["SV_".$i."1"]);
			}
			break;

		case 320:
			$format = "I2B/I2N/I2S/SMin/SMax/iRate";
			$index = 0;
			while($index < $len)		{
				$tmp = substr($value,$index,32);
				$tmpValue = Format($tmp,$format);
				if($tmpValue["Min"]>0||$tmpValue["Max"]>0)				{
					$data[$index/32]["B"] = intTolong( $tmpValue["B2"] ,$tmpValue["B1"]);
					$data[$index/32]["N"] = intTolong( $tmpValue["N2"] ,$tmpValue["N1"]);
					$data[$index/32]["S"] = intTolong( $tmpValue["S2"] ,$tmpValue["S1"]);
					$data[$index/32]["Min"] = $tmpValue["Min"] * $tmpValue["Rate"];
					$data[$index/32]["Max"] = $tmpValue["Max"] * $tmpValue["Rate"];
				}
				$index += 32;
			}
			break;
		default:
			//echo $value.BR;
			//echo $len.BR;
	}
	return $data;
}
function formatData2($value){
	if($value){
		$format = "iTime/iperDClose/iBid/iAsk/iOpen/iHigh/iLow/iPrice/i2Volume/a*Node";
		$data = unpack($format,$value);
	}
	return $data;
}

//切割数据
function strcut($value, $cutlen=100000){
	$data = array();
	for($i=0,$len=round(strlen($value)/$cutlen);$i<$len;$i++){
		$v = substr($value, $i*$cutlen, $cutlen);
		//echo $v.BR;
		$data[$i] = formatData($v);
	}
	return $data;
}

//2进制格式化
function Format($Stream, $Format){
	$Data = unpack($Format,$Stream);
	return  $Data;
}
function intTolong($high,$low){
	if($low < 0 )
		$low = 4294967296 + $low;
	return $high * 4294967296 + $low;
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

//自选股
function getInfo($v){
	$id = $v[0];
	$ver = $v[1];
	if(isset($v[2])){
		$guid = $v[2];
	}else{
		$guid = '';
	}
	$zxg = '';
	$result = '';
	if($ver=='44'){ //iphone
		//$sql = 'SELECT CAST([zxg] AS TEXT) AS [zxg], CAST([layer] AS TEXT) AS [lay] ';
		if(is_numeric($id)){
			//$sql .= "FROM [UserStyle] where [FreeID] = $id";
			$sql = "EXECUTE [Business].[dbo].[iphone_Auth] ".$id.",'$guid'";
			$query = mssql_query($sql, sql_exec('Business'));
			$rs = mssql_fetch_assoc($query);

			$zxg = $rs['zxg'];
			if($rs['MsgID']=='000000'){
				$result = array(
					'id' 		=> $id,
					'zxg' 	=> $rs['zxg'],
					'layer' => $rs['layer'],
					'name' 	=> $rs['name'],
					'pid'		=> $rs['PID']
				);
			}
		}
	}
	elseif($ver=='3'){ //s12/s18.php
		if(is_numeric($id)){
			//$sql .= "FROM [UserStyle] where [FreeID] = $id";
			$sql = "EXECUTE [Business].[dbo].[Free_Auth] ".$id.",'$guid'";
			$query = mssql_query($sql, sql_exec('Business'));
			$rs = mssql_fetch_assoc($query);

			$zxg = $rs['zxg'];
			if($rs['MsgID']=='000000'){
				$result = array(
					'id' 		=> $id,
					'zxg' 	=> $rs['zxg'],
					'layer' => $rs['layer'],
					'name' 	=> $rs['name'],
					'pid'		=> $rs['PID']
				);
			}
		}
        cache_save(zxgMem($ver).$id, $zxg, REDIS_USER);	//兼顾赋值与清空/Business
	}
	elseif($ver=='7'){//s5.php
		//$cid = myGet('CID');
		if(is_numeric($id)){
			//$sql .= "FROM [ORG].[dbo].[Account] where [UID] = $id";
			$sql="select [UID], [Username],CAST(zxg AS TEXT) AS [zxg], CAST(layer AS TEXT) AS [layer],[LD],[Name],[Dictionary],[gwdm] FROM [v_Account_Company] where [UID] = '$id'";
			$query = mssql_query($sql, sql_exec('org'));
			$rs = mssql_fetch_assoc($query);

			$zxg = $rs['zxg'];
			if($rs["UID"]){
				$result = array(
					'id' 		=> $id,
					'zxg' 	=> $rs['zxg'],
					'layer' => $rs['layer'],
					'name' 	=> $rs['Username'],
					'ld'		=> $rs['LD'],
					'title'	=> iconv("GBK", "UTF-8", $rs["Name"]),
					'dict' 	=> iconv("GBK", "UTF-8", $rs["Dictionary"]),
					'gwdm'	=> substr($rs["zxg"],0,7)
				);
			}
		}
        cache_save(zxgMem($ver).$id, $zxg, REDIS_USER);	//兼顾赋值与清空/Org
    }
	elseif($ver=='0' || $ver=='1' || $ver=='2' || $ver=='5' || $ver=='6'){ //s16/s9/s20/s7
		if(is_numeric($id)){

			$sql = "SELECT CAST(zxg AS TEXT) AS zxg, CAST(layer AS TEXT) AS layer, ActCardID as name, ProductID as PID, DealerID as DID,";
			$sql .= " convert(varchar(8), ExpiredDate,112) as ED  FROM [BUSINESS].[dbo].[AccountLogInfo] where LogID = $id";
			$query = mssql_query($sql, sql_exec('Business'));
			$rs = mssql_fetch_assoc($query);

			$zxg = $rs['zxg'];
			if($rs['PID']){
				$result = array(
					'id' 		=> $id,
					'zxg' 	=> $rs['zxg'],
					'layer' => $rs['layer'],
					'name' 	=> $rs['name'],
					'pid'		=> $rs['PID'],
					'ed'		=> $rs['ED'],
					'did'		=> $rs['DID']
				);
			}
		}
        else{
			if($guid =='1'){ //测试专用账号
				//select * from [Business].[dbo].[AccountLogInfo] where [ActCardID] = 'sam'
				$sql = "UPDATE [Business].[dbo].[LandingLog] SET [GUID] = 1 WHERE [LogID] in (SELECT [LogID] FROM [Business].[dbo].[AccountLogInfo] where [ActCardID] = 'sam')";
				$query = mssql_query($sql, sql_exec('Business'));
			}

			if($guid){ //78F21201-5691-4D33-8606-A35FF531040F
				$remote_ip = $_SERVER['REMOTE_ADDR'];
				$sql = "EXECUTE [Business].[dbo].[LoginAuthentication] '','{$guid}','{SERVER}','{$remote_ip}'";
                //echo $sql.BR;
				$query = mssql_query($sql, sql_exec('Business'));
				$rs = mssql_fetch_assoc($query);

				if($rs['MsgID']=='000000'){
					$id = $rs['LogID'];

					$zxg = $rs['zxg'];
					$result = array(
						'id' 		=> $id,
						'zxg' 	=> $rs['zxg'],
						'layer' => $rs['layer'],
						'name' 	=> $rs['User'],
						'pid'		=> $rs['PID'],
						'ed'		=> $rs['ED'],
						'did'		=> $rs['DID']
					);
				}
			}
		}
        cache_save(zxgMem($ver).$id, $zxg, REDIS_USER);	//兼顾赋值与清空/Business
	}
	elseif($ver=='4' || $ver=='8' || $ver=='9'){ //免费PC版
		if(is_numeric($id)){
			$sql = "select Item, Value from Options where UID = $id ";
			$sql.= "Union select 'email', Email as Value from Account where UID = $id";
			$sql.= "Union select 'name', UserName as Value from Account where UID = $id";
			$query = mssql_query($sql, sql_exec('Accounts'));
			$result = array();
			while($rs = mssql_fetch_assoc($query)){
				if($rs['Item']=='zxg'){
					$zxg = $rs['Value'];
				}
				else if($rs['Item']=='name' && $rs['Value']){
					$result['id'] = $id;
				}
				$result[$rs['Item']] = $rs['Value'];
			}
		}
        cache_save(zxgMem($ver).$id, $zxg, REDIS_USER);	//兼顾赋值与清空/Account
	}
	return $result;
}

//K线
function getKQdata($refresh=0,$gwdm,$line,$to=100,$from=0,$type='string',$gwtype='s'){ //array
	$gwdm = strtoupper($gwdm);
	if(!$gwdm) return;
    $jys = $gwdm{0};
	$gpdm = substr($gwdm,1);

	if(strlen($gpdm)!=6) return '';
	if($to<=0) $to = 10000;
	if(!is_numeric($from) || $from<0) $from = 0;
	$l2 = substr($gpdm,0,2); //左边2字符，用于判断AB股
	$wei = getWei($gwdm);

	if ($jys == 'Z') {
		$loc = '2';
		$isAB = ($l2=='00' || $l2=='20' || $l2=='30') ? 1 : 0;
	} else if ($jys == 'S') {
		$loc = '1';
		$isAB = ($l2=='60' || $l2=='90') ? 1 : 0;
	} else if ($jys == 'C' || $jys == 'E') {
		$isAB = 0;
    }

	$dif=1;

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

	//文件名
	checkDir(CACHE);
	checkDir(CACHE.$jys.$line.'/');
	checkDir(CACHE.$jys.'Q/');
	$Kkey = CACHE.$jys.$line.'/'.$gwdm.$line.'.txt';
	$Kkey1 = CACHE.$jys.$line.'/'.$gwdm.$line.'1.txt';
	$Kkey2 = CACHE.$jys.$line.'/'.$gwdm.$line.'2.txt';
	$Qkey = CACHE.$jys.'Q/'.$gwdm.'Q.txt';

	$e = array(1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13,1e14,1e15,1e16,1e17,1e18);

	//如果过期或文件大小==0
	if(isFileExpire($Kkey, 'KDATA') || $refresh=='1'){
		//仅当日线D且是AB股
		if($line=='D' && $isAB){//重建权息数据
			$qx_a= array();

			$url = 'http://canal.free.jrjc.local:8088/base/V_JRJ_STK_EX_FACTOR/filter-STOCKCODE-str='.$gpdm;
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
			//日线 flashdata2.jrjc.local
			if($gwtype=='s'){
				$url =  'http://flashdata2.jrjc.local/history/share/'.$gpdm.'/other/'.$gpdm.'_dayk.sio.zlib';
			}elseif($gwtype=='i'){
				$url =  'http://flashdata2.jrjc.local/history/index/'.$gpdm.'/other/'.$gpdm.'_dayk.sio.zlib';
			}elseif($gwtype=='f'){
				$url =  'http://flashdata2.jrjc.local/history/fund/'.$gpdm.'/other/'.$gpdm.'_dayk.sio.zlib';
			}elseif($gwtype=='bd'){
				return '';
				$url =  'http://192.168.42.99:8099/s.aspx?resName=HSDAYK&filter-STOCKCODE-str='.$gpdm.'&filter-MARKETTYPE-int=1&limit=10000';
			}elseif($gwtype=='w'){
				$url =  'http://flashdata2.jrjc.local/history/warrant/'.$gpdm.'/other/'.$gpdm.'_dayk.sio.zlib';
			}elseif($gwtype=='IF'){
				$url =  'http://flashdata2.jrjc.local/history/IF/'.$gpdm.'/other/'.$gpdm.'_dayk.sio.zlib';	
				//http://flashdata2.jrjc.local/history/IF/IF1205/other/IF1205_dayk_last_200.sio.zlib				
			}
			//d,I,4;lcp,F,4;np,F,4;op,F,4;hp,F,4;lp,F,4;ta,d,8;tm,d,8,mine,B,1
	
			//分时
			//$url =  'http://flashdata2.jrjc.local/today/min_binary/share/'.$gpdm.'.sio.zlib';
			//time,I,4;mp,F,4;mta,d,8;mtm,d,8;mavg,F,4;mine,B,1;mop,F,4;mhp,F,4;mlp,F,4
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
				$data[$j][0],
				$data[$j][3],
				$data[$j][4],
				$data[$j][5],
				$data[$j][2],
				$data[$j][6],
				$data[$j][7]
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
			if($rs[0]!=$last_date){
				$L = round($rs[3]*$wei);
				$k_s = '';
				$k_s .= toBlank(round($rs[1]*$wei-$L)).' ';
				$k_s .= toBlank(round($rs[2]*$wei-$L)).' ';
				$k_s .= toBlank(round($L)).' ';
				$k_s .= toBlank(round($rs[4]*$wei-$L)).' ';

				$v_len = max(0,strlen($rs[5])-4);
				if($v_len%3==1) $v_len--;
				$k_s .= toBlank(round($rs[5]/$e[$v_len])).' ';
				$a_len = max(0,strlen($rs[6])-4);
				if($a_len%3==1) $a_len--;
				$k_s .= toBlank(round($rs[6]/$e[$a_len])).' ';

				$k_s .= toBlank($last_date-$rs[0]-$dif).' ';
				$k_s .= toBlank($v_len-$last_v_len).' ';
				$k_s .= toBlank($a_len-$last_a_len).' ';
				$k_s .= toBlank($cqx-$last_cqx).' ';
				//$k_s .= myInfo($rs, 7);	//新增信息地雷

				$last_date = $rs[0];
				$last_v_len = $v_len;
				$last_a_len = $a_len;
				$last_cqx = $cqx;

				$kd_s .= rtrim($k_s).";";	//保存所有的，仍然是倒排序!!!
			}else{
				writeLog($gwdm.' '.$last_date.' data repeat');
			}
		}
		$kd_s = substr($kd_s,0,-1);
		$kd_s1 = sliceStrData($kd_s, 0, 200);
		$kd_s2 = sliceStrData($kd_s, 200, 1000);

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
			$kd_s1 = file_get_contents($Kkey1);	//m.stockstar.com 
		}else{
			$kd_s2 = file_get_contents($Kkey2);
		}
		if($type=='array'){
			$kd_s = file_get_contents($Kkey);
		}
		$qx_s = file_get_contents($Qkey);

	}

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
	elseif($type=='string'){
		//if(strlen($kd_s)<=0) return Split1;

		if(!$from){
			return $kd_s1.Split1.$qx_s;
		}else{
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
function cqx($a,$b,$c=2,$d=''){
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
	if($f=='BC'){
		list($username, $care, $add) = explode(',', $v);
		if($add){
			memcache_func('SADD '.$username.':CARE '.memcache_value($care), REDIS_BLOG);
			memcache_func('SADD '.$care.':FANS '.memcache_value($username), REDIS_BLOG);
			return "care";
		}else{
			memcache_func('SREM '.$username.':CARE '.memcache_value($care), REDIS_BLOG);
			memcache_func('SREM '.$care.':FANS '.memcache_value($username), REDIS_BLOG);
			return "cancel";
		}
	}
	if($f=='BG'){
		return setBlogList($v);
	}
	if($f=='BL'){
		$out = getBList($v);
		$care = memcache_func('SMEMBERS '.$v.':CARE', REDIS_BLOG);
		
		foreach($care as $name){
			$out .= '||'.getBList($name);
		}
		return $out;
	}
	if($f=='BF'){ 		//点播
		list($auther, $order, $follow) = explode('~', $v);
		$inter = 6;
		$now = floor((time()%(3*$inter))/$inter);
		memcache_func('SADD '.$auther.':NOW'.$now.' '.memcache_value($follow), REDIS_BLOG);

		$next = ($now+1)%3;
		memcache_func('DEL '.$auther.':NOW'.$next, REDIS_BLOG);
		
		$hash = memcache_hget($auther.':HASH', REDIS_BLOG);
		return showblog($auther, $order).'||'.myInfo($hash, 'SCREEN').'||'.myInfo($hash, 'REPLY');
	}
	if($f=='BP'){		//开播
		$arr = explode('~', $v);
		$auther = myInfo($arr, 0);
		$order = myInfo($arr, 1);
		$group = myInfo($arr, 2);

		$out = showblog($auther, $order);
		if($group){
			$hash = memcache_hget($auther.':HASH', REDIS_BLOG);
			$out .= '||'.myInfo($hash, 'SCREEN');
		}
		return $out;
	}
	if($f=='BS'){		//设置
		$arr = explode('~', $v);
		$auther = myInfo($arr, 0);
		$setting = myInfo($arr, 1);

		$item = explode(';', $setting);
		for($i=0,$len=count($item); $i<$len; $i++){
		}

		return '';
	}
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
	if($f=='DL'){ 		//信息地雷
		global $gwdm;
		return memcache_read(SZ2SHSZ($gwdm).'G', 0, REDIS_F10);
	}
	if($f=='DP'){ 		//底边指数
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
	if($f=='DSF'){
		global $gwdm;
		$jys = getJys($gwdm);
		$sql = "SELECT TOP 100 [value] FROM [sfld_history] where market='$jys' and code='".substr($gwdm,1)."' order by time";
		$query = mssql_query($sql, sql_exec('webdb'));
		$out = '';
		while($rs = mssql_fetch_assoc($query)){
			$out .= $rs['value'].';';
		}
		return substr($out,0,-1);
	}
	if($f=='DSFR'){
		global $gwdm;
		$jys = getJys($gwdm);
		$gpdm = $jys.substr($gwdm,1);
		$st = memcache_read($gpdm,1);
		return $st;
	}
	if(substr($f,0,2)=='DT'){
		global $gwdm;
		global $gwtype;
		global $need_gpjc;
		global $real;
		
		$arg  = explode(',',$v);
		//$line = $arg[0];
		$top  = $arg[0];
		if(isset($arg[1])){
			$gw = $arg[1];
		}else{
			$gw = $gwdm;
		}
		if(isset($arg[2])){
			$tp = $arg[2];
		}else{
			$tp = $gwtype;
		}

		$jys = SHSZ2SZ(getJys($gw));
		$gpdm = substr($gw,1);
		$wei = getWei($gw); //例如：substr($gw,0,2)=='S90' ? 1000 : 100;

		$url = Qjrj.'?q=cn|'.$tp.'&i='.$gpdm.'&c=l';	//实时行情 
		//http://q.jrjc.local:82/?q=cn|s&i=000001&c=l
		
		$real = getFile($url);
//showarr($url);
//showarr($real);
		$open = myround(getRealValue('op')*$wei);	// open
		
		$t = getRealValue('time');					// time

		//20110728150305
		if(!$t) return '';
		
		$stop = $tp!='i' && getRealValue('stp') ? 1 : 0;

		$trade_date = substr($t, 0, 8);
		$time_order = m2o(t2m(substr($t, 8, 4)));	//0-239

		
		//[0]盘前及开盘数据	
		$ss = '';
		
//echo $top.BR;
//echo $real.BR;
//echo $open.BR;
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
			
		checkDir(CACHE.$jys.'T/');
		$Tkey = CACHE.$jys.'T/'.$gwdm.'T.txt';
		
		$out = '';
		if($top) $top--;
//echo $stop.BR;
//echo $top.BR;
//echo $time_order.BR;
		if($top<$time_order){
			$now_order = $trade_date.str_pad($time_order, 3, "0", STR_PAD_LEFT);

			if(0 && file_exists($Tkey) && ($str = file_get_contents($Tkey)) && ($now_order <= substr($str, 0, 11))){
				//缓存
				$out = substr($str, 12);	//11是:
			}
			else if(!$stop){

				//来源一，有均价，有开高低收，正排序。分时图
				if($tp=='s'){
					$url =  'http://flashdata2.jrjc.local/today/min_binary/share/'.$gpdm.'.sio.zlib';
				}elseif($tp=='i'){
					$url =  'http://flashdata2.jrjc.local/today/min_binary/index/'.$gpdm.'.sio.zlib';
				}elseif($tp=='f'){
					$url =  'http://flashdata2.jrjc.local/today/min_binary/fund/'.$gpdm.'.sio.zlib';
				}elseif($tp=='bd'){
					$url =  'http://flashdata2.jrjc.local/today/min_binary/bond/'.$gpdm.'.sio.zlib';
				}elseif($tp=='w'){
					$url =  'http://flashdata2.jrjc.local/today/min_binary/warrant/'.$gpdm.'.sio.zlib';
				}elseif($tp=='IF'){
					$url =  'http://flashdata2.jrjc.local/today/min_binary/IF/'.$gpdm.'.sio.zlib';
				}
				
				//showarr($url);
				//time,I,4;mp,F,4;mta,d,8;mtm,d,8;mavg,F,4;mine,B,1;mop,F,4;mhp,F,4;mlp,F,4

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
					$na = round($minute[4]*$wei*10); //均线放大100倍，多精确2位
					$nt = t2m($minute[0]);
					//$nt += $trade_date*10000;
					$s  = $nv.' ';					//0
					$s .= toBlankInt($nl-$ll).' ';	//1
					$s .= toBlankInt($no-$nl).' ';	//2
					$s .= toBlankInt($nh-$nl).' ';	//3
					$s .= toBlankInt($nc-$nl).' ';	//4
					$s .= toBlankInt($na-$la).' ';	//5
					$s .= toBlankInt($nt-$lt-1);	//6

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
		
		//[4]stop
		$ss .= Split1;
		$ss .= $stop;
		return $ss;		
	}
	if($f=='F'){ 		//F10
		global $gwdm;
		global $gwdm;
		$gpdm = substr($gwdm,1,7);
		if(substr($gwdm,0,1)=='S') $newgwdm = 'SH'.$gpdm;
		elseif(substr($gwdm,0,1)=='Z') $newgwdm = 'SZ'.$gpdm;
		else return 'error:'.$gwdm;
		
		$F10 = memcache_read(array($newgwdm.'FG', $newgwdm.'FV'), 0, REDIS_F10);
		return $F10[0].';'.$F10[1];

		//数据库模式
		include_once('f10list.php');
		$sql = "SELECT distinct type,source FROM f10 where code = '$newgwdm' order by source, type";
		$query = mssql_query($sql, sql_exec('gydb'));
		$result = array();
		$type_order_list = array(array(),array(),array());
		while($rs = mssql_fetch_assoc($query)){
			$source = substr($rs['source'],0,2);
			$type = substr($rs['type'],1);
			$j=count($list);
			while($j--){
				if($type==$list[$j]){
					if     ($source=='维'){
						array_push($type_order_list[0],$j);
					}elseif($source=='港'){
						array_push($type_order_list[1],$j);
					}elseif($source=='龙'){
						//array_push($type_order_list[2],$j);
					}
					break;
				}
			}
			if($j<1){
				//出现新的type
//				if($source!='龙') array_push($type_order_list[3],$rs['type']);
			}
		}
		$type_order_list[0] = implode(',',$type_order_list[0]);
		$type_order_list[1] = implode(',',$type_order_list[1]);
		$type_order_list[2] = implode(',',$type_order_list[2]);
		return implode(';',$type_order_list);
	}
	if($f=='G'){
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
	if($f=='GJ'){
		$i = 0; //这里顺序与js相反，js用了到排序来获得股票数组
		$out = '';
		$j = 3;
		$k = 0;
		$ss = '';
		$bind = array(
			'C'=>'EX',
			'D'=>'II'
		);
		$list = getAlist(0,strtolower($bind[$v]).'list');
		//showarr($list);
		$gw_a = array();
		foreach($list as $key=>$cont){
			array_push($gw_a, substr($key,1));
		}
		$alldata = GetSimpleRealDataGroup($bind[$v], $gw_a);
		//showarr($alldata);
		$cnt = count($alldata);
		for($i = 0; $i<$cnt; $i++){
			$data = $alldata[$i];
			$gwdm = $v.$data["Code"];
			$wei = pow(10,$list[$gwdm][1]);
			$ss .= $gwdm.',';
			$L = $data['Low'];
			$ss .= myPrice($data['Close']-$L,$wei).',';		//1
			$ss .= myPrice($data['reClose']-$L,$wei).',';	//2
			$ss .= myPrice($data['Open']-$L,$wei).',';			//3
			$ss .= myPrice($data['High']-$L,$wei).',';			//4
			$ss .= myPrice($L,$wei).',';	//5				
			$ss .= substr($data['Time'],11,8);
			$ss .= ';';
		}
		return substr($ss,0,-1);
	}
	if($f=='GL'){		//高亮
		list($id,$dict) = explode('^',$v);
		if(is_numeric($id)){
			$sql = "select CID from [ORG].[dbo].[Account] where UID = '$id'";
			$query = mssql_query($sql, sql_exec('webdb'));
			$rs = mssql_fetch_assoc($query);
			$cid = $rs['CID'];
			if($cid){
				$dict = iconv("UTF-8", "GBK", $dict);
				$sql = "update [ORG].[dbo].[Company] set [Dictionary] = '$dict' where CID = '$cid'";
				$query = mssql_query($sql, sql_exec('webdb'));
			}
		}
//echo $sql;		
		return ''; //'v='.$v.';sql='.$sql.';id='.$mem_zxg.';zxg='.$zxgstr;
	}
	if($f=='GPJC'){
		global $need_gpjc;
		$need_gpjc = 1;
		return;
	}
	if($f=='GROUP'){	//GW清单
		list($teacher, $value) = explode('^', $v);
		return memcache_func("HSET {$teacher}:HASH SCREEN ".memcache_value($value), REDIS_BLOG);
	}
	if($f=='GW'){ 		//GW清单
		return getAlist($v);
	}
	if($f=='H'){		//盘口
		global $gwdm;
		global $gwtype;
		//global $real;
		//showarr($real);
		//if($gwtype=='i'){	//webquote.stockstar.com
		if($gwtype=='i'){	//m.stockstar.com
			//板块排名
			$url = 'http://q.jrjc.local:82/?q=cn|bk|1&p=1050&o=pl,d&c=code,pl,tm';
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
	if($f=='J'){		//global gwdm
		global $gwdm;
		global $gwtype;
		list($gwdm, $gwtype) = explode(',', $v);
	}
	if($f=='J1V'){
		if($v=='2'){
			return getJcprice('j1');
		}else{
			return getJcstring('j1');
		}
	}
	if($f=='J2V'){
		if($v=='2'){
			return getJcprice('j2');
		}else{
			return getJcstring('j2');
		}
	}
	if($f=='J3V'){
		if($v=='2'){
			return getJcprice('j3');
		}else{
			return getJcstring('j3');
		}
	}
	if($f=='J4V'){
		if($v=='2'){
			return getJcprice('j4');
		}else{
			return getJcstring('j4');
		}
	}
	if($f=='LD'){		//联动
		list($id,$ld) = explode(',',$v);
		if(is_numeric($id)){
			$sql = "update [ORG].[dbo].[Account] set LD = '$ld' where UID = '$id'";
			$query = mssql_query($sql, sql_exec('webdb'));
		}
//echo $sql;		
		return ''; //'v='.$v.';sql='.$sql.';id='.$mem_zxg.';zxg='.$zxgstr;
	}
	if($f=='LG'){		//log
		return str_replace("\n", '<br />', trim(file_get_contents('../updatelog.txt')));
	}
	if($f=='LM'){
		$user = $content;
		$sql = "SELECT Email FROM Account WHERE UserName='$user'";
		$query = mssql_query($sql, sql_exec('Accounts'));
		$rs = mssql_fetch_row($query);
		if($rs[0]){
			$newpass = rand(10000000,99999999);
			$error = smtp_mail($rs[0], '', '新密码 New Password', $newpass);
			if(!$error){
				$sql = "UPDATE Account SET Password='".md5($newpass)."' WHERE UserName='$user'";
				$query = mssql_query($sql, sql_exec('Accounts'));
				return "60000";
			}else{
				return "60002"; //发送失败
			}
		}else{
			return "60001";	//用户不存在
		}
	}		
	if($f=='PJ'){ 		//评级
		global $gwdm;
		$grade_redis = $gwdm.'grade';
		if(isMemcacheExpire($grade_redis,'JC')){
		$sql = "SELECT [jctype], [grade] FROM [jcgrade] where gwdm='$gwdm'";
		$query = mssql_query($sql, sql_exec('WEBDB'));
		$out = array();
		while($rs = mssql_fetch_assoc($query)){
			$out[] = $rs['jctype'].','.$rs['grade'];
		}
		$s = implode(';',$out);
		memcache_save($grade_redis, time().$s, REDIS_TXT);
	}else{
		//否则，直接从文件读取数据
		$s = memcache_func('SUBSTR '.$grade_redis.' 10 -1', REDIS_TXT);
	}
		return $s;
	}
	if($f=='O'){
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
	if($f=='Q'){		//老版指数模块
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
	if($f=='RAND'){
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
	if($f=='RN'){ 		//滚动新闻
		$data = memcache_read(array('NEWS00','NEWS01','NEWS02','NEWS03','NEWS04'));
		$s = '';
		for ($i=0; $i<5; $i++){
			$str = explode('^',$data[$i]);
			$s .= $str[0].' '.$str[1]; 	//时间
			$s .= ",,";
			$s .= $str[4];							//出处
			$s .= ",,";
			
			$s .= str_replace(array('"','|'),array('&quot;',''),trim($str[3]));//标题
			$s .= ",,";
			$s .= '0'; 									//$oRs["F005"]; 重要性
			$s .= ",,";
			$s .= $str[2];							//作者
			$s .= Split2;
		}
		$s = substr($s,0,-1);

//		if($v){//状态维持 by windice
//			$sql = 'EXECUTE [Business].[dbo].[AccountStateKeep] '.$v;
//			$query = mssql_query($sql, sql_exec('Business'));
//		}
		return $s;
	}
	if($f=='S'){		//保存layer,实际上内容还包括指数参数等
		
//http://sam.gaoying.net/calljs.php?SAVEColor=2148,1,layer
		list($id,$ver,$layer) = explode('^',$v);
		if(is_numeric($id)){
			if($ver=='22'){ //S11/S12
				$sql = "EXECUTE [Business].[dbo].[Free_SetLayer] $id, '$layer'";
				$query = mssql_query($sql, sql_exec('Business'));
			}elseif($ver=='7'){ //S5/SN
				$sql = "update [ORG].[dbo].[Account] set layer = '$layer' where UID = '$id'";
				$query = mssql_query($sql, sql_exec('Business'));
			}elseif($ver=='4' || $ver=='8' || $ver=='9'){
				$conn = sql_exec('Accounts');
				$query = mssql_query("DELETE Options WHERE UID=$id AND Item='layer'", $conn);
				$query = mssql_query("INSERT INTO Options (UID, PID, Item, Value) VALUES ($id, 1, 'layer', '$layer')", $conn);
			}else{ //S8/S9
				$sql = "EXECUTE [Business].[dbo].[LayerUpdata] $id, '$layer'";
				$query = mssql_query($sql, sql_exec('Business'));
/*
echo $v.BR;
echo $id.BR;
echo $ver.BR;
echo $layer.BR;
echo $sql;
*/				
			}
		}else{
			$sql = "update tmp_trader set layer='$layer' where username='$id'";
			$query = mssql_query($sql, sql_exec('webdb'));
		}
//echo $sql;		
		return ''; //'v='.$v.';sql='.$sql.';id='.$mem_zxg.';zxg='.$zxgstr;
	}
	if($f=='SAVE'){		//增删zxg

//calljs.php?SAVE=2148,1,,4,S600111		
		list($id,$ver,$no,$group,$gwdm,$fn) = explode(',',$v);
		$mem_zxg = memcache_read('zxg_'.$id, 0, REDIS_USER);
//echo $mem_zxg.BR;		
		$zxgall = explode('|',$mem_zxg.'|||||||||');
		array_splice($zxgall,9);
		$zxgarr = explode(';',$zxgall[$group-1]);
//showarr(explode(',',$v));
//showarr($zxgarr);
		if($fn=='x'){
			$i = count($zxgarr);
			while($i--){
				$w = explode(',',$zxgarr[$i]);
				if($w[0]==$gwdm || !$w[0]){ // || strlen()!=7
					array_splice($zxgarr,$i,1);
				}
			}
			if(!$no) array_unshift($zxgarr,$gwdm);
		}else{
			$zxgarr = array_merge(
				array_slice($zxgarr, 0, $no-2),
				array_slice($zxgarr, $no-1, 1),
				array_slice($zxgarr, $no-2, 1),
				array_slice($zxgarr, $no)
			);
		}
//exit;		
		$zxgall[$group-1] = implode(';',$zxgarr);
		$zxgstr = implode('|', $zxgall);
		memcache_save('zxg_'.$id, $zxgstr, REDIS_USER);
		if(is_numeric($id)){
			if($ver=='22'){
				$sql = "EXECUTE [Business].[dbo].[Free_Setzxg] $id, '$zxgstr'";
				$query = mssql_query($sql, sql_exec('Business'));
			}elseif($ver=='7'){
				$sql = "update [ORG].[dbo].[Account] set zxg = '$zxgstr' where UID = '$id'";
				$query = mssql_query($sql, sql_exec('Business'));
			}elseif($ver=='4' || $ver=='8' || $ver=='9'){
				$conn = sql_exec('Accounts');
				$query = mssql_query("DELETE Options WHERE UID=$id AND Item='zxg'", $conn);
				$query = mssql_query("INSERT INTO Options (UID, PID, Item, Value) VALUES ($id, 1, 'zxg', '$zxgstr')", $conn);
			}else{
				$sql = "EXECUTE [Business].[dbo].[ZXGUpdata] $id, '$zxgstr'";
				$query = mssql_query($sql, sql_exec('Business'));
			}
		}else{
			$sql = "update tmp_trader set zxg='$zxgstr' where username='$id'";
			$query = mssql_query($sql, sql_exec('webdb'));
		}
		return '';
	}	
	if($f=='TG'){		//读通告
		$str = urldecode(memcache_read('ad20100603', 0, REDIS_TXT));
		return $str;
	}
	if($f=='TGW'){ 		//写通告
		memcache_save('ad20100603', $v, REDIS_TXT);
		return 'save OK!';
	}
	if($f=='US'){		//登陆/注册/更改信息
		//$url = 'http://'.str_replace(array('calljs2.php','calljs.php'), '', $_SERVER['HTTP_HOST'].$_SERVER['SCRIPT_NAME']);
		$url = 'http://mycjt.cn/app/';
		//$url = 'http://'.$_SERVER['HTTP_HOST'].str_replace('calljs2.php','',$_SERVER['DOCUMENT_URI']);
		
		list($fun,$content) = explode(',',$v);
		if($fun=='L'){
			list($user,$pass) = explode(':',$content);
			$sql = "EXECUTE [Accounts].[dbo].[sp_Login]  '".$user."' ,'".md5($pass)."',1";
			$query = mssql_query($sql, sql_exec('Accounts'));
			$rs = mssql_fetch_row($query);
			switch($rs[0]){
				case 0:
					$info = getInfo(array($rs[1],8));
					return implode(Split1, array(
						'0'
						
						,$rs[1]
						,myInfo($info, 'zxg')
						,myInfo($info, 'layer')
						,myInfo($info, 'email')
					)); //id
					break;
				case 30001://用户名不存在
					return mb_convert_encoding('30001'.Split1.'用户名不存在'.md5($pass),"UTF-8","GBK");
					break;
				case 30005://密码错
					return mb_convert_encoding('30005'.Split1.'密码错',"UTF-8","GBK");
					break;
				default:
					return mb_convert_encoding($rs[0].Split1.$rs[1],"UTF-8","GBK");
			}
		}
		elseif($fun=='R'){
			list($user,$pass,$email) = explode(':',$content);
			$p = md5($pass);
			$sql = "EXECUTE [Accounts].[dbo].[sp_CreateUser]  '".$user."' ,'".$p."' ,'".$email."'";
			$query = mssql_query($sql, sql_exec('Accounts'));
			$rs = mssql_fetch_row($query);
			if($rs[0]=='10000'){
				//$sql = "EXECUTE [Accounts].[dbo].[sp_ModuleEnabled] '".$rs[1]."', 1";
				//$query = mssql_query($sql, sql_exec('Accounts'));
				
				//发送激活邮件
//				$s = "You're almost ready to access at CJT!<br>";
				$s= "您即将成为财金通用户!<br><br>";
//				$s.= "To activate your CJT account, please click this link or copy it into your favorite Web browser.<br>";
				$s.= "激活帐号，需要点击下面链接，或者将其复制到您喜欢使用的浏览器地址栏中。";
				$link = $url.'active.php?ID='.$rs[1].'&PASS='.substr($p,2,10);
				$s.= "<br><br><a href=$link>$link</a>";
				$s .= '<br><br>以上链接将在点击后失效。如您未提交该申请或未注册mycjt.cn，请不要理会此邮件，我们对此为您带来的不便表示歉意。<br />';
				$s .= '=========================================================<br />';
				$s .= '这是一封系统邮件，请勿回复.   若有任何疑问，请与我们取得联系<br /><br />';
				$s .= '-------<br />';
				$s .= '财金通 团队竭诚为您服务<br /><br />';
				$s .= '上海高英信息技术有限公司<br /><br />';
				$s .= 'http://www.shgaoying.com';
				
				
				$error = smtp_mail($email, '', '用户激活, Active account', $s);
			}
			return $rs[0].":".mb_convert_encoding($rs[1],"UTF-8","GBK");
		}
		elseif($fun=='CP'){
			list($id,$pass,$newpass) = explode(':',$content);
			$sql = "SELECT Password FROM Account WHERE UID=$id";
			$query = mssql_query($sql, sql_exec('Accounts'));
			$rs = mssql_fetch_row($query);
			if($rs[0]==md5($pass)){
				$sql = "UPDATE Account SET Password='".md5($newpass)."' WHERE UID=$id";
				$query = mssql_query($sql, sql_exec('Accounts'));
				return "40000";
			}else{
				return "40001";
			}
		}
		elseif($fun=='CM'){
			list($id,$pass,$newemail) = explode(':',$content);
			$sql = "SELECT Password FROM Account WHERE UID=$id";
			$query = mssql_query($sql, sql_exec('Accounts'));
			$rs = mssql_fetch_row($query);
			if($rs[0]==md5($pass)){
				$sql = "SELECT top 1 UID FROM Account WHERE Email = '$newemail'";
				$query = mssql_query($sql, sql_exec('Accounts'));
				$rs = mssql_fetch_row($query);
				if($rs[0] && $rs[0]!=$id){
					return "50002"; //邮箱已存在
				}
				else{
					$sql = "UPDATE Account SET Email='".$newemail."' WHERE UID=$id";
					$query = mssql_query($sql, sql_exec('Accounts'));
					return "50000";
				}
			}else{
				return "50001"; //密码错误
			}
		}
		elseif($fun=='SP'){
			$user = $content;
			$sql = "SELECT Email,Password FROM Account WHERE UserName='$user'";
			$query = mssql_query($sql, sql_exec('Accounts'));
			$rs = mssql_fetch_assoc($query);
			if($rs['Email']){
				require("phpmailer/class.phpmailer.php");
				$newpass = rand(10000000,99999999);
				$s = '您提交了找回密码的申请，新密码将为8位随即数字：<b>'.$newpass.'</b><br /><br />';
				$s .= '请点击以下链接重置您的登录密码，否则，您的登录密码将保持不变：<br /><br />';
				$url .= 'resetpass.php?USER='.$user.'&EMAIL='.$rs['Email'].'&NEWPASS='.$newpass.'&CHECK='.substr($rs['Password'],0,8);
				$s .= '<a href='.$url.'>'.$url.'</a>';

				$s .= '<br><br>以上链接将在点击后失效。如您未提交该申请或未注册mycjt.cn，请不要理会此邮件，我们对此为您带来的不便表示歉意。<br />';
				$s .= '=========================================================<br />';
				$s .= '这是一封系统邮件，请勿回复.   若有任何疑问，请与我们取得联系<br /><br />';
				$s .= '-------<br />';
				$s .= '财金通 团队竭诚为您服务<br /><br />';
				$s .= '上海高英信息技术有限公司<br /><br />';
				$s .= 'http://www.shgaoying.com';


				$error = smtp_mail($rs['Email'], '', '重置登录密码 Reset Password', $s);
				if(!$error){
					return "60000";
				}else{
					return "60002"; //发送失败
				}
			}else{
				return "60001";	//用户不存在
			}
		}
	}
	if($f=='WE'){		//log
		return str_replace("\n", '<br />', trim(file_get_contents('../aboutus.txt')));
	}
	if($f=='X'){
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
	if($f=='Z'){
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

	if($f=='func'){ 	//交互
		return 'alert("hi");';
	}
	if($f=='check'){	//察看
		showarr($_SERVER);
		exit;
		$gwlist = getAlist($v,'array');
		showarr($gwlist);
		exit;	
		
		$a = GetIntactData('SZ','000001');
		showarr($a);
		$a = GetIntactData('SH','000001');
		showarr($a);
		exit;




		
		$t = substr(memcache_read('S000001',1),0,10).BR;
		echo date('H:i:s',$t).BR;
		echo time().BR;
		echo (time()-$t).BR;
		exit;
//		if($v=='2') memcache_save('zxg_','', REDIS_USER);
		$mem_zxg = memcache_read('zxg_'.$v);
		echo $mem_zxg;
		$zxgall = explode('|',$mem_zxg.'|||||||||');
		showarr($zxgall);
		array_splice($zxgall,9);
		//$zxgarr = explode(';',$zxgall[$group-1]);
		showarr($zxgall);
	}
	if($f=='run'){ 		//测试
		list($func,$argu) = explode(',',$v);
		if($func=='showfile'){
			foreach (glob(CACHE."/".$argu) as $filename) {
				echo "$filename " .  date('Ymd H:i:s', filemtime($filename)) .' size:'. filesize($filename) . "<br />";
			}
		}elseif($func=='delefile'){
			foreach (glob(CACHE."/".$argu) as $filename) {
				deleFile($filename,1);
			}
		}elseif($func=='showcontent'){
			$file = CACHE.'/'.$argu;
			echo file_exists($file) ? implode('<br />', array_reverse(file($file))) : $file.' not exists';
		}
		exit;
	/*
		$z = getAlist(0,'exlist');
		showarr($z['CAUDUSD']);
		showarr($z['CXHHJ']);
		showarr($z);
		exit;
		$t1 = time();
		for($i=0; $i<1000; $i++){
			$a = getAlist(0,'array');
		}
		return time()-$t1;
	*/
	}

	if($f=='del_INIT'){
		list($fun,$user,$pass,$email) = explode(',',$v);
		if($fun && !$user && !$pass){
			
			$lay = memcache_read('free_lay_'.$v, 0, REDIS_USER);
			$zxg = memcache_read('free_zxg_'.$v, 0, REDIS_USER);
			return $zxg.Split1.$lay;
		}else{
			$sql = "select * from tmp_trader where username='$user'";
			$query = mssql_query($sql, sql_exec('webdb'));
			if($fun=='l'){
				$rs = mssql_fetch_assoc($query);
				if($rs && $rs['password']==$pass){
					
					$mem_zxg = $rs['zxg'];
					$mem_lay = $rs['lay'];
					memcache_save('free_zxg_'.$user, $mem_zxg, REDIS_USER);
					memcache_save('free_lay_'.$user, $mem_lay, REDIS_USER);
					return $mem_zxg.Split1.$mem_lay;
				}else{
					return '';
				}
			}elseif($fun=='r'){
				if($rs = mssql_fetch_assoc($query)){
					return '';
				}else{
					$sql = "insert into tmp_trader (username, password) values('$user', '$pass')";
					$query = mssql_query($sql, sql_exec('webdb'));
					return '1';
				}
			}
		}
	}
	if($f=='del_B'){
		
		list($func,$id,$gwdm,$volume,$money) = explode(',',$v);
		switch($func){
			case 'bs':
				$sql = "insert into tmp_history(username, gwdm, volume, money) values('$id', '$gwdm', $volume, $money)";
				$query = mssql_query($sql, sql_exec('webdb'));
			case 'l':
				//目前持仓
				$keep_gwdm = array();
				$sql = "select gwdm, keep, cost, limit from tmp_keep where username='$id' and keep>0";
				$query = mssql_query($sql, sql_exec('webdb'));
				$s = array();
				while($rs = mssql_fetch_assoc($query)){
					array_push($s, implode(',',$rs));
					array_push($keep_gwdm, $rs['gwdm']);
				}
				memcache_save('keep_'.$id, implode(';',$keep_gwdm), REDIS_USER);
				$keep = implode(';',$s);
				
				
				//交易历史
				$sql = "select convert(varchar(8),tradetime,112), convert(varchar(8),tradetime,108), gwdm, volume, money from tmp_history where username='$id' order by tradetime desc";
				$query = mssql_query($sql, sql_exec('webdb'));
				$s = array();
				while($rs = mssql_fetch_assoc($query)){
					array_push($s, implode(',',$rs));
				}
				$his = implode(';',$s);
				return $keep.Split2.$his;
			case 'p':
				//持股报价
				$keep_gwdm = memcache_read('keep_'.$id);
				if(!$keep_gwdm){
					$keep_gwdm = array();
					$sql = "select gwdm, keep, cost from tmp_keep where username='$id' and keep>0";
					$query = mssql_query($sql, sql_exec('webdb'));
					while($rs = mssql_fetch_assoc($query)){
						array_push($keep_gwdm, $rs['gwdm']);
					}
					$keep_gwdm = implode(';',$keep_gwdm).';';
					memcache_save('keep_'.$id, $keep_gwdm, REDIS_USER);
				}
				$keep_gwdm_a = explode(';', $keep_gwdm);
				$s = '';
				for($i=0; $i<count($keep_gwdm_a)-1; $i++){
					$gwdm = $keep_gwdm_a[$i];
					if($gwdm){
						$st = memcache_read($gwdm,1);
						$s .= $gwdm.','.(1*gs($st,'C')).';';
					}
				}
				return $s;
		}
	}
	if($f=='del_C'){ 	//外汇黄金等
		$gwlist = getAlist(0,'array');
		$cnt = count($gwlist);
		$i = 0; //这里顺序与js相反，js用了到排序来获得股票数组
		$out = '';
		$j = 3;
		$k = 0;
		$ss = '';
		while($i<$cnt){
			$gw = $gwlist[$i];
			if('C'==substr($gw[0],0,1)){
				$data = GetSimpleRealDataGroup('EX', array(substr($gw[0],1)));
				$data = $data[0];
				$ss .= $gw[0].',';
				$ss .= $data['Close'].',';
				$ss .= $data['reClose'].',';
				$ss .= $data['Open'].',';
				$ss .= $data['High'].',';
				$ss .= $data['Low'].',';
				$ss .= substr($data['Time'],11,8);
				$ss .= ';';
			}
			$i++;
		}
		return substr($ss,0,-1);
	}
	if($f=='del_C1'){ 	//外汇黄金等
		list($id,$ver,$group) = explode(',',$v);
		$a = explode(';', substr(implode('', file ('http://10.10.1.2:9999/eurusd')),0,-1));
		$cnt = count($a);
		$c = array();
		$out = '';
echo '<pre>';
		for($i=0; $i<$cnt; $i++){
			$b = explode(',', $a[$i]);
			if($i==0){
				//初始化
				$last_close = myprice($b[1]);
				$last_price = 0;
				$last_time = 0;
				$next_time = 0;
				$o = $last_close;
				$h = $o;
				$l = $o;
				$c = $o;
			}
			$next_price = myprice($b[1]);
			$now = substr(str_replace(':','',$b[8]),0,4);
			if($next_time != $now){
				if($next_time){
					$s  = toBlankInt($l - $last_price).' ';
					$s .= toBlankInt($o-$l).' ';
					$s .= toBlankInt($h-$l).' ';
					$s .= toBlankInt($c-$l).' ';
					$s .= toBlankInt($next_time - $last_time-1);
					$out .= trim($s).';';
				}
				$last_time = $next_time;
				$next_time = $now;
				$last_price = $l;
				$o = $c;
				$h = $o;
				$l = $o;
				$c = $o;
//echo $a[$i].' == '.$s.BR;				
			}
			$c = myprice($b[0]);
			$h = max($h, $c);
			$l = min($l, $c);
//echo $c.' '.$h.' '.$l.' '.$b[8].BR;
		}
		return $out;
	}	
	if($f=='del_QH2'){ 	//for test
		//期货报价
		global $gwdm;

		if($v){
			$cnt = date('YmdHi')+2-$v;
		}else{
			$cnt = 500;
			$sql = "SELECT TOP 1 [day],[min] FROM [codes] where exchange='SHGE' and code='".substr($gwdm,1)."'";
			$query = mssql_query($sql, sql_exec('gold'));
			$rs = mssql_fetch_assoc($query);
			$db = $rs['min'];
			if($db){
				$sql = "SELECT TOP 500 year(datatime)*10000+month(datatime)*100+datepart(dd,datatime) as d, 10000+datepart(hh,datatime)*100+datepart(mi,datatime) as t,[open], [high], [low], [close], [volume] FROM $db order by datatime desc";
				$query = mssql_query($sql, sql_exec('gold'));
			}
		}
		echo 'GetMinutes()'.BR;		
		echo $cnt;
		$all = GetMinutes(substr(strtolower($gwdm),1),$cnt);
		$cnt = count($all);
		//showarr($all);
		echo $cnt.BR; //经常取不到数据

		echo 'GetRealtimeData()'.BR;		
		$all = GetRealtimeData(strtolower(substr($gwdm,1)));
		showarr($all); //与最后一分钟的报价相同

		echo 'GetTicks()'.BR;		
		$all = GetTicks(strtolower(substr($gwdm,1)),100);
		showarr($all); //与最后一分钟的报价相同

		echo 'GetRealtimeGroup()'.BR;		
		$all = GetRealtimeGroup();
		showarr($all);

		$out = '';
		$wei = getWei(strtoupper($gwdm));

		$lt = 1;
		$ll = 0;
		$lv = 0;
		$nt = 99999999999999;
		for ($i=0; $i<$cnt && $nt>=$v; $i++){
			$z = $all[$i];
			$no = myprice($z['Open'],$wei);
			$nh = myprice($z['High'],$wei);
			$nl = myprice($z['Low'],$wei);
			$nc = myprice($z['Close'],$wei);
			$nv = myprice($z['Volume'],$wei);
			$nt = t2i($z['Time']);
			$s = toBlankInt($no-$nl).' ';	//0
			$s .= toBlankInt($nh-$nl).' ';	//1
			$s .= toBlankInt($nl-$ll).' ';	//2
			$s .= toBlankInt($nc-$nl).' ';	//3
			$s .= toBlankInt($nv-$lv).' ';	//4
			$s .= toBlankInt($nt-$lt+1);		//6
			
			$lt = $nt;
			$ll = $nl;
			$lv = $nv;

			$out .= rtrim($s).';';
		}
		$wei = 1;
		while($db && $rs = mssql_fetch_assoc($query)){
			$z = $rs;
			$no = myprice($z['open'],$wei);
			$nh = myprice($z['high'],$wei);
			$nl = myprice($z['low'],$wei);
			$nc = myprice($z['close'],$wei);
			$nv = myprice($z['volume'],$wei);
			$nt = $z['d'].substr($z['t'],1);
			$s = toBlankInt($no-$nl).' ';	//0
			$s .= toBlankInt($nh-$nl).' ';	//1
			$s .= toBlankInt($nl-$ll).' ';	//2
			$s .= toBlankInt($nc-$nl).' ';	//3
			$s .= toBlankInt($nv-$lv).' ';	//4
			$s .= toBlankInt($nt-$lt+1);		//6
			
			$lt = $nt;
			$ll = $nl;
			$lv = $nv;

			$out .= rtrim($s).';';
		}		

		return substr($out,0,-1);
	}	
	if($f=='del_ZJ'){ 	//资金雷达
		global $gwdm;
		$result = GetFlowData($gwdm);
		if(!$result) return '';
//		$result = GetFlowData('S600000');
		return implode(array(
				$result['000'] ? implode($result['000'],',') : ',,',
				$result['005'] ? implode($result['005'],',') : ',,',
				$result['010'] ? implode($result['010'],',') : ',,',
				$result['030'] ? implode($result['030'],',') : ',,',
				$result['050'] ? implode($result['050'],',') : ',,',
				$result['100'] ? implode($result['100'],',') : ',,',
				$result['300'] ? implode($result['300'],',') : ',,',
				$result['500'] ? implode($result['500'],',') : ',,'
			),';');
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
function zxgMem($ver){
    switch($ver){
        case '7':
            return 'zxg_o';
        case '4':
        case '8':
        case '9':
            return 'zxg_a';
        case '0':
        case '1':
        case '2':
        case '3':
        case '5':
        case '6':
            return 'zxg_b';
        default:
            return 'zxg_';
    }

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

//解析sio
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