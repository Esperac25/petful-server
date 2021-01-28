const express = require('express');
const cors = require('cors');
const { PORT } = require('../config');

const app = express();

app.use(cors())

app.use('/', require('../people/people.router'));
app.use('/', require('../pets.router'));

app.get('/', (req, res) => {
    res.send('Hello Petful-Api');
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}.`)
});

module.exports = app;