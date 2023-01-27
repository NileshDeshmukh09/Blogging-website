const express = require('express')
const router = express.Router()
const postController = require('../controllers/post.controller');
const {  JWTAuth } = require("../middlewares");

// create a new post
router.post('/post', [JWTAuth.verifyToken ], postController.createPost );

// // create a new post
// router.get('/getposts', [JWTAuth.verifyToken ], postController.createPost);

// // create a new post
// router.delete('/delete', [JWTAuth.verifyToken ], postController.createPost);

module.exports = router 