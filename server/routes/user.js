module.exports = function (app) {
    app.get("/api/user", (req, res) => {
        if (req.user == null) {
            res.send('<a href="/auth/google">Log in with Google</a>');
        }
        res.send('<p><a href="/logout">Log out</a></p>' + "<p>" + req.user + "</p>");
    });
}