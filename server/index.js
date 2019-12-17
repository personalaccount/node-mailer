// Imports
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys"); // settings and keys

// Connect to Mongo (cloud based)
mongoose.connect(keys.mongoURI);

// define and load mongo user schema
require("./models/User");

// Create an Express application
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000, //cookie lasts 30 days in millisecondskeys
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/auth")(app); //auth.js file returns an anonymous function (module.exports)

// Dynamic port binding - environment variable will be injected by Heroku Fallback to 5000 as default
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT);
