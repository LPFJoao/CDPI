<?php

require "functions.php";

// require "router.php";

// connect to our MYSQL DB

$dsn = "mysql:host=127.0.0.1;port=3306;dbname=myapp;charset=utf8mb4";

$pdo = new PDO($dsn, 'root');

$statement = $pdo->prepare("select * from posts");

$statement->execute();


$posts = $statement->fetchAll(PDO::FETCH_ASSOC);

dd($posts);