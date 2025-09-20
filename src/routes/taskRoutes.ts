import { Router } from "express";
import {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    completeTask,
    softDeleteTask
} from "../controllers/taskController";

const router = Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.put("/:id/complete", completeTask);
router.delete("/:id", softDeleteTask);

export default router;