const url = "http://localhost/Login-Systeme-Php/api";

function RequestAPI(url, data) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let json = JSON.parse(xhr.responseText);
            switch (JSON.parse(data)["api"]) {
                case "view_message_json":
                    console.log(json);
                    break;

                default:
                    console.log(`Api rep doesn't exist. ${JSON.parse(data)["api"]}.`);
            }
        }
    };
    xhr.send(data);
}

function getAuth() {
    let data = {};
    data["api"] = "authentication";
    data["username"] = document.getElementById("username").value;
    data["password"] = document.getElementById("password").value;

    RequestAPI(url, JSON.stringify(data));
}

function Default() {
    document.getElementById("btn_login").addEventListener("click", function () { getAuth(); }, false);
}

Default();