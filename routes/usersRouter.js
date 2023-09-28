const express = require('express');

const UsersService = require('../services/userService');
const validatorHandler = require('../middlewares/validatorHandler.js');
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/userSchema.js')

const router = express.Router();

const service = new UsersService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find()
    res.json(users)
  } catch (error) {
    next(error)
  }
});

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.json(user)
    } catch (error) {
      next(error)
    }
  });
  
  router.get('/email/:email',
  async (req, res) => {
    try {
      const { email } = req.params;
      const user = await service.findByEmail(email + '@gmail.com');
      res.json(user);
    } catch (error) {
      console.error(error); // Usa console.error en lugar de throw console.error
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.createUser(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const userId = parseInt(id);
      const user = await service.deleteUser(userId);
      res.json(user)
    } catch (error) {
      next(error)
    }
  });


module.exports = router;
