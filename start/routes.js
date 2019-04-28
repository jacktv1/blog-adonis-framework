'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'User/PostController.index').as('home');
Route.get('/post/:id', 'User/PostController.show').as('post-single');
// Route.get('/register', 'UserController.register');

Route.group('authenticated', () => {
    // admin singin
    Route.get('/signin', 'Admin/Auth/SigninController.index').as('admin.signin.get');
    Route.post('/signin', 'Admin/Auth/SigninController.signin').as('admin.signin.post');

    Route.get('/signout', 'Admin/Auth/SigninController.signout').as('admin.signout.post');
}).prefix('admin');

Route.group('admin', () => {
    // Route list, create, update, delete post
    Route.get('/', 'Admin/PostController.index').as('admin.post.index');
    Route.get('/create', 'Admin/PostController.create').as('admin.post.create');
    Route.post('store', 'Admin/PostController.store').as('admin.post.store');

    // Route list, create, update, delete category
    Route.get('/category', 'Admin/CategoryController.index').as('admin.category.index');
    Route.post('/category/create', 'Admin/CategoryController.store').as('admin.category.create');
    Route.post('/category/destroy', 'Admin/CategoryController.destroy').as('admin.category.destroy');

}).prefix('admin').middleware('admin');
