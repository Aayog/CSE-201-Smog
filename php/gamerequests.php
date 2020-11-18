<?php
header("Access-Control-Allow-Origin: *");
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(isset($postdata) && !empty($postdata))
{
  $title = mysqli_real_escape_string($conn, trim($request->title));
  $desc = mysqli_real_escape_string($conn, trim($request->desc));
  $username = mysqli_real_escape_string($conn, trim($request->$username));

  $sql = "INSERT INTO UserRequests(gTitle,gDescript,userName) VALUES ('".$title."','".$desc."','".$username."')";
  if ($conn->query($sql) !== TRUE) {
    http_response_code(400);
  }
  echo $sql;
  http_response_code(404);
}
?>