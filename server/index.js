// Import necessary libsc
const keys = require('./config/keys');
const express = require('express');
const mongoose = require('mongoose');

// Connect to Mongo (cloud based)
mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000; // Dynamic port binding - environment variable will be injected by Heroku Fallback to 5000 as default

// load mongo user schema
require('./models/User');


// Create an Express application
const app = express();

// require auth.js file returns an anonymous function (module.exports)
require('./routes/auth')(app);

app.listen(PORT);