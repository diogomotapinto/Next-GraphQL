const { gql } = require("apollo-server");

export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  type Person {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
  }

  type Dog {
    id: ID!
    name: String!
    owner: String!
  }

  type Query {
    persons: [Person]!
    dogs: [Dog]!
    getPersonByEmail(email: String!): Person
  }

  type Mutation {
    createPerson(email: String!, firstName: String!, lastName: String!): Person
    createDog(name: String!, owner: String!): Dog
  }
`;
