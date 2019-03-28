const express = require("express");
const db = require("../modules/speisekarte-module");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const dish = await db.speisekarte.addDish(req.body);
    res.status(200).json(dish);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "sorry" });
  }
});

router.get("/", async (req, res) => {
  try {
    const dishes = await db.speisekarte.getDishes();
    res.status(200).json(dishes);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "I dont feel that well" });
  }
});

module.exports = router;
