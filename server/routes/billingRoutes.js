module.exports = app => {
  app.post("/api/stripe", (req, res) => {
    var stripe = require("stripe")(
      "sk_test_Oo9dBQqpX1h0NJtXDTN3yxol00VPVDM3a7"
    );

    // `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token
    stripe.charges.create(
      {
        amount: 2000,
        currency: "usd",
        source: "tok_mastercard",
        description: "My First Test Charge (created for API docs)"
      },
      function(err, charge) {
        // asynchronously called
      }
    );
  });
};
