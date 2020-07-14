const { CLIENT_ORIGIN } = require('../../config');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN,
}));

app.use('/people', require('../people/people.router'));
app.use('/pets', require('../pets/pets.router'));

module.exports = app;