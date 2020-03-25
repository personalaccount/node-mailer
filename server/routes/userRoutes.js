module.exports = app => {
  app.get("/api/user", (req, res) => {
    console.log(req.user);
    res.send(req.user);
  });
};
