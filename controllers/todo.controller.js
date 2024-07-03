
const Todo = require('../models/todo.model.js');

exports.createTodo = async (req, res, next) => {
    try {
        const todo = new Todo(req.body);
        const data = await todo.save();
        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
};

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findOne({ _id: req.params.id});
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
            }
            res.json(todo);
            } catch (error) {
                res.status(400).json({ error: error.message });
                }
                };
                
                

exports.updateTodo = async (req, res) => {
    try {
        const { title, description , completed} = req.body;
        
        const todo = await Todo.findOneAndUpdate({ _id: req.params.id,
        },
            { title, description ,completed },
            { new: true }
    );
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findOneAndDelete({ _id: req.params.id });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
