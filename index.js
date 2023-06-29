const express = require('express');
const routerApi = require('./routes/index.js')

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler.js');

const app = express();
const PORT = 3000;


app.use(express.json());

//Este es de prueba pa saber si funka
app.get('/', (req, res)=>{
  res.send('Hola este es mi server')
});

//Acá le envío la app a routerApi que se va a encargar de administrar la info que devuelve según el endpoint que se coloque
routerApi(app);


app.use(logErrors);
// app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, ()=>{
  console.log(`corriendo en el puerto ${PORT}`);
})