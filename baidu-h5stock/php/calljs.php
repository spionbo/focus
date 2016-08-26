<?php
$ContentType = 'application/x-javascript';
$gbk = 1;
include_once('inc.function.php');
$ask = array_merge($_GET, $_POST);
echo calljs($ask);

/*
$url = "https://mycjt.cn/app/calljs2.php?O=S,0,A,20";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
$result = curl_exec($ch);
print_r($result);


$status = curl_getinfo($curlHandle, CURLINFO_HTTP_CODE);

echo $status;//HTTP
*/
?>