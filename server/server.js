const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const CreateChatRoom = require("./chat/CreateChatRoom");
const CreateMessage = require("./chat/CreateMessage");

const id = 0;
const name = "Chat about marmots";
// init with some random messages
const messages = new Array(4).fill(
  undefined.map((_, i) =>
    CreateMessage({
      id: i,
      time: new Date().getTime,
      author: i,
      text: "foo"
    })
  )
);
const chatRoom = CreateChatRoom({ id, name });

// messages here is not good :D Not sure yet about the  List type
const schema = buildSchema(
  `
  type Query {
    messages: List
    id: Int
    name: String
  }
`
);

const root = {
  messages: () => {
    return chatRoom.getMessages();
  },
  id: () => {
    return chatRoom.id;
  },
  name: () => {
    return chatRoom.name;
  }
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");
