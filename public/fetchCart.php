<?php
  require_once('db.php');
  // maintenance
  $sql = 'DELETE FROM sessions WHERE date < DATE_SUB(NOW(), INTERVAL 1 YEAR)';
  mysqli_query($link, $sql);

  $data = json_decode(file_get_contents('php://input'));
  $ip = mysqli_real_escape_string($link, $data->{'ip'} ?? '');
  $sessionHash = md5($_SERVER['HTTP_USER_AGENT'] . $ip);
  $sql = "SELECT cart FROM sessions WHERE hash LIKE BINARY \"$sessionHash\"";
  $res = mysqli_query($link, $sql);
  $success = false;
  $cart = [];
  if(mysqli_num_rows($res)){
    $success = true;
    $row = mysqli_fetch_assoc($res);
    $cart = $row;
  }
  echo json_encode([$success, $cart]);
?>
