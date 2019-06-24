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

// const User = use('App/Models/User')

// const Role = use('Adonis/Acl/Role')

class DatabaseSeeder {
  async run () {
    // const user = await User.create({
    //   name: 'Luiz Cláudio',
    //   email: 'luizcns18@gmail.com',
    //   password: '123456'
    // })

    // const admin = await Role.create({
    //   slug: 'administrator',
    //   name: 'Administrator'
    // })

    // await Role.create({
    //   slug: 'user',
    //   name: 'User'
    // })

    // await user.roles().attach([admin.id])
  }
}

module.exports = DatabaseSeeder
