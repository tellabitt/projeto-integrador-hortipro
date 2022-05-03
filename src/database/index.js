const { Sequelize } = require("sequelize");
const Produtor = require("./models/Produtor");
const Cliente = require("./models/Cliente");
const databseConfig = require("./config/config");

const sequelize = new Sequelize(databseConfig);

const models = [Cliente, Produtor, sequelize];

// models.forEach((model) => model(sequelize));
models.forEach((model) => model.associate && model.associate(sequelize.models));

module.exports = sequelize;
