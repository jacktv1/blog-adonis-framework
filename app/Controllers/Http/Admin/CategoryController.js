'use strict'
const CategoryService = use('App/Services/CategoryService');

class CategoryController {
    /**
     * Show list and from create category
     */
    async index(context) {
        const categories = await CategoryService.all();
        return context.view.render('admin.category.index', { categories: categories.toJSON() });
    }

    /**
     * Create new category
     */
    async store(context) {
        try {
            const body = context.request.only(['title']);
            const category = await CategoryService.create(body);
            context.session.flash({
                status: true,
                message: 'Create category Successfull'
            });   
        } catch(e) {
            context.session.flash({
                status: false,
                message: 'Create category failed:' + e.message
            })
        }
        context.response.route('admin.category.index');
    }

    /**
     * Destroy category with id
     */
    async destroy(context) {
        try {
            const body = context.request.only(['id']);
            const status = await CategoryService.destroy(body.id);
            context.session.flash({
                status: true,
                message: 'Delete category Successfull'
            });   
        } catch(e) {
            context.session.flash({
                status: false,
                message: 'Delete category failed:' + e.message
            })
        }
        context.response.route('admin.category.index');
    }
}

module.exports = CategoryController;