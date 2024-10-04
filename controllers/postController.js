// controllers/postController.js
const { Post, User } = require('../models');

// Create a new post
const createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        await Post.create({
            title,
            content,
            userId: req.session.userId, // Associate with logged-in user
        });
        res.redirect('/posts'); // Redirect to posts/dashboard
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({ include: User });
        res.render('dashboard', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get a single post
const getPostById = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, { include: User });
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.render('post', { post });
    } catch (err) {
        res.status(500).json(err);
    }
};

// Update a post
const updatePost = async (req, res) => {
    const { title, content } = req.body;
    try {
        await Post.update({ title, content }, { where: { id: req.params.id } });
        res.redirect('/posts'); // Redirect to posts/dashboard
    } catch (err) {
        res.status(500).json(err);
    }
};

// Delete a post
const deletePost = async (req, res) => {
    try {
        await Post.destroy({ where: { id: req.params.id } });
        res.redirect('/posts'); // Redirect to posts/dashboard
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
};
