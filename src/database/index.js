const { Sequelize } = require("sequelize");
const { rootDir } = require("../../config");
const path = require("path");
const Cliente = require("../models/Cliente");

const databseConfig = require("../../config/config");

const sequelize = new Sequelize(databseConfig);

const models = [Cliente, sequelize];

// models.forEach((model) => model(sequelize));
// models.forEach((model) => model.associate && model.associate(sequelize.models));

module.exports = sequelize;
