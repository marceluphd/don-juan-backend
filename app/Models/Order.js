'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  typeSizes () {
    return this.belongsToMany('App/Models/TypeSize').pivotModel('App/Models/Item')
  }
}

module.exports = Order
