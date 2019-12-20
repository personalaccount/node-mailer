/*
   Authentication is done with the help of passport.js
   Auth route is the only place where library is being utilized,
   therefore it is included in the route for convenience and clarity.
 */

const passport = require("passport"); // authentication middleware for Node.js
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
  User.findById(id).then((err, user) => {
    done(err, user);
  });
});

passport.use(
  new passGoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback" // the route that the user will be sent to after they grant permissions to the application
    },
    (accessToken, refreshToken, profile, done) => {
      // Check to see if the user is already registered
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          console.log("User with googleId:" + profile.id + " already exists!");
          done(null, existingUser);
        } else {
          /* Create a new instance of user and save it to MongoDB
          Saved user instance will also be passed back by a
           Promise callback
           */
          new User({
            googleId: profile.id,
            firstName: profile._json.given_name,
            lastName: profile._json.family_name,
            email: profile._json.email,
            accessToken: accessToken,
            refreshToken: refreshToken
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);

module.exports = function(app) {
  // Auth route handler Oauth flow is managed by passport
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // Handle google oauth redirect
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.send("Logged in");
    }
  );

  app.get("/logout", (req, res) => {
    /*
      The logout() function is automatically attached by passport to the request object.
      It takes the cookie that contains the user's id and removes the id from the cookie.
    */
    // console.log("Logging out...");
    req.logout();
    res.redirect("/api/user");
  });

  app.get("/api/user", (req, res) => {
    if (req.user == null) {
      res.send('<a href="/auth/google">Log in with Google</a>');
    }
    res.send(req.user);
  });
};
