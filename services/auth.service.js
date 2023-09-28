// const express = require('express');
const jwt = require('jsonwebtoken');
const {config} = require('../config/config.js');

// const UsersService = require('./userService.js');

// const service = new UsersService;

class AuthService {
  signToken(username, password){
    const payload = {
      sub: username,
      password: password
    };

    const token = jwt.sign(payload, config.secret)
    console.log({payload, token});
    return {
      username,
      password,
      token
    }
  }
}

module.exports = AuthService;
