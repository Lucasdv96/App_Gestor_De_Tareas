"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const data_source_1 = require("../data-source");
const task_1 = require("../models/task");
class TaskRepository {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(task_1.Task);
    }
    findAll() {
        return this.repository.find();
    }
    findById(id) {
        return this.repository.findOneBy({ id });
    }
    async createOne(data) {
        const entity = this.repository.create({
            title: data.tittle,
            description: data.description,
        });
        return this.repository.save(entity);
    }
}
exports.TaskRepository = TaskRepository;
//aca hay que agregar las funciones para actualizar, completar y eliminar la tarea
//# sourceMappingURL=task.repository.js.map