const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
const { hashPassword } = require('../utils/hash');

class UserService {
  async find() {
    const users = await models.User.findAll({
      include: ['posts'],
      attributes: { exclude: ['email', 'password'] }
    });
    return users;
  };

  async findOne(id) {
    const user = await models.User.findByPk(id, {
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
    try {
      const hasshedPassword = await hashPassword(data.password);
      data.password = hasshedPassword;
      const newUser = await models.User.create(data);
      return newUser;
      // Resto del código
    } catch (error) {
      // Manejo de errores
      console.error('Error hashing password:', error);
      throw boom.internal('Error hashing password');
    }
  }

  async deleteUser(id) {
    const user = await this.findOne(id);
    await user.destroy(user);
    return { id };
  };

};
module.exports = UserService;
