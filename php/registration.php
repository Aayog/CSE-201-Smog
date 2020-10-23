<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
  $name = mysqli_real_escape_string($mysqli, trim($request->name));
  $pwd = mysqli_real_escape_string($mysqli, (int)$request->pwd);
  $email = mysqli_real_escape_string($mysqli, trim($request->email));
  $sql = "INSERT INTO User(username,password,email) VALUES ('{$username}','{$password}','{$email}')";
 // echo $sql;
if ($mysqli->query($sql) === TRUE) {
 
 
    $authdata = [
      'username' => $username,
	    'password' => '',
	    'email' => $email,
      'Id'    => mysqli_insert_id($mysqli)
    ];
    echo json_encode($authdata);
 
}
}
?>