import express, { Request, Response } from 'express';
const app = express();

export function createApp() {
    const app = express();
    app.use(express.json());
    return app;
}
//const express = require('express');


app.get('/', (req, res) => {
  res.send('Hello World!');
  res.send('Hola Mundo');
  res.send('Bonjour le monde');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  console.log('Servidor ejecutándose en http://localhost:3000');
});