const express = require('express');

const Ingredients = require('../data/ingredients-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Ingredients.find()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get Recipes' });
        });
});

module.exports = router;
