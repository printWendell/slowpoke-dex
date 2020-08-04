const express = require("express");
const app = express();
const path = require("path");
let PORT = process.env.PORT || 8000;

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory, { maxAge: 86400000 * 60 }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(PORT, () => {
  console.log("node is starting...");
});
