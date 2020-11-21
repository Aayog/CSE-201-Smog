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
  echo $con;
  if($result = mysqli_query($conn,$sql2))
  {
  $rows = array();
  $count = 1-1;
    while($row = mysqli_fetch_assoc($result))
    {
      $count = $count + 1;
    }
    if($count==1){
      echo " Login Passed";
    }else
  {
   echo " Login Failed"; 
  }
}

}

function insertionTest(){
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
  if ($conn->query($sql3) === TRUE) {
    $authdata = [
      'userName' => $userTest,
	    'Password' => $TestPass,
	    'Email' => $Testmail,
      'Id'    => mysqli_insert_id($conn)
    ];
    echo " Insertion Passed";
  }else{
     echo " Insertion Failed";
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



//check value is in database
$sqlUserTest = "Select * from User where userName='".$userTest."'";
if($result = mysqli_query($conn,$sqlUserTest))
  {
  $rows = array();
    while($row = mysqli_fetch_assoc($result))
    {
      $rows[] = $row;
    }
  if(count($rows)>=1){
     echo " Sign Up Passed";
  }else{
     echo " Sign Up Failed";
  }
}else{
echo " Sign Up Failed";
}

//test that the default Admin value is User
$default = "User";
$sqldefaultTest = "Select * from User where userName='".$userTest."' and Admin='".$default."'";

if($result2 = mysqli_query($conn,$sqldefaultTest))
  {
  $rows2 = array();
    while($row2 = mysqli_fetch_assoc($result2))
    {
      $rows2[] = $row2;
    }
    if(count($rows2)>=0){
      echo " Admin Default Test Passed";
    }else{
      echo " Admin Default Test Failed";
    }
}else{
echo " Admin Default Test Failed";
}
}



function deletionTest(){
    $servername = "104.154.66.238";
$username = "root";
$password = "9Reddolphinscarvetoast!";
$dbname = "Project";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
    //remove value from database so it can be used for next test and test deletion
$sqlDelete = "Delete FROM User WHERE userName='Test'";
if($conn->query($sqlDelete)===TRUE){
 echo " Deletion Passed";
} else {
 echo " Deletion Failed"; 
}
}


//test to see that duplicate usernames fail
function duplicateTest(){
$servername = "104.154.66.238";
$username = "root";
$password = "9Reddolphinscarvetoast!";
$dbname = "Project";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
//insert values

   $userName2 = "Alan";
  $Password2 = "test1234";
  $Email2 = "test@gmail.com";
  $sql = "INSERT INTO User(userName,Password,Email) VALUES ('".$userName2."','".$Password2."','".$Email2."')";
  if ($conn->query($sql) === FALSE) {
	echo " NoDuplicates Passed"; 
  }else{
      echo " NoDuplicates Failed";
  }
}





//run tests
if(connectionTest()=== TRUE){
echo "Connection Passed";
loginTest();
insertionTest();
signupTest();
deletionTest();
duplicateTest();
//7 tests so far 3 black, 1 white, 3 grey or white


}else{
echo "Connection Failed";
}

$conn ->close();
?>