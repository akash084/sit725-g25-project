let express = require("express");
const bodyParser = require("body-parser");
const pasth = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");

const app = express();

// Use this to prevent TypeError: Cannot read properties of undefined (reading '_id')
// app.use(bodyParser.urlencoded({ extended: false }));

//convert data into json format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import routes
let projectsRoute = require("../routes/router");

// Use routes
app.use("/api", projectsRoute);

//Start the server
let port = process.env.port || 3000;

// app.use(express.static(__dirname + "/"));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("login");
});
app.get("/signup", (req, res) => {
	res.render("signup");
});
app.get("/home", (req, res) => {
	res.render("home");
});
app.get("/shop", (req, res) => {
	res.render("shop");
});

app.post("/signup", async (req, res) => {
	const data = {
		name: req.body.username,
		email: req.body.email,
		password: req.body.password,
	};

	// check if the user already exists in the database
	const existingUser = await collection.findOne({ name: data.name });
	if (existingUser) {
		// alert("Username already exists.");
		res.send("User already exists. Please choose a different username.");
	} else {
		// hash the password using bcrypt
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(data.password, saltRounds);

		// Replace the hash password with original password
		data.password = hashedPassword;
		const userdata = await collection.insertMany(data);
		console.log(userdata);
		res.render("login");
	}
});

app.post("/login", async (req, res) => {
	try {
		const check = await collection.findOne({ name: req.body.username });
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
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
