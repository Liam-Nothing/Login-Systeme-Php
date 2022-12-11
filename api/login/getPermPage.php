<?php

$data = array(["url", 500, 1], ["redirect", 500, 1],  ["need_connect", 1, 1]);
$data = data_security($data_from_client_POST, $data);

if (empty($data["type"]) or $data["type"] != "error") {

    $return_data["type"] = "success";
    $actual_path = implode("/", array_slice(explode("/", $data["url"]), 3));

    if ($data["need_connect"] == 1 && isset($_SESSION["id"])) {

        $return_data["redirect"] = False;

    } else if ($data["need_connect"] == 0 && !isset($_SESSION["id"])) {

        $return_data["redirect"] = False;

    }else{

        $return_data["redirect"] = $data["redirect"];

    }

} else {
    $return_data["type"] = "error";
}
