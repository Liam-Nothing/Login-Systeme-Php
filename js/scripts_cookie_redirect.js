/* https://stackoverflow.com/questions/920670/read-session-id-using-javascript#answer-19839611 */
function getPHPSessionId(){
    var jsId = document.cookie.match(/PHPSESSID=[^;]+/);
    if(jsId != null) {
        if (jsId instanceof Array)
            jsId = jsId[0].substring(11);
        else
            jsId = jsId.substring(11);
    }
    return jsId;
}