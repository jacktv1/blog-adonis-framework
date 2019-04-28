'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TagMapSchema extends Schema {
  async up () {
    await this.create('tag_maps', (table) => {
      table.increments();
      table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('cascade');
      table.integer('tag_id').unsigned().references('id').inTable('tags').onDelete('cascade');
      table.timestamps();
    })
  }

  down () {
    this.drop('tag_maps');
  }
}

module.exports = TagMapSchema
