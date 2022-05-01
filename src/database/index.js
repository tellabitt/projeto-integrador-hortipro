const { Sequelize } = require("sequelize");
const { rootDir } = require("../../config");
const path = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(rootDir, "db.sqlite"),
});

module.exports = sequelize;
