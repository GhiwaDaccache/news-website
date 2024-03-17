<?php
include('connection.php');

if(!empty($_GET["news_id"])){
    $id = intval($_GET["news_id"]);
    $load_news = $mysqli->prepare('select * from news where id =?');
    $load_news->bind_param('i', $id);
}
else{
    $load_news = $mysqli->prepare('select * from news');
}
$load_news->execute();
$load_news->store_result();
$num_rows = $load_news->num_rows();


if($num_rows == 0) {
    $response["status"] = "No news";
    $response["message"] = "Nothing happening today";
}else{
    $news = [];
    $load_news->bind_result($id, $title, $description);
    while ($load_news->fetch()) {
        $single_news = [
            'id' => $id,
            'title' => $title,
            'description' => $description,
        ];
        $news[] = $single_news;
        $response['status'] = 'success';
        $response['news'] = $news;
    }};


echo json_encode($response);

