/* https://stackoverflow.com/questions/920670/read-session-id-using-javascript#answer-19839611 */
function getPHPSessionId(){
    var jsId = document.cookie.match(/PHPSESSID=[^;]+/);
    if(jsId != null) {
        if (jsId instanceof Array)
            /* substring "PHPSESSID=" */
            jsId = jsId[0].substring(10);
        else
            jsId = jsId.substring(10);
    }
    return jsId;
}