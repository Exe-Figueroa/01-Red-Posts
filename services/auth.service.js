const jwt = require('jsonwebtoken');
const { config } = require('../config/config.js');

class AuthService {
  signToken(username, password) {
    const payload = {
      sub: username,
      password
    };

    const token = jwt.sign(payload, config.secret, { expiresIn: '1d' });
    console.log(token);
    return {
      username,
      password,
      token,
    };
  };
  //others
};

module.exports = AuthService;
