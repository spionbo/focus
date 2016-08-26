<?php
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
<link rel="stylesheet" type='text/css' href='css/style1_mini.css'/>
<style id="style2"></style>
<title>证券之星</title>
</head>

<body style="background-color:#000000">
<div id="stockdiv" style="position:absolute"></div>
</body>
</html>
<?php
echo '<script>SERVER = "http://m.stockstar.com/php/php"</script>';
if(isset($ob) && $ob){
	echo '<script src="js.php"></script>';
		}else{
	echo '<script src="jss.php"></script>';
		}
?> 
