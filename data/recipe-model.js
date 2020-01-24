const db = require('./dbConfig.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('recipes')
        .join('recipes_ingredients', 'recipes_ingredients.recipe_id', 'recipes.id')
        .join('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.id')
        .where(`recipes.id`, id);
}

function getInstructions(id) {
    return db('instructions').where({ recipe_id: Number(id) });
}