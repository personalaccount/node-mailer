/*
   Authentication is done with the help of passport-handler.js
   See servcices/passport-handler.js for details
 */

const passport = require("passport"); // authentication middleware for Node.js


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
      res.redirect("/account");
    }
  );

  app.get("/logout", (req, res) => {
    /*
      The logout() function is automatically attached by passport to the request object.
      It takes the cookie that contains the user's id and removes the id from the cookie.
    */
    req.logout();
    res.redirect("/");
  });
};
