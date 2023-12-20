const boom = require('@hapi/boom');
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
    console.error(e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
async function verifyUsername(username, password) {
  try {
    const user = await userService.findByUsername(username);
    if (user.username === username && user.password === password) {
      return { isMatch: true, userId: user.id };
    } else {
      return { isMatch: false, userId: null };
    }
  } catch {
    return false;
  }
};
async function verifyEmailUser(email, password) {
  try {
    const user = await userService.findByEmail(email);
    if (user.email === email && user.password === password) {
      return { isMatch: true, userId: user.id };
    } else {
      return { isMatch: false, userId: null };
    }
  } catch {
    return false;
  }
};
module.exports = { verifyUsername, userHandler, verifyEmailUser };
