// controllers/todoController.js
const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos", error });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id, userId: req.user });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todo", error });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const userId = req.user; // Assuming req.user contains the authenticated user's ID
    console.log(req.user);
    const todo = new Todo({
      title,
      description,
      status,
      userId, // Assign userId here
    });

    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error creating todo", error });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, userId: req.user },
      req.body,
      { new: true, runValidators: true }
    );
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error updating todo", error });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      { _id: req.params.id, userId: req.user },
      { status: "completed" },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.params.id,
      userId: req.user,
    });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting todo", error });
  }
};
