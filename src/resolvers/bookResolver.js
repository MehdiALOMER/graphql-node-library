
const books = require('../data/books');
const authors = require('../data/authors');
const categories = require('../data/categories');

module.exports = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find(book => book.id === id),
  },
  Book: {
    author: (book) => authors.find(author => author.id === book.authorId),
    category: (book) => categories.find(category => category.id === book.categoryId),
  },
};
