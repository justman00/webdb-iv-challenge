exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("dishes", tbl => {
      tbl.increments();

      tbl.string("name", 128).notNullable();
    })
    .createTable("recipes", tbl => {
      tbl.increments();

      tbl.string("name", 128).notNullable();
      tbl
        .integer("dish_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("dishes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl.string("instructions", 128);
    })
    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl.string("name", 128).notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl.float("quantity");
    });
};

exports.down = function(knex, Promise) {};
