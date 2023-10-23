const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class UsersService {
  async find() {
    const users = await models.User.findAll({
      include: [ 'posts' ],
      attributes: { exclude: ['email', 'password'] }
    });
    return users;
  };

  async findOne(id) {
    const user = await models.User.findByPk(id,{
      include: ['posts']
    });
    if (!user) {
      throw boom.notFound('User not found')
    };
    return user;
  };

  async findByEmail(email) {
    const user = await models.User.findOne({
      where: { email }
    });
    return user;
  }
  async findByUsername(username) {
    const user = await models.User.findOne({
      where: { username }
    });
    return user;
  }
  async createUser(data) {
    const newUser = await models.User.create(data);
    return newUser;
  };

  async deleteUser(id) {
    const user = await this.findOne(id);
    await user.destroy(user);
    return {id};
  };

};
module.exports = UsersService;
