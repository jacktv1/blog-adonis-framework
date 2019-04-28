'use strict'

class UserController {
  register(context) {
    return context.view.render('home');
  }
}

module.exports = UserController
