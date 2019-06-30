'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class File extends Model {
  products () {
    return this.hasOne('App/Models/Product')
  }

  types () {
    return this.hasOne('App/Models/Type')
  }

  sizes () {
    return this.hasOne('App/Models/Size')
  }
}

module.exports = File
