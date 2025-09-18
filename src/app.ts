import express from 'express';
import userRoutes from "./routes/userRoutes";
import { AppDataSource } from "./data-source";
import app from "./app";


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

AppDataSource.initialize().then(() => {
    app.listen(3000, () => {
        console.log("Servidor corriendo en http://localhost:3000");
    });
}).catch((error) => console.log(error));

app.use(express.json());
app.use("/users", userRoutes); // Todas las rutas de usuario empiezan con /users
