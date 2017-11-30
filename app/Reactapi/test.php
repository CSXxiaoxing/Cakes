<?php

    // function connect(){
    //     $severname = 'localhost';
    //     $username = 'root';
    //     $password = '123456';
    //     $dbname = 'gg';
    //     $conn = new mysqli($severname,$username,$password,$dbname);
    //     if($conn->connect_error){
    //         die('连接失败：' . $conn->connect_error);
    //     }
    //     $conn->set_charset('utf8');
    //     return $conn;
    // }

    $servername = 'localhost';
    $username = 'root';
    $password = '123456';
    $database = 'cake';
    
    
    
    // 1）连接数据库
    $conn = new mysqli($servername,$username,$password,$database);

    // 检测连接
    if($conn->connect_errno){
        die('连接失败：'.$conn->connect_error);
    }

    // 设置字符集
    $conn->set_charset('utf8');
    
    header("Access-Control-Allow-Origin: *");
data = {usernam:123}
    
    $pageNo = isset($_REQUEST['page']) ? $_REQUEST['page'] : 1;
    $qty = isset($_REQUEST['pageSize']) ? $_REQUEST['pageSize'] : 10;   
    
//  echo "$qty";
    
    //查看用户名是否已经存在
    $sql = "select * from dishname ";
    $result = $conn->query($sql);
    if($result->num_rows < 0){
        
        echo "fail";
        
    }else{
        
        $num = ($pageNo - 1) * $qty;
        
        $sql1 = "select sql_calc_found_rows * from dishname limit $num , $qty ; ";
        
        $sql2 = "select found_rows() as rowsCount";

        // 获取查询结果
        $result1 = $conn->query($sql1);
        
        
        
            $row1 = $result1->fetch_all(MYSQLI_ASSOC);
         
          
            echo json_encode( $row1,JSON_UNESCAPED_UNICODE);
                
    }
    
    

    // 释放查询内存(销毁)
    $result->free();

    //关闭连接
    $conn->close();
?>