const express = require('express');
const AuthService = require('../services/auth.service.js');
const { verifyUsername, verifyEmailUser } = require('../middlewares/userHandler.js')

const router = express.Router();
const service = new AuthService();

router.post('/username', async (req, res) => {
  try {
    const { username, password } = req.body;
    const { isMatch, userId } = await verifyUsername(username, password);
    if (isMatch) {
      const userToken = service.signToken(username, password, userId);
      res.json(userToken);
    } else {
      res.status(404).json({ message: 'User not found or wrong password' });
    }
  } catch (error) {
    res.json(error)
  }
});

router.post('/email', async (req, res) => {
  try {
    const { email, password } = req.body;
    const { isMatch, userId } = await verifyEmailUser(email, password);
    if (isMatch) {
      const userToken = service.signToken(email, password, userId);
      res.json(userToken);
    } else {
      res.status(404).json({ message: 'User not found or wrong password' });
    }
  } catch (error) {
    res.json(error)
  }
});



module.exports = router;
