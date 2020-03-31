//! 1) Import express package
const express = require('express');
//! 4) Logger that logs requests
const logger = require('morgan');
require('dotenv').config();
require('./config/database');

//+ 1.1) create an express app
const app = express();

//+ 1.2) Add express middleware to listen and response
app.use(express.json());

//! Middleware
//+ 4.1) Mount my loggger middleware
app.use(logger('dev'));
//+ 1.3) Mount my json midleware - to response as JSON requests
app.use(express.json());
//+ 1.4) Set .ejs as the default view engine
app.set('view engine', 'ejs');

//! API Routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});
app.use('/api/', require('./routes/posts'));

// Catch all requests
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'inde.html'));
// });

//! Configure to use port 3001 instead of 3000 during development to avoid collision
const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express app running on port ${port}`);
});
