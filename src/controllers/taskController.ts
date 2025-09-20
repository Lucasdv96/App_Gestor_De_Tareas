import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Task } from "../models/task";

const taskRepository = AppDataSource.getRepository(Task);

// Crear tarea
export async function createTask(req: Request, res: Response) {
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
    } catch (error) {
        res.status(500).json({ message: "Error al crear tarea", error });
    }
}

// Listar todas las tareas
export async function getTasks(req: Request, res: Response) {
    try {
        const tasks = await taskRepository.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener tareas", error });
    }
}

// Obtener tarea por ID
export async function getTaskById(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const task = await taskRepository.findOneBy({ id: Number(id) });
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener tarea", error });
    }
}

// Actualizar tarea
export async function updateTask(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { title, description, dueDate, priority, tags } = req.body;
        const task = await taskRepository.findOneBy({ id: Number(id) });
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        if (title) task.title = title;
        if (description) task.description = description;
        if (dueDate) {
            task.dueDate = dueDate;
            task.due_Date = dueDate;
        }
        if (priority) task.priority = priority;
        if (tags) task.tags = tags;
        task.updatedAt = new Date();
        await taskRepository.save(task);
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar tarea", error });
    }
}

// Marcar como completada
export async function completeTask(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const task = await taskRepository.findOneBy({ id: Number(id) });
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        task.complete();
        await taskRepository.save(task);
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Error al completar tarea", error });
    }
}

// Marcar como pendiente
export async function uncompleteTask(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const task = await taskRepository.findOneBy({ id: Number(id) });
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        task.uncompleted();
        await taskRepository.save(task);
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Error al marcar tarea como pendiente", error });
    }
}

// Soft delete
export async function softDeleteTask(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const task = await taskRepository.findOneBy({ id: Number(id) });
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        task.softDelete();
        await taskRepository.save(task);
        res.json({ message: "Tarea eliminada (soft delete)" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar tarea", error });
    }
}