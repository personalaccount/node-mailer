module.exports = app => {
  app.get("/api/user", (req, res) => {
    res.send(req.user);
  });
};
