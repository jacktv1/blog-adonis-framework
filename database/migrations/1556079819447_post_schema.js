'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  async up () {
    await this.create('posts', (table) => {
      table.increments();
      table.string('title', 255);
      table.string('slug', 255);
      table.text('content', 'longtext');
      table.boolean('is_publish').defaultTo(true);
      table.integer('viewed').defaultTo(0);
      table.integer('like').defaultTo(0);
      table.integer('dislike').defaultTo(0);
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('set null');
      table.timestamps();
    })
  }

  down () {
    this.drop('posts');
  }
}

module.exports = PostSchema
