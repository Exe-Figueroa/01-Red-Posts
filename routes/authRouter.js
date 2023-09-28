const express = require('express');
const AuthService = require('../services/auth.service.js');

const router = express.Router();
const service = new AuthService();
router.get('/', (req, res)=>{
  res.send('endpoint')
})

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    res.json(service.signToken(username, password));
  } catch (error) {
    res.json(error)
  }
})

module.exports = router;
