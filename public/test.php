<?php
  require('db.php');
  $sql = 'SELECT id FROM flowers';
  $res = mysqli_query($link, $sql);
  $ct = 0;
  for($i=0; $i<mysqli_num_rows($res); ++$i){
    switch($i%6){
      case 0: $photo = 'https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/rose-peach.jpg?itok=Y_6bVHKW';
      break;
      case 1: $photo = 'https://bedfordvillageflowershoppe.com/wp-content/uploads/2019/03/flower-arrangements-North-Salem-NY.jpg';
      break;
      case 2: $photo = 'https://grangettos.com/cdn/shop/articles/shutterstock_1551860726_1600x.jpg?v=1634142408';
      break;
      case 3: $photo = 'https://www.starrosesandplants.com/wp-content/uploads/2021/01/Elle_006.jpg';
      break;
      case 4: $photo = 'https://www.ufseeds.com/on/demandware.static/-/Sites-master-urbanfarmer/default/dwe16a8884/images/products/Purple-Rose-Seeds.jpg';
      break;
      case 5: $photo = 'https://www.1800flowers.com/blog/wp-content/uploads/2012/05/rose-types-modern-roses-1024x576.jpg.webp';
      break;
    }
    $row = mysqli_fetch_assoc($res);
    $id = $row['id'];
    $sql = 'UPDATE flowers SET photo="'.$photo.'" WHERE id = ' . $id;
    if(mysqli_query($link, $sql)) $ct++;
  }
  echo 'done (updated '.$ct.' rows)';
?>
