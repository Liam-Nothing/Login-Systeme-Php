<?php


function ImConnected($needConnect = false, $redirectPageConnected = "index.php") {
    // if(isset($_SESSION["id"])){
    if($needConnect){
        header('Location: '.$redirectPageConnected);
        exit(0);
    }else{
        $return_data["message"] = "You are not logged";
    }
}

