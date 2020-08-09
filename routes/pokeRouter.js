const express = require("express");
const router = express.Router();
const axios = require("axios");

const pokeList = require("../utils/pokeList.json");
const { setTypeStyle } = require("../utils/typeStyles");

router.get("/", (req, res) => {
  res.render("pages/index", {
    pokeList,
    setTypeStyle,
  });
});

// get pokemon page
router.get("/pokemon/:pokemon", (req, res) => {
  console.log(req.params.pokemon);
  res.send("pokemon");
});

module.exports = router;
