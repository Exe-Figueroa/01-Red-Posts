const express = require('express');

const usersRouter = require('./usersRouter.js')
const postsRouter = require('./postsRouter.js')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/posts', postsRouter);
}


module.exports = routerApi;
