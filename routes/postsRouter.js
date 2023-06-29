const express = require('express');
const validatorHandler = require('../middlewares/validatorHandler.js');

const router = express.Router();
const service = new PostsService();

router.get('/', (req, res)=>{
  
})


module.exports = router;
