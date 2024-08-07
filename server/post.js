const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

module.exports = (upload) => {
    // Create a new post with optional image upload
    router.post('/', upload.single('image'), async (req, res) => {
        try {
            const newPost = new Post({
                text: req.body.text,
                image: req.file ? req.file.path : null
            });

            await newPost.save();
            res.status(201).json(newPost);
        } catch (error) {
            res.status(500).json({ error: 'Server Error' });
        }
    });

    // Get all posts
    router.get('/', async (req, res) => {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ error: 'Server Error' });
        }
    });

    return router;
};