<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//ip address for servername
//if that doesn’t work 
//phrasal-concord-292413:us-central1:mustain-99
$servername = "104.154.66.238";
$username = "root";
$password = "9Reddolphinscarvetoast!";
$dbname = "Project";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
// $sql = "SELECT username, password FROM User";
// $result = $conn->query($sql);

// if ($result->num_rows > 0) {
//   // output data of each row
//   while($row = $result->fetch_assoc()) {
//     echo "Name: " . $row["username"]. " " . $row["password"]. "<br>";
//   }
// } else {
//   echo "0 results";
// }
// $conn->close();

?>
