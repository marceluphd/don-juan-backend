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

const Product = use('App/Models/Product')

class DatabaseSeeder {
  async run () {
    // Users
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

    // Roles
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

    // User-Roles
    await adminUser.roles().attach([adminRole.id])
    await regularUser.roles().attach([userRole.id])

    // Products
    await Product.create({
      'name': 'Pizzas',
      'description': 'More than 50 pizza flavors at 4 different sizes',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/pizzas@1x.png',
      'time': 30
    })

    await Product.create({
      'name': 'Pasta',
      'description': '10 kinds of pasta with different sauces to satisfy you',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/massas@1x.png',
      'time': 25
    })

    await Product.create({
      'name': 'Calzones',
      'description': 'Stuffed calzones with over than 50 flavors',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/calzones@1x.png',
      'time': 15
    })

    await Product.create({
      'name': 'Non-alcoholic drinks',
      'description': 'Soda, juice, iced tea, energy driks and water',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/bebidas@1x.png',
      'time': 5
    })

    await Product.create({
      'name': 'Alcoholic drinks',
      'description': 'Craft beer, wine and distillate drink',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/bebidas-alcoolicas@1x.png',
      'time': 5
    })
  }
}

module.exports = DatabaseSeeder
