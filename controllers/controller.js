// const MongoDBData = require("../models/model");

const createCard = async (req, res) => {
	let form = req.body;
	// let result = await MongoDBData.postCard(card);
	// MongoDBData.client.close();
	res.json({ statusCode: 201, message: "success", data: form });
};

const getCards = async (req, res) => {
	let form = req.body;
	// let result = await MongoDBData.getAllCards();
	// MongoDBData.client.close();
	res.json({ statusCode: 201, message: "success", data: form });
};

module.exports = {
	createCard,
	getCards,
};
