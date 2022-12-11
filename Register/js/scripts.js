/* Api management */

function AnswerAPI(answer_json, api_name) {

    if (!getCookie("PHPSESSID")) {
        setCookie("PHPSESSID", answer_json["session"], 3);
    }

    if (answer_json["type"] == "success") {

        alert_view(false);

        switch (api_name) {

            case "register":
                window.location.replace("../Login/");
                break;
    
            case "getpermpage":
                // console.log(answer_json)
                if (answer_json["redirect"] != false) {
                    /* Aleready logged */
                    window.location.replace("../Board/");
                }else{
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

function getRegister() {

    let id_list_inp = [
        "username",
        "email",
        "password",
        "conf_password"
    ];

    let id_list_chkbx = [
        "cgu_checkbox"
    ];

    let data = {};
    let api = "register";
    
    id_list_inp.forEach(id => {
        data[id] = document.getElementById(id).value;
    });

    id_list_chkbx.forEach(id => {
        data[id] = document.getElementById(id).checked;
    });

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
    document.getElementById("btn_register").addEventListener("click", function () { getRegister(); }, false);
}

Default();
getPermPage();