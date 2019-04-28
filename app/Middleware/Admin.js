'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, auth, response }, next) {
    if (await auth.check()) {
      const user = await auth.getUser();
      const isAdmin = user.role == 0;
      if (!isAdmin) {
        response.route('admin.signin.get');
      }
    } else {
      response.route('admin.signin.get');
    }
   
    // call next to advance the request
    await next()
  }
}

module.exports = Admin
