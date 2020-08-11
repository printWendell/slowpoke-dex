const axios = require("axios");
const pokelist = require("./pokeList");
const { getTypeWeaknesses } = require("poke-types");
const moveList = require("../utils/pokeMoves.json");

// get pokemon evolution chain url
exports.getEvolutionChain = (id) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then((res) => {
      return res.data.evolution_chain.url;
    });
};

// get pokemon id from name
exports.getIdFromName = (name) => {
  let id = null;
  pokelist.forEach((pokemon) => {
    if (name === pokemon.name.english.toLowerCase()) {
      id = pokemon.id;
    }
  });
  return id;
};

// get weaknessess of pokemon using poke-types dependency
exports.getWeaknesses = function (type1, type2 = null) {
  let damages = {
    quadrupleFrom: [],
    doubleFrom: [],
    halfFrom: [],
    quarterFrom: [],
    noneFrom: [],
  };

  if (type2 !== null) {
    let types = getTypeWeaknesses(type1, type2);
    Object.entries(types).forEach(([key, value]) => {
      if (value === 4) {
        damages.quadrupleFrom.push(key);
      }
      if (value === 2) {
        damages.doubleFrom.push(key);
      }
      if (value === 0.5) {
        damages.halfFrom.push(key);
      }
      if (value === 0.25) {
        damages.quarterFrom.push(key);
      }
      if (value === 0) {
        damages.noneFrom.push(key);
      }
    });
  }
  if (type2 === null) {
    let types = getTypeWeaknesses(type1);
    Object.entries(types).forEach(([key, value]) => {
      if (value === 4) {
        damages.quadrupleFrom.push(key);
      }
      if (value === 2) {
        damages.doubleFrom.push(key);
      }
      if (value === 0.5) {
        damages.halfFrom.push(key);
      }
      if (value === 0.25) {
        damages.quarterFrom.push(key);
      }
      if (value === 0) {
        damages.noneFrom.push(key);
      }
    });
  }
  return damages;
};

exports.getMoveDetails = function (pokedata) {
  const data = pokedata;
  let unsortedLearnedMoves = [];
  let sortedlevelMoves = [];
  let eggMoves = [];
  let tutorMoves = [];
  let machineMoves = [];
  data.moves.forEach((move) => {
    // replace dashes with spaces
    let name = move.move.name.replace(/-/g, " ");
    moveList.forEach((list) => {
      if (name === list.ename.toLowerCase()) {
        // method = the way the pokemon evolves
        let method = move.version_group_details[0].move_learn_method.name;
        if (method === "level-up") {
          // return unsorted list
          unsortedLearnedMoves.push([
            move.version_group_details[0].level_learned_at,
            list,
          ]);
          // sort list by level learned
          sortedlevelMoves = unsortedLearnedMoves.sort((a, b) =>
            a[0] > b[0] ? 1 : -1
          );
        } else if (method === "machine") {
          machineMoves.push(list);
        } else if (method === "tutor") {
          tutorMoves.push(list);
        } else if (method === "egg") {
          eggMoves.push(list);
        }
      }
    });
  });
  return [sortedlevelMoves, tutorMoves, eggMoves, machineMoves];
};
