const express = require("express");
const path = require("path");
const fs = require("fs");
const http = require("http");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.get("/about", (req, res) => {
  res.send("Server read About");
});

app.listen(port, console.log("votre port est ouvert! sur " + port));
