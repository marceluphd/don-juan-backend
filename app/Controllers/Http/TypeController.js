'use strict'

const Type = use('App/Models/Type')

/**
 * Resourceful controller for interacting with types
 */
class TypeController {
  /**
   * Show a list of all types.
   * GET types
   *
   */
  async index ({ params }) {
    const types = await Type.query()
      .where('product_id', params.products_id)
      .with('file')
      .fetch()

    return types
  }

  /**
   * Create/save a new type.
   * POST types
   *
   */
  async store ({ request, params }) {
    const data = request.only(['name', 'file_id'])

    const type = Type.create({ ...data, product_id: params.products_id })

    return type
  }

  /**
   * Display a single type.
   * GET types/:id
   *
   */
  async show ({ params }) {
    const type = await Type.findOrFail(params.id)

    await type.load('file')

    return type
  }

  /**
   * Update type details.
   * PUT or PATCH types/:id
   *
   */
  async update ({ params, request }) {
    const type = await Type.findOrFail(params.id)

    const data = request.only(['name', 'file_id'])

    type.merge(data)

    await type.save()

    return type
  }

  /**
   * Delete a type with id.
   * DELETE types/:id
   *
   */
  async destroy ({ params }) {
    const type = await Type.findOrFail(params.id)

    await type.delete()
  }
}

module.exports = TypeController
