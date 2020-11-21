<?php
# https://phpenthusiast.com/blog/develop-angular-php-app-getting-the-list-of-items

include_once("config.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
  $title = mysqli_real_escape_string($conn, trim($request->gTitle));
  $username = mysqli_real_escape_string($conn, trim($request->userName));
  $comment = mysqli_real_escape_string($conn, trim($request->Comment));

  $sql = "INSERT INTO Comments(gTitle,Comment,Username) VALUES ('".$title."','".$comment."','".$username."')";

  if ($conn->query($sql) !== TRUE) {
    http_response_code(400);
  } 
    //http_response_code(400);
  else
  {
    http_response_code(404);  
  }
}