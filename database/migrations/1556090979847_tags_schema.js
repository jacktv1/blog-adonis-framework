'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TagsSchema extends Schema {
  async up () {
    await this.create('tags', (table) => {
      table.increments();
      table.string('title', 50);
      table.timestamps();
    })
  }

  down () {
    this.drop('tags');
  }
}

module.exports = TagsSchema
