const route = require("express").Router();

const auth = require("../middlewares/authCheck");
const credits = require("../middlewares/creditsCheck");

route.post("/api/surveys", auth, credits, (req, res) => {});

module.exports = route;
