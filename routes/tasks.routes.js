const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasks.controller");
router.get("/", controller.listTasks);
module.exports = router;

router.get("/", controller.listTasks);
router.get("/:id", controller.getTask);
router.post("/", controller.createTask);
router.put("/:id", controller.updateTask);
router.patch("/:id", controller.patchTask);
router.delete("/:id", controller.deleteTask);
