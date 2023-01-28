const express = require('express')
const router = express.Router()
const postController = require('../controllers/blog.controller');

// GET ALL POST
router.get('/',  postController.getAllPosts);

module.exports = router 