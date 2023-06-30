//Acá se traen los modelos de las tablas
const { User, UserSchema } = require('./usersModel.js');

function setupModels(sequelize){
  /**Primero se inicializan
   * ?NombreModelo.init(SchemaDeTabla, NombreModelo.config(sequelize));
   * Y luego se corren las asociaciones con la siguiente sintaxis
   * ?NombreModelo.associate(sequelize.models)
   */
  User.init(UserSchema, User.config(sequelize));

  

}
module.exports = setupModels;
