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

const Type = use('App/Models/Type')

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
    const pizzaProduct = await Product.create({
      'name': 'Pizzas',
      'description': 'More than 50 pizza flavors at 4 different sizes',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/pizzas@1x.png',
      'time': 30
    })

    const pastaProduct = await Product.create({
      'name': 'Pasta',
      'description': '10 kinds of pasta with different sauces to satisfy you',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/massas@1x.png',
      'time': 25
    })

    const calzoneProduct = await Product.create({
      'name': 'Calzones',
      'description': 'Stuffed calzones with over than 50 flavors',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/calzones@1x.png',
      'time': 15
    })

    // const nonAlcoholicProduct = await Product.create({
    //   'name': 'Non-alcoholic drinks',
    //   'description': 'Soda, juice, iced tea, energy driks and water',
    //   'image': 'https://s3.amazonaws.com/bootcamp.fs/bebidas@1x.png',
    //   'time': 5
    // })

    // const alcoholicProduct = await Product.create({
    //   'name': 'Alcoholic drinks',
    //   'description': 'Craft beer, wine and distillate drink',
    //   'image': 'https://s3.amazonaws.com/bootcamp.fs/bebidas-alcoolicas@1x.png',
    //   'time': 5
    // })

    // Types
    const pepperoniType = await Type.create({
      'name': 'Pepperoni',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/1.png',
      'product_id': pizzaProduct.id
    })

    const margueriteType = await Type.create({
      'name': 'Marguerite',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/2.png',
      'product_id': pizzaProduct.id
    })

    const portugueseType = await Type.create({
      'name': 'Portuguese',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/3.png',
      'product_id': pizzaProduct.id
    })

    const chickenType = await Type.create({
      'name': 'Chicken',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/4.png',
      'product_id': pizzaProduct.id
    })

    const fettucineType = await Type.create({
      'name': 'Fettucine',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/5.png',
      'product_id': pastaProduct.id
    })

    const spaghettiType = await Type.create({
      'name': 'Spaghetti',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/6.png',
      'product_id': pastaProduct.id
    })

    const macaroniType = await Type.create({
      'name': 'Macaroni',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/1.png',
      'product_id': pastaProduct.id
    })

    const ravioliType = await Type.create({
      'name': 'Ravioli',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/2.png',
      'product_id': pastaProduct.id
    })

    const classicType = await Type.create({
      'name': 'Classic',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/3.png',
      'product_id': calzoneProduct.id
    })

    const spinachType = await Type.create({
      'name': 'Spinach',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/4.png',
      'product_id': calzoneProduct.id
    })

    const ricottaType = await Type.create({
      'name': 'Ricotta',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/5.png',
      'product_id': calzoneProduct.id
    })

    const sausageType = await Type.create({
      'name': 'Sausage',
      'image': 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/6.png',
      'product_id': calzoneProduct.id
    })
  }
}

module.exports = DatabaseSeeder
