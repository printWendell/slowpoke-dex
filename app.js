const express = require("express");
const app = express();
const path = require("path");
let PORT = process.env.PORT || 8000;
const pokeRoute = require("./routes/pokeRouter");

const publicDirectory = path.join(__dirname, "public");
app.set("view engine", "ejs");
app.use(express.static(publicDirectory));

app.use("/", pokeRoute);

app.listen(PORT, () => {
  console.log("node is starting...");
});
