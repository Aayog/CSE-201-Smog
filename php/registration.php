<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
  $name = mysqli_real_escape_string($mysqli, trim($request->name));
  $pwd = mysqli_real_escape_string($mysqli, (int)$request->pwd);
   $email = mysqli_real_escape_string($mysqli, trim($request->email));
  $mobile = mysqli_real_escape_string($mysqli, (int)$request->mobile);
  $sql = "INSERT INTO employee(name,pwd,email,mobile) VALUES ('{$name}','{$pwd}','{$email}','{$mobile}')";
 // echo $sql;
if ($mysqli->query($sql) === TRUE) {
 
 
    $authdata = [
      'name' => $name,
	  'pwd' => '',
	  'email' => $email,
      'mobile' => $mobile,
      'Id'    => mysqli_insert_id($mysqli)
    ];
    echo json_encode($authdata);
 
}
}
?>