const { URL } = require("url");

const route = require("express").Router();
const Path = require("path-parser");
const _ = require("lodash");

const Mailer = require("../services/Mailer");
const Survey = require("../models/Survey");
const auth = require("../middlewares/authCheck");
const credits = require("../middlewares/creditsCheck");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

route.post("/api/surveys", auth, credits, async (req, res) => {
  try {
    const { title, subject, body, emails } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: emails.split(",").map(email => ({ email: email.trim() })),
      _user: req.user._id,
      dateSent: Date.now()
    });
    const mailer = new Mailer(survey, surveyTemplate(survey));
    await mailer.send();
    req.user.credits -= 1;
    const user = await req.user.save();
    await survey.save();
    res.send(user);
  } catch (error) {
    res.status(422).send(error);
  }
});

route.get("/api/surveys/thanks", (req, res) =>
  res.send("thanks for the feedback")
);

route.post("/api/surveys/webhooks", (req, res) => {
  const events = req.body.map(event => {
    const pathname = new URL(event.url).pathname;
    const p = new Path("/api/surveys/:surveyId/:choice");
    const match = p.test(pathname);
    if (match) return { email: event.email, ...match };
  });
  const newEvents = events.filter(event => event !== undefined);
  const uniqueEvents = _.uniqBy(newEvents, "email", "surveyId");
});

module.exports = route;
