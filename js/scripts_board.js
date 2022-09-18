function AnswerAPI(answer_json, api_name) {
	switch (api_name) {
		case "logout":
			console.log(answer_json);
			window.location.replace("index.php");
			break;

		default:
			console.log(`Api rep doesn't exist. ${JSON.parse(data)["api"]}.`);
	}
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