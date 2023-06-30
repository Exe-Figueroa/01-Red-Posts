const {Sequelize} = require('sequelize');

const {config} =  require('../config/config.js');
const setupModels = require('../db/models/index.js')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;//en postgres
// const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; //en mysql

const sequelize = new Sequelize(URI,{
  dialect: 'postgres',
  // dialect: 'mysql',
  logging: true,
});

setupModels(sequelize);

module.exports = sequelize;
