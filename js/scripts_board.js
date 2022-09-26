function AnswerAPI(answer_json, api_name) {
    switch (api_name) {
        case "logout":
            console.log(answer_json);
            window.location.replace("index.html");
            break;

        case "getpermpage":
            console.log(answer_json)
            if (answer_json["type"] == "success" && answer_json["redirect"] != false) {
                window.location.replace("http://" + window.location.hostname + "/" + answer_json["redirect"]);
            }
            break;

        default:
            console.log(`Api rep doesn't exist. ${JSON.parse(data)["api"]}.`);
    }
}

function getPermPage() {
    let data = {};
    data["api"] = "getpermpage";
    data["php_session_id"] = getPHPSessionId();
    data["url"] = window.location.href;
    data["redirect"] = "Login-Systeme-Php/index.html";
    data["need_connect"] = 1;

    RequestAPI(url, JSON.stringify(data));
}

function getLogout() {
    let data = {};
    data["api"] = "logout";

    RequestAPI(url, JSON.stringify(data));
}

function Default() {
    document.getElementById("btn_logout").addEventListener("click", function () { getLogout(); }, false);
}

Default();
getPermPage();