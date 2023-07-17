const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class PostsService {
  constructor() {}

  async find() {
    try {
      const posts = await models.Post.findAll({
        include: [
          {
            model: models.User,
            as: 'user',
            attributes: { exclude: ['email', 'password'] }
          }
        ]
      });
      return posts;
    } catch (error) {
      console.error("Error al obtener los posts:", error);
      throw boom.internal('Error al obtener los posts');
    }
  }
  async findOne(id) {
    const post = await models.Post.findByPk(id, {
      include: [
        {
          model: models.User,
          as: 'user',
          attributes: {
            exclude: ['email', 'password']
          }
        }
    ]
    });
    if (!post) {
      throw boom.notFound('post not found')
    }
    return post;
  }
  async createPost(data) {
    const newPost = await models.Post.create(data);
    return newPost;
  }

  async deletePost(id) {
    const post = await this.findOne(id);
    await post.destroy(id);
    return { id };
  }
}

module.exports = PostsService;
