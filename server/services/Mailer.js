const sendgrid = require("sendgrid");
const helper = sendgrid.mail; //helper obj. that helps create the mailer
const keys = require("../config/keys.js");

class Mailer extends helper.Mail {

}
