// router/todo.js
const express = require('express')
const router = express.Router();

const {
    getAllTodo,
    postCreateTodo,
    putUpdateTodo
    deletetodo
} = require('../controllers/todo')

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
*/
router.get('/')

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
*/
router.post('/')

/**
 * @route PUT api/todo
 * @description update todo
 * @access public
*/
router.put('/:id')

/**
 * @route DELETE api/todo
 * @description delete todo
 * @access public
*/
router.delete('/')

module.exports = router
