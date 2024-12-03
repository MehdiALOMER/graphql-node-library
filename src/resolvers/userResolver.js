
const users = require('../data/users');

module.exports = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find(user => user.id === id),
  },
};
