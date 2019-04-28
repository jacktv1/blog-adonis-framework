'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UsersSchema extends Schema {
  async up () {
    await this.create('users', (table) => {
      table.increments();
      table.string('email', 30).notNullable().unique();
      table.string('password', 100);
      table.string('name', 30);
      table.string('google_id', 50);
      table.string('facebook_id', 50);
      table.string('github_id', 50);
      table.integer('role');
      table.timestamps();
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema;
