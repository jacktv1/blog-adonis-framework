'use strict'
const UserService = use('App/Services/UserService');

class SigninController {
    /**
     * Show signin page
     */
    async index(context) {
        return context.view.render('admin.auth.signin');
    }

    /**
     * Check signin function
     */
    async signin(context) {
        try {
            const body = context.request.only(['username', 'password']);
            const user = await context.auth.attempt(body.username, body.password);
            if (user) {
                await context.auth.logout();
                context.auth.login(user);
                context.response.route('admin.post.create');
            }
        } catch(e) {
            console.log(e.message);
        }
    }

    /**
     * Signout user
     */
    async signout(context) {
        await context.auth.logout();
        context.response.route('admin.post.index');
    }
}

module.exports = SigninController
