"use strict";

const Sequelize = require("sequelize");
// const config = require(__dirname + '/../config/config.json')[env];

const db = {};

const sequelize = new Sequelize({
  dialect: config.dialect,
  database: config.database,
  host: config.host,
  port: config.port,
  username: config.username,
  password: config.password,
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.sync();
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
