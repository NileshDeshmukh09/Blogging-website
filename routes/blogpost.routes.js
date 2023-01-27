const express = require('express')
const router = express.Router()
const postController = require('../controllers/blog.controller');
const {  JWTAuth } = require("../middlewares");

// create a new post
router.post('/posts', [JWTAuth.verifyToken ], postController.createBlogpost );

// Get All Post
router.get('/posts', [JWTAuth.verifyToken ], postController.getAllPosts);

// GET-ONE-POST
router.get('/posts/:id', [JWTAuth.verifyToken] , postController.getOnePost);

// DELETE
router.delete('/posts/:id', [JWTAuth.verifyToken ], postController.deletePost );

module.exports = router 