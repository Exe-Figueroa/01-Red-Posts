const jwt = require('jsonwebtoken');
const { config } = require('../config/config.js');

function verifyJWT(req, res, next) {
  const [_, token ] = req.header('Authorization').split(' ');

  if (!token) {
    return res.status(401).json({ mensaje: 'Token not provided' });
  }

  try {
    const decoded = jwt.verify(token, config.secret);
    req.username = decoded.username;
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: 'Token inválido' });
  }
}

module.exports = verifyJWT;

