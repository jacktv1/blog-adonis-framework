const Category = use('App/Models/Category');

class CategoryService {
    /**
     * Get all category
     * @return [Category] post
     */
    async all() {
        const categories = await Category.all();
        return categories;
    }

    /**
     * Create new category
     * @param {object} data
     * @return {Category} post
     */
    async create(data) {
        const category = await Category.create(data);
        return category;
    }

    /**
     * Destroy category
     * @param {integer} id
     */
    async destroy(id) {
        const category = await Category.find(id);
        const status = await category.delete();
        return status;
        
    }
}

module.exports = new CategoryService;