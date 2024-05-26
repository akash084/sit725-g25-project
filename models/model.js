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
//Creating the Schema(structure for database)
const SignupSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const ShopSchema = new mongoose.Schema({
	shopname: {
		type: String,
		required: true,
	},
});

//Creating the collections(users and shop) for the databases
const collection = new mongoose.model("users", SignupSchema);
const collection2 = new mongoose.model("shop", ShopSchema);
module.exports = { collection, collection2 };
