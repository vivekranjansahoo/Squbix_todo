const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");
const auth = require("../middleware/auth");

router.get("/", auth, todoController.getTodos);
router.get("/:id", auth, todoController.getTodo);
router.post("/", auth, todoController.createTodo);
router.patch("/:id", todoController.updateStatus);
router.put("/:id", auth, todoController.updateTodo);
router.delete("/:id", auth, todoController.deleteTodo);

module.exports = router;
