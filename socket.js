//Acá se inicializará nuestro server de socket io, de generar una instancia y poderla compartir
const socketIO = require('socket.io');
const socket = {};

function connect(server) {
  socket.io = socketIO(server,
    { cors: { origin: '*' }})
}

module.exports = {
  connect, socket,
}
