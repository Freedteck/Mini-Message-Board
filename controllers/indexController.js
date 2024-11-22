const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../error/CustomNotFoundError");

const getAllMessages = asyncHandler(async (req, res) => {
  const messages = await db.getAllMessages();

  if (!messages) {
    throw new CustomNotFoundError("No Messages Found");
  }

  res.render("index", { title: "Mini Messageboard", messages });
});

const getMessageById = asyncHandler(async (req, res) => {
  const { messageId } = req.params;

  const message = await db.getMessageById(Number(messageId));

  if (!message) {
    throw new CustomNotFoundError("Message Not Found");
  }

  res.render("message", { title: "Message", message });
});

const addNewMessage = async (req, res) => {
  const messageText = req.body.messageText;
  const authorName = req.body.authorName;

  await db.addNewMessage(messageText, authorName);

  res.redirect("/");
};

module.exports = { getAllMessages, getMessageById, addNewMessage };
