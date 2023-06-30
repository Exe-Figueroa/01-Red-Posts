const { Model, DataTypes, Sequelize} = require('sequelize');

const { USERS_TABLE } = require('./usersModel.js');

const POSTS_TABLE = 'posts';

const PostSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  content: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  //Acá se define la relación
  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    allowNull: false,
    unique: true,
    references: {
      model: USERS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
}

class Post extends Model {
  static associate (models){
    this.belongsTo(models.User, {as: 'user'})
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: POSTS_TABLE,
      modelName: 'Post',
      timestamps: false
    }
  }
};

module.exports = {Post, PostSchema, POSTS_TABLE}

