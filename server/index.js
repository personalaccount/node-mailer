// Imports
const keys = require("./config/keys"); // settings and keys
const express = require("express");
const mongoose = require("mongoose");

// Connect to Mongo (cloud based)
mongoose.connect(keys.mongoURI);

// define and load mongo user schema
require("./models/User");

// Create an Express application
const app = express();

// Routes
require("./routes/auth")(app); //auth.js file returns an anonymous function (module.exports)

// Dynamic port binding - environment variable will be injected by Heroku Fallback to 5000 as default
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT);
