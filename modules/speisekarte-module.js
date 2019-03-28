const db = require("../data/dbconfig");

exports.speisekarte = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
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
