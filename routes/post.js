// routes/post.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController'); // Import the postController

// Create a new post
router.post('/', postController.createPost); // Use the createPost function from the controller

// Get all posts
router.get('/', postController.getAllPosts); // Use the getAllPosts function from the controller

// Get a single post
router.get('/:id', postController.getPostById); // Use the getPostById function from the controller

// Update a post
router.put('/:id', postController.updatePost); // Use the updatePost function from the controller

// Delete a post
router.delete('/:id', postController.deletePost); // Use the deletePost function from the controller

module.exports = router;
