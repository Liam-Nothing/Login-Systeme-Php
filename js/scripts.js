function RequestAPI(url, data){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let json = JSON.parse(xhr.responseText);
            console.log(json);
            alert(JSON.stringify(json));
        }
    };
    xhr.send(data);
}

function getAuth(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // let url = "https://api.nothingelse.fr/";
    let url = "http://localhost/api/";
    let api = "user_open_session";
    let data = JSON.stringify({"api": api, "username": username, "password": password});

    RequestAPI(url, data);
}

function logoutAuth(){

    // let url = "https://api.nothingelse.fr/";
    let url = "http://localhost/api/";
    let api = "user_logout";
    let data = JSON.stringify({"api": api});

    RequestAPI(url, data);
}

document.getElementById("login_btn").addEventListener("click", function() {getAuth();}, false); 
document.getElementById("logout_btn").addEventListener("click", function() {logoutAuth();}, false); 