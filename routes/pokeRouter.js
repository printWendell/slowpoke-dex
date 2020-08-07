const express = require("express");
const router = express.Router();

const pokeList = require("../utils/pokeList.json");
const { setTypeStyle } = require("../utils/typeStyles");

router.get("/", (req, res) => {
  res.render("pages/index", {
    pokeList,
    setTypeStyle,
  });
});

module.exports = router;
