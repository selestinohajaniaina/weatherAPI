const express = require("express");
const path = require("path");
const fs = require("fs");
const http = require("http");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.post("/currentTemperature", (req, res) => {
  res.render("showCurrentTemp", {
    celsiusValue: 30,
    fahrenheitValue: 86,
  });
});
// app.use(express.static(path.join(__dirname, "views")));
// app.use(express.static(path.join(__dirname, "public")));

app.listen(port, console.log("votre port est ouvert! sur " + port));
