'use strict'
const PostService = use('App/Services/PostService');
const DateTimeHelper = use('App/Helpers/DateTimeHelper');
const slugify = require('slugify');
const CategoryService = use('App/Services/CategoryService');

class PostController {
    /**
     * Show list post to view
     */
    async index(context) {
        return context.view.render('admin.post.index');
    }

    /**
     * show create post page
     */
    async create(context) {
        const categories = await CategoryService.all();
        return context.view.render('admin.post.create', { categories: categories.toJSON() });
    }

    /**
     * Store post to database
     */
    async store(context) {
        try {
            const body = context.request.only(['title', 'content', 'categories']);
            const slug = slugify(body.title, '-');
            const user = await context.auth.getUser();
            
            const postData = {
                title: body.title,
                slug: slug,
                content: body.content,
                user_id: user.id
            };
            const post = await PostService.createPost(postData);
            if (Array.isArray(body.categories)) {
                body.categories.map(function(category) {

                });
            }
            context.sArrayession.flash({
                status: true,
                message: 'Write Successfull'
            });
            context.response.route('admin.post.index');
        } catch(e) {
            context.session.flash({
                status: false,
                message: 'Write failed:' + e.message
            })
        }
        context.response.route('admin.post.create');
    }
}

module.exports = PostController
