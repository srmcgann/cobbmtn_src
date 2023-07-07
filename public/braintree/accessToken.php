<?php
  require('lib/Braintree.php');


  $gateway = new Braintree\Gateway([
//	'environment' => 'production',
    'accessToken' => 'access_token$production$23p4vzmp89wbzmgk$b6e046235fa00da47763c3c8d1a4cc8d',
  ]);

  $clientToken = $gateway->clientToken()->generate();

?>
