//! 1) Require Express
const express = require('express');
//! 3) Require body-parse to extrat the incoming body from the request
const bodyParser = require('body-parser');
//! 4) Require mongoose
const mongoose = require('mongoose');
//! 5) Require the Post Schema
const Post = require('./models/post');
//! 6) Require dotenv package
require('dotenv').config();

//+ 1.1) Create an express app to use express features
const app = express();

//+ 4.1) Connect our mongoose to mongoDB
mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('Connection failed!');
    });

//+ 3.1) This will return a valid express middleware for parsing json data
app.use(bodyParser.json());
//+ 3.1) This will parse the url encode data
//-    3.1) Extended: false to onlly support default features
app.use(bodyParser.urlencoded({ extended: false }));

//! 2) Set a Header so we can access our api no matter what is the origin (to avoid CORS)
app.use((req, res, next) => {
    //+ 2.1) response a Header (header key, header value);
    //+      '*', no matter the domain the app is sending the request, it's allowed to access the resources
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

//+ 3.2) Post Request - Middleware
app.post('/api/posts', (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save().then((data) => {
        res.json({
            postId: data._id,
            message: 'Post added successfully'
        });
    });
});

//+ 1.2) Get Request - Middlewares
app.get('/api/posts', async (req, res, next) => {
    const posts = await Post.find().select('-createdAt -updatedAt -__v');
    res.json({
        message: 'Posts fetched successfully!',
        posts
    });
});

//+ 3.3) Delete Request - Middleware
app.delete('/api/posts/:id', async (req, res, next) => {
    await Post.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Post deleted!' });
});

//+ 1.3) Export to the server
module.exports = app;
