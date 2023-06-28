const express = require('express');

const  UsersService = require('../services/userService')
const router = express.Router();

const service = new UsersService();

router.get('/', async (req, res)=>{
  const users = await service.find()
  res.json(users)
});

module.exports = router;