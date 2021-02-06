import React from "react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51IHb6EBsADiibGEUZ8fxtjeZtZZpwbfYyGf91LBgSfwiEgusMKgjPg7YmWkhUBhOrCvzj86cFNgi40MBPfjhtdxI00E5l3HXU6"
);

const StripeButton = ({ quantity, price }) => {
  const data = { quantity, price };
  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    console.log(session);

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <button
      type="button"
      role="link"
      onClick={handleClick}
      className="btn btn-block"
      style={{ backgroundColor: "#8bd0f0" }}
    >
      Checkout
    </button>
  );
};

export default StripeButton;
