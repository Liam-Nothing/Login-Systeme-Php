<?php

/* Use cookie from js to log session */
$data = array(["api", 30, 1], ["php_session_id", 100, 1]);
$data = data_security($data_from_client, $data);
if (empty($data["type"]) or $data["type"] != "error") {
    session_id($data["php_session_id"]);
} else {
    $data = array(["api", 30, 1]);
    $data = data_security($data_from_client, $data);
}

session_start();
$return_data["session"] = session_id();

$data = array(["api", 60, 1]);
$data = data_security($data_from_client, $data);

if (empty($data["type"]) or $data["type"] != "error") {
    switch ($data["api"]) {
        case "authentication":
            require_once(dirname(__FILE__) . "/../login/getAuth.php");
            break;
        case "logout":
            require_once(dirname(__FILE__) . "/../login/getLogout.php");
            break;
        case "cookie_is_registered":
            require_once(dirname(__FILE__) . "/../login/getCookieIsRegistered.php");
            break;

        default:
            $return_data["type"] = "error";
            $return_data["message"] = "API doesnt exist";
    }
} else {
    $return_data["type"] = "error";
    $return_data["message"] = "Client data error";
}
