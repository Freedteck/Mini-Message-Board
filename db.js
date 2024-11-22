const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const getAllMessages = async () => {
  return messages;
};

const getMessageById = async (messageId) => {
  return messages.find((message) => message.id === messageId);
};

const addNewMessage = async (messageText, authorName) => {
  messages.push({
    id: messages.length + 1,
    text: messageText,
    user: authorName,
    added: new Date(),
  });
};

module.exports = { getAllMessages, getMessageById, addNewMessage };
