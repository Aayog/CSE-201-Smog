<?php
// Database name
$database_name = "./db/todo.db";

// Database Connection
$db = new SQLite3($database_name);
// Create Table "login" into Database if not exists 
$query = "CREATE TABLE IF NOT EXISTS login (uname STRING, password STRING)";
$db->exec($query);
$query = "SELECT * FROM login";
$result = $db->query($query);

while ($row = $result->fetchArray()) {
    echo "{$row['uname']} {$row['password']}\n</br>";
}

?>
