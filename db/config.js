const {config} =  require('../config/config.js');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;//postgres

module.exports = {
  development : {
    url: URI,
    dialect: 'postgres',
  },
  production : {
    url: URI,
    dialect: 'postgres',
  }
}
