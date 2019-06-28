'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeSizeSchema extends Schema {
  up () {
    this.create('type_size', (table) => {
      table.increments()
      table
        .integer('type_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('types')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('size_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('sizes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.float('price').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('type_size')
  }
}

module.exports = TypeSizeSchema
