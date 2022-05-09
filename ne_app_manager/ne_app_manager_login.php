<?php

    if(isset($_SESSION["id"])){
        $return_data["id"] = 2;
        $return_data["type"] = "error";
        $return_data["message"] = "You are already logged";
    }else{
        if(isset($data_from_client)){
            $data = array(["username", 50], ["password", 255]);
            $data = data_security($data_from_client, $data);

            if(!$error){
                $sqlr = $database->prepare("SELECT `username`, `password`, `id` FROM `app_ne_manager` WHERE username = :username");
                $sqlr->bindParam(':username', $data["username"]);
                $sqlr->execute();
                $sqlr_rows = $sqlr->fetchAll();
        
                if (!empty($sqlr_rows)) {
                    if(password_verify($data["password"], $sqlr_rows[0]["password"])){
                        $_SESSION["id"] = $sqlr_rows[0]["id"];
                        $_SESSION["username"] = $sqlr_rows[0]["username"];
                        $_SESSION["id_role"] = $sqlr_rows[0]["id_role"];
                        $return_data["id"] = 1;
                        $return_data["message"] = "Good password";
                        $return_data["type"] = "success";
                        $return_data["php_session_id"] = session_id();
                    }else{
                        $return_data["id"] = 2;
                        $return_data["type"] = "error";
                        $return_data["message"] = "Bad password";
                    }
                }else{
                    $return_data["id"] = 2;
                    $return_data["type"] = "error";
                    $return_data["message"] = "Bad user";
                }
            }else{
                $return_data["id"] = 2;
                $return_data["type"] = "error";
                $return_data["message"] = "Error!";
            }
        }
    }