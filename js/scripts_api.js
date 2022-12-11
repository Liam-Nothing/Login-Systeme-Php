/* API communication */

const url = "../api/";

function RequestAPI(url, api, data, session = null) {
    let xhr = new XMLHttpRequest();

    xhr.open("POST", url+"?NE-API="+api+"&NE-SESSION-ID="+session, true);

    /* OVH cloud server don't accept custom headers, so we use GET to pass API and SESSION ID */
    // xhr.open("POST", url, true);
    // xhr.setRequestHeader("NE-API", api);
    // xhr.setRequestHeader("NE-SESSION-ID", session);

    /* Disable content-type if send data like files */
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let json = JSON.parse(this.responseText);
            AnswerAPI(json, api);
        }
    };

    xhr.send(data);
}

/**********************************************************************************************/

/* Cookie management */
/* https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript#answer-24103596 */

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

/**********************************************************************************************/