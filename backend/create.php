<?php
include('connection.php');

$title = $_POST['title'];
$description = $_POST['description'];


$create_news = $mysqli->prepare('insert into news (title, description) values(?,?)');
$create_news->bind_param('ss', $title, $description);

if($create_news->execute()){
    $response["status"] = "Success";
    $response["message"] = "Added news succesfully";

}else{
    $response["status"] = "Failed";
    $response["message"] = "Failed to add news";

}
$create_news->store_result();

$response['status'] = "success";
echo json_encode($response);


