//Importing the MongoDB models from model.js
const MongoDBData = require("../models/model");

//It is used to encrypt and compare the passwords
const bcrypt = require("bcrypt");

//SignUp function to get the submitted signup details, checking the existing users, creating a new user
const SignUp = async (req, res) => {
	const data = {
		name: req.body.username,
		email: req.body.email,
		password: req.body.password,
	};

	// check if the user already exists in the database
	const existingUser = await MongoDBData.collection.findOne({
		name: data.name,
	});
	if (existingUser) {
		// alert("Username already exists.");
		res.send("User already exists. Please choose a different username.");
	} else {
		// hash the password using bcrypt
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(data.password, saltRounds);

		// Replace the hash password with original password
		data.password = hashedPassword;
		const userdata = await MongoDBData.collection.insertMany(data);
		console.log(userdata);
		res.render("login");
	}
};

//Login function to check and approve the existing users
const Login = async (req, res) => {
	try {
		const check = await MongoDBData.collection.findOne({
			name: req.body.username,
		});
		if (!check) {
			res.send("user name cannot be found.");
		}

		//compare the hash password from the database with the plain text
		const isPasswordMatch = await bcrypt.compare(
			req.body.password,
			check.password
		);
		if (isPasswordMatch) {
			res.render("home");
		} else {
			req.send("Sorry, Wrong password.");
		}
	} catch {
		res.send("Sorry, wrong Details");
	}
};

// Checks the existing shops and adds the new one
const AddShop = async (req, res) => {
	const data = {
		shopname: req.body.shopname,
	};

	const existingShop = await MongoDBData.collection2.findOne({
		shopname: data.shopname,
	});
	if (existingShop) {
		res.send("Shop already exists. Please choose a different shop name.");
	} else {
		const shopdata = await MongoDBData.collection2.insertMany(data);
		console.log(shopdata);
		res.render("home");
	}
};

// Function to get the shops from the database and if received send the data as response
const GetData = async (req, res) => {
	try {
		const shop = await MongoDBData.collection2.find();
		res.json({ statusCode: 201, message: "success", data: shop });
	} catch (error) {
		res.status(200).json({ message: error.message });
	}
};

// Exporting the functons and database models
module.exports = {
	MongoDBData,
	SignUp,
	Login,
	AddShop,
	GetData,
};
