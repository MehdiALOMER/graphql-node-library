
const userResolver = require('./userResolver');
const bookResolver = require('./bookResolver');

module.exports = {
  Query: {
    ...userResolver.Query,
    ...bookResolver.Query,
  },
  Book: {
    ...bookResolver.Book,
  },
};
