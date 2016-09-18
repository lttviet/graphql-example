'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.root = exports.schema = undefined;

var _graphql = require('graphql');

var _db = require('./db');

var schema = exports.schema = (0, _graphql.buildSchema)('\n  type Country {\n    id: ID\n    name: String\n    code: String\n  }\n\n  type Query {\n    country(name: String!): Country\n    countries(limit: Int = 5): [Country]\n  }\n\n  type Mutation {\n    addCountry(name: String!, code: String!): Country\n  }\n');

var root = exports.root = {
  country: _db.getCountry,
  countries: _db.getCountries,
  addCountry: _db.addCountry
};