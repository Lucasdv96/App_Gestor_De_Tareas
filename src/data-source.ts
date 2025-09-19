import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./models/user";
import { Task } from "./models/task";

export const AppDataSource = new DataSource({
    type: "sqlite", // Cambia a "mysql" o "postgres" si usas otra base
    database: "database.sqlite", // O tus datos de conexión
    synchronize: true,
    logging: false,
    entities: [User, Task],
    migrations: [],
    subscribers: [],
});