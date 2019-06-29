'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  orders () {
    return this.hasMany('App/Models/Item')
  }
}

module.exports = Order
