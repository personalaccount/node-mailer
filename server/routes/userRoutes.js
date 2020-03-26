module.exports = app => {
  app.get("/api/user", (req, res) => {

    let msg = (req.user === undefined) ? "User not logged in" : req.user
    console.log(msg)

    res.send(req.user);
  });
};
