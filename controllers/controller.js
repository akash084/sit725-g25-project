const MongoDBData = require("../models/model");
const pasth = require("path");
const bcrypt = require("bcrypt");

// const createCard = async (req, res) => {
// 	let form = req.body;
// 	// let result = await MongoDBData.postCard(card);
// 	// MongoDBData.client.close();
// 	res.json({ statusCode: 201, message: "success", data: form });
// };

// app.post("/signup", async (req, res) => {
// 	const data = {
// 		name: req.body.username,
// 		email: req.body.email,
// 		password: req.body.password,
// 	};

// 	// check if the user already exists in the database
// 	const existingUser = await collection.findOne({ name: data.name });
// 	if (existingUser) {
// 		// alert("Username already exists.");
// 		res.send("User already exists. Please choose a different username.");
// 	} else {
// 		// hash the password using bcrypt
// 		const saltRounds = 10;
// 		const hashedPassword = await bcrypt.hash(data.password, saltRounds);

// 		// Replace the hash password with original password
// 		data.password = hashedPassword;
// 		const userdata = await collection.insertMany(data);
// 		console.log(userdata);
// 		res.render("login");
// 	}
// });
const SignUp = async (req, res) => {
	const data = {
		name: req.body.username,
		email: req.body.email,
		password: req.body.password,
	};

	// check if the user already exists in the database
	const existingUser = await MongoDBData.findOne({ name: data.name });
	if (existingUser) {
		// alert("Username already exists.");
		res.send("User already exists. Please choose a different username.");
	} else {
		// hash the password using bcrypt
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(data.password, saltRounds);

		// Replace the hash password with original password
		data.password = hashedPassword;
		const userdata = await MongoDBData.insertMany(data);
		console.log(userdata);
		res.render("login");
	}
};

// app.post("/login", async (req, res) => {
// 	try {
// 		const check = await collection.findOne({ name: req.body.username });
// 		if (!check) {
// 			res.send("user name cannot be found.");
// 		}

// 		//compare the hash password from the database with the plain text
// 		const isPasswordMatch = await bcrypt.compare(
// 			req.body.password,
// 			check.password
// 		);
// 		if (isPasswordMatch) {
// 			res.render("home");
// 		} else {
// 			req.send("wrong password");
// 		}
// 	} catch {
// 		res.send("wrong Details");
// 	}
// });

const Login = async (req, res) => {
	try {
		const check = await MongoDBData.findOne({ name: req.body.username });
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
			req.send("wrong password");
		}
	} catch {
		res.send("wrong Details");
	}
};

// const getCards = async (req, res) => {
// 	let form = req.body;
// 	// let result = await MongoDBData.getAllCards();
// 	// MongoDBData.client.close();
// 	res.json({ statusCode: 201, message: "success", data: form });
// };

// Function to get the shops from the database and if received send the data as response
const GetData = async (req, res) => {
	try {
		const shop = await MongoDBData.collection2.find();
		res.json({ statusCode: 201, message: "success", data: shop });
	} catch (error) {
		res.status(200).json({ message: error.message });
	}
};
module.exports = {
	MongoDBData,
	SignUp,
	Login,
};
