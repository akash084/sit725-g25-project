const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

//POST
router.post("/post", controller.createCard);

//GET
router.get("/post", controller.getCards);

module.exports = router;
