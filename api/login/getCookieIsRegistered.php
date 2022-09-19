<?php

$data = array(["cookie", 60, 1], ["url", 500, 1]);
$data = data_security($data_from_client, $data);

if (empty($data["type"]) or $data["type"] != "error") {
	$return_data["type"] = "success";
}else{
	$return_data["type"] = "error";
}