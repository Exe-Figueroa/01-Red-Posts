const express = require('express');

const  UsersService = require('../services/userService');
const validatorHandler = require('../middlewares/validatorHandler.js');
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/userSchema.js')

const router = express.Router();

const service = new UsersService();

router.get('/', async (req, res)=>{
  validatorHandler(getUserSchema, 'query');//Se valida la información que viene en el query y si esta es correcta pasa a la siguiente línea
  const users = await service.find()
  res.json(users)
});

router.get('/:id',
  validatorHandler(getUserSchema, 'params'), 
  async (req, res, next )=>{
  try {
    const {id} = req.params;
    const userId = parseInt(id);
    const user = await service.findOne(userId);
    res.json(user)
  } catch (error) {
    next(error)
  }
});

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'), 
  async (req, res, next )=>{
  try {
    const {id} = req.params;
    const userId = parseInt(id);
    const user = await service.delete(userId);
    res.json(user)
  } catch (error) {
    next(error)
  }
});


module.exports = router;