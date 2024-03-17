<?php
include('connection.php');

$id = $_GET['id'];
$new_title = $_POST["new_title"] ;
$new_description = $_POST["new_description"];


$query = $mysqli->prepare("update news set title = ?, description = ? where id = ?");
$query->bind_param("ssi", $new_title, $new_description, $id);

if($query->execute()){
    $response["status"] = "Success";
    $response["message"] = "Edit succeeded";
    $response["news"] = [
        'id' => $id,
        'title' => $new_title,
        'description' => $new_description,
    ];

}else{
    $response["status"] = "Failed";
    $response["message"] = "Edit failed";
}

echo json_encode($response);



