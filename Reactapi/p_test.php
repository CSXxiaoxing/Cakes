<?php
	// 配置参数
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'h5_1705';

	// 1）连接数据库
	$conn = new mysqli($servername,$username,$password,$database);

	// 检测连接
	if($conn->connect_errno){
		die('连接失败：'.$conn->connect_error);
	}

	// 设置字符集
	$conn->set_charset('utf8');
	// 编写查询sql语句
	
	if(isset($_REQUEST['up'])){
		//价格升序
        $sql = 'select * from goodlist order by price ASC';
    }
    else if(isset($_REQUEST['sale_qty'])){
    	//销量降序
        $sql = 'select * from goodlist order by sale_qty DESC';
    }
	//折扣升序
    else if(isset($_REQUEST['discount'])){
        $sql = 'select * from goodlist order by discount ASC';
    }
    else{
        $sql = 'select * from goodlist'; 
    }
	// 利用sql语句查询数据库
	// 查询结果集
	$result = $conn->query($sql);

	// post请求
	$pageNo = isset($_POST['pageNo']) ? $_POST['pageNo'] : 1;
	$qty = isset($_POST['qty']) ? $_POST['qty'] : 48;	
	// 使用查询结果集
	$row = $result->fetch_all(MYSQLI_ASSOC);
	$res = array(
        'data' => array_slice($row,($pageNo-1)*$qty,$qty), 
        'total' => count($row),
        'pageNo' => $pageNo,
        'qty' => $qty
    );
	

	echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>