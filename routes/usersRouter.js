const express = require('express');

const UsersService = require('../services/userService');
const validatorHandler = require('../middlewares/validatorHandler.js');
// const verifyJWT = require('../middlewares/jwtHandler');
const { createUserSchema, getUserSchema } = require('../schemas/userSchema.js');

const router = express.Router();

const service = new UsersService();

router.get('/',
  // verifyJWT,
  async (req, res, next) => {
    try {
      const users = await service.find()
      res.json(users)
    } catch (error) {
      next(error)
    }
  });

router.get('/:id',
  // verifyJWT,
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
  // verifyJWT,
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

router.get('/email/:email',
  async (req, res) => {
    try {
      const { email } = req.params;
      const user = await service.findByEmail(email + '@gmail.com');
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.get('/username/:username',
  async (req, res) => {
    try {
      const { username } = req.params;
      console.log({ username });
      const user = await service.findByUsername(username);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
