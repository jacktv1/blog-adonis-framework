'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostCategorySchema extends Schema {
  async up () {
    await this.create('post_categories', (table) => {
      table.increments()
      table.integer('category_id').unsigned().references('id').inTable('posts').onDelete('cascade');
      table.integer('post_id').unsigned().references('id').inTable('categories').onDelete('cascade');
      table.timestamps()
    })
  }

  down () {
    this.drop('post_categories')
  }
}

module.exports = PostCategorySchema
