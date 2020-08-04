const express = require("express");
const app = express();
const path = require("path");
let PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hello from node");
});

app.listen(PORT, () => {
  console.log("node is starting...");
});
