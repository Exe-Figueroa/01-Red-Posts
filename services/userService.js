const boom = require('@hapi/boom');


class UsersService {
  constructor(){
    this.users = [
      {
        id: 1,
        name: "Juan",
        lastName: "González",
        username: "juang",
        email: "juangonzalez@gmail.com",
        password: "contraseña1"
      },
      {
        id: 2,
        name: "María",
        lastName: "López",
        username: "marial",
        email: "marialopez@gmail.com",
        password: "contraseña2"
      },
      {
        id: 3,
        name: "Carlos",
        lastName: "Martínez",
        username: "carlosm",
        email: "carlosmartinez@gmail.com",
        password: "contraseña3"
      },
      {
        id: 4,
        name: "Laura",
        lastName: "Rodríguez",
        username: "laurar",
        email: "laurarodriguez@gmail.com",
        password: "contraseña4"
      },
      {
        id: 5,
        name: "Alejandro",
        lastName: "Pérez",
        username: "alejandrop",
        email: "alejandroperez@gmail.com",
        password: "contraseña5"
      },
      {
        id: 6,
        name: "Ana",
        lastName: "Sánchez",
        username: "anas",
        email: "anasanchez@gmail.com",
        password: "contraseña6"
      },
      {
        id: 7,
        name: "Roberto",
        lastName: "Ramírez",
        username: "robertor",
        email: "robertoramirez@gmail.com",
        password: "contraseña7"
      },
      {
        id: 8,
        name: "Lucía",
        lastName: "Hernández",
        username: "luciah",
        email: "luciahernandez@gmail.com",
        password: "contraseña8"
      },
      {
        id: 9,
        name: "Miguel",
        lastName: "Gómez",
        username: "miguelg",
        email: "miguelgomez@gmail.com",
        password: "contraseña9"
      },
      {
        id: 10,
        name: "Paula",
        lastName: "Torres",
        username: "paulat",
        email: "paulatorres@gmail.com",
        password: "contraseña10"
      }
    ];
  }

  async find() {
    return this.users;
  }

  async findOne(id) {
    const user = this.users.find(item => item.id === id);
    if (!user) {
      throw boom.notFound('product not found');
    }
    return user;
  }

  async createUser(data) {
    const newUser = {
      id: Number((Math.random()*10+ 11).toFixed()) ,
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  async deleteUser(id) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.users.splice(index, 1);
    return { id };
  }

}
module.exports = UsersService;