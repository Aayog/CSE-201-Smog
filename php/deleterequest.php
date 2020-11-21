<?php
header("Access-Control-Allow-Origin: *");
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{   
  $id = mysqli_real_escape_string($conn, trim($request));
  $sql = "DELETE FROM UserRequests WHERE reqId='".$id."'";
  $conn->query($sql);
}
else
{
    http_response_code(400);
}
?>
