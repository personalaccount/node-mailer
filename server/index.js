// Import necessary libs
const express = require('express'); // app framework
const passport = require('passport'); // authentication middleware for Node.js
const passGoogleStrategy = require('passport-google-oauth20').Strategy; // google strategy for passport

// Import clientid and secret keys
const keys = require('./config/keys');

// Create an express application
const app = express();

passport.use(new passGoogleStrategy());

// Routes


/*
 Dynamic port binding for Heroku
 N.B: environment variable will be injected by Heroku
 Fallback to 5000 as default
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT);