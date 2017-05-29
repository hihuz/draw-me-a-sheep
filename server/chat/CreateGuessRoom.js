const CreateChatRoom = require("./CreateChatRoom");

const CreateGuessRoom = ({ id, name, messages = [] }) => {
  let guessRoom = CreateChatRoom({ id, name, messages });
  guessRoom.setCurWord = word => {
    guessRoom.curWord = word;
  };
  guessRoom.getCurWord = () => {
    return guessRoom.curWord;
  };

  return guessRoom;
};

module.exports = CreateGuessRoom;
