//Create web server
const express = require('express');
const app = express();

//Create a route
app.get('/', (req, res) => {
    res.send('Hello world!');
});

//Create a route
app.get('/api/comments', (req, res) => {
    res.send([1, 2, 3]);
});

//Create a route
app.get('/api/comments/:id', (req, res) => {
    res.send(req.params.id);
});

//Create a route
app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.params);
});

//Create a route
app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.query);
});

//Create a port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
