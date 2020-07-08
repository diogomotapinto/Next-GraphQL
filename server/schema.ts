const { gql } = require("apollo-server");

export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  type Person {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
  }

  type Query {
    persons: [Person]!
    getPersonByEmail(email: String!): Person
  }

  type Mutation {
    createPerson(email: String!, firstName: String!, lastName: String!): Person!
  }
`;
