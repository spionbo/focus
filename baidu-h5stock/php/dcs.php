<?php
/**
 * m.stockstar.com 用户行为统计
 * @author qian.liu01@jrj.com.cn 2012-05-28 09:20:00
 */
// 声明定义日志路径
define('WEBAPP_LOG_DIR',$_SERVER['JRJSRV_CACHE_DIR'].'/m_stockstar_com_log/');
define('WEBAPP_PLOG_DIR',$_SERVER['JRJSRV_CACHE_DIR'].'/m_stockstar_com_plog/');

class webapplog {
	
	public static function setplog(){
		$logfile = WEBAPP_PLOG_DIR.date('Y-m-d').'.log';
		$spacer  = "`";
		
		if( ! is_dir(WEBAPP_PLOG_DIR)) {
			self::forcemkdir(WEBAPP_PLOG_DIR);
		}
		$uid = $_COOKIE['uhash'];
		$request = empty($_SERVER['HTTP_REFERER']) ? '' : str_replace(':80','',$_SERVER['HTTP_REFERER']) ;
		$referer = empty($_GET['ref']) ? '' : str_replace(array('|*|',':80'),array('&',''),trim($_GET['ref']));
		$reqip   = self::getip();
		$phonenum= self::getPhoneNumber();
		if(empty($uid)) {
			$uid = uniqid();
			setcookie('uhash',$uid,0,'/','m.stockstar.com','',1);
		}
		$request = str_replace('../','http://m.stockstar.com/',$request);
		if( $request =='m.stockstar.com') {
			$request = 'http://m.stockstar.com';
		}
		if(strpos($request,'baidu')!==false || strpos($request,'BAIDU')!==false) {
			$reqfarr = parse_url($request);
			parse_str($reqfarr['query'],$sourceurl);
			$request = $sourceurl['src'];
		}
		if($referer == 'm.stockstar.com' || $referer == 'http:///' || $referer == '.') {
			$referer = 'http://m.stockstar.com';
		}
		$loginfo = array(
				'clientIp'=> $reqip,
				'uid'	=> $uid,
				'datetime' 	=> date('Y-m-d H:i:s'),
				'mobileNumber'	=> $phonenum,
				'request' => $request,
				'referrer'=> $referer,
				'ua'	=> $_SERVER['HTTP_USER_AGENT']
		);
		if( !empty($loginfo['request']) ) {
			$data = implode($spacer,$loginfo)."\r\n";
			@file_put_contents($logfile,$data,FILE_APPEND);
			$imageFile = '../images/refpic.gif';
			$fileSize = filesize($imageFile);
   		header('Content-Type: image/gif');
   		header('Accept-Ranges: bytes');
   		header('Content-Length: ' . $fileSize);
   		header('Cache-Control: no-cache,no-store,max-age=0,must-revalidate');
   		header('Expires: Mon, 02 Jul 2012 06:00:00 GMT');
   		readfile ($imageFile);
		}
   	exit();
	}
	
