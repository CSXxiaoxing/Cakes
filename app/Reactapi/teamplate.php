<?php
	//模版文件
	header('Access-Control-Allow-Origin:*');
	//引入数据库及数据查询和其他函数
	include 'server.php';

	//定义查询SQL语言变量
	$selectSql = NULL;
	//定义其他SQL语言变量：插入、更新、删除
	$elseSql = NULL;

	//举例
	//$selectSql = "select * from goodslist";


	//当查询SQL语言不为空时，执行
	//结果为json字符串
	if($selectSql){
		echo json_encode(query($selectSql), JSON_UNESCAPED_UNICODE);	
	}
	
	//当其他SQL语言不为空时，执行
	//结果为boolean值  ture || false
	if($elseSql){
		echo json_encode(excute($elseSql), JSON_UNESCAPED_UNICODE);	
	}
?>