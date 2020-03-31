const Post = require('../models/post');

async function getPost(req, res) {
    try {
        const posts = await Post.find().select('-createdAt -updatedAt -__v');
        if (posts) {
            res.json({ posts });
        } else {
            res.status(400).json({ error: "You don't have any post yet!" });
            console.log("You don't have any post yet!");
        }
    } catch (err) {
        console.log('Something went wrong', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

async function addPost(req, res) {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        res.json({
            id: newPost._id,
            title: newPost.title,
            content: newPost.content
        });
    } catch (err) {
        console.log('Something went wrong', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

async function deletePost(req, res) {
    try {
        res.json(await Post.findOneAndDelete({ _id: req.params.id }));
    } catch (err) {
        console.log('Something went wrong', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports = {
    getPost,
    addPost,
    deletePost
};
