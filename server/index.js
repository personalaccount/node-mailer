// Imports
const express = require("express"); // Express.js
const mongoose = require("mongoose"); // Interracting with MongoDB
const cookieSession = require("cookie-session"); // Cookie handling library, used instead of the one provided by Express.js
const passport = require("passport"); // Passport.js handles authentication and registration, including OAuth
const keys = require("./config/keys");

require("./models/User"); // define and load mongo user schema
// require("./services/passport-handler");

// Connect to Mongo (cloud based)
mongoose.connect(keys.mongoURI);

// Create an Express application
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000, //cookie lasts 30 days in millisecondskeys
    keys: [keys.cookieKey]
  })
);

// req.session.SameSite = "lax";

app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/auth")(app); //auth.js file returns an anonymous function (module.exports)

app.get("/", (req, res) => {
  res.redirect("/api/user");
});

app.get("/api/user", (req, res) => {
  if (req.user == null) {
    res.send('<a href="/auth/google">Log in with Google</a>');
  }
  res.send('<p><a href="/logout">Log out</a></p>' + "<p>" + req.user + "</p>");
});

// Dynamic port binding - environment variable will be injected by Heroku Fallback to 5000 as default
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT);
