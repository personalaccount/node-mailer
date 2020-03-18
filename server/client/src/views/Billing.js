import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Billing extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={token => console.log(token)}
      />
    );
  }
}

export default Billing;
