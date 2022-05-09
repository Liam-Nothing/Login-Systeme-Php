function RequestAPI(url, data){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let json = JSON.parse(xhr.responseText);
            console.log(json);
        }
    };
    xhr.send(data);
}

function getAuth(){
    let api = "app_ne_manager";
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let data = JSON.stringify({"api": api, "username": username, "password": password});
    let url = "http://localhost/Login-Systeme-Php/api";

    RequestAPI(url, data);
}

document.getElementById("btn_connect").addEventListener("click", function () {getAuth();}, false); 