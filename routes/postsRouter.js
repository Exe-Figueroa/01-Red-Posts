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

router.get('/:id',
  validatorHandler(getPostSchema, 'params'),
  async (req, res, next)=>{
  try {
    const {id} = req.params;
    const user = await service.findOne(id)
    res.json(user)
  } catch (error) {
    next(error)
  }
  
});

module.exports = router;
