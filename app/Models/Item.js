'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Item extends Model {
  typeSize () {
    return this.belongsTo('App/Models/TypeSize')
  }
}

module.exports = Item
