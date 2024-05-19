const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

//POST for Signup
router.post("/signup", controller.SignUp);

//POST for Login
router.post("/login", controller.Login);

module.exports = router;
