<?php
# https://phpenthusiast.com/blog/develop-angular-php-app-getting-the-list-of-items

include_once("config.php");

$sql = "SELECT * FROM Game";
$games = [];
$title;

if($result = mysqli_query($conn,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $games[$cr]['Title'] = $row['Title'];
    $games[$cr]['Descript'] = $row['Descript'];
    $games[$cr]['Developer'] = $row['Developer'];
    $games[$cr]['Version'] = $row['Version'];
    $games[$cr]['Link'] = $row['Link'];
    $games[$cr]['Price'] = $row['Price'];
    $games[$cr]['Img'] = $row['Img'];
    $cr++;
  }
  
  echo json_encode(['data'=>$games]); 
  // http_response_code(400);
}
else
{
  http_response_code(404);  
}
