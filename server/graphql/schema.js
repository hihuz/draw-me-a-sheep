const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} = require("graphql");
const CreateChatRoom = require("../chat/CreateChatRoom");
const CreateMessage = require("../chat/CreateMessage");

const id = 0;
const name = "Chat about marmots";

const chatRoom = CreateChatRoom({ id, name });

const chatRooms = [chatRoom];

const messageType = new GraphQLObjectType({
  name: "Message",
  description: "a chat room message",
  fields: () => ({
    time: {
      type: GraphQLInt,
      description: "timestamp of the message"
    },
    id: {
      type: GraphQLInt,
      description: "id of the message"
    },
    author: {
      type: GraphQLString,
      description: "author of the message"
    },
    text: {
      type: GraphQLString,
      description: "text of the message"
    }
  })
});

const roomType = new GraphQLObjectType({
  name: "Room",
  description: "a chat room",
  fields: () => ({
    name: {
      type: GraphQLString,
      description: "name of the room"
    },
    id: {
      type: GraphQLInt,
      description: "id of the room"
    },
    messages: {
      type: new GraphQLList(messageType),
      description: "list of messages for this room"
    }
  })
});

const userType = new GraphQLObjectType({
  name: "User",
  description: "a user",
  fields: () => ({
    name: {
      type: GraphQLString,
      description: "name of the user"
    },
    id: {
      type: GraphQLInt,
      description: "id of the user"
    }
  })
});

// const rootQueryType = new GraphQLObjectType({
//   name: "RootQueryType",
//   fields: () => ({
//     rooms: {
//       type: new GraphQLList(roomType),
//       args: {
//         id: {
//           name: "id",
//           type: GraphQLInt
//         }
//       },
//       resolve: () => {
//         return chatRooms;
//       }
//     },
//     users: {
//       type: new GraphQLList(userType),
//       args: {
//         id: {
//           name: "id",
//           type: GraphQLInt
//         }
//       },
//       resolve: () => {
//         return "users, add later";
//       }
//     }
//   })
// });

const rootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    rooms: {
      type: GraphQLString,
      resolve: () => {
        return "foo";
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: rootQueryType
});

module.exports = schema;
