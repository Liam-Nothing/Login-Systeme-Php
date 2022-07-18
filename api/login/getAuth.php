<?php

if(isset($_SESSION["id"])){
    $return_data["id"] = 2;
    $return_data["type"] = "error";
    $return_data["message"] = "You are already logged";
}else{
    if(isset($data_from_client)){
        $data = array(["username", 60, 1], ["password", 500, 1]);
        $data = data_security($data_from_client, $data);

        if (empty($data["type"]) or $data["type"] != "error") {
            $sqlr = $database->prepare("SELECT `username`, `password`, `id` FROM `login_exemple` WHERE username = :username");
            $sqlr->bindParam(':username', $data["username"]);
            $sqlr->execute();
            $sqlr_rows = $sqlr->fetchAll();
    
            if (!empty($sqlr_rows)) {
                if(password_verify($data["password"], $sqlr_rows[0]["password"])){
                    $return_data["type"] = "success";
                    $return_data["message"] = "Good password";
                }else{
                    $return_data["type"] = "error";
                    $return_data["message"] = "Bad password";
                }
            }else{
                $return_data["type"] = "error";
                $return_data["message"] = "Bad user";
            }
        }else{
            $return_data["type"] = "error";
            $return_data["message"] = "Error!";
        }
    }
}