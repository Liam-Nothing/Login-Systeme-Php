<?php

$data = array(["api", 60, 1]);
$data = data_security($data_from_client, $data);

if (empty($data["error"])) {
    switch ($data["api"]) {
        case "login":
            require_once(dirname(__FILE__) . "/../ne_app_manager/ne_app_manager_login.php");
            break;

        default:
            $return_data["type"] = "error";
            $return_data["message"] = "API doesnt exist";
    }
} else {
    $return_data["type"] = "error";
    $return_data["message"] = "Client data error";
}
