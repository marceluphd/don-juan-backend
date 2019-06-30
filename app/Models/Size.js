'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Size extends Model {
  file () {
    return this.belongsTo('App/Models/File')
  }

  types () {
    return this.belongsToMany('App/Models/Type').pivotModel('App/Models/TypeSize')
  }
}

module.exports = Size
