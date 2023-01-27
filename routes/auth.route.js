const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { signupVerification } = require("../middlewares");

// signup - post
router.post("/auth/signup",[signupVerification.addMiddlewaresToSignupRequest] , authController.signup);

// signin -post
router.post("/auth/signin", authController.signin)

module.exports = router