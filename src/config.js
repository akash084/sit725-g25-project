const mongoose = require("mongoose");
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

// Create a schema
const LoginSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});
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

// collection part
const collection = new mongoose.model("users", SignupSchema);

module.exports = collection;
