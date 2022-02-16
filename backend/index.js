const express = require('express');
const colors = require('colors'); // allows to show colored logs on console
const { errorHandler } = require('./middlewares/errorMiddleware');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const { connectDB } = require('./config/db');
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));
app.use(errorHandler);
app.listen(port, () => console.log(`Server running at ${port}`));
