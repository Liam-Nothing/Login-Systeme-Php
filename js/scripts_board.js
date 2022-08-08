const url = "http://localhost/Login-Systeme-Php/api/";

function RequestAPI(url, data) {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			let json = JSON.parse(xhr.responseText);
			switch (JSON.parse(data)["api"]) {
				case "logout":
					console.log(json);
					window.location.replace("index.php");
					break;

				default:
					console.log(`Api rep doesn't exist. ${JSON.parse(data)["api"]}.`);
			}
		}
	};
	xhr.send(data);
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