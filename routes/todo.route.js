const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller.js');

const verifyToken = require('../middlewares/authenticate.js');


router.post('/create', todoController.createTodo);
router.get('/showtodos', todoController.getTodos);
router.put('/:id', todoController.updateTodo);
router.get('/:id', todoController.getTodoById);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;


/*

const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const authenticate = require('../middlewares/authenticate');

router.use(authenticate);

router.post('/', todoController.createTodo);
router.get('/', todoController.getTodos);
router.get('/:id', todoController.getTodoById);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;


*/