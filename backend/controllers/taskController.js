const Task = require("../models/Task");


// CREATE TASK
exports.createTask = async (req, res) => {
  const { title, description } = req.body;

  const task = await Task.create({
    title,
    description,
    user: req.user.id
  });

  res.json(task);
};


// GET USER TASKS
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};


// DELETE TASK
exports.deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  if (task.user.toString() !== req.user.id)
    return res.status(401).json({ message: "Not authorized" });

  await task.deleteOne();
  res.json({ message: "Task deleted" });
};


// UPDATE TASK
exports.updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  if (task.user.toString() !== req.user.id)
    return res.status(401).json({ message: "Not authorized" });

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;

  await task.save();
  res.json(task);
};
