<?php

	// $servername = 'localhost';
 //    $username = 'root';
 //    $password = '123456';
 //    $database = 'cake';

    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'cake';

	
	// $servername = 'localhost';
 //    $username = 'root';
 //    $password = '';
 //    $database = 'h5_1705';

    
    // 1）连接数据库
    $conn = new mysqli($servername,$username,$password,$database);

    // 检测连接
    if($conn->connect_errno){
        die('连接失败：'.$conn->connect_error);
    }

    // 设置字符集
    $conn->set_charset('utf8');
    
    header("Access-Control-Allow-Origin: *");

    $user = isset($_POST['username']) ? $_POST['username'] : '';
    $pass = isset($_POST['password']) ? $_POST['password'] : '';
    // 生成token
    $api_token_server = md5($user . $pass );
    
    $sql = "update user_list set token='$api_token_server' where username='$user'";
    $result = mysqli_query($conn,$sql);

    $array = [];
    array_push($array,$api_token_server);
    echo json_encode($array, JSON_UNESCAPED_UNICODE);

    //关闭连接
    mysqli_close($conn);


?>