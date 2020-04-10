const sendgrid = require("sendgrid");
const helper = sendgrid.mail; //helper obj. that helps create the mailer
const keys = require("../config/keys.js");

class Mailer extends helper.Mail {
  constructor(survey, content) {
    const { subject, recipients } = survey;
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new.helper.Email("no-reply@recruiforce");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking(); // Enable click tracking inside of an email
    this.addRecipients();
  }

  formatAddresses(recipients) {
    // ES6 style destructuring
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "v3/mail/send",
      body: this.toJSON()
    });

    this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
