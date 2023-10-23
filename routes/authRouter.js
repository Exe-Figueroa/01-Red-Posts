const express = require('express');
const AuthService = require('../services/auth.service.js');
const UserService = require('../services/userService.js');

const router = express.Router();
const service = new AuthService();
const userService = new UserService();

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    const isMatch = await verifyUser(username, password);
    console.log({isMatch});
    if (isMatch) {
      const userToken = await service.signToken(username, password);
      console.log(userToken);
      res.json(userToken);
    } else {
      res.status(404).json({message: 'User not found or wrong password'});
    }
  } catch (error) {
    res.json(error)
  }
});

async function verifyUser(username, password) {
  try {
    const user = await userService.findByUsername(username);
    console.log({user, username, password});
    if (user.username === username && user.password === password) {
      return true;
    } else {
      return false
    }
  } catch {
    return false;
  }
};

module.exports = router;
