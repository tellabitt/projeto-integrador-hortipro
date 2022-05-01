"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + '/../config/config.json')[env];
const { rootDir } = require("../../config");

const config = {
  dialect: "mysql",
  database: "hortipro",
  host: "localhost",
  port: 3307,
  username: "root",
  password: "hortipro",
};

const db = {};

const sequelize = new Sequelize({
  dialect: config.dialect,
  database: config.database,
  host: config.host,
  port: config.port,
  username: config.username,
  password: config.password,
});
sequelize.sync();
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
