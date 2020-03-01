// Imports
const express = require("express"); // Express.js
const mongoose = require("mongoose"); // Interracting with MongoDB
const cookieSession = require("cookie-session"); // Cookie-Session library, used instead of the one provided by Express.js
const passport = require("passport"); // Passport.js handles authentication and registration, including OAuth
const keys = require("./config/keys");
const settings = require("./config/app-settings");

require("./models/User"); // define and load mongo user schema
require("./services/passport-handler");

// Connect to Mongo (cloud based)
mongoose.connect(keys.mongoURI);

// Create an Express application
const app = express();

/*
    Assign some data to the cookie, cookie-session as a middleware
    takes data out of that cookie and assigns it to req.session property
 */

// Fire up auth. middlewares
app.use(
  cookieSession({
    maxAge: settings.cookieMaxAge,
    keys: [keys.cookieKey]
  })
);

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

if (process.env.NODE_ENV === "production") {
  // Express will serve production assets - main.js, main.css
  app.use(express.static("client/build"));

  // Express will serve index.html if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Dynamic port binding - environment variable will be injected by Heroku Fallback to 5000 as default
const PORT = process.env.PORT || settings.defaultPort;

// Start the server
app.listen(PORT);
