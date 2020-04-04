const requireLogin = require("../middlewares/requireLogin"); // require auth middleware to check if the user is logged in
const requireCredits = require("../middlewares/requireCredits");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {

    next();
  });
};
