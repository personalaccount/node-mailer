// Import necessary libs
const express = require('express'); // Express app framework
const authRoutes = require('./routes/auth');

/*
 Dynamic port binding for Heroku
 N.B: environment variable will be injected by Heroku Fallback to 5000 as default
*/
const PORT = process.env.PORT || 5000;

// Create an Express application
const app = express();

authRoutes(app);

app.listen(PORT);