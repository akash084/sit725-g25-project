function getShops() {
	//Invoking Get request and using the response(shops data including name and id) obtained to display it on dashboard page
	$.get("/home/data", (response) => {
		//Storing the obtained data from get request
		responseList = response.data;
   
		//Run foreach loop to iterate through each shops and display shopname and its id
		responseList.forEach((element) =>
			//Inserting the Adding the HTML code inside div tag having id = shopContainer
			$("#shopContainer").append(
				"<form action='/home' class='updateForm' method='POST'>" +
					"<li style='display:flex; width:100%; align-items: center;>" +
					"<h4 style='padding:10px'>" +
					element.shopname +
					"</h4>" +
					"<h4 style='padding:10px' id='shopid'>" +
					element._id +
					"<h4>" +
					"<input type='hidden' id='inputid' name='inputid' required/>" +
					"<Button type='button' style='padding:10px' id='updateShop' style='margine:0;padding:0; height:40px'> Update </Button>" +
					"<Button type='button' style='padding:10px' id='deleteShop' style='margine:0;padding:0; height:40px'> Delete </Button>" +
					"</li>" +
					"</form>"
			)
		);
	});
}

//When the app is started in the browser the below js function runs
$(document).ready(function () {
getShops();
});
