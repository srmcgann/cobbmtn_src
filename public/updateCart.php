<?php
  require_once('db.php');
  $data = json_decode(file_get_contents('php://input'));
  $ip = mysqli_real_escape_string($link, $data->{'ip'} ?? '');
  $sessionHash = md5($_SERVER['HTTP_USER_AGENT'] . $ip);
  $cart = mysqli_real_escape_string($link, json_encode($data->{'cart'}));
  $sql = "INSERT INTO sessions (hash, cart) VALUES(\"$sessionHash\", \"$cart\") ON DUPLICATE KEY UPDATE cart = \"$cart\"";
  $success = mysqli_query($link, $sql);
  echo json_encode([$success]);
?>
