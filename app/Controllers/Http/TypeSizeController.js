'use strict'

const TypeSize = use('App/Models/TypeSize')

/**
 * Resourceful controller for interacting with typesizes
 */
class TypeSizeController {
  /**
   * Show a list of all typesizes.
   * GET typesizes
   *
   */
  async index ({ params }) {
    const typeSizes = await TypeSize.query()
      .where('type_id', params.types_id)
      .with('size')
      .fetch()

    return typeSizes
  }

  /**
   * Create/save a new typesize.
   * POST typesizes
   *
   */
  async store ({ request, params }) {
    const data = request.only(['size_id', 'price'])

    const typeSize = TypeSize.create({ ...data, type_id: params.types_id })

    return typeSize
  }

  /**
   * Display a single typesize.
   * GET typesizes/:id
   *
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update typesize details.
   * PUT or PATCH typesizes/:id
   *
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a typesize with id.
   * DELETE typesizes/:id
   *
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TypeSizeController
