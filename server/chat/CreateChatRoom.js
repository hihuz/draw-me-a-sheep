const CreateChatRoom = ({ id, name, messages = [] }) => {
  return {
    id,
    name,
    messages,
    addMessage(message) {
      this.messages.push(message);
    },
    getMessages() {
      return this.messages;
    }
  };
};

module.exports = CreateChatRoom;
