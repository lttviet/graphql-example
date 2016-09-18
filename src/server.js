import express from 'express';
import graphqlHTTP from  'express-graphql';
import { schema, root } from './schema';

let server = express();
server.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  pretty: true,
}));
server.listen(4000);
console.log('Running a GraphQL API server at localhost:4000');
