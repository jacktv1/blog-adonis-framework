'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  async up () {
    await this.create('categories', (table) => {
      table.increments()
      table.string('title', 100);
      table.integer('level').defaultTo(0);
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
