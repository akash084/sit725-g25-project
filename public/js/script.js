function getShops() {
	//Invoking Get request and using the response(shops data including name and id) obtained to display it on dashboard page
	$.get("/home/data", (response) => {
		//Storing the obtained data from get request
		responseList = response.data;
});
}

//When the app is started in the browser the below js function runs
$(document).ready(function () {
getShops();
});
