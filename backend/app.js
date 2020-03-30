//! Require Express
const express = require('express');

//+ 1.1) Create an express app to use express features
const app = express();

//+ 1.2) Middlewares
app.use('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: '12312412313123',
            title: 'First server-side post',
            content: 'This is coming from the server!'
        },
        {
            id: 'fas2312123132',
            title: 'Second server-side post',
            content: 'This is coming from the server too!'
        }
    ];
    res.json({
        message: 'Posts fetched successfully!',
        posts
    });
});

//+ 1.3) Export to the server
module.exports = app;
