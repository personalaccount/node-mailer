// Import express lib
const express = require('express');

// Create an express application
const app = express();

// Routes

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

// Used for dynamic port binding on from Heroku
// N.B: environment variable will be injected by Heroku
const PORT = process.env.PORT;

app.listen(5000);