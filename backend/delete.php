<?php
include('connection.php');

$id = $_GET['id'];

$query = $mysqli->prepare("delete from news where id = ?");
$query->bind_param("i", $id);
$query->execute();
$query->store_result();

$response ["status"] = "Success";
$response ["message"] = "News successfully deleted";

echo json_encode($response);