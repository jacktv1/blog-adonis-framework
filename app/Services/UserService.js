const User = use('App/Models/User');
const Hash = use('Hash');

class UserService {
    /**
     * get user with username and password
     * @param {stirng} username
     * @param {string} password
     * @return {User} user
     */
    async getUserWithUsernameAndPassword(username, password) {
        const user = await User.query().where('username', username).first();
        if (user) {
            const isSame = await Hash.verify(password, user.password);
            return isSame ? user : false;
        }
        return false;
    }
}

module.exports = new UserService;