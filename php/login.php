<?php
/*
Login
Inputs the database of available usernames and passords, as well as the data form the user
Decodes the data from the database, and compares it with the user input.
If they match, then the method returns with a 400 code. otherwise the program returns ith a 404 error.
*/
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
	$password = mysqli_real_escape_string($conn, trim($request->Password));
  $username = mysqli_real_escape_string($conn, trim($request->userName));
  $sql = "SELECT * FROM User where userName='".$username."' and Password='".$password."'";
  if($result = mysqli_query($conn,$sql))
  {
  $rows = array();
    while($row = mysqli_fetch_assoc($result))
    {
      $rows[] = $row;
    }

    echo json_encode($rows);
    // http_response_code(400);
  }
  else
  {
    http_response_code(404);
  }
}
