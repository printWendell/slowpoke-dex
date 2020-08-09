const axios = require("axios");

// get pokemon evolution chain url
exports.getEvolutionChain = (id) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then((res) => {
      return res.data.evolution_chain.url;
    });
};
