const express = require('express')
const router = express.Router();
const controllers = require("../controllers/user.controller.js")
// Signup route
router.post('/signup', controllers.Signup);

// Login route
router.post('/login', controllers.Login);

module.exports = router;