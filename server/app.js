const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth').default;
const listRoutes = require('./routes/lists');
const taskRoutes = require('./routes/tasks').default;


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes); // Authentication routes
app.use('/lists', listRoutes); // Routes for managing lists
app.use('/tasks', taskRoutes); // Routes for managing tasks

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
