<?php
# https://phpenthusiast.com/blog/develop-angular-php-app-getting-the-list-of-items

include_once("config.php");

$sql = "SELECT * FROM UserRequests WHERE approved=FALSE";
$requests = [];

if($result = mysqli_query($conn,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $requests[$cr]['Title'] = $row['gTitle'];
    $requests[$cr]['Descript'] = $row['gDescript'];
    $requests[$cr]['Username'] = $row['userName'];
    $requests[$cr]['Id'] = $row['reqID'];
    $requests[$cr]['Approved'] = $row['approved'];
    $cr++;
  }
  
  echo json_encode(['data'=>$requests]); 
  // http_response_code(400);
}
else
{
  http_response_code(404);  
}
