<?php

//connect to the server
$servername = "104.154.66.238";
$username = "root";
$password = "9Reddolphinscarvetoast!";
$dbname = "Project";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);


//test that it is connected to the server
function connectionTest(){
// Check connection
if ($conn->connect_error) {
  return False;
  die("Connection failed: " . $conn->connect_error);
}
return True;
}

//check login
function loginTest(){
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
	$password = "12345";
  $username = "Alan";
  $sql = "SELECT * FROM User where userName='".$username."' and Password='".$password."'";
  if($result = mysqli_query($conn,$sql))
  {
  $rows = array();
  $count = 0;
    while($row = mysqli_fetch_assoc($result))
    {
      $rows[] = $row;
      $count= $count + 1;
    }
    if($count==1){
      echo "Login Passed<br>";
    }else{
      echo "Login Failed<br>";
    }
	
  }
  else
  {
   echo "Login Failed<br>"; 
  }
}

}

//check registration, including insertion, deletion, signup, and default values.
function signupTest(){
//insert values
header("Access-Control-Allow-Origin: *");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(isset($postdata) && !empty($postdata))
{
  $userName = "Test";
  $Password = "test1234";
  $Email = "test@gmail.com";

//check to see if insertion command is accepted by the server
  $sql = "INSERT INTO User(userName,Password,Email) VALUES ('".$userName."','".$Password."','".$Email."')";
  if ($conn->query($sql) === TRUE) {


    $authdata = [
      'userName' => $userName,
	    'Password' => '',
	    'Email' => $Email,
      'Id'    => mysqli_insert_id($conn)
    ];
    echo "Insertion Passed<br>";
  }else{
     echo "Insertion Failed<br>";
  }
}else{
 echo "Insertion Failed<br>";
}

//check value is in database
$sqlUserTest = "Select * from User where userName='".$userName."'";
if($result = mysqli_query($conn,$sqlUserTest))
  {
  $rows = array();
    while($row = mysqli_fetch_assoc($result))
    {
      $rows[] = $row;
    }
  if(!empty($row)){
     echo "Sign Up Passed<br>";
  }else{
     echo "Sign Up Failed<br>";
  }
}else{
echo "Sign Up Failed<br>";
}

//test that the default Admin value is User
$default = "User";
$sqldefaultTest = "Select * from User where userName='".$userName."' and Admin='".$default."'";

if($result2 = mysqli_query($conn,$sqldefaultTest))
  {
  $rows = array();
  $count = 0;
    while($row = mysqli_fetch_assoc($result2))
    {
      $rows[] = $row;
      $count= $count + 1;
    }
    if($count==1){
      echo "Admin Default Test Passed<br>";
    }else{
      echo "Admin Default Test Failed<br>";
    }
}else{
echo "Admin Default Test Failed.<br>";
}

//remove value from database so it can be used for next test and test that deletion command is accepted.
$sqlDelete = "Delete from User where userName='".$userName."'";
if($conn->query($sqlDelete) === TRUE){
 echo "Deletion Passed<br>";
} else {
 echo "Deletion Failed<br>"; 
}
}

//test to see that duplicate usernames fail
function duplicateTest(){
//insert values
header("Access-Control-Allow-Origin: *");
//include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(isset($postdata) && !empty($postdata))
{
  $userName = "Alan";
  $Password = "test1234";
  $Email = "test@gmail.com";
  $sql = "INSERT INTO User(userName,Password,Email) VALUES ('".$userName."','".$Password."','".$Email."')";
  if ($conn->query($sql) === FALSE) {
	echo "NoDuplicates Passed<br>"; 
  }else{
      echo "NoDuplicates Failed<br>";
  }
}else{
   echo "NoDuplicates Failed<br>";
}
}




//run tests
if(connectionTest()=== TRUE){
echo "Connection Passed<br>";
loginTest();
signupTest();
duplicateTest();
//7 tests so far 3 black, 1 white, 3 grey or white


}else{
echo "Connection Failed<br>";
}

$conn ->close();
?>
