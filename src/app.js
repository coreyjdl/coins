const express = require('express');
const changeHandler = require('./changeHandler');

const app = express();
app.use(express.json());

// GET index
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// GET change results
app.get('/makeChange', (req, res) => {
    const result = changeHandler.makeChange(req.query.number);
    res.send(result);
});

module.exports = app;