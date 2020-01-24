const express = require('express');

const RecipesRouter = require('./routers/recipes-router.js');
const IngredientsRouter = require('./routers/ingredients-router.js');

const server = express();

server.use(express.json());

server.use('/api/recipes', RecipesRouter);
server.use('/api/ingredients', IngredientsRouter);

module.exports = server;