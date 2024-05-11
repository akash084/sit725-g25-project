// const { json } = require("body-parser");

function loginForm() {
	let formData = {};
	formData.username = $("#username").val();
	formData.password = $("#password").val();

	console.log("Form Data Submitted: ", formData);
	postForm(formData);
}

function getForm(formData) {
	$.get("api/post", formData, function (data, status) {
		console.log(data.data);
		if (data) {
			alert(JSON.stringify(data.data));
		}
	});
}

function postForm(formData) {
	$.post("api/post", formData, function (data, status) {
		// alert("Data " + JSON.stringify(data.data) + "\nStatus " + status);
		getForm(formData);
	});
}

$(document).ready(function () {
	// $(".materialboxed").materialbox();
	// getCards();
	// $(".modal").modal();
	$("#loginSubmit").click(() => {
		loginForm();
	});
});
