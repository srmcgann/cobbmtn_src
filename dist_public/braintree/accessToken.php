<?php
  require('lib/Braintree.php');


  $gateway = new Braintree\Gateway([
    'accessToken' => 'access_token$production$23p4vzmp89wbzmgk$ac83f2f0ac2c4de848bc0327411bb863',
  ]);

  $clientToken = $gateway->clientToken()->generate();

?>
