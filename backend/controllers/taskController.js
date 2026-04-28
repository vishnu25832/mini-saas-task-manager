const { Task } = require("../models");

exports.createTask = async (req, res) => {
  console.log("USER:", req.user); // debug

  const task = await Task.create({
    title: req.body.title,
    userId: req.user.id
  });

  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.findAll({
    where: { userId: req.user.id }
  });
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  await Task.update(
    { status: req.body.status },
    {
      where: { id: req.params.id, userId: req.user.id }
    }
  );
  res.json({ msg: "Updated" });
};

exports.deleteTask = async (req, res) => {
  await Task.destroy({
    where: { id: req.params.id, userId: req.user.id }
  });
  res.json({ msg: "Deleted" });
};