const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// signup - post
router.post("/auth/signup", authController.signup);

// signin -post
router.post("/auth/signin", authController.signin)

module.exports = router