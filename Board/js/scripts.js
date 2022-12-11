/* Api management */

function AnswerAPI(answer_json, api_name) {

    if (!getCookie("PHPSESSID")) {
        setCookie("PHPSESSID", answer_json["session"], 3);
    }

    if (answer_json["type"] == "success") {
        switch (api_name) {

            case "logout":
                // console.log(answer_json);
                window.location.replace("../Login/");
                break;

                case "getpermpage":
                    // console.log(answer_json)
                    if (answer_json["redirect"] != false) {
                        /* Aleready logged */
                        window.location.replace("../Login/");
                    }else{
                        document.getElementById("loading_section").classList.add("hide");
                    }
                    break;
    
            default:
                console.log(`Api rep doesn't exist. ${api_name}.`);
        }
    }else{
        console.log(answer_json["message"]);
    }
}

function getPermPage() {
    let data = {};
    let api = "getpermpage";

    data["url"] = window.location.href;
    data["redirect"] = "/Login/";
    data["need_connect"] = 1;

    RequestAPI(url, api, JSON.stringify(data), getCookie("PHPSESSID"));
}

function getLogout() {
    let data = {};
    let api = "logout";

    RequestAPI(url, api, JSON.stringify(data), getCookie("PHPSESSID"));
}

/**********************************************************************************************/

function Default() {
    document.getElementById("btn_logout").addEventListener("click", function () { getLogout(); }, false);
}

Default();
getPermPage();