	public static function setlog($uid,$request,$locreferer) {
		$logfile = WEBAPP_LOG_DIR.date('Y-m-d').'.log';
		$spacer  = "`";
		
		if( ! is_dir(WEBAPP_LOG_DIR)) {
			self::forcemkdir(WEBAPP_LOG_DIR);
		}
		$referer = empty($locreferer) ? '' : trim($locreferer) ;//$_SERVER['HTTP_REFERER'];
		$reqarr  = explode(',',$request);
		$reqip   = self::getip();
		$phonenum= self::getPhoneNumber();
		if($referer=='ucapp') {
			$referer='http://app.uc.cn/appstore/AppCenter/index?uc_param_str=nieidnutssvebipfcp&from=ucapp';
		}
		if($referer=='qqapp') {
			$referer='http://p.imtt.qq.com/h?d=7&b=appcenter&from=qqapp';
		}
		
		if( !empty($reqarr) ) {
			$i=0;
			$reqa = array();
			foreach($reqarr as $req) {
				unset($ref ,$pre,$loginfo);
				$reqa[]  = $reqs = explode('|',$req);
				$reqs[1] = empty($reqs[1]) ? time() : floor($reqs[1]/1000);
				$pre = $i-1;
				$ref = $i>0 ? $reqa[$pre][0] : $referer;
				$loginfo = array(
					'clientIp'=> $reqip,
					'uid'	=> $uid,
					'datetime' 	=> date('Y-m-d H:i:s',$reqs[1] ),
					'mobileNumber'	=> $phonenum,
					'request' => $reqs[0],
					'referrer'=> $ref,
					'ua'	=> $_SERVER['HTTP_USER_AGENT']
				);
				$data = implode($spacer,$loginfo)."\r\n";
				@file_put_contents($logfile,$data,FILE_APPEND);
				$i++;
			}
		} else {
			
			$loginfo = array(
				'clientIp'=> $reqip,
				'uid'	=> $uid,
				'datetime' 	=> date('Y-m-d H:i:s'),
				'mobileNumber'	=> $phonenum,
				'request' => $request,
				'referrer'=> $referer,
				'ua'	=> $_SERVER['HTTP_USER_AGENT']
			);
			if( !empty($loginfo['request']) ) {
				$data = implode($spacer,$loginfo)."\r\n";
				@file_put_contents($logfile,$data,FILE_APPEND);
			}
		}
		
		header("Content-type:application/x-javascript");
		echo 'var res=1;';
	}
	
	public static function getuid() {
		$uuid = uniqid();
		header("Content-type:application/x-javascript");
		echo 'var uid="'.$uuid.'";';
	}
	
	public function getPhoneNumber() {
		if (isset($_SERVER['HTTP_X_NETWORK_INFO'])) {
			$str1 = $_SERVER['HTTP_X_NETWORK_INFO'];
			$getstr1 = preg_replace("/(.*,)(13[d])(,.*)/i","2",$str1);
			return $getstr1;
		} elseif (isset($_SERVER['HTTP_X_UP_CALLING_LINE_ID'])) {
			$getstr2 = $_SERVER['HTTP_X_UP_CALLING_LINE_ID'];
			return $getstr2;
		} elseif (isset($_SERVER['HTTP_X_UP_SUBNO'])) {
			$str3 = $_SERVER['HTTP_X_UP_SUBNO'];
			$getstr3 = preg_replace("/(.*)(13[d])(.*)/i","2",$str3);
			return $getstr3;
		}
		elseif (isset($_SERVER['DEVICEID'])) {
			return $_SERVER['DEVICEID'];
		}
		else {
			return '';
		}
	}
	
	public static function getip() {
        if (getenv('HTTP_CLIENT_IP') && strcasecmp(getenv('HTTP_CLIENT_IP'), 'unknown')){
            $ip = getenv('HTTP_CLIENT_IP');
        }else if (getenv('HTTP_X_FORWARDED_FOR') && strcasecmp(getenv('HTTP_X_FORWARDED_FOR'), 'unknown')){
            $ip = getenv('HTTP_X_FORWARDED_FOR');
        }else if (getenv('REMOTE_ADDR') && strcasecmp(getenv('REMOTE_ADDR'), 'unknown')){
            $ip = getenv('REMOTE_ADDR');
        }else if (isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], 'unknown')){
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        preg_match("/[\d\.]{7,15}/", $ip, $temp);
        $ip = $temp[0] ? $temp[0] : 'unknown';
        unset($temp);
        return $ip;
    }
	
	public static function forcemkdir($path) {
		if(!file_exists($path)){
			self::forcemkdir(dirname($path));
			mkdir($path,0777);
		}
	}
}

$option = trim($_GET['op']);
$option = addslashes($option);
switch ($option) {
	case 'log' :
		$resuest  = trim($_GET['req']);
		$uid      = trim($_GET['uid']);
		$referer  = trim($_GET['location']);
		webapplog::setlog($uid,$resuest,$referer);
	break;
	case 'plog';
		webapplog::setplog();
	break;
	case 'user':
		webapplog::getuid();
	break;
	default:
	break;
}
?>