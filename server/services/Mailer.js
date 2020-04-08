const sendgrid = require("sendgrid");
const helper = sendgrid.mail; //helper obj. that helps create the mailer
const keys = require("../config/keys.js");

class Mailer extends helper.Mail {
  constructor(survey, content) {
    const { subject, recipients } = survey;
    super();

    this.from_email = new.helper.Email("no-reply@recruiforce");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);
  }
}

module.exports = Mailer;
