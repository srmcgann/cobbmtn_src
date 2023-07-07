<?
  require_once('db.php');
  $data = json_decode(file_get_contents('php://input'));
  $page = mysqli_real_escape_string($link, $data->{'page'});
  $start = $maxResultsPerPage * intval($page);
  $sql = "SELECT id FROM flowers";
  $countRes = mysqli_query($link, $sql);
  $totalPages = round(mysqli_num_rows($countRes)/$maxResultsPerPage);
  $sql1=$sql = 'SELECT * FROM flowers ORDER BY id ASC LIMIT ' . $start . ', ' . $maxResultsPerPage;
  $res = mysqli_query($link, $sql);
  $success = false;
  $content = [];
  if(mysqli_num_rows($res)){
    $success = true;
    for($i=0; $i< mysqli_num_rows($res); ++$i){
      $row = mysqli_fetch_assoc($res);
      $content[] = $row;
    }
  }
  echo json_encode([$success, $content, $totalPages, $sql1]);
?>
