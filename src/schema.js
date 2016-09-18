import { buildSchema } from 'graphql';
import { getCountry, getCountries, addCountry } from './db';

export const schema = buildSchema(`
  type Country {
    id: ID
    name: String
    code: String
  }

  type Query {
    country(name: String!): Country
    countries(limit: Int = 5): [Country]
  }

  type Mutation {
    addCountry(name: String!, code: String!): Country
  }
`);

export const root = {
  country: getCountry,
  countries: getCountries,
  addCountry: addCountry,
};
