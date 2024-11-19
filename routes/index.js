const { Router } = require("express");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages })
);

indexRouter.get("/new", (req, res) => res.render("form"));

indexRouter.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const authorName = req.body.authorName;
  messages.push({ text: messageText, user: authorName, added: new Date() });
  res.redirect("/");
});

module.exports = indexRouter;
