const express = require('express');
const routes = require('./rotes');
const cours = require('cors');


const app = express();

app.use(cours());

app.use(express.json());
app.use(routes);

app.listen(3333);