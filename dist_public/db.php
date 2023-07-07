<?php
  ini_set('upload_max_filesize', 10000000000);
  ini_set('file_uploads', 1);
  ini_set('max_input_time', 0);
  ini_set('memory_limit', -1);
  ini_set('max_execution_time', "600");
  ini_set('post_max_size', 100000000000);

  $req = ltrim($_SERVER['REQUEST_URI'],'/');
  $_GET['i'] = '';
  if(strlen($req) && !file_exists($req)){
    $_GET['i'] = $req;
  }
  $db_user  = 'root';
  $db_pass  = 'SlkCa04KvnyuYQACjTlu';
  $db_host  = "containers-us-west-20.railway.app";
  $db       = "cobbmtn";
  $port     = '7516';
  $baseURL  = "http://cobbmtnflwrs.whitehot.ninja/";
  $link     = mysqli_connect($db_host,$db_user,$db_pass,$db,$port);
  
  $maxResultsPerPage =9;
?>
