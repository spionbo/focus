<?php
$ver = 0;
$phone = 0;

//����ģ��
$load = array( //0 1 2 3 4 5 6 7 8 9
//1. ����ģ��
	 'tools'=>1				//tools
	,'comm'=>1				//�������壬�����������Windows���
	//,'debug'=>myGet('D')	//debug
	,'math'=>1				//��ѧ����
	,'prototype'=>1			//�Զ���ԭ�����󷽷�
	//,'ic'=>!$phone && strstr($agent, "IE") && !strstr($agent, "IE 9")
							//IE����			
	//,'cimage'=>1			//canvas image
	//,'scroll'=>v(array(1))	//�Զ��������
	
//2. ��ǿ����(��ѡ)
	//,'gd'=>0				//�򵥻�ͼģ��
 	//,'skt'=>v(array(1))		//web socket
	//,'twn'=>v(array(1))		//����
	
//3. ��Ʊ����ģ��	
	,'ini_mini'=>v(array(1))		//��ʼ��
	,'main_mini'=>v(array(1))	//���ĳ���
	,'main2'=>v(array(1))	//���ĳ���
	,'css_mini'=>v(array(1))		//��ʽ����
	,'rf' =>1			    //ˢ�¼������
	//,'gw' =>v(array(1))		//��Ʊ�嵥
	//,'ti' =>v(array(1))		//�ײ�����
	,'ky' =>v(array(1))     //���̿���
	
//4. ��ƱӦ��(��ѡ)
	//,'app'=>v(array(1))     //Ӧ�ù���
	,'tk_mini' =>v(array(1))     //��ʱͼ
	,'kl_mini' =>v(array(1))     //K��ͼ
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
$ob = isset($ob) && $ob;
foreach($load as $key=>$value){
	$i++;
	//echo '/*'.$key.'*/';
	//if($i>16) break;
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
	if($i==5){
		if(isset($_GET['GWDM']) && strlen($_GET['GWDM'])){
			echo "J.gwdm = '".$_GET['GWDM']."';\n";
		}
	}
}
?> 

