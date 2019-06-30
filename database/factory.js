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
const Factory = use('Factory')

Factory.blueprint('App/Models/File', async (faker, i, data) => {
  const name = faker.word()
  return {
    name,
    key: `${(Math.random() * 1000).toString(32)}-name`,
    content_type: 'image/png',
    url: data.url
  }
})

Factory.blueprint('App/Models/Product', async (faker, i, data) => {
  return {
    name: data.name,
    description: faker.sentence(),
    time: faker.minute()
  }
})

Factory.blueprint('App/Models/Size', async (faker, i, data) => {
  return {
    name: data.name
  }
})

Factory.blueprint('App/Models/Order', async (faker, i, data) => {
  return {
    note: faker.sentence(),
    zip_code: '5931-190',
    street: faker.word(),
    district: faker.word(),
    number: faker.natural({ min: 1, max: 200 }),
    user_id: data.user_id
  }
})
