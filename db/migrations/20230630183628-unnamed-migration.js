'use strict';
const {USERS_TABLE, UserSchema} = require('../models/usersModel.js');
const {POSTS_TABLE, PostSchema } = require('../models/postsModel.js');

module.exports = {
  up: async (queryInterface)=> {
    await queryInterface.createTable(USERS_TABLE, UserSchema)
    await queryInterface.createTable(POSTS_TABLE, PostSchema)
  },

  down: async (queryInterface)=> {
    await queryInterface.dropTable(USERS_TABLE, UserSchema)
    await queryInterface.dropTable(POSTS_TABLE, PostSchema)
  }
};
