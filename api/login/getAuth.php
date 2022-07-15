<?php

// Need session start

$data = array(["username", 60, 1], ["password", 500, 1]);
$data = data_security($data_from_client, $data);

if (!($data["error"])) {

	// Test if user is in DB

	$return_data["type"] = "success";
	$return_data["message"] = "User connected";
} else {
	$return_data["type"] = "error";
	$return_data["message"] = "Client data error";
}
