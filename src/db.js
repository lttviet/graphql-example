const db = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: 'data.sqlite3'
  }
});

export async function getCountry({name}) {
  let country = await db('country').where('name', 'like', name);
  return country[0];
}

export async function getCountries({limit}) {
  let countries = await db('country').limit(limit);
  return countries;
}

async function getCountryById(id) {
  let country = await db('country').where('id', id);
  return country[0];
}

export async function addCountry({name, code}) {
  let id = await db('country')
                  .insert({name: name, code: code})
                  .returning('id');

  return getCountryById(id[0]);
}
