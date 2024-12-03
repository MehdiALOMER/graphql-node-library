
const { gql } = require('graphql-tag');

module.exports = gql`
  type Book {
    id: Int
    title: String
    author: Author
    category: Category
  }

  type Author {
    id: Int
    name: String
  }

  type Category {
    id: Int
    name: String
  }

  type Query {
    books: [Book]
    book(id: Int!): Book
  }
`;
