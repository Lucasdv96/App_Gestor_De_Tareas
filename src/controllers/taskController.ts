import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Task } from "../models/task";

const taskRepository = AppDataSource.getRepository(Task);

// Crear tarea
export async function createTask(req: Request, res: Response) {
    try {
        const { title, description, dueDate } = req.body;
        const task = taskRepository.create({
            title,
            description,
            dueDate,
            due_Date: dueDate // para mantener ambos campos sincronizados
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

// Actualizar título y descripción
export async function updateTaskDetails(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const task = await taskRepository.findOneBy({ id: Number(id) });
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        task.updateDetails(title, description);
        await taskRepository.save(task);
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar tarea", error });
    }
}

// Actualizar fecha de vencimiento
export async function updateTaskDueDate(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { dueDate } = req.body;
        const task = await taskRepository.findOneBy({ id: Number(id) });
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        task.updateDueDate(new Date(dueDate));
        await taskRepository.save(task);
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar fecha de vencimiento", error });
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

// Eliminar tarea
export async function deleteTask(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const task = await taskRepository.findOneBy({ id: Number(id) });
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        await taskRepository.remove(task);
        res.json({ message: "Tarea eliminada" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar tarea", error });
    }
}