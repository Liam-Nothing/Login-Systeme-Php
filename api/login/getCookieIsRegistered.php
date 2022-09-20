<?php

if (isset($_SESSION["id"])) {
    $return_data["type"] = "success";
    $return_data["level"] = $_SESSION["level"];
}else{
    $return_data["type"] = "error";
}