"use strict";

require("dotenv").config();
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const { errors } = require("celebrate");

const userRoutes = require("./routes/users.routes");
const { publicDir } = require("../config");

const app = express();

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(publicDir));

app.get("/", async (req, res) => {
  res.sendFile("home.html", { root: publicDir });
});

app.get("/cadastro", async (req, res) => {
  res.sendFile("Novo-cadastro.html", { root: publicDir });
});

app.use("/users", userRoutes);

app.use(errors());

app.use(async (err, req, res, next) => {
  res.json({ message: err.message });
});

module.exports = app;
