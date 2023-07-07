<?php
  require('lib/Braintree.php');
  $data = json_decode(file_get_contents('php://input'));
  $nonce = $data->{'nonce'};
  //$deviceData = $data->{'deviceData'};

  $gateway = new Braintree\Gateway([
    'accessToken' => 'access_token$production$23p4vzmp89wbzmgk$ac83f2f0ac2c4de848bc0327411bb863',
  ]);

  // Then, create a transaction:
  $result = $gateway->transaction()->sale([
    'merchantAccountId' => 'USD',
    'amount' => '0.01',
    'paymentMethodNonce' => $nonce,
    //'deviceData' => $deviceData,
    'options' => [ 'submitForSettlement' => True ]
  ]);
  echo $result;
?>
