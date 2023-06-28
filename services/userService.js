const faker = require('faker');
const boom = require('@hapi/boom');


class UsersService {
  constructor(){
    /**
     * *Acá se crea users que es donde se van a guardar los usuarios que crea faker
     * *y se invoca a generate() que es quién crea a los users
     */
    this.users = [];
    this.generate();
  }

  async generate() {
    const limit = 30;
    for (let i = 0; i < limit; i++) {
      
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        username: faker.person.username(),
        email: faker.person.email()
      })
    }
  }
  async find() {
    return this.users;
  }
}
module.exports = UsersService;