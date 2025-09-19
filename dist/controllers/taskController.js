"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = createTask;
exports.getTasks = getTasks;
exports.getTaskById = getTaskById;
exports.updateTask = updateTask;
exports.completeTask = completeTask;
exports.uncompleteTask = uncompleteTask;
exports.softDeleteTask = softDeleteTask;
const data_source_1 = require("../data-source");
const task_1 = require("../models/task");
const taskRepository = data_source_1.AppDataSource.getRepository(task_1.Task);
// Crear tarea
async function createTask(req, res) {
    try {
        const { title, description, dueDate, priority, tags } = req.body;
        const task = taskRepository.create({
            title,
            description,
            dueDate,
            due_Date: dueDate,
            priority,
            tags
        });
        await taskRepository.save(task);
        res.status(201).json(task);
    }
    catch (error) {
        res.status(500).json({ message: "Error al crear tarea", error });
    }
}
// Listar todas las tareas
async function getTasks(req, res) {
    try {
        const tasks = await taskRepository.find();
        res.json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener tareas", error });
    }
}
// Obtener tarea por ID
async function getTaskById(req, res) {
    try {
        const { id } = req.params;
        const task = await taskRepository.findOneBy({ id: Number(id) });
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        res.json(task);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener tarea", error });
    }
}
// Actualizar tarea
async function updateTask(req, res) {
    try {
        const { id } = req.params;
        const { title, description, dueDate, priority, tags } = req.body;
        const task = await taskRepository.findOneBy({ id: Number(id) });
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        if (title)
            task.title = title;
        if (description)
            task.description = description;
        if (dueDate) {
            task.dueDate = dueDate;
            task.due_Date = dueDate;
        }
        if (priority)
            task.priority = priority;
        if (tags)
            task.tags = tags;
        task.updatedAt = new Date();
        await taskRepository.save(task);
        res.json(task);
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar tarea", error });
    }
}
// Marcar como completada
async function completeTask(req, res) {
    try {
        const { id } = req.params;
        const task = await taskRepository.findOneBy({ id: Number(id) });
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        task.complete();
        await taskRepository.save(task);
        res.json(task);
    }
    catch (error) {
        res.status(500).json({ message: "Error al completar tarea", error });
    }
}
// Marcar como pendiente
async function uncompleteTask(req, res) {
    try {
        const { id } = req.params;
        const task = await taskRepository.findOneBy({ id: Number(id) });
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        task.uncompleted();
        await taskRepository.save(task);
        res.json(task);
    }
    catch (error) {
        res.status(500).json({ message: "Error al marcar tarea como pendiente", error });
    }
}
// Soft delete
async function softDeleteTask(req, res) {
    try {
        const { id } = req.params;
        const task = await taskRepository.findOneBy({ id: Number(id) });
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        task.softDelete();
        await taskRepository.save(task);
        res.json({ message: "Tarea eliminada (soft delete)" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al eliminar tarea", error });
    }
}
//# sourceMappingURL=taskController.js.map