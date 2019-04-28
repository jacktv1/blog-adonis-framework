const Post = use('App/Models/Post');

class PostService {
    /**
     * Get list post was published with pagination
     * @param [Integer] page
     * @return [Post] post
     */
    async getListPublished(page) {
        const posts = await Post.query().paginate(page, 10);
        return posts;
    }

    /**
     * Get post by id
     * @param {Integer} id
     * @return [Post] post
     */
    async getPostById(id) {
        const post = await Post.find(id);
        return post;
    }

    /**
     * Create new post
     * @param {object} postData
     * @return {Post} post
     */
    async createPost(data) {
        const post = await Post.create(data);
        return post;
    }
}

module.exports = new PostService;