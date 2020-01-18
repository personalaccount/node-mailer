const passport = require("passport");
const passGoogleStrategy = require("passport-google-oauth20").Strategy; // google strategy for passport
const mongoose = require("mongoose"); // require Mongoose library
const keys = require("../config/keys");

// Fetch the users model from mongoose
const User = mongoose.model("users"); // User is now a model class - which represents the entire collection

// In order to support login sessions, Passport will serialize and deserialize user instances to and from the session.

// Define serialization function and pass it on to passport
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // (async user => {
  //   try {
  //     user = await User.findById(id);
  //   } catch (e) {
  //     console.log(new Error(e));
  //   }
  //   done(null, user);
  // })();

  User.findById(id).then(
    user => {
      done(null, user);
    },
    error => {
      console.log(new Error(error));
    }
  );
});

passport.use(
  new passGoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback", // the route that the user will be sent to after they grant permissions to the application
      proxy: true // Trust proxified requests. Since we're using Heroku, the actual request is proxied through their load balancer.
    },

    async (accessToken, refreshToken, profile, done) => {
      // Check to see if the user is already registered
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        console.log("User with googleId:" + profile.id + " already exists!");
        done(null, existingUser);
      } else {
        // Create a new instance of user and save it to MongoDB

        await new User({
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
