// Import express lib
const express = require('express');

// Create an express application
const app = express();

// Routes

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

/*
 Dynamic port binding for Heroku
 N.B: environment variable will be injected by Heroku
 Fallback to 5000 as default
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT);