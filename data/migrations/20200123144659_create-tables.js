
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.text('name', 128)
                .unique()
                .notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.text('name', 128)
                .unique()
                .notNullable();
        })
        .createTable('recipes_ingredients', tbl => {
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                // this table must exist already
                .inTable('recipes')
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                // this table must exist already
                .inTable('ingredients')
            // the combination of the two keys becomes our primary key
            // will enforce unique combinations of ids
            tbl.primary(['recipe_id', 'ingredient_id']);
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.text('instructions')
                .notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};