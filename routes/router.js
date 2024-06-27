//Importing express, Router and controller
const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

//Managing API requests using router
//POST for Signup
router.post("/signup", controller.SignUp);

//POST for Login
router.post("/", controller.Login);

//POST for Shop
router.post("/home", controller.AddShop);

//GET for Shop
router.get("/home/data", controller.GetData);

//POST for UpdateShop
router.post("/update/:id", controller.UpdateShop);

//POST for DeleteShop
router.post("/delete/:id", controller.DeleteShop);

module.exports = router;
