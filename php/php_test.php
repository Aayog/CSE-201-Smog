<?php
$output = shell_exec('php game.php');
if($output){
    echo "Got the games. Passed<br>";
}else{
    echo "Failed getting the games<br>";
}

$output = shell_exec('php getrequests.php');
if($output){
    echo "Got the game requests. Passed<br>";
}else{
    echo "Failed getting the requests<br>";
}
// }

// $url = "http://localhost:8000/login.php";
// $data = [
//         'userName' => 'Alan',
//         'Password' => '12345'
//     ];
// $options = array(
//     'http' => array(
//       'method'  => 'POST',
//       'content' => json_encode( $data ),
//       'header'=>  "Content-Type: application/json\r\n" .
//                   "Accept: application/json\r\n"
//       )
//   );
  
//   $context  = stream_context_create( $options );
//   $result = file_get_contents( $url, false, $context );
//   $response = json_decode( $result );
//   if($output){
//     echo "Logged in correctly. Passed<br>";
//     }else{
//         echo "Failed connecting<br>";
//     }



?>