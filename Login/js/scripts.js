/* Api management */

function AnswerAPI(answer_json, api_name) {

    if (!getCookie("PHPSESSID")) {
        setCookie("PHPSESSID", answer_json["session"], 3);
    }

    if (answer_json["type"] == "success") {

        alert_view(false);

        switch (api_name) {

            case "authentication":
                // console.log(answer_json);
                /* Login valid */
                /* If test id_role */

                window.location.replace("../Board/");

                break;
    
            case "getpermpage":
                // console.log(answer_json)
                if (answer_json["redirect"] != false) {
                    /* Aleready logged */
                    window.location.replace("../Board/");
                }else{
                    /* 
                        Display block page ? 
                        Loading by default ?
                        NOP -->
                        Add font modal loading
                        and remove it after
                    */

                    document.getElementById("loading_section").classList.add("hide");
                }
                break;
    
            default:
                console.log(`Api rep doesn't exist. ${api_name}.`);
                alert_view(true, `Api rep doesn't exist. ${api_name}.`);
        }
    }else{
        console.log(answer_json["message"]);
        alert_view(true, answer_json["message"]);
    }
}

function getPermPage() {
    let data = {};
    let api = "getpermpage";

    data["url"] = window.location.href;
    data["redirect"] = "../Board/";
    data["need_connect"] = 0;

    RequestAPI(url, api, JSON.stringify(data), getCookie("PHPSESSID"));
}

function getAuth() {
    let data = {};
    let api = "authentication";

    data["username"] = document.getElementById("username").value;
    data["password"] = document.getElementById("password").value;

    RequestAPI(url, api, JSON.stringify(data), getCookie("PHPSESSID"));
}

/**********************************************************************************************/

function alert_view(visibility = false, text = null) {
    alert_container = document.getElementById("alert_section");
    alert_content = document.getElementById("alert_content");

    if (visibility){
        alert_container.classList.remove("hide");
        alert_content.innerHTML = text;
    }else{
        alert_container.classList.add("hide");
    }

}

function Default() {
    document.getElementById("btn_login").addEventListener("click", function () { getAuth(); }, false);
}

Default();
getPermPage();