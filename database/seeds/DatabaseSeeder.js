'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User')

const Role = use('Adonis/Acl/Role')

class DatabaseSeeder {
  async run () {
    const adminUser = await User.create({
      name: 'Admin user',
      email: 'admin@gmail.com',
      password: '123456'
    })

    const regularUser = await User.create({
      name: 'Regular user',
      email: 'regular@gmail.com',
      password: '123456'
    })

    const adminRole = await Role.create({
      slug: 'administrator',
      name: 'Administrator',
      description: 'System administrator'
    })

    const userRole = await Role.create({
      slug: 'user',
      name: 'User',
      description: 'Regular user'
    })

    await adminUser.roles().attach([adminRole.id])
    await regularUser.roles().attach([userRole.id])
  }
}

module.exports = DatabaseSeeder
