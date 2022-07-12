<?php

$dbh = new PDO('mysql:host=localhost;dbname=db_blog', 'root', 'antoine');

// var_dump($dbh);

$sql = sprintf(
    "SELECT * from users WHERE  email=password='%s' AND password='%s'",
    'alan@alan.fr',
    '123'
);

foreach ($dbh->query($sql) as $user) {
    var_dump($user['id']);
    var_dump($user['password']);
    var_dump($user['email']);
}

// Formulaire 

// protection avec addslashes
$email = addslashes( "alan@alan.fr'; --" );
$pass = addslashes('blabla');

$sql = sprintf(
    "SELECT * from users WHERE  email=password='%s' AND password='%s'",
    $email,
    $pass
);

echo $sql;

foreach ($dbh->query($sql) as $user) {
    var_dump($user['id']);
    var_dump($user['password']);
    var_dump($user['email']);
}

// Requêtes préparées => optimisation dans PDO pour compiler la requête avec des placeholders, comme conséquence on aura la possibilité de se protéger des injections

$sql = sprintf(
    "SELECT * from users WHERE email=:email AND password=:password",
    $email,
    $pass
);

// compilation dans MySQL de la requête avec des placeholders, ici comme une fonction à deux arguments. On peut l'utiliser autant de fois que l'on veut 
$sth = $dbh->prepare($sql);

// on ne peut plus modifier le SQL donc les requêtes préparées vous protègent des injections.
$email = "alan@alan.fr'; DELETE FROM users ; --" ;
$pass = '';

$sth->execute(['password' => $pass, 'email' => $email]);

foreach ($sth->fetchAll() as $user) {
    var_dump($user['id']);
    var_dump($user['password']);
    var_dump($user['email']);
}
