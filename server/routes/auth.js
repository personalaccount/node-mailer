const passport = require('passport'); // authentication middleware for Node.js
const keys = require('../config/keys');
const passGoogleStrategy = require('passport-google-oauth20').Strategy; // google strategy for passport

passport.use(
    new passGoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback' // the route that the user will be sent to after they grant permissions to the application
    }, (accessToken, refreshToken, profile, done) => {
        console.log('accessToken: ', accessToken, '\n',
            'refreshToken: ', refreshToken, '\n',
            'profile: ', profile);
    })
);

module.exports = function (app) {
    // Auth route handler Oauth flow is managed by passport
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    // Handle google oauth redirect
    app.get(
        '/auth/google/callback',
        passport.authenticate('google')
    );
}
