// Import necessary libs
const express = require('express'); // app framework
const passport = require('passport'); // authentication middleware for Node.js
const passGoogleStrategy = require('passport-google-oauth20').Strategy; // google strategy for passport

// Import clientid and secret keys
const keys = require('./config/keys');

// Create an express application
const app = express();

passport.use(
    new passGoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback' // the route that the user will be sent to after they grant permissions to the application
    }, (accessToken) => {
        console.log(accessToken);
    })
);

// Routes

// Auth route handler Oauth flow is managed by passport
app.get(
    '/auth/google',
    passport.authenticate('google',{
        scope: ['profile', 'email']
    })
);

/*
 Dynamic port binding for Heroku
 N.B: environment variable will be injected by Heroku
 Fallback to 5000 as default
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT);