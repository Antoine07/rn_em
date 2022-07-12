<?php

$dbh = new PDO('mysql:host=localhost;dbname=db_blog', 'root', '');

var_dump($dbh);

$sql = sprintf(
    "SELECT * from users WHERE  email=password='%s' AND password='%s'",
    'alan@alan.fr',
    '123'
);