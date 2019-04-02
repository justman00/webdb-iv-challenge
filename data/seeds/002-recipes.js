exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { name: "recipe1", dish_id: 1, instructions: "instruction 1" },
    { name: "recipe2", dish_id: 2, instructions: "instruction 1" },
    { name: "recipe3", dish_id: 3, instructions: "instruction 1" }
  ]);
};
