<?php
    header('Access-Control-Allow-Origin:*');
    include 'server.php';
    if (isset($_POST['upload'])) {
      move_uploaded_file($_FILES['upfile']['tmp_name'], "../web/src/up_tmp/" . $_FILES['upfile']['name']);
      echo "./src/up_tmp/" . $_FILES['upfile']['name'];
      exit;
    }
?>