const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(4).max(15);
const lastName = Joi.string().min(4).max(15);
const username = Joi.string().min(4).max(25);
const email = Joi.string().email();
const password = Joi.string().min(8);
const description = Joi.string().min(30);

const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  username: username.required(),
  email: email.required(),
  password: password.required(),
  description
});


const updateUserSchema = Joi.object({
  id: id.required(),
  name,
  lastName,
  username,
  email,
  password
});

const getUserSchema = Joi.object({
  id: id.required()
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
