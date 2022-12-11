<?php

if (isset($_SESSION["id"])) {
    $return_data["type"] = "error";
    $return_data["message"] = "You are already logged";
} else {
    if (isset($data_from_client_POST)) {
        $data = array(
			["username", 100, 3],
			["email", 100, 1],
			["password", 100, 1],
			["conf_password", 100, 1],
			["cgu_checkbox", 2, 0]
        );
        $data = data_security($data_from_client_POST, $data);

        if (empty($data["type"]) or $data["type"] != "error") {

            if ($data["cgu_checkbox"] == 1) {

                if (filter_var($data["email"], FILTER_VALIDATE_EMAIL)) {
                    if ($data["password"] == $data["conf_password"]) {

                        $sqlr = $database->prepare("INSERT INTO users (
                            username,
                            email,
                            password
                        ) VALUES (
                            :username,
                            :email,
                            :password
                        )");

                        $sqlr->bindParam(':username', $data["username"]);
                        $sqlr->bindParam(':email', $data["email"]);
                        $password_crypt = password_hash($data["conf_password"], PASSWORD_DEFAULT);
                        $sqlr->bindParam(':password', $password_crypt);

                        try {
                            if ($sqlr->execute()) {
                                $return_data["type"] = "success";
                                $return_data["message"] = "User created.";
                            }else{
                                $return_data["type"] = "error";
                                $return_data["message"] = "Insert failed";
                            }
                        } catch (PDOException $e) {
                            $return_data["type"] = "error";
                            $return_data["message"] = "Error : ".$e;
                        }

                    }else{
                        $return_data["type"] = "error";
                        $return_data["message"] = "Passwords do not match";
                    }
                }else{
                    $return_data["type"] = "error";
                    $return_data["message"] = "Invalid email.";
                }
            }else{
                $return_data["type"] = "error";
                $return_data["message"] = "You have to accept the general terms of use.";
            }
        } else {
            $return_data["type"] = "error";
            $return_data["message"] = $data["message"];
        }
    }
}