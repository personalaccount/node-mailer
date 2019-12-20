const passport = require("passport");
const passGoogleStrategy = require("passport-google-oauth20").Strategy; // google strategy for passport
const mongoose = require("mongoose"); // require Mongoose library
const keys = require("../config/keys");

// Fetch the users model from mongoose
const User = mongoose.model("users"); // User is now a model class - which represents the entire collection

// Define serialization function and pass it on to passport
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
  new passGoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback" // the route that the user will be sent to after they grant permissions to the application
    },

    async (accessToken, refreshToken, profile, done) => {
      // Check to see if the user is already registered
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        console.log("User with googleId:" + profile.id + " already exists!");
        done(null, existingUser);
      } else {
        // Create a new instance of user and save it to MongoDB

        const newuser = await new User({
          googleId: profile.id,
          firstName: profile._json.given_name,
          lastName: profile._json.family_name,
          email: profile._json.email,
          accessToken: accessToken,
          refreshToken: refreshToken
        }).save();

        done(null, user);
      }
    }
  )
);
