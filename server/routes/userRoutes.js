const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.get("/api/user", (req, res) => {

    let msg = (!req.user) ? "User not logged in" : req.user
    console.log(msg)

    res.send(req.user);
  });
};
