// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Import the authController

// Sign up route
router.post('/signup', authController.signup); // Use the signup function from the controller

// Log in route
router.post('/login', authController.login); // Use the login function from the controller

// Log out route
router.post('/logout', authController.logout); // Use the logout function from the controller

module.exports = router;
