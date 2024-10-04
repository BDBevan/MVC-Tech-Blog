// routes/index.js
const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const postRoutes = require('./post');

// Use the auth routes
router.use('/auth', authRoutes);

// Use the post routes
router.use('/posts', postRoutes);

// Homepage route
router.get('/', (req, res) => {
    res.redirect('/auth'); // Redirect to auth or your homepage
});

module.exports = router;
