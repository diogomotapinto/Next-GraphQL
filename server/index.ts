const { ApolloServer } = require("apollo-server");
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./schema");
const { connection } = require("./connection");

connection();

interface IApolloServer {
  url: string;
}

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }: IApolloServer) => {
  console.log(`🚀  Server ready at ${url}`);
});
