const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
  res.send('Hola Mundo');
  res.send('Bonjour le monde');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  console.log('Servidor ejecutándose en http://localhost:3000');
});