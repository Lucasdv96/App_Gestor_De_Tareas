import { Router } from "express";
import {
    createTask,
    getTasks,
    getTaskById,
    updateTaskDetails,
    updateTaskDueDate,
    completeTask,
    uncompleteTask,
    deleteTask
} from "../controllers/taskController";

const router = Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTaskDetails);
router.put("/:id/due-date", updateTaskDueDate);
router.put("/:id/complete", completeTask);
router.put("/:id/uncomplete", uncompleteTask);
router.delete("/:id", deleteTask);

export default router;