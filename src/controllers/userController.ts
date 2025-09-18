import { Request, Response } from "express";
import { AppDataSource } from "../data-source";

import { User } from "../models/user";

const userRepository = AppDataSource.getRepository(User);

// Crear usuario
export async function createUser(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body;
        const user = userRepository.create({ name, email, password });
        await userRepository.save(user);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error al crear usuario", error });
    }
}

// Listar todos los usuarios
export async function getUsers(req: Request, res: Response) {
    try {
        const users = await userRepository.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", error });
    }
}

// Obtener usuario por ID
export async function getUserById(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const user = await userRepository.findOneBy({ id: Number(id) });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuario", error });
    }
}

// Actualizar usuario (nombre / email)
export async function updateUser(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const user = await userRepository.findOneBy({ id: Number(id) });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        if (name) user.name = name;
        if (email) user.updateEmail(email);
        await userRepository.save(user);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar usuario", error });
    }
}

// Cambiar contraseña
export async function changeUserPassword(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { password } = req.body;
        const user = await userRepository.findOneBy({ id: Number(id) });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        user.changePassword(password);
        await userRepository.save(user);
        res.json({ message: "Contraseña actualizada" });
    } catch (error) {
        res.status(500).json({ message: "Error al cambiar contraseña", error });
    }
}

// Eliminar usuario
export async function deleteUser(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const user = await userRepository.findOneBy({ id: Number(id) });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        await userRepository.remove(user);
        res.json({ message: "Usuario eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar usuario", error });
    }
}