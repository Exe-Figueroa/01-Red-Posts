const express = require('express');

const PostsService = require('../services/postService.js')
const validatorHandler = require('../middlewares/validatorHandler.js');
const verifyJWT = require('../middlewares/jwtHandler.js');

const { getPostSchema, createPostSchema, updatePostSchema } = require('../schemas/postSchema.js')

const router = express.Router();
const service = new PostsService();

router.get('/',
 // verifyJWT,
  async (req, res) => {
    validatorHandler(getPostSchema, 'query');
    const posts = await service.find();
    res.json(posts)
  });

router.get('/:id',
  // verifyJWT,
  validatorHandler(getPostSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const post = await service.findOne(id)
      res.json(post)
    } catch (error) {
      next(error)
    }
  });

router.post('/',
  //verifyJWT,
  validatorHandler(createPostSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPost = await service.createPost(body);
      res.status(201).json(newPost);
    } catch (error) {
      next(error);
    }
  }
);
router.patch('/:id',
  //verifyJWT,
  validatorHandler(updatePostSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;
      console.log({body, id});
      const updatedPost = await service.updatePost(body, Number(id));
      res.status(201).json(updatedPost);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  //verifyJWT,
  validatorHandler(getPostSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const post = await service.deletePost(id)
      res.json(post)
    } catch (error) {
      next(error)
    }
  });

module.exports = router;
