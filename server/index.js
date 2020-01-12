// Imports
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys"); // settings and keys
require("./models/User"); // define and load mongo user schema
require("./services/passport-handler");

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

app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/auth")(app); //auth.js file returns an anonymous function (module.exports)

app.get("/", (res, req) => {
  res.redirect("/api/user");
});
// Dynamic port binding - environment variable will be injected by Heroku Fallback to 5000 as default
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT);
