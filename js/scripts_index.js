function AnswerAPI(answer_json, api_name) {
    switch (api_name) {
        case "authentication":
            console.log(answer_json);
            if (answer_json["type"] == "success") {
                window.location.replace("board.php");
            } else {
                document.getElementById("alert-message").innerHTML = answer_json["message"];
                document.getElementById("alert-conainer").classList.add("hide");
                setTimeout(function () { document.getElementById("alert-conainer").classList.remove("hide"); }, 100);
            }
            break;

        case "getpermpage":
            console.log(answer_json)
            break;

        default:
            console.log(`Api rep doesn't exist. ${api_name}.`);
    }
}

function getPermPage() {
    let data = {};
    data["api"] = "getpermpage";
    data["php_session_id"] = getPHPSessionId();
    data["url"] = window.location.href;

    RequestAPI(url, JSON.stringify(data));
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
getPermPage();