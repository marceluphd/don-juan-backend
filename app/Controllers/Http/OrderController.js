'use strict'

const Order = use('App/Models/Order')

/**
 * Resourceful controller for interacting with orders
 */
class OrderController {
  /**
   * Show a list of all orders.
   * GET orders
   *
   */
  async index ({ auth }) {
    if (await auth.user.is('administrator')) {
      return Order.all()
    }

    const orders = await auth.user.orders().fetch()
    // const orders = Order.query().where('user_id', auth.user.id).fetch()

    return orders
  }

  /**
   * Create/save a new order.
   * POST orders
   *
   */
  async store ({ request, auth }) {
    const data = request.only(['note', 'zip_code', 'street', 'number', 'district', 'delivered'])

    const order = Order.create({ ...data, user_id: auth.user.id })

    return order
  }

  /**
   * Display a single order.
   * GET orders/:id
   *
   */
  async show ({ params, auth, response }) {
    const order = await Order.findOrFail(params.id)

    if (await auth.user.is('user') && auth.user.id !== order.user_id) {
      return response.status(401).send({
        error: {
          message: 'Only the order owner or the administrator can see it.'
        }
      })
    }

    return order
  }

  /**
   * Update order details.
   * PUT or PATCH orders/:id
   *
   */
  async update ({ params, request, auth, response }) {
    const order = await Order.findOrFail(params.id)

    if (await auth.user.is('user') && auth.user.id !== order.user_id) {
      return response.status(401).send({
        error: {
          message: 'Only the order owner or the administrator can edit it.'
        }
      })
    }

    if (order.delivered) {
      return response.status(401).send({
        error: {
          message: 'You can not edit an order that has been delivered'
        }
      })
    }

    const data = request.only(['note', 'zip_code', 'street', 'number', 'district', 'delivered'])

    order.merge(data)

    await order.save

    return order
  }

  /**
   * Delete a order with id.
   * DELETE orders/:id
   *
   */
  async destroy ({ params, auth, response }) {
    const order = await Order.findOrFail(params.id)

    if (await auth.user.is('user') && auth.user.id !== order.user_id) {
      return response.status(401).send({
        error: {
          message: 'Only the order owner or the administrator can delete it.'
        }
      })
    }

    if (order.delivered) {
      return response.status(401).send({
        error: {
          message: 'You can not delete an order that has been delivered'
        }
      })
    }

    await order.delete()
  }
}

module.exports = OrderController
