const route = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE);

route.post("/api/stripe", (req, res) => {
  stripe.charges.create({
    amount: 500,
    currency: "usd",
    description: "$5 dollars for 5 credits",
    source: req.body.id
  });
  res.redirect("/");
});

module.exports = route;
