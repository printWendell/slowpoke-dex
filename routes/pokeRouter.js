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
  const id = req.params.pokemon;
  axios
    .all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
    ])
    .then(
      axios.spread((pokemonData, species) => {
        res.render("pages/pokemon", {
          pokemon: pokemonData.data,
          species: species.data,
          setTypeStyle,
        });
      })
    );
});

module.exports = router;
