const express = require("express");
const router = express.Router();
const axios = require("axios");

const pokeList = require("../utils/pokeList.json");
const { setTypeStyle } = require("../utils/typeStyles");
const {
  getEvolutionChain,
  getIdFromName,
  getWeaknesses,
  getMoveDetails,
} = require("../utils/pokemon.utils");

router.get("/", (req, res) => {
  res.render("pages/index", {
    pokeList,
    setTypeStyle,
  });
});

// get pokemon page
router.get("/pokemon/:pokemon", async (req, res) => {
  const id = req.params.pokemon;
  axios
    .all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
      axios.get(await getEvolutionChain(id)),
    ])
    .then(
      axios.spread((pokemonData, species, evolution) => {
        res.render("pages/pokemon", {
          pokemon: pokemonData.data,
          species: species.data,
          evolution: evolution.data,
          moveDetails: getMoveDetails(pokemonData.data),
          damages: getWeaknesses,
          setTypeStyle,
          getIdFromName,
        });
      })
    );
});

module.exports = router;
