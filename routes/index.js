const { Router } = require("express");
const {
  getAllMessages,
  getMessageById,
  addNewMessage,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getAllMessages);

indexRouter.get("/new", (req, res) => res.render("form", { title: "New" }));

indexRouter.post("/new", addNewMessage);

indexRouter.get("/message/:messageId", getMessageById);

module.exports = indexRouter;
