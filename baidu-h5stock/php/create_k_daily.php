<?php
//http://10.10.1.24/jscloud/_daily/update_juece.php?gwdm=S600562&j2=1
$gbk = 1;
include_once('inc.function.php'); 
set_time_limit(0);

$refresh = myGet('refresh', 0);
echo 'refresh='.$refresh.BR;

$t1 = time();

unlink(CACHE.'log.txt');

echo '<pre>';

//读取股票列表
$gw_list = getAlist($refresh,'array');

$gw_cnt = count($gw_list);

echo "股票总数：".$gw_cnt.BR;

/*检查股物清单
showarr($gw_list);
exit;*/


//取得下一个交易日

$daybefore = date('Ymd', time() - 86400*30);
$nextdate = getNextTradeDate( time());

echo $daybefore.BR;
echo $nextdate.BR;
/*
exit;
*/

//计算每只股票买卖信号$gw_cnt
//========================================================================
for($index=0; $index<$gw_cnt; $index+=1){
	$gwdm = $gw_list[$index][0];

	echo $gwdm.BR;
	writeLog($gwdm);

	$deci = getDeci($gwdm);
	
	//读取历史数据

	/*检查Q字符串
	echo getQdata(1,$gwdm,'string');
	exit;*/

	/*检查KQ字符串
	//echo getKQdata($refresh,$gwdm,'D',100,'string',$gw_list[$index][1]);
	showarr(getKQdata($refresh,$gwdm,'D',100,'array',$gw_list[$index][1]));
	exit;*/
	
	$type = isset($gw_list[$index][1]) ? $gw_list[$index][1] : '';
	//if($type!='s') continue; 

	list($kd_a, $qx_a) = getKQdata($refresh,$gwdm,'D',10000,0,'string',$type);


	//$kd_cnt = count($kd_a);
	//$qx_cnt = count($qx_a); //$qx_a[$qx_cnt-1]=array(1,1);
	
	/*检查KQ数组
	print_r($kd_a);
	print_r($qx_a);
	echo $kd_a[$kd_cnt-1][0].BR;
	exit;*/

}

echo '运算时间'.(time()-$t1).'秒 ';
echo date('Y-m-d H:i:s');
echo '</pre>';
?>
<body>
create_k_daily.php finished
</body>