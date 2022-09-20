<?php

if (isset($_SESSION["id"])) {
    $data = array(["url", 500, 1]);
    $data = data_security($data_from_client, $data);

    if (empty($data["type"]) or $data["type"] != "error") {
        $return_data["type"] = "success";
        $return_data["level"] = $_SESSION["level"];
        $return_data["url"] = $data["url"];

        /* get routes to set level require */


    } else {
        $return_data["type"] = "error";
        $return_data["data"] = $data;
    }
} else {
    $return_data["type"] = "error";
    $return_data["message"] = "No session id";
}
