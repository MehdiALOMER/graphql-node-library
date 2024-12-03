
const { gql } = require('graphql-tag');

module.exports = gql`
  type User {
    id: Int
    name: String
    age: Int
  }

  type Query {
    users: [User]
    user(id: Int!): User
  }
`;
