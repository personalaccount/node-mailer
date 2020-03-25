const keys = require("../config/keys");
// `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  app.post("/api/stripe", (req, res) => {
    stripe.charges.create(
      {
        amount: 500,
        currency: "usd",
        source: req.body.id,
        description: "Test $5 charge"
      },
      function(err, charge) {
        // asynchronously called
      }
  );
}
