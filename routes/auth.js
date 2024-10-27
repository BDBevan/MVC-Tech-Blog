// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Import the authController

// GET route for sign-up page
router.get('/signup', (req, res) => {
    res.render('signup'); // Render the signup view
});

// POST route for sign-up
router.post('/signup', authController.signup); // Use the signup function from the controller

// GET route for login page
router.get('/login', (req, res) => {
    res.render('login'); // Render the login view
});

// POST route for login
router.post('/login', authController.login); // Use the login function from the controller

// POST route for logout
router.post('/logout', authController.logout); // Use the logout function from the controller

module.exports = router;
