//! Require Express
const express = require('express');

//+ 1.1) Create an express app to use express features
const app = express();

//! 2) Set a Header so we can access our api no matter what is the origin (to avoid CORS)
app.use((req, res, next) => {
    //+ 2.1) response a Header (header key, header value);
    //+      '*', no matter the domain the app is sending the request, it's allowed to access the resources
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

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
