import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Billing extends Component {
  render() {
    return (
      <StripeCheckout
          name={process.env.REACT_APP_APP_NAME}
          description="Basic account"
        amount={500}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={token => console.log(token)}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default Billing;
