// model/todo.js
const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title: {
        type: 'string'
        required: true
    },
    description: {
        type: 'dtring'
    },
})

const Todo = mongoose.model('todo', TodoSchema)

module.exports = Todo
