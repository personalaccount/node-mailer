const passport = require('passport'); // authentication middleware for Node.js
const passGoogleStrategy = require('passport-google-oauth20').Strategy; // google strategy for passport
const keys = require('../config/keys'); // Import clientid and secret keys

passport.use(
    new passGoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback' // the route that the user will be sent to after they grant permissions to the application
    }, (accessToken, refreshToken, profile, done) => {
        console.log('accessToken: ', accessToken);
        console.log('refreshToken: ', refreshToken);
        console.log('profile: ', profile);
    })
);

module.exports = app => {
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
