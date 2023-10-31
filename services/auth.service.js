const jwt = require('jsonwebtoken');
const { config } = require('../config/config.js');

class AuthService {
  signToken(username, password, userId) {
    const payload = {
      sub: username,
      password,
      userId
    };

    const token = jwt.sign(payload, config.secret, { expiresIn: '1d' });
    return {
      username,
      password,
      userId,
      token,
    };
  };
  //others
};

module.exports = AuthService;
