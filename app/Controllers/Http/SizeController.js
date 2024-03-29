'use strict'

const Size = use('App/Models/Size')

/**
 * Resourceful controller for interacting with sizes
 */
class SizeController {
  /**
   * Show a list of all sizes.
   * GET sizes
   *
   */
  async index () {
    const sizes = await Size.query().with('file').fetch()

    return sizes
  }

  /**
   * Create/save a new size.
   * POST sizes
   *
   */
  async store ({ request }) {
    const data = request.only(['name', 'file_id'])

    const size = await Size.create(data)

    return size
  }

  /**
   * Display a single size.
   * GET sizes/:id
   *
   */
  async show ({ params }) {
    const size = await Size.findOrFail(params.id)

    size.load('file')

    return size
  }

  /**
   * Update size details.
   * PUT or PATCH sizes/:id
   *
   */
  async update ({ params, request }) {
    const size = await Size.findOrFail(params.id)

    const data = request.only(['name', 'file_id'])

    size.merge(data)

    await size.save()

    return size
  }

  /**
   * Delete a size with id.
   * DELETE sizes/:id
   */
  async destroy ({ params }) {
    const size = await Size.findOrFail(params.id)

    await size.delete()
  }
}

module.exports = SizeController
