const express = require("express")
const connectDB = require("./config/db.js")
const cors = require("cors")
const app = express();

// Connect Database
connectDB()

// Middleware
app.use(cors())
app.use(express.json({ extended: false }));

// Define Routes
// app.use('/api/todos', require('./routes/todos'));
app.use('/api/auth', require('./routes/user.route.js'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${process.env.PORT}`));



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.json({
      success: false,
      statusCode,
      message,
    });
  });