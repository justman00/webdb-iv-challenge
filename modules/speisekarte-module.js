const db = require("../data/dbconfig");

exports.speisekarte = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
  getRecipe,
  getShoppingList
};

function getDishes() {
  return db("dishes");
}

function addDish(dish) {
  return db("dishes").insert(dish);
}

function getDish(id) {
  return db("dishes").where({ id });
}

function getRecipes() {
  return db("recipes");
}

function addRecipe(recipe) {
  return db("recipes").insert(recipe);
}

function getRecipe(id) {
  return db
    .select("r.name as recipe", "d.name as dish", "r.id", "r.instructions")
    .from("recipes as r")
    .innerJoin("dishes as d", { "d.id": "r.dish_id" })
    .where({ "r.id": id })
    .first();
}

function getShoppingList(recipeId) {
  // return db
  //   .select("i.name", "ri.quantity")
  //   .from("ingredients as i")
  //   .innerJoin("recipe_ingredients as ri", { "ri.recipe_id": recipeId })
  //   .where({ "ri.recipe_id": recipeId });

  return db
    .select("i.name", "ri.quantity")
    .from("recipe_ingredients as ri")
    .innerJoin("ingredients as i", { "ri.ingredient_id": "i.id" })
    .where({ "ri.recipe_id": recipeId });
}
