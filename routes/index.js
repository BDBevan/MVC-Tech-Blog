// routes/index.js
const express = require('express');
const router = express.Router();
const authRoutes = require('./auth'); // Adjust the path as necessary
const postRoutes = require('./post'); // Import your post routes
const homeRoutes = require('./home'); // Import home routes

// Use the routes
router.use('/', homeRoutes); // All routes starting with /
router.use('/auth', authRoutes); // All routes starting with /auth
router.use('/posts', postRoutes); // All routes starting with /posts

module.exports = router;
