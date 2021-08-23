// controllers/todo.js
const Todo = require('../models/todo')

exports.getAllTodo = (req, res) => {
  Todo.find()
    .then((todo) => res.json(todo))
    .catch((err) =>
      res
        .status(400)
        .json({ message: 'Todo not found', error: err.message })
    )
}

exports.postCreateTodo = (req, res) => {
  Todo.create(req.body)
    .then((data) => res.json({ message: 'Todo added successfully', data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: 'failed to add todo', error: err.message })
    )
}

exports.deleteTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.id, req.body)
    .find((data) =>
      res.json({ message: 'todo deleted successfully', data })
    )
    .catch((err) =>
      res
        .status(400)
        .json({ message: 'book not found', error: err.message })
    )
}