var express = require("express");
var router = express.Router();

const messages = [
  { text: "Hey Mate", user: "Amando", added: new Date() },
  { text: "Hi Man", user: "Charles", added: new Date() },
  {
    text: "People, Let's start conversation",
    user: "Philip",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages });
});

// POST new message page

module.exports = router;
