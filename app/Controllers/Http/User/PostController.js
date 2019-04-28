'use strict'
const PostService = use('App/Services/PostService');
const DateTimeHelper = use('App/Helpers/DateTimeHelper');

class PostController {
    /**
     * Get list post and send data to view
     */
    async index(context) {
        const params = context.request.get();
        const page = params.page ? params.page : 1;
        const posts = await PostService.getListPublished(page);
        return context.view.render('home', { posts: posts.toJSON(), DateTimeHelper });
    }

    /**
     * Show post detail page
     * @param {integer} id
     */
    async show(context)  {
        const postId = context.params.id;
        const post = await PostService.getPostById(postId);
        return context.view.render('posts.single', { post, DateTimeHelper });
    }
}

module.exports = PostController
