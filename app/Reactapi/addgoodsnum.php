<?php
header('Access-Control-Allow-Origin:*');
    include 'server.php';
    //定义查询SQL语言变量
    $selectSql = isset($_POST['select'])?$_POST['select'] : NULL;

    //定义其他SQL语言变量：插入、更新、删除
    $elseSql = isset($_POST['else'])?$_POST['else'] : NULL;
   
    //$selectSql = "select count(*) as total from goods_list;select * from goods_list limit 6;";


    //当查询SQL语言不为空时，执行
    //结果为json字符串
    if($selectSql){
        echo json_encode(query($selectSql), JSON_UNESCAPED_UNICODE);    
    }
    //当其他SQL语言不为空时，执行
    //结果为boolean值  ture || false
    if($elseSql){
        if(excute($elseSql)){
            $sql = "select * from cake_car"; 

            echo json_encode(query($sql), JSON_UNESCAPED_UNICODE);
        }

    }
?>