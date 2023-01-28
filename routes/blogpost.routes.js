const express = require('express')
const router = express.Router()
const postController = require('../controllers/blog.controller');
const {  JWTAuth } = require("../middlewares");

// create a new post
router.post('/posts', [JWTAuth.verifyToken ], postController.createBlogpost );


// GET ALL BLOG-POST BY  AUTHENTICATED USER
router.get('/posts', [JWTAuth.verifyToken ], postController.getAllPostsOfUserID);

// GET-ONE-BLOG-POST
router.get('/posts/:id', [JWTAuth.verifyToken] , postController.getOnePost);

// UPDATE BLOG-POST
router.put('/posts/:id', [JWTAuth.verifyToken ], postController.updateBlog );


// DELETE BLOG-POST
router.delete('/posts/:id', [JWTAuth.verifyToken ], postController.deletePost );

module.exports = router 