"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
const router = (0, express_1.Router)();
router.post("/", taskController_1.createTask);
router.get("/", taskController_1.getTasks);
router.get("/:id", taskController_1.getTaskById);
router.put("/:id", taskController_1.updateTask);
router.put("/:id/complete", taskController_1.completeTask);
router.delete("/:id", taskController_1.softDeleteTask);
exports.default = router;
//# sourceMappingURL=taskRoutes.js.map