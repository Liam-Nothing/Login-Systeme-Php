
<?php

if (isset($_SESSION["id"])) {
	$_SESSION = array();
	if (ini_get("session.use_cookies")) {
		$params = session_get_cookie_params();
		setcookie(
			session_name(),
			'',
			time() - 42000,
			$params["path"],
			$params["domain"],
			$params["secure"],
			$params["httponly"]
		);
	}

	session_destroy();

	$return_data["type"] = "success";
	$return_data["message"] = "You have been disconected";
} else {
	$return_data["type"] = "error";
	$return_data["message"] = "You are not connected";
}

?>
