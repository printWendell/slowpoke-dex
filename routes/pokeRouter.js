const express = require("express");
const router = express.Router();

const pokeList = require("../utils/pokeList.json");

router.get("/", (req, res) => {
  res.render("pages/index", {
    pokeList,
  });
});

module.exports = router;
