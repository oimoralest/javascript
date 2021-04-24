// This script creates routes for a server created with express

// Modules used
const express = require('express');

// Creates express application
const app = express();

// http verbs include in express aplication get, post, delete, put
// GET request
app.get('/', (req, res) => {
    res.send('<h1> GET Home Page </h1>')
})

// POST request
app.post('/', (req, res) => {
    res.send('<h1> POST Home Page </h1>')
})

// DELETE request
app.delete('/', (req, res) => {
    res.send('<h1> DELETE Home Page </h1>')
})

// PUT request
app.put('/', (req, res) => {
    res.send('<h1> PUT Home Page </h1>')
})

// Runs the server
app.listen(80, () => {
    console.log('The server is running on port 80')
})