<?php
//Configuration
//No input
//It attempts to link up with the server, and creates a connection.
//No output
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//ip address for servername
//if that doesn’t work 
//phrasal-concord-292413:us-central1:mustain-99
$servername = "35.188.139.239";
$username = "db-smog";
$password = "CAO8m7t8nDme1AGn";
$dbname = "SmogProject";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>
