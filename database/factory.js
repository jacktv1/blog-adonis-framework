'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Hash = use('Hash');
var slugify = require('slugify')

// create dummy data for user table
Factory.blueprint('App/Models/User', async (faker) => {
  return {
    email: 'ngoquocanh111@gmail.com',
    name: faker.name(),
    password: await Hash.make('123456'),
    role: 0
  }
});

// create dummy data for post table
Factory.blueprint('App/Models/Post', async (faker) => {
    const title = faker.sentence();
    const slug = slugify(title, '-');
    return {
        title: title,
        slug: slug,
        content: faker.paragraph({ sentences: 30 }),
        user_id: 1
    }
})
