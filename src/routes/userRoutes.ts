import { Router } from "express";
import {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    changeUserPassword,
    deleteUser
} from "../controllers/userController";

const router = Router();

router.post("/", createUser); // Crear usuario
router.get("/", getUsers); // Listar usuarios
router.get("/:id", getUserById); // Obtener usuario por ID
router.put("/:id", updateUser); // Actualizar usuario
router.put("/:id/password", changeUserPassword); // Cambiar contraseña
router.delete("/:id", deleteUser); // Eliminar usuario

export default router;