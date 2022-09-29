function AnswerAPI(answer_json, api_name) {
    switch (api_name) {
        case "authentication":
            console.log(answer_json);
            // if (answer_json["type"] == "success") {
            //     window.location.replace("board.html");
            // } else {
            //     document.getElementById("alert-message").innerHTML = answer_json["message"];
            //     document.getElementById("alert-conainer").classList.add("hide");
            //     setTimeout(function () { document.getElementById("alert-conainer").classList.remove("hide"); }, 100);
            // }
            break;

        default:
            console.log(`Api rep doesn't exist. ${api_name}.`);
    }
}

function getRegister() {
    let data = {};
    data["api"] = "getRegister";
    data["username"] = document.getElementById("username").value;
    data["email"] = document.getElementById("email").value;
    data["password"] = document.getElementById("password").value;
    data["conf_password"] = document.getElementById("conf_password").value;

    RequestAPI(url, JSON.stringify(data));
}

function Default() {
    document.getElementById("btn_login").addEventListener("click", function () { getAuth(); }, false);
}

Default();
getPermPage();