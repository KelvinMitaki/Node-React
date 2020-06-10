const route = require("express").Router();

const Mailer = require("../services/Mailer");
const Survey = require("../models/Survey");
const auth = require("../middlewares/authCheck");
const credits = require("../middlewares/creditsCheck");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

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
    const mailer = new Mailer(survey, surveyTemplate(survey));
    await mailer.send();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
