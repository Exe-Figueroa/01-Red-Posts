const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(4).max(15);
const lastName = Joi.string().min(4).max(15);
const username = Joi.string().min(4).max(25);
const email = Joi.string().email();
const password = Joi.string().min(8);

const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  username: username.required(),
  email: email.required(),
  password: password.required()
});


const updateUserSchema = Joi.object({
  name: name,
  lastName: lastName,
  username: username,
  email: email,
  password: password
});

const getUserSchema = Joi.object({
  id: id.required()
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
