"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_1 = require("./models/user");
const task_1 = require("./models/task");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres", // Cambia a "mysql" o "postgres" si usas otra base
    host: process.env.DB_HOST ?? "localhost",
    database: "database.sqlite", // O tus datos de conexión
    synchronize: true,
    logging: false,
    entities: [user_1.User, task_1.Task],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map