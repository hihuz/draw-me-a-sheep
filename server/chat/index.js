const CreateChatRoom = require("./CreateChatRoom");
const CreateGuessRoom = require("./CreateGuessRoom");
const CreateMessage = require("./CreateMessage");

const chatMessages = [
  CreateMessage({ id: 0, author: "hihuz", time: new Date().getTime(), text: "vive les marmottes!" })
];
const guessMessages = [
  CreateMessage({ id: 0, author: "hihuz", time: new Date().getTime(), text: "castor" })
];

const chatRoom = CreateChatRoom({ id: 0, name: "guess room!", messages: chatMessages });
const guessRoom = CreateGuessRoom({ id: 1, name: "chat about marmots", messages: guessMessages });

const dummyRooms = [guessRoom, chatRoom];

module.exports = dummyRooms;
