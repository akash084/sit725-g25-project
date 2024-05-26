//Setting up the mongodb
//Importing mongoose
const mongoose = require("mongoose");

//connecting to the database
const connect = mongoose.connect(
	"mongodb+srv://akashbaniya084:vzrbwXMePKZ2N6vE@cluster0.tfogrds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

// check the database connection
connect
	.then(() => {
		console.log("Database connected succesfully");
	})
	.catch(() => {
		console.log("Database can not be connected");
	});

	module.exports = { collection, collection2 };
module.exports = { collection, collection2 };