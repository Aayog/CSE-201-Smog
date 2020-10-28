<?php
header("Access-Control-Allow-Origin: *");
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(isset($postdata) && !empty($postdata))
{
  $userName = mysqli_real_escape_string($conn, trim($request->userName));
  $Password = mysqli_real_escape_string($conn, trim($request->Password));
  $Email = mysqli_real_escape_string($conn, trim($request->Email));
  $sql = "INSERT INTO User(userName,Password,Email) VALUES ('".$userName."','".$Password."','".$Email."')";
  if ($conn->query($sql) === TRUE) {
 
 
    $authdata = [
      'userName' => $userName,
	    'Password' => '',
	    'Email' => $Email,
      'Id'    => mysqli_insert_id($conn)
    ];
    echo json_encode($authdata);
  }
}
?>