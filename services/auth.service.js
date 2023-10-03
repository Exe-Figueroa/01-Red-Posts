const jwt = require('jsonwebtoken');
const {config} = require('../config/config.js');

class AuthService {
  signToken(username){
    const payload = {
      sub: username,
    };

    const token = jwt.sign(payload, config.secret, { expiresIn: '1d' });
    return {
      username,
      token
    };
  }
};

module.exports = AuthService;
