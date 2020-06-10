const route = require("express").Router();

const Survey = require("../models/Survey");
const auth = require("../middlewares/authCheck");
const credits = require("../middlewares/creditsCheck");

route.post("/api/surveys", auth, credits, async (req, res) => {
  try {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email })),
      _user: req.user._id,
      dateSent: Date.now()
    });
    await survey.save();
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
