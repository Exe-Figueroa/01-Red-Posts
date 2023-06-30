const boom = require('@hapi/boom');

class PostsService {
  constructor() {
    this.posts = [
      {
        id: 1,
        title: "Publicación 1",
        content: "Contenido de la publicación 1...",
        userId: 2
      },
      {
        id: 2,
        title: "Publicación 2",
        content: "Contenido de la publicación 2...",
        userId: 3
      },
      {
        id: 3,
        title: "Publicación 3",
        content: "Contenido de la publicación 3...",
        userId: 1
      },
      {
        id: 4,
        title: "Publicación 4",
        content: "Contenido de la publicación 4...",
        userId: 4
      },
      {
        id: 5,
        title: "Publicación 5",
        content: "Contenido de la publicación 5...",
        userId: 6
      },
      {
        id: 6,
        title: "Publicación 6",
        content: "Contenido de la publicación 6...",
        userId: 5
      },
      {
        id: 7,
        title: "Publicación 7",
        content: "Contenido de la publicación 7...",
        userId: 9
      },
      {
        id: 8,
        title: "Publicación 8",
        content: "Contenido de la publicación 8...",
        userId: 7
      },
      {
        id: 9,
        title: "Publicación 9",
        content: "Contenido de la publicación 9...",
        userId: 8
      },
      {
        id: 10,
        title: "Publicación 10",
        content: "Contenido de la publicación 10...",
        userId: 10
      },
    ]
  }

  async find() {
    return this.posts;
  }
  async findOne(id) {
    const postId = parseInt(id);
    const post = this.posts.find((item)=>item.id === postId);
    if (!post) {
      throw boom.notFound('post not found')
    }
    return post;
  }
  async createPost(data) {
    const newPost = {
      id: Number((Math.random()*10+ 11).toFixed()) ,
      ...data
    }
    this.posts.push(newPost);
    return newPost;
  }
  async deletePost(id) {
    const postId = parseInt(id);
    const index = this.posts.findIndex(p => p.id === postId);
    if (index === -1) {
      throw boom.notFound('Post Not found')
    }
    this.posts.splice(index, 1)
    return postId;
  }
}

module.exports = PostsService;
