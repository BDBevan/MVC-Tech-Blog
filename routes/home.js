// routes/home.js
const express = require('express');
const router = express.Router();

// GET route for the home page
router.get('/', (req, res) => {
    res.render('home'); // Render the home view (home.handlebars)
});

module.exports = router;
