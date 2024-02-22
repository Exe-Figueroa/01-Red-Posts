const boom = require('@hapi/boom');
const { compareHash } = require('../utils/hash.js');
const UserService = require('../services/userService.js');
const userService = new UserService();


async function userHandler(req, res, next) {
  const { username, email } = req.body;
  try {
    const emailUser = await userService.findByEmail(email);
    const usernameUser = await userService.findByUsername(username);
    if (!emailUser && !usernameUser) {
      next();
    } else {
      res.status(400).json({ message: 'User already exists' });
    }
  } catch (e) {
    throw boom.notFound('User not found');
  }
}

async function verifyUsername(username, password) {
  try {
    const user = await userService.findByUsername(username);
    const isMatchPassword = await compareHash(password, user.password);

    if (user.username === username && isMatchPassword) {
      return { isMatch: true, userId: user.id };
    } else {
      return { isMatch: false, userId: null };
    }
  } catch {
    throw boom.unauthorized('User not found or password is wrong');
  }
};

async function verifyEmailUser(email, password) {
  try {
    const user = await userService.findByEmail(email);

    const isMatchPassword = await compareHash(password, user.password);

    if (user.email === email && isMatchPassword) {
      return { isMatch: true, userId: user.id };
    } else {
      return { isMatch: false, userId: null };
    }
  } catch {
    throw boom.unauthorized('User not found or password is wrong');
  }
};


module.exports = { verifyUsername, userHandler, verifyEmailUser };


