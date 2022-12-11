<?php

$prod = true;

if ($prod === true) {
    $config_db = [
        "host" => "localhost",
        "dbname" => "login_exemple",
        "dbusername" => "root",
        "dbpassword" => "",
    ];
} else {
    $config_db = [
        "host" => "",
        "dbname" => "",
        "dbusername" => "",
        "dbpassword" => "",
    ];
}

function connectDB($config_db)
{
    $pdo = new PDO("mysql:host=" . $config_db["host"], $config_db["dbusername"], $config_db["dbpassword"]);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->query("use " . $config_db["dbname"]);
    return $pdo;
}
