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
<title>֤ȯ֮��</title>
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

//����ģ��
$load = array( //0 1 2 3 4 5 6 7 8 9
//1. ����ģ��
	 'comm'=>1				//�������壬�����������Windows���
	,'debug'=>myGet('D')	//debug
	,'math'=>1				//��ѧ����
	,'prototype'=>1			//�Զ���ԭ�����󷽷�
	,'tools'=>1				//tools
	,'ic'=>!$phone && strstr($agent, "IE") && !strstr($agent, "IE 9")
							//IE����			
	//,'cimage'=>1			//canvas image
	//,'scroll'=>v(array(1))	//�Զ��������
	
//2. ��ǿ����(��ѡ)
	//,'gd'=>0				//�򵥻�ͼģ��
 	//,'skt'=>v(array(1))		//web socket
	//,'twn'=>v(array(1))		//����
	
//3. ��Ʊ����ģ��	
	,'main_mini'=>v(array(1))	//���ĳ���
	,'ini_mini'=>v(array(1))		//��ʼ��
	,'css_mini'=>v(array(1))		//��ʽ����
	,'rf' =>1			    //ˢ�¼������
	//,'gw' =>v(array(1))		//��Ʊ�嵥
	//,'ti' =>v(array(1))		//�ײ�����
	,'ky' =>v(array(1))     //���̿���
	
//4. ��ƱӦ��(��ѡ)
	//,'app'=>v(array(1))     //Ӧ�ù���
	,'tk_mini' =>v(array(1))     //��ʱͼ
	//,'kl_mini' =>v(array(1))     //K��ͼ
	,'pk_mini' =>v(array(1))     //�̿�
	//,'pk' =>v(array(1))     //�̿�
	//,'zb' =>v(array(1))     //�ֱ�
	//,'bk' =>v(array(1))     //���
	//,'zx' =>v(array(1))     //��ѡ
	//,'rn' =>v(array(1))     //��������
	//,'dp' =>v(array(1))		//����������

//5. iframeǶ��(��ѡ)	
	//,'F10'=>v(array(1))		//F10
	//,'tg' =>v(array(1))     //ͨ��
	//,'csd'=>v(array(1))		//�����
	//,'zxn'=>v(array(1))		//��Ѷ
	//,'pso'=>v(array(0))		//PSO

//6. ����(��ѡ)
 	//,'yj' =>v(array(1))		//����Ҽ�
	//,'his'=>v(array(1))     //�����ʷ
	//,'sct'=>v(array(1))     //��ݼ�
	//,'help' =>v(array(1))	//��������
	//,'sys'=>v(array(1))     //ϵͳ����
	
//7. ����
	//,'lb' =>v(array(1))     //�ϲ��ǩ
	//,'login' =>v(array(1))  //��¼
	,'begin'=>1   //����
);

function v($a){
	global $ver;
	return isset($a[$ver]) ? $a[$ver] : 0;
}


//����js����
$i = 0;
foreach($load as $key=>$value){
	$i++;
	if($value){
		if(!$ob){
			include_once('js/'.$key.'.js');
		}else{
			//$s = file_get_contents('ob/'.$key.$ob.'.js',NULL,NULL,713); //ȥ����������ע��˵��
			$s = file_get_contents('ob/'.$key.'_Obfs.js');
			echo trim($s);
		}
		//������debug 
		if($i>43){
			echo 'alert("'.$key.'");';
			echo "\n";
		}
	}
	//echo "\n"; //������ʱ��
	//echo 'alert("'.$key.'");';
	//echo "\n"; //������ʱ��
}

?> 
</script>
