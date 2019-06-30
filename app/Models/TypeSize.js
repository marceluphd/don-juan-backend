'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TypeSize extends Model {
  static get table () {
    return 'type_size'
  }

  size () {
    return this.belongsTo('App/Models/Size')
  }

  type () {
    return this.belongsTo('App/Models/Type')
  }

  orders () {
    return this.belongsToMany('App/Models/Order').pivotModel('App/Models/Item')
  }
}

module.exports = TypeSize
