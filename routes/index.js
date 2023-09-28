const express = require('express');

const usersRouter = require('./usersRouter.js');
const postsRouter = require('./postsRouter.js');
const authRouter = require('./authRouter.js');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/posts', postsRouter);
  router.use('/login', authRouter);
}


module.exports = routerApi;
