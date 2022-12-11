<?php

/* OVH cloud server don't accept custom headers, so we use GET to pass API and SESSION ID */

// if (!(empty($headers_from_client["NE-API"]))) {
if (!(empty($data_from_client_GET["NE-API"]))) {
    $secu_data_api = array(["NE-API", 30, 1]);
    // $secu_data_api = data_security($headers_from_client, $secu_data_api);
    $secu_data_api = data_security($data_from_client_GET, $secu_data_api);
    if (empty($secu_data_api["type"]) or $secu_data_api["type"] != "error") {
        // if (!(empty($headers_from_client["NE-SESSION-ID"]))) {
        if (!(empty($data_from_client_GET["NE-SESSION-ID"]))) {
            $secu_data = array(["NE-SESSION-ID", 100, 5]);
            // $secu_data = data_security($headers_from_client, $secu_data);
            $secu_data = data_security($data_from_client_GET, $secu_data);
            if (empty($secu_data["type"]) or $secu_data["type"] != "error") {
                session_id($secu_data["NE-SESSION-ID"]);
            }
        }

        session_start();
        $return_data["session"] = session_id();

        switch ($secu_data_api["NE-API"]) {
            case "authentication":
                require_once(dirname(__FILE__) . "/../login/getAuth.php");
                break;
            case "logout":
                require_once(dirname(__FILE__) . "/../login/getLogout.php");
                break;
            case "getpermpage":
                require_once(dirname(__FILE__) . "/../login/getPermPage.php");
                break;
            case "register":
                require_once(dirname(__FILE__) . "/../login/getRegister.php");
                break;
    
            default:
                $return_data["type"] = "error";
                $return_data["message"] = "API doesn't exist";
        }

    }else{
        $return_data["type"] = "error";
        $return_data["message"] = $secu_data["message"];
    }
}else{
    $return_data["type"] = "error";
    $return_data["message"] = "No API";
}