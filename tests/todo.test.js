/*
const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');
const Todo = require('../models/Todo');

let token;

beforeAll(async () => {
    const user = new User({ username: 'testuser', password: 'testpassword' });
    await user.save();
    const res = await request(app).post('/api/users/login').send({
        username: 'testuser',
        password: 'testpassword'
    });
    token = res.body.token;
});

afterAll(async () => {
    await User.deleteMany({});
    await Todo.deleteMany({});
    await mongoose.connection.close();
});

describe('Todo API', () => {
    it('should create a new todo', async () => {
        const res = await request(app)
            .post('/api/todos')
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'Test Todo',
                description: 'Test description'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    });
});

*/