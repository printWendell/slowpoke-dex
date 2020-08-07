module.exports = {
  setTypeStyle: function (type) {
    typeStyle = "";
    if (type === "normal") {
      typeStyle = "normal-type";
    } else if (type === "fire") {
      typeStyle = "fire-type";
    } else if (type === "water") {
      typeStyle = "water-type";
    } else if (type === "electric") {
      typeStyle = "electric-type";
    } else if (type === "grass") {
      typeStyle = "grass-type";
    } else if (type === "ice") {
      typeStyle = "ice-type";
    } else if (type === "fighting") {
      typeStyle = "fighting-type";
    } else if (type === "poison") {
      typeStyle = "poison-type";
    } else if (type === "ground") {
      typeStyle = "ground-type";
    } else if (type === "flying") {
      typeStyle = "flying-type";
    } else if (type === "psychic") {
      typeStyle = "psychic-type";
    } else if (type === "bug") {
      typeStyle = "bug-type";
    } else if (type === "rock") {
      typeStyle = "rock-type";
    } else if (type === "ghost") {
      typeStyle = "ghost-type";
    } else if (type === "dragon") {
      typeStyle = "dragon-type";
    } else if (type === "dark") {
      typeStyle = "dark-type";
    } else if (type === "steel") {
      typeStyle = "steel-type";
    } else if (type === "fairy") {
      typeStyle = "fairy-type";
    }
    return typeStyle;
  },
};
