const chatRooms = require("../../chat");
const users = require("../../users");

const getChatRooms = () => {
  return chatRooms;
};

const getUsers = () => {
  return users;
};

module.exports = {
  getChatRooms,
  getUsers
};
