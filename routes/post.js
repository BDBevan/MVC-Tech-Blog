// routes/post.js
const express = require('express');
const router = express.Router();
const { Post, User } = require('../models');

// Create a new post
router.post('/', async (req, res) => {
    const { title, content } = req.body;
    const newPost = await Post.create({
        title,
        content,
        userId: req.session.userId, // Associate with logged-in user
    });
    res.redirect('/posts'); // Redirect to posts/dashboard
});

// Get all posts
router.get('/', async (req, res) => {
    const posts = await Post.findAll({ include: User });
    res.render('dashboard', { posts });
});

// Get a single post
router.get('/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id, { include: User });
    res.render('post', { post });
});

// Update a post
router.put('/:id', async (req, res) => {
    const { title, content } = req.body;
    await Post.update({ title, content }, { where: { id: req.params.id } });
    res.redirect('/posts'); // Redirect to posts/dashboard
});

// Delete a post
router.delete('/:id', async (req, res) => {
    await Post.destroy({ where: { id: req.params.id } });
    res.redirect('/posts'); // Redirect to posts/dashboard
});

module.exports = router;
