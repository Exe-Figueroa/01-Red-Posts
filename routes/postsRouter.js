const express = require('express');

const PostsService  = require('../services/postService.js')
const validatorHandler = require('../middlewares/validatorHandler.js');
const { getPostSchema, createPostSchema, updatePostSchema } = require('../schemas/postSchema.js')

const router = express.Router();
const service = new PostsService();

router.get('/', async (req, res)=>{
  validatorHandler(getPostSchema, 'query');
  const users = await service.find()
  res.json(users)
});

module.exports = router;
