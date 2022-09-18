const url = "http://localhost/Login-Systeme-Php/api/";

function RequestAPI(url, data) {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			let json = JSON.parse(xhr.responseText);
			let api = JSON.parse(data)["api"];
			AnswerAPI(json, api);
		}
	};
	xhr.send(data);
}