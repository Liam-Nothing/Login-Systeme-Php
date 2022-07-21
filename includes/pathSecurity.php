<?php


function ImConnected($Connected = false, $redirectPageConnected = "index.php") {
    // if(isset($_SESSION["id"])){
    if($Connected){
        header('Location: '.$redirectPageConnected);
        exit(0);
    }else{
        $return_data["message"] = "You are not logged";
    }
}