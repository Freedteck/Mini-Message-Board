function formatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  // Format the date
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: formatDate(new Date()),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: formatDate(new Date()),
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
    added: formatDate(new Date()),
  });
};

module.exports = { getAllMessages, getMessageById, addNewMessage };
