const {Model, DataTypes, Sequelize} = require('sequelize');

const USERS_TABLE = 'users';


const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name'
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
};

class User extends Model {
  static associate (models){
    this.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
  };

  static config(sequelize){
    return {
      sequelize,
      tableName: USERS_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
};

module.exports = {User, USERS_TABLE, UserSchema};
