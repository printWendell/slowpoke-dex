const axios = require("axios");
const pokelist = require("./pokeList");

// get pokemon evolution chain url
exports.getEvolutionChain = (id) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then((res) => {
      return res.data.evolution_chain.url;
    });
};

exports.getIdFromName = (name) => {
  let id = null;
  pokelist.forEach((pokemon) => {
    if (name === pokemon.name.english.toLowerCase()) {
      id = pokemon.id;
    }
  });
  return id;
};
