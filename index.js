
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs } = require('@graphql-tools/merge');

// Şemalar ve Resolver'ları Dahil Et
const userSchema = require('./src/schemas/userSchema');
const bookSchema = require('./src/schemas/bookSchema');
const resolvers = require('./src/resolvers');

// Şemaları Birleştir
const typeDefs = mergeTypeDefs([userSchema, bookSchema]);

// Şemayı Oluştur
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true, // GraphiQL Arayüzü Etkin
  })
);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/graphql`));
