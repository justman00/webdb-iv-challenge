const express = require("express");
const db = require("../modules/speisekarte-module");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const recipe = await db.speisekarte.addRecipe(req.body);
    res.status(200).json(recipe);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "sorry" });
  }
});

router.get("/", async (req, res) => {
  try {
    const recipes = await db.speisekarte.getRecipes();
    res.status(200).json(recipes);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "I dont feel that well" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const recipes = await db.speisekarte.getRecipe(req.params.id);
    res.status(200).json(recipes);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "I dont feel that well" });
  }
});

module.exports = router;
