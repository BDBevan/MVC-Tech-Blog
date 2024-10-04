// routes/auth.js
const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');

// Sign up route
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = await User.create({
            username,
            password: hashedPassword,
        });
        req.session.userId = newUser.id; // Log the user in
        res.redirect('/posts'); // Redirect to posts/dashboard
    } catch (err) {
        res.status(500).json(err);
    }
});

// Log in route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (user && await bcrypt.compare(password, user.password)) {
        req.session.userId = user.id; // Log the user in
        res.redirect('/posts'); // Redirect to posts/dashboard
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Log out route
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json(err);
        }
        res.redirect('/auth'); // Redirect to login page or homepage
    });
});

module.exports = router;

