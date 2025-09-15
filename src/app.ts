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
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  console.log('Servidor ejecutándose en http://localhost:3000');
});

// QUE ONDA RAMA, VAS A VER QUE HICE TREMENDO QUILOMBO CON TODO, ESCUCHA PARA PODER RUNEAR EL SERVER SIN PROBLEMAS
// LO QUE TENES QUE HACER ES QUE CADA VEZ QUE LO VAS A RUNEAR ESCRIBIS EN CONSOLA
// npm run build
// Y LUEGO
// npm start
// Y ESO TE VA A COMPILAR TODO Y TE VA A LEVANTAR EL SERVER EN EL PUERTO 3000
// SI QUERES PROBAR QUE ANDA BIEN VAS A UN NAVEGADOR Y PONES http://localhost:3000
// Y TE TIENE QUE APARECER "HELLO WORLD!"
// CUALQUIER COSA ME AVISAS, SALU2