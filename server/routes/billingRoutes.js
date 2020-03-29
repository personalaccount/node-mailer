const keys = require("../config/keys");
// `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.id,
      description: "Test $5 charge"
    });

    req.user.balance += 5;
    const updatedUserModel = await req.user.save();

    res.send(updatedUserModel);
  });
};
