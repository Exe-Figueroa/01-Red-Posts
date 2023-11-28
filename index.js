const express = require('express');

const app = express();
const server = require('http').Server(app);

const socketJs = require('./socket.js')

socketJs.connect(server)

const routerApi = require('./routes/index.js');
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler.js');



app.use(express.json());
app.use(cors());


//Este es de prueba pa saber si funka
app.get('/', (req, res) => {
  res.send('Hola este es mi server')
});


//Acá le envío la app a routerApi que se va a encargar de administrar la info que devuelve según el endpoint que se coloque
routerApi(app);


app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

server.listen(3000, () => {
  console.log(`corriendo en el puerto 3000`);
});
