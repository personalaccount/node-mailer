const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin"); // require auth middleware to check if the user is logged in
const requireCredits = require("../middlewares/requireCredits");

const Mailer = require("../services/Mailer");
const defaultSurveyTemplate = require("../services/emailTemplates/defaultTemplate");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body; // ES6 style destructuring to pull out the required properties

    const survey = new Survey({
      title: title,
      subject: subject, // it is possible to just right subject - ES6 style since property and variable name are the same
      body: body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, defaultSurveyTemplate(survey));
  });
};
