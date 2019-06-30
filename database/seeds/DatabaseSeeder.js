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

const Factory = use('Factory')

const User = use('App/Models/User')

const Role = use('Adonis/Acl/Role')

const Type = use('App/Models/Type')

const TypeSize = use('App/Models/TypeSize')

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

    // Files
    const FileModel = Factory.model('App/Models/File')

    // Products Files
    const pastaFile = await FileModel.create({
      url: 'https://rocketfinalchallenge.s3.amazonaws.com/1l.n2cqqinr7g-massas%401x.png'
    })

    const pizzaFile = await FileModel.create({
      url: 'https://rocketfinalchallenge.s3.amazonaws.com/oh.6g2o3q9ng-pizzas%401x.png'
    })

    const calzoneFile = await FileModel.create({
      url: 'https://rocketfinalchallenge.s3.amazonaws.com/tc.fnbnc6css-calzones%401x.png'
    })

    // Types Files
    const typeFile1 = await FileModel.create({
      url: 'https://rocketfinalchallenge.s3.amazonaws.com/k3.891ksdmjc-1.png'
    })
    const typeFile2 = await FileModel.create({
      url: 'https://rocketfinalchallenge.s3.amazonaws.com/n9.2vr8v40us-2.png'
    })
    const typeFile3 = await FileModel.create({
      url: 'https://rocketfinalchallenge.s3.amazonaws.com/fo.uf5ku0ri6-3.png'
    })
    const typeFile4 = await FileModel.create({
      url: 'https://rocketfinalchallenge.s3.amazonaws.com/ah.a39lfnqrq-4.png'
    })
    const typeFile5 = await FileModel.create({
      url: 'https://rocketfinalchallenge.s3.amazonaws.com/cb.ote2in29-5.png'
    })
    const typeFile6 = await FileModel.create({
      url: 'https://rocketfinalchallenge.s3.amazonaws.com/mp.38dgmmsec-6.png'
    })

    // Sizes Files
    const sizesFile = await FileModel.create({
      url: 'https://rocketfinalchallenge.s3.amazonaws.com/sn.hjb4o9ik8-tamanho-gg.png'
    })

    // Products
    const ProductModel = Factory.model('App/Models/Product')

    const pastaProduct = await ProductModel.make({ name: 'Pasta' })
    await pastaFile.products().save(pastaProduct)

    const pizzaProduct = await ProductModel.make({ name: 'Pizza' })
    await pizzaFile.products().save(pizzaProduct)

    const calzoneProduct = await ProductModel.make({ name: 'Calzone' })
    await calzoneFile.products().save(calzoneProduct)

    // Types
    // Pasta Types
    const typeProduct1 = await Type.create({
      name: 'Penne',
      file_id: typeFile1.id,
      product_id: pastaProduct.id
    })

    const typeProduct2 = await Type.create({
      name: 'Spaghetti',
      file_id: typeFile2.id,
      product_id: pastaProduct.id
    })

    const typeProduct3 = await Type.create({
      name: 'Farfalle',
      file_id: typeFile3.id,
      product_id: pastaProduct.id
    })

    const typeProduct4 = await Type.create({
      name: 'Fusillini',
      file_id: typeFile4.id,
      product_id: pastaProduct.id
    })

    // Pizza Types
    const typeProduct7 = await Type.create({
      name: 'Pepperoni',
      file_id: typeFile5.id,
      product_id: pizzaProduct.id
    })

    const typeProduct8 = await Type.create({
      name: 'Neapolitan',
      file_id: typeFile6.id,
      product_id: pizzaProduct.id
    })

    const typeProduct9 = await Type.create({
      name: 'Portuguese',
      file_id: typeFile1.id,
      product_id: pizzaProduct.id
    })

    const typeProduct10 = await Type.create({
      name: 'California',
      file_id: typeFile2.id,
      product_id: pizzaProduct.id
    })

    // Calzone Types
    const typeProduct13 = await Type.create({
      name: 'Sausage',
      file_id: typeFile3.id,
      product_id: pizzaProduct.id
    })

    const typeProduct14 = await Type.create({
      name: 'Basil',
      file_id: typeFile4.id,
      product_id: pizzaProduct.id
    })

    const typeProduct15 = await Type.create({
      name: 'Parmesan',
      file_id: typeFile5.id,
      product_id: pizzaProduct.id
    })

    const typeProduct16 = await Type.create({
      name: 'Ground beef',
      file_id: typeFile6.id,
      product_id: pizzaProduct.id
    })

    // Sizes
    const SizeModel = Factory.model('App/Models/Size')

    const extraLargeSize = await SizeModel.make({ name: 'Extra Large' })
    await sizesFile.sizes().save(extraLargeSize)

    const bigSize = await SizeModel.make({ name: 'Big' })
    await sizesFile.sizes().save(bigSize)

    const medium = await SizeModel.make({ name: 'Medium' })
    await sizesFile.sizes().save(medium)

    const small = await SizeModel.make({ name: 'Small' })
    await sizesFile.sizes().save(small)

    // TypeSizes TypeProduct 1
    const typeSize1 = await TypeSize.create({
      type_id: typeProduct1.id,
      size_id: extraLargeSize.id,
      price: 39.00
    })

    const typeSize2 = await TypeSize.create({
      type_id: typeProduct1.id,
      size_id: bigSize.id,
      price: 30.00
    })

    const typeSize3 = await TypeSize.create({
      type_id: typeProduct1.id,
      size_id: medium.id,
      price: 20.00
    })

    const typeSize4 = await TypeSize.create({
      type_id: typeProduct1.id,
      size_id: small.id,
      price: 15.00
    })

    // TypeSizes TypeProduct 2
    const typeSize5 = await TypeSize.create({
      type_id: typeProduct2.id,
      size_id: extraLargeSize.id,
      price: 39.00
    })

    const typeSize6 = await TypeSize.create({
      type_id: typeProduct2.id,
      size_id: bigSize.id,
      price: 30.00
    })

    const typeSize7 = await TypeSize.create({
      type_id: typeProduct2.id,
      size_id: medium.id,
      price: 20.00
    })

    await TypeSize.create({
      type_id: typeProduct2.id,
      size_id: small.id,
      price: 15.00
    })

    // TypeSizes TypeProduct 3
    await TypeSize.create({
      type_id: typeProduct3.id,
      size_id: extraLargeSize.id,
      price: 39.00
    })

    await TypeSize.create({
      type_id: typeProduct3.id,
      size_id: bigSize.id,
      price: 30.00
    })

    await TypeSize.create({
      type_id: typeProduct3.id,
      size_id: medium.id,
      price: 20.00
    })

    await TypeSize.create({
      type_id: typeProduct3.id,
      size_id: small.id,
      price: 15.00
    })

    // TypeSizes TypeProduct 4
    await TypeSize.create({
      type_id: typeProduct4.id,
      size_id: extraLargeSize.id,
      price: 39.00
    })

    await TypeSize.create({
      type_id: typeProduct4.id,
      size_id: bigSize.id,
      price: 30.00
    })

    await TypeSize.create({
      type_id: typeProduct4.id,
      size_id: medium.id,
      price: 20.00
    })

    await TypeSize.create({
      type_id: typeProduct4.id,
      size_id: small.id,
      price: 15.00
    })

    // TypeSizes TypeProduct 7
    await TypeSize.create({
      type_id: typeProduct7.id,
      size_id: extraLargeSize.id,
      price: 39.00
    })

    await TypeSize.create({
      type_id: typeProduct7.id,
      size_id: bigSize.id,
      price: 30.00
    })

    await TypeSize.create({
      type_id: typeProduct7.id,
      size_id: medium.id,
      price: 20.00
    })

    await TypeSize.create({
      type_id: typeProduct7.id,
      size_id: small.id,
      price: 15.00
    })

    // TypeSizes TypeProduct 8
    await TypeSize.create({
      type_id: typeProduct8.id,
      size_id: extraLargeSize.id,
      price: 39.00
    })

    await TypeSize.create({
      type_id: typeProduct8.id,
      size_id: bigSize.id,
      price: 30.00
    })

    await TypeSize.create({
      type_id: typeProduct8.id,
      size_id: medium.id,
      price: 20.00
    })

    await TypeSize.create({
      type_id: typeProduct8.id,
      size_id: small.id,
      price: 15.00
    })

    // TypeSizes TypeProduct 9
    await TypeSize.create({
      type_id: typeProduct9.id,
      size_id: extraLargeSize.id,
      price: 39.00
    })

    await TypeSize.create({
      type_id: typeProduct9.id,
      size_id: bigSize.id,
      price: 30.00
    })

    await TypeSize.create({
      type_id: typeProduct9.id,
      size_id: medium.id,
      price: 20.00
    })

    await TypeSize.create({
      type_id: typeProduct9.id,
      size_id: small.id,
      price: 15.00
    })

    // TypeSizes TypeProduct 10
    await TypeSize.create({
      type_id: typeProduct10.id,
      size_id: extraLargeSize.id,
      price: 39.00
    })

    await TypeSize.create({
      type_id: typeProduct10.id,
      size_id: bigSize.id,
      price: 30.00
    })

    await TypeSize.create({
      type_id: typeProduct10.id,
      size_id: medium.id,
      price: 20.00
    })

    await TypeSize.create({
      type_id: typeProduct10.id,
      size_id: small.id,
      price: 15.00
    })

    // TypeSizes TypeProduct 13
    await TypeSize.create({
      type_id: typeProduct13.id,
      size_id: extraLargeSize.id,
      price: 39.00
    })

    await TypeSize.create({
      type_id: typeProduct13.id,
      size_id: bigSize.id,
      price: 30.00
    })

    await TypeSize.create({
      type_id: typeProduct13.id,
      size_id: medium.id,
      price: 20.00
    })

    await TypeSize.create({
      type_id: typeProduct13.id,
      size_id: small.id,
      price: 15.00
    })

    // TypeSizes TypeProduct 14
    await TypeSize.create({
      type_id: typeProduct14.id,
      size_id: extraLargeSize.id,
      price: 39.00
    })

    await TypeSize.create({
      type_id: typeProduct14.id,
      size_id: bigSize.id,
      price: 30.00
    })

    await TypeSize.create({
      type_id: typeProduct14.id,
      size_id: medium.id,
      price: 20.00
    })

    await TypeSize.create({
      type_id: typeProduct14.id,
      size_id: small.id,
      price: 15.00
    })

    // TypeSizes TypeProduct 15
    await TypeSize.create({
      type_id: typeProduct15.id,
      size_id: extraLargeSize.id,
      price: 39.00
    })

    await TypeSize.create({
      type_id: typeProduct15.id,
      size_id: bigSize.id,
      price: 30.00
    })

    await TypeSize.create({
      type_id: typeProduct15.id,
      size_id: medium.id,
      price: 20.00
    })

    await TypeSize.create({
      type_id: typeProduct15.id,
      size_id: small.id,
      price: 15.00
    })

    // TypeSizes TypeProduct 16
    await TypeSize.create({
      type_id: typeProduct16.id,
      size_id: extraLargeSize.id,
      price: 39.00
    })

    await TypeSize.create({
      type_id: typeProduct16.id,
      size_id: bigSize.id,
      price: 30.00
    })

    await TypeSize.create({
      type_id: typeProduct16.id,
      size_id: medium.id,
      price: 20.00
    })

    await TypeSize.create({
      type_id: typeProduct16.id,
      size_id: small.id,
      price: 15.00
    })

    const OrderModel = Factory.model('App/Models/Order')

    const order1 = await OrderModel.create({
      user_id: regularUser.id
    })

    await order1.items().createMany([
      { type_size_id: typeSize1.id, quantity: 2 },
      { type_size_id: typeSize2.id, quantity: 1 },
      { type_size_id: typeSize3.id, quantity: 3 }
    ])

    const order2 = await OrderModel.create({
      user_id: regularUser.id
    })

    await order2.items().createMany([
      { type_size_id: typeSize4.id, quantity: 3 },
      { type_size_id: typeSize5.id, quantity: 2 }
    ])

    const order3 = await OrderModel.create({
      user_id: regularUser.id
    })

    await order3.items().createMany([
      { type_size_id: typeSize6.id, quantity: 1 },
      { type_size_id: typeSize7.id, quantity: 1 }
    ])
  }
}

module.exports = DatabaseSeeder
