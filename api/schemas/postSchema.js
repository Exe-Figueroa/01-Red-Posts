const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string().max(150);
const content = Joi.string();
const userId = Joi.number().integer();

const createPostSchema = Joi.object({
  title: title.required(),
  content: content.required(),
  userId: userId.required()
});

const getPostSchema = Joi.object({
  id: id.required()
});

const updatePostSchema = Joi.object({
  title,
  content
});

module.exports = {createPostSchema, getPostSchema, updatePostSchema};
