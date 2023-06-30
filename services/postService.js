const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class PostsService {
  constructor() {

  }

  async find() {
    const posts = await models.Post.findAll({
      include: ['user']
    });
  }
  async findOne(id) {
    const post = await models.Post.findByPk(id);
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
