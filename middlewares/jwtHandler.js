const jwt = require('jsonwebtoken');

function verificarJWT(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, 'secreto'); // Reemplaza 'secreto' con tu clave secreta
    req.usuario = decoded.usuario; // Puedes almacenar los datos del usuario en la solicitud si lo deseas
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: 'Token inválido' });
  }
}


//Algo así sería la lógica.

