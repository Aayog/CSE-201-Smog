<?php
/*
Registration
Uses the database information to determine if the user already exists
input database information
returns $authdata which is the data that the user inputs when registering.
*/
header("Access-Control-Allow-Origin: *");
include_once("config.php");
$posts = file_get_contents("php://input");
$request = json_decode($posts);

if(isset($posts) && !empty($posts))
{
  $userName = mysqli_real_escape_string($conn, trim($request->userName));
  $Password = mysqli_real_escape_string($conn, trim($request->Password));
  $Email = mysqli_real_escape_string($conn, trim($request->Email));
  $sql = "INSERT INTO User(userName,Password,Email) VALUES ('".$userName."','".$Password."','".$Email."')";
  if ($conn->query($sql) === TRUE) {
 
 
    $userdata = [
      'userName' => $userName,
	    'Password' => '',
	    'Email' => $Email,
      'Id'    => mysqli_insert_id($conn)
    ];
    echo json_encode($userdata);
  }
}
?>