'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = require('./schema');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();
server.use('/', (0, _expressGraphql2.default)({
  schema: _schema.schema,
  rootValue: _schema.root,
  graphiql: true,
  pretty: true
}));
server.listen(4000);
console.log('Running a GraphQL API server at localhost:4000');