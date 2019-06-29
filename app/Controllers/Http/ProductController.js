'use strict'

const Product = use('App/Models/Product')

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   */
  async index ({ request }) {
    const products = await Product.all()

    return products
  }

  /**
   * Create/save a new product.
   * POST products
   *
   */
  async store ({ request }) {
    const data = request.only(['name', 'description', 'time', 'image'])

    const product = await Product.create(data)

    return product
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   */
  async show ({ params }) {
    const product = await Product.findOrFail(params.id)

    return product
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   */
  async update ({ params, request }) {
    const product = await Product.findOrFail(params.id)

    const data = request.only(['name', 'description', 'time', 'image'])

    product.merge(data)

    await product.save()

    return product
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   */
  async destroy ({ params }) {
    const product = await Product.findOrFail(params.id)

    await product.delete()
  }
}

module.exports = ProductController
