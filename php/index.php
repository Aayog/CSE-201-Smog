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
    $servername = "104.154.66.238";
$username = "root";
$password = "9Reddolphinscarvetoast!";
$dbname = "Project";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
  $password1 = "12345";
  $username1 = "Alan";
  $sql2 = "SELECT * FROM User where userName='".$username1."' and Password='".$password1."'";
  echo $con."<br>";
  if($result = mysqli_query($conn,$sql2))
  {
  $rows = array();
  $count = 1-1;
    while($row = mysqli_fetch_assoc($result))
    {
      $count = $count + 1;
    }
    if($count==1){
      echo " Login Passed<br>";
    }else
  {
   echo " Login Failed<br>"; 
  }
}

}

//check registration, including insertion, deletion, signup, and default values.
function signupTest(){
$servername = "104.154.66.238";
$username = "root";
$password = "9Reddolphinscarvetoast!";
$dbname = "Project";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
//insert values
  $userTest = "Test";
  $TestPass = "test1234";
  $Testmail = "test@gmail.com";

//check to see if insertion command is accepted by the server
  $sql3 = "INSERT INTO User(userName,Password,Email) VALUES ('".$userTest."','".$TestPass."','".$Testmail."')";
  if ($conn->query($sql3)) {
    // $authdata = [
    //   'userName' => $userTest,
	  //   'Password' => $TestPass,
	  //   'Email' => $Testmail,
    //   'Id'    => mysqli_insert_id($conn)
    // ];
    echo " Insertion Passed<br>";
  }else{
     echo " Insertion Failed<br>";
  }

//check value is in database
$sqlUserTest = "Select * from User where userName='".$userTest."'";
if($result = mysqli_query($conn,$sqlUserTest))
  {
  $rows = array();
    while($row = mysqli_fetch_assoc($result))
    {
      $rows[] = $row;
    }
  if(!empty($row)){
     echo " Sign Up Passed<br>";
  }else{
     echo " Sign Up Failed<br>";
  }
}else{
echo " Sign Up Failed<br>";
}

//test that the default Admin value is User
$default = "User";
$sqldefaultTest = "Select * from User where userName='".$userTest."' and Admin='".$default."'";

if($result2 = mysqli_query($conn,$sqldefaultTest))
  {
  $rows2 = array();
  $count = 0;
    while($row2 = mysqli_fetch_assoc($result2))
    {
      $rows2[] = $row2;
      $count= $count + 1;
    }
    if($count>=1){
      echo " Admin Default Test Passed<br>";
    }else{
      echo " Admin Default Test Failed<br>";
    }
}else{
echo " Admin Default Test Failed<br>";
}

//remove value from database so it can be used for next test and test deletion
$sqlDelete = "Delete from User where userName='".$userTest."'";
echo $sqlDelete;
if($conn->query($sqlDelete) === TRUE){
 echo " Deletion Passed<br>";
} else {
 echo " Deletion Failed<br>"; 
}

//test to see that duplicate usernames fail
function duplicateTest(){
//insert values
$servername = "104.154.66.238";
$username = "root";
$password = "9Reddolphinscarvetoast!";
$dbname = "Project";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
   $userName2 = "Alan";
  $Password2 = "test1234";
  $Email2 = "test@gmail.com";
  $sql = "INSERT INTO User(userName,Password,Email) VALUES ('".$userName2."','".$Password2."','".$Email2."')";
  if ($conn->query($sql) === FALSE) {
	echo " NoDuplicates Passed<br>"; 
  }else{
      echo " NoDuplicates Failed<br>";
